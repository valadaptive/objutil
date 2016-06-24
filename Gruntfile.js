module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        esversion: 6,
        // es3: true,
        asi: true,
        laxbreak:true,
        unused: false,
        curly: false,
        eqeqeq: false,
        expr: true,
        eqnull: true,
        proto: true
      },
      files: [
        "src/**/*.js",
        "test/**/*.js"
      ]
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.registerTask("default", ["jshint"]);
};
