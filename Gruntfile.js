module.exports = function(grunt) { //takes grunt as a value

   // Project configuration.
   grunt.initConfig({ //outer wrapper
     pkg: grunt.file.readJSON('package.json'),
     uglify: {
       build: {
         src: 'script.js', //what am I uglifying oszr which file. If you have a folder you put this first e.g output/script.js
         dest: 'script.min.js' //location
       }
     },
    sass: {                              // Task
    dist: {                            // Target
      files: {                         // Dictionary of files
        'style/main.css': 'style/main.scss'       // 'destination': 'source'
      
      }
     }
    }
   });

   // Load the plugin that provides the "uglify" task (task in green)
   grunt.loadNpmTasks('grunt-contrib-uglify'); //the purpose of uglify is to minify the file (remove spaces)
   grunt.loadNpmTasks('grunt-contrib-sass');
   // Default task(s).
   grunt.registerTask('default', ['uglify','sass']);

 };