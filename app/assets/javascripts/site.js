$(document).on('ready page:load', function(){
	//succinct
	//$(function(){
    //$('.textz').succinct({
      //size: 120
    //});
  //});
  //smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
       scrollTop: $(href).offset().top
    }, 500, function () {
       window.location.hash = href;
    });
    return false;
   });
	//collapser
	$('.textz').collapser({
    mode: 'words',
    truncate: 20
});
	//elevate zoom
	$(".img-zoom").elevateZoom({
  	zoomType				: "inner",
  	cursor: "crosshair"
	});
});