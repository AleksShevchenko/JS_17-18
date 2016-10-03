module.exports = function(grunt) {

  grunt.initConfig({
     concat: {
      options: {
        separator: ';\n',
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dest/script.main.js'
      }
    },
     uglify:{
      dist: {
        src: ['js/dest/script.main.js'],
        dest: 'js/dest/script.main.min.js'
      }

     },

     cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/dest/main.min.css': ['css/src/reset.css', 'css/src/style.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
  // grunt.registerTask('dev', ['concat']);


};