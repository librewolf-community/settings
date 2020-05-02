require "json"
require "ecr"
require "file_utils"
require "./librewolf_parser/parse_json_files.cr"
require "./librewolf_parser/builders.cr"

module LibrewolfParser
  VERSION = "0.1.0"

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
end

config_directory = Dir.new("./librewolf.cfg")
main_settings, subcategory_settings = LibrewolfParser.parse_json_files(config_directory)

# help the compiler with inferring some types
exit unless main_settings.is_a?(Hash(String, LibrewolfParser::LibrewolfSettings)) && subcategory_settings.is_a?(Hash(String, Hash(String, LibrewolfParser::LibrewolfSettings)))

cfg_tempfile = LibrewolfParser.build_cfg(main_settings, subcategory_settings)
docs_tempdir = LibrewolfParser.build_docs(main_settings, subcategory_settings)

# TODO: should the Makefile do this?
FileUtils.rm_rf("./dist") if Dir.exists?("./dist")
Dir.mkdir_p("./dist")
dist_directory = Dir.new("./dist")
dist_file = Path[dist_directory.path].join("librewolf.cfg")

FileUtils.cp(cfg_tempfile, dist_file.to_s)
FileUtils.rm(cfg_tempfile)
File.chmod(dist_file.to_s, 0o644)

FileUtils.cp_r(docs_tempdir, Path[dist_directory.path].join("docs").to_s)
FileUtils.rm_r(docs_tempdir)
