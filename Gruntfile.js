module.exports = function (grunt) {
     var gzip = require("gzip-js");
    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    { src: 'index.html', dest: 'cleancss/tidy.css' }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'cleancss/tidy.css', dest: 'cleancss/tidy.css' }
                ]
            }
        },
        compare_size: {
          files: [
            "css/*.css",
            "cleancss/*.css"
          ],
          options: {
            compress: {
              gz: function( contents ) {
                return gzip.zip( contents, {} ).length;
              }
            }
          }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-compare-size');
    // Default tasks.
    grunt.registerTask('default', ['uncss', 'cssmin']);

};