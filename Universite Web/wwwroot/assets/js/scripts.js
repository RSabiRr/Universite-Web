/*!
    * Start Bootstrap - SB Admin v7.0.4 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 




$(document).ready(function(){



    //   function myFunction() {
    //         var x = document.getElementById("myDate").value;
    //         document.getElementById("demo").innerHTML = x;
    //  }



    $(window).on('load', function(){
        setTimeout(removeLoader, 100); //wait for page load PLUS two seconds.
      });
      function removeLoader(){
          $( ".loader-wrapper" ).fadeOut(200, function() {
            // fadeOut complete. Remove the loading div
            $( ".loader-wrapper" ).remove(); //makes page more lightweight 
        });  
      }

        $('.tesdiqle').click(function() {
            console.log("Clicked");
            // $('.lessons.active').removeClass('active');
            $(".lessons").addClass('active');

            var x=$("#myDate").val();
            let p=$("#demo");
                p.html("Tarix: "+x);
        });


        //window.addEventListener('DOMContentLoaded', event => {

        //    // Toggle the side navigation
        //    const sidebarToggle = document.body.querySelector('#sidebarToggle');
        //    if (sidebarToggle) {
        //        // Uncomment Below to persist sidebar toggle between refreshes
        //        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //        //     document.body.classList.toggle('sb-sidenav-toggled');
        //        // }
        //        sidebarToggle.addEventListener('click', event => {
        //            event.preventDefault();
        //            document.body.classList.toggle('sb-sidenav-toggled');
        //            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        //        });
        //    }
        //});
    setTimeout(function () {
        $(".loader-wrapper").remove(); //makes page more lightweight 
    }, 1000);
       
     
});