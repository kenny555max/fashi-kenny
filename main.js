$(document).ready(function(){
    $('.toggle-menu').click(function(){
        $('nav ul').slideToggle('slow');
        $('nav ul ul').css('display', 'none')
    })
    $(".dropdown > a").click(function(e){
        e.preventDefault();
        $("ul ul").slideUp();
        $(this).next().stop(true, false, true).slideToggle();
        // $(this).children().find('ul').slideToggle(300);
    });
    $(window).resize(function(){
    if($(window).width() > 768) {
      $("ul").removeAttr("style");
    }
  });

  $('.set-bg').each(function(){
      let bg = $(this).data('setbg');
      $(this).css(
          'background-image', 'url(' + bg + ')'
      )
  });


  $('.banner').owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      items: 1,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      autoplay: true,
      smartspeed: 1200
  });

  $('.small-banners').owlCarousel({
      loop: true,
      autoplay: true,
      nav: true,
      dots:true,
      items: 3,
      margin: 20,
      smartspeed: 1200,
      responsive: {
          1199: {
            items: 3,
          },
          991:{
              items: 2,
          },
          1200: {
              items: 3,
          },
          768: {
              items: 2,
          },
          700: {
              items: 2,  
          },
          576: {
              items: 1,
          },
          0:{
              items: 1
          }
      }
  });


  $('.count-down').countdown('2020/12/31', function(event){
      $('#Days').text(
          event.strftime('%D')
      );
      $('#Hours').text(
        event.strftime('%H')
      );
      $('#Min').text(
          event.strftime('%M')
      );
      $('#Sec').text(
          event.strftime('%S')
      );
  });


  $('.footer-top').owlCarousel({
      loop: false,
      autoplay:false,
      nav: false,
      dots: false,
      items: 5,
      responsive: {
          1200: {
            items: 5,
          },
          1024: {
            items: 5,
          },
          991: {
              items: 4,
              autoplay: true,
          },
          768: {
            items: 4,
          },
          500: {
              items: 3,
          },
          375: {
              items: 2,
          },
          0: {
              items: 1,
          }
      }
  })
  
})