module LibrewolfParser
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
