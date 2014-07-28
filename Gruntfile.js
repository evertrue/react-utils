module.exports = function(grunt) {
  'use strict'

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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

  grunt.registerTask('default', ["react:dev"]);
  grunt.registerTask('test', ["react:dev", "react:test", "jasmine"]);
};
