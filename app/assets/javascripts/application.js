// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks

$(document).ready(function(){

	var nav = jQuery('nav li').find('a'),
      slider = jQuery('#slider'),
      slideWrap = slider.children('ul'),
      slide = slideWrap.children('li'),
      slideCount = slide.length,
      slideWidth = 100 / slideCount;

  // Dynamically set width
  slideWrap.css({ 'width' : slideCount * 100 + '%' });
  slide.css({ 'width' : slideWidth + '%' });

  // Navigation
  nav.first().addClass('active');

  // Click function
  nav.on('click', function(e) {
    e.preventDefault();

    var element = jQuery(this),
        active = jQuery('a.active'),
        activeCheck  = element.is('.active'),
        currentPos = element.parent().index(),
        translate = currentPos++ * -100 + '%';

    if (activeCheck === false) {
      active.removeClass('active');
      element.addClass('active');
      slideWrap.transition({ left: translate });
    } 
    else {
      return false;
    }

  });

});