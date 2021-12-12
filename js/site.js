
jQuery(document).ready(function($) {
    $(".icon-menu").click(function(){
        $(".menuresponsive").toggleClass('deroulant');
         return false;
      });

      $(".carte").click(function(){
        $(this).toggleClass('retourner');
      });
 });

