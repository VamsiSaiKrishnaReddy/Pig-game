module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // Minify JavaScript files
    uglify: {
      dist: {
        files: {
          'dist/js/script.min.js': ['src/script.js'], // Minify the JS file
        },
      },
    },

    // Copy static files (HTML, CSS, assets) to the dist/ folder
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['index.html', 'style.css', 'assets/**'],
            dest: 'dist/',
          },
        ],
      },
    },

    // Clean the dist/ folder before building
    clean: {
      dist: ['dist/'],
    },

    // Serve the game locally
    connect: {
      server: {
        options: {
          port: 8001,
          base: 'dist',
          keepalive: true,
        },
      },
    },
  });

  // Load Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', ['clean', 'copy', 'uglify']);
};
