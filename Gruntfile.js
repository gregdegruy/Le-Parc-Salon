module.exports = function(grunt) {

    require('jit-grunt')(grunt);

     grunt.initConfig({
         less: {
             development: {
                 options: {
                     paths: ["web/assets/css"],
                     compress: false,
                    yuicompress: false,
                    optimization: 2
                 },
                 files: {
                    "web/assets/css/main.css": "web/assets/css/less/main.less" // dest: src
                }
             }
         },
         watch: {
          styles: {
            files: ['web/assets/css/less/**/*.less'], // files to watch
            tasks: ['less'],
            options: {
              nospawn: true
            }
          }
        }
     });
     grunt.loadNpmTasks('grunt-contrib-less');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.registerTask('default', ['less', 'watch']);
};
