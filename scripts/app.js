var sections = document.querySelectorAll('section');
var comenzar = document.querySelector('.comenzar');
var siguiente = document.querySelectorAll('.siguiente');
var reiniciar = document.querySelector('.reiniciar');
var calcular = document.querySelector('.calcular');
var currentSection = 0;

// TweenMax.set('section',{display: 'none'});
// TweenMax.set(sections[currentSection],{display: 'flex'});
// TweenMax.from(sections[currentSection], 0.5, {opacity: 0});

comenzar.addEventListener('click', function(e){
  e.preventDefault();
  currentSection = 1;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
});

siguiente.forEach(btn => btn.addEventListener('click', function(e){
  
}));

calcular.addEventListener('click', function(e){
  e.preventDefault();
  var form = document.querySelector('form');
  var totales = document.querySelector('.totales');
  var mim = document.querySelector('.mim');
  var cph = document.querySelector('.cph');
});

reiniciar.addEventListener('click', function(e){
  e.preventDefault();
  
});