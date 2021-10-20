$(function(){
        /* for tooltip
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            }) */
              /*jQuery*/
            /* Click for pause and play
            $(function(){
              /*Below line sets the carousel cycle interval for 2000ms.Default is 5000ms 
              $(".carousel").carousel({interval:2000});
              
              $("#carouselPause").click(function(){
                $(".carousel").carousel("pause");
              });
                $("#carouselPlay").click(function(){
                $(".carousel").carousel("cycle"); 
              }); 
            });*/
            
            /*Below jquery for play and pause in one button */
              $(".carousel").carousel( { interval:2000 } );
              $("#carouselButton").on("click",function(){
                if ($("#carouselButton").children("i").hasClass("fa-pause")){
                    $(".carousel").carousel("pause");
                    $("#carouselButton").children("i").removeClass("fa-pause");
                    $("#carouselButton").children("i").addClass("fa-play")
                } else{
                  $(".carousel").carousel("cycle");
                  $("#carouselButton").children("i").removeClass("fa-play");
                  $("#carouselButton").children("i").addClass("fa-pause");
                } 
              });
              $( "#reserveButton" ).on("click",function() {
                $('#reserveModal').modal('show');
              });
              $( "#loginButton" ).on("click",function() {
                $('#loginModal').modal('show');
              });
      
            });
      
          