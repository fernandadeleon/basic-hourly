var sections = document.querySelectorAll('section');
var comenzar = document.querySelector('.comenzar');
var siguiente = document.querySelectorAll('.siguiente');
var reiniciar = document.querySelector('.reiniciar');
var calcular = document.querySelector('.calcular');
var currentSection = 0;

TweenMax.set('section',{display: 'none'});
TweenMax.set(sections[currentSection],{display: 'flex'});
TweenMax.from(sections[currentSection], 0.5, {opacity: 0});

comenzar.addEventListener('click', function(e){
  e.preventDefault();
  currentSection = 1;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
});

siguiente.forEach(btn => btn.addEventListener('click', function(e){
  e.preventDefault();
  currentSection++;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
}));

calcular.addEventListener('click', function(e){
  e.preventDefault();
  var form = document.querySelector('form');
  var totales = document.querySelector('.totales');
  var mim = document.querySelector('.mim');
  var cph = document.querySelector('.cph');
  var totalGastos = +form.gastosVivienda.value + +form.gastosVivienda.value + +form.gastosLuz.value + +form.gastosTelefono.value + +form.gastosComida.value + +form.gastosCelular.value + +form.gastosTransporte.value + +form.gastosEntretenimiento.value;
  var gastosMasGanancia = totalGastos + totalGastos * +form.ganancia.value/100;
  var gastosMasJubilacion = gastosMasGanancia + gastosMasGanancia * +form.jubilacion.value/100;
  var totalHoras = form.horas.value * form.dias.value * 4;
  var costoPorHora = gastosMasJubilacion / totalHoras;
  totales.innerHTML = `$${totalGastos.toFixed(2)}`;
  mim.innerHTML = `$${gastosMasJubilacion.toFixed(2)}`;
  cph.innerHTML = `$${costoPorHora.toFixed(2)}`;
  currentSection++;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
});

reiniciar.addEventListener('click', function(e){
  e.preventDefault();
  currentSection = 0;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
});