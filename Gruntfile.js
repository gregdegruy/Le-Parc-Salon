/**
 * Le Parc Salon gruntfile
 * @param {object} grunt [[Description]]
 */
module.exports = function (grunt) {

    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),        
        // sass generation
        sass: {
            development: {
                files: {
                    'src/css/src/development/main.css': 'src/css/src/sass/main.scss',
                }
            }
        },
        watch: {
            styles: {
                files: ["src/css/sass/**/*.sass"],
                tasks: ["sass"],
                options: {
                    nospawn: true
                }
            }
        },
        // js generation 
        concat: {
            js: {
                src: [
                    "vendor/assets/headroom/headroom.js",
                    "src/js/src/navbar.js",
                ],
                dest: "src/js/development/main.js"
            }
        },
        uglify: {
            js: {
                src: "src/js/development/main.js",
                dest: "src/js/production/main.min.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("gregdegruy", function () {
        console.log("✩ Greg Universe ✩");
    });
    grunt.registerTask('js', ["gregdegruy", "concat", "uglify"]);
    grunt.registerTask("sass", ["gregdegruy"]);
    grunt.registerTask("default", "gregdegruy");
};
