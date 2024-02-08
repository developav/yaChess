let headSplide = document.querySelector('.step__all-group');
let splideGroup = document.querySelector('.step__group');
let splideList = document.querySelector('.step__group-list');
let splideCard = document.querySelectorAll('.step__group-item');


if (document.documentElement.clientWidth < 1200) {
    document.querySelectorAll('.step__group-item').forEach(function(el){
        el.classList.add('splide__slide')
    });
    headSplide.classList.add('splide');
    splideGroup.classList.add('splide__track')
    splideList.classList.add('splide__list')

  } else {
    document.querySelectorAll('.step__group-item').forEach(function(el){
        el.classList.remove('splide__slide')
    });
  };
  var elms = document.getElementsByClassName( 'splide' );

  for ( var i = 0; i < elms.length; i++ ) {
    new Splide( elms[ i ] ).mount();
  }
  new Splide( '.splide' ).mount();