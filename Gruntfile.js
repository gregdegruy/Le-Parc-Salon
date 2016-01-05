/**
 * Le Parc Salon gruntfile
 * @param {object} grunt [[Description]]
 */
module.exports = function (grunt) {
    
    'use strict';

    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // sass generation
        sass: {
            development: {
                files: {
                    'src/development/css/main.css': 'src/development/css/sass/main.scss'
                }
            }
        },
        // js generation 
        concat: {
            js: {
                src: [
                    'dependencies/headroom/headroom.js',
                    'src/development/js/navbar.js'
                ],
                dest: 'src/development/js/main.js'
            }
        },
        uglify: {
            js: {
                src: 'src/development/js/main.js',
                dest: 'src/production/js/main.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('gregdegruy', function () {
        console.log('✩ Greg Universe ✩');
    });
    grunt.registerTask('js', ['gregdegruy', 'concat', 'uglify']);
    grunt.registerTask('default', ['gregdegruy']);
};
