module.exports = function(grunt) {

    require('jit-grunt')(grunt);

     grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
         // concat for less files
         less: {
             development: {
                 options: {
                     paths: ["web/assets/css"],
                     compress: false,
                    yuicompress: false,
                    optimization: 2
                 },
                 files: {
                    "web/assets/css/development/main.css": "web/assets/css/less/main.less" // dest: src
                }
             },
             production : {}
         },
         watch: {
          styles: {
            files: ["web/assets/css/less/**/*.less"],
            tasks: ["less"],
            options: {
              nospawn: true
            }
          }
        },
         // concat for js files
         concat: {
            js: {
               src: [
                   "vendor/assets/headroom/headroom.js",
                   "web/assets/js/src/navbar.js",
               ],
                dest: "web/assets/js/development/main.js"
            }
        },
         uglify: {
            js: {
                src: "web/assets/js/development/main.js",
                dest: "web/assets/js/production/main.min.js"
            }
        }
     });
        
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    
    grunt.registerTask("gregdegruy", function () {
        console.log("✩ Greg Universe ✩");
    });
    grunt.registerTask('js', ["gregdegruy", "concat", "uglify"]);
    grunt.registerTask("default", ["gregdegruy", "less", "watch"]);
};
