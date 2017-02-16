module.exports =function(grunt){
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.initConfig({
    responsive_images:{
      options:{

      },
      dev:{
        files:[
        /*
        { src:['images/napaliWall.jpg'],
          dest:'images/'},*/
        {
          src:['images/meAndB.jpg'],
          dest:'images/meAndBnew'
        }
      ]
    }
    }
  });

 grunt.registerTask('default',[
    'responsive_images'
    ]);
}