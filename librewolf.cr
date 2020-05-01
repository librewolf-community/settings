require "json"
require "ecr"
require "file_utils"

module LibrewolfParser

  class LibrewolfSettings
    include JSON::Serializable

    property name : String

    property subcategory : String

    property notes : String

    property section : Array(SettingsSection)
  end

  class SettingsSection
    include JSON::Serializable

    property comments : String

    property notes : String?

    @[JSON::Field(key: "type")]
    property setting_type : String

    property key : String

    property value : ValueUnion

    property enabled : Bool?

    property references : Array(String)?
  end

  alias ValueUnion = Int32 | Bool | String

  def self.parse_json_files(config_directory)
    config_jsons = Dir.glob(config_directory.path + "/*.json")

    config_directory.each_child do |child|
      child_path = Path[config_directory.path].join(child)
      next unless File.directory?(child_path) && !Dir.empty?(child_path.to_s)

      config_jsons += Dir.glob("#{child_path}/*.json")
    end

    settings = {} of String => LibrewolfSettings
    config_jsons.each { |config| settings[Path[config].basename.chomp(".json")] = LibrewolfSettings.from_json(File.read(config)) }
    # settings = config_jsons.map { |config| [LibrewolfSettings.from_json(File.read(config)), Path[config].basename.chomp(".json")] }
    # settings = settings_with_filenames.map { |config| config.last }

    main_settings = settings.select { |_fname, setting| setting.subcategory.blank? }
    sub_settings = settings.reject { |_fname, setting| setting.subcategory.blank? }
    subcategories = sub_settings.map { |_fname, setting| setting.subcategory }.uniq
    subcategory_settings = {} of String => typeof(sub_settings)
    subcategories.each do |category|
      subcategory_settings[category] = sub_settings.select { |_fname, setting| setting.subcategory == category }
    end

    [main_settings, subcategory_settings]
  end

  def self.build_cfg(main_settings, subcategory_settings)
    main_settings = main_settings.map { |_fname, setting| setting }
    sub_settings = {} of String => Array(LibrewolfSettings)
    subcategory_settings.each do |category, settings|
      sub_settings[category] = settings.map { |_fname, setting| setting }
    end

    subcategory_settings = sub_settings

    tempfile = File.tempfile("librewolf.cfg")
    path = tempfile.path

    ecr = ECR.render("templates/librewolf.cfg.ecr")
    tempfile.puts(ecr)

    tempfile.close
    path
  end

  def self.build_docs(main_settings, subcategory_settings)
    tempdir = Dir.tempdir
    docs_dir = Path[tempdir].join("docs")
    settings_docs_dir = Path[tempdir].join("docs", "settings")
    Dir.mkdir_p(settings_docs_dir.to_s)

    main_settings.each do |filename, setting_json|
      filename = filename + ".md"
      File.open(settings_docs_dir.join(filename).to_s, "w") do |file|
        file.puts(ECR.render("templates/doc.md.ecr"))
      end
    end

    subcategory_settings.each do |category, sub_settings|
      title = category
      category_dir = settings_docs_dir.join(title.downcase.split(" ").join("_"))
      Dir.mkdir_p(category_dir.to_s)
      File.open(category_dir.join("_index.md").to_s, "w") do |file|
        file.puts(ECR.render("templates/doc_index.md.ecr"))
      end
      sub_settings.each do |filename, setting_json|
        filename = filename + ".md"
        File.open(category_dir.join(filename).to_s, "w") do |file|
          file.puts(ECR.render("templates/doc.md.ecr"))
        end
      end
    end
    docs_dir.to_s
  end
end

config_directory = Dir.new("./librewolf.cfg")
main_settings, subcategory_settings = LibrewolfParser.parse_json_files(config_directory)
exit unless main_settings.is_a?(Hash(String, LibrewolfParser::LibrewolfSettings)) && subcategory_settings.is_a?(Hash(String, Hash(String, LibrewolfParser::LibrewolfSettings)))


tempfile = LibrewolfParser.build_cfg(main_settings, subcategory_settings)
tempdir = LibrewolfParser.build_docs(main_settings, subcategory_settings)

FileUtils.rm_rf("./dist") if Dir.exists?("./dist")
Dir.mkdir_p("./dist")
dist_directory = Dir.new("./dist")
dist_file = Path[dist_directory.path].join("librewolf.cfg")
FileUtils.cp(tempfile, dist_file.to_s)
FileUtils.rm(tempfile)

# chmod!
FileUtils.cp_r(tempdir, Path[dist_directory.path].join("docs").to_s)
FileUtils.rm_r(tempdir)
