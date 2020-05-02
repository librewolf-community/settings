module LibrewolfParser
  def self.parse_json_files(config_directory)
    config_jsons = Dir.glob(config_directory.path + "/*.json")

    config_directory.each_child do |child|
      child_path = Path[config_directory.path].join(child)
      next unless File.directory?(child_path) && !Dir.empty?(child_path.to_s)

      config_jsons += Dir.glob("#{child_path}/*.json")
    end

    settings = {} of String => LibrewolfSettings
    config_jsons.each { |config| settings[Path[config].basename.chomp(".json")] = LibrewolfSettings.from_json(File.read(config)) }

    main_settings = settings.select { |_fname, setting| setting.subcategory.blank? }
    sub_settings = settings.reject { |_fname, setting| setting.subcategory.blank? }
    subcategories = sub_settings.map { |_fname, setting| setting.subcategory }.uniq
    subcategory_settings = {} of String => typeof(sub_settings)
    subcategories.each do |category|
      subcategory_settings[category] = sub_settings.select { |_fname, setting| setting.subcategory == category }
    end

    [main_settings, subcategory_settings]
  end
end
