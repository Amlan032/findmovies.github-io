var z="";
$(document).ready(function(){
  $("#submit").click(function(){
   z=$("#movie").val(); 
   var url="http://www.omdbapi.com/?t="+z;
   $.ajax({
     url:url,
     success:function(data){
      var d=data.Director;
       var g=data.Genre;
       var a=data.Actors;
       var r=data.Released;
       var i=data.Poster;
       $("#image").attr("src",i);
       
       $("#dir").html("Director: "+d);
       $("#actors").html("Actors: "+a);
       $("#genre").html("Genre: "+g);
       $("#release").html("Released in: "+r);
   }
   });
  });
});