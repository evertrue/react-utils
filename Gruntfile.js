module.exports = function(grunt) {
  'use strict'

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      tests: ["test/compiled/**/*.js"]
    },

    umd: {
      all: {
        src: "react-utils.js",
        deps: {
          "default": ["React"],
          amd: ["React"],
          cjs: ["React"],
          global: ["React"]
        }
      }
    },

    react: {
      dev: {
        files: {
          "react-utils.js": ["src/components/**/*.jsx"],
        }
      },
      test: {
        expand: true,
        cwd: "test",
        src: ["**/*.jsx"],
        dest: "test/compiled",
        ext: ".js"
      }
    },

    jasmine: {
      dev: {
        src: "test/compiled/**/*.js",
        options: {
          keepRunner: true,
          vendor: ["libs/**/*.js", "react-utils.js"]
        }
      }
    }


  });

  grunt.registerTask('default', ["react:dev", "umd:all"]);
  grunt.registerTask('test', ["clean:tests", "react:dev", "umd:all", "react:test", "jasmine"]);
};
