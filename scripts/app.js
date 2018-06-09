var sections = document.querySelectorAll('section');
var comenzar = document.querySelector('.comenzar');
var siguiente = document.querySelectorAll('.siguiente');
var reiniciar = document.querySelector('.reiniciar');
var calcular = document.querySelector('.calcular');
var todosInputs =document.querySelectorAll("input");
var currentSection = 0;

TweenMax.set('section',{display: 'none'});
TweenMax.set(sections[currentSection],{display: 'flex'});
TweenMax.from(sections[currentSection], 0.5, {opacity: 0});

comenzar.addEventListener('click', function(e){
  e.preventDefault();
  currentSection += 1;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
});

siguiente.forEach(btn => btn.addEventListener('click', function(e){
  e.preventDefault();
  currentSection += 1;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
}));
localStorage

calcular.addEventListener('click', function(e){
  e.preventDefault();
  currentSection +=1;
  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  TweenMax.from(sections[currentSection], 0.5, {opacity: 0});
  var form = document.querySelector('form');

  var gastosViv = Number(form.gastosvivienda.value);
  
  var gastosLuz= Number(form.gastosluz.value);
  var gastosTeleInter= Number(form.gastostelefonoeinternet.value);
  var gastosTelCel= Number(form.gastostelefonocelular.value);
  var gastosTran=   Number(form.gastostransporte.value);
  var gastosentre= Number(form.gastosentretenimiento.value);
  var gastosCom= Number(form.gastoscomida.value);
  var porcentajeJubilacion= Number(form.porcentajejubilacion.value)/100;
  var diastrabajosemana= Number(form.diastrabajosemana.value);
  var porcentajeganancias= Number (form.porcentajeganancia.value)/100;
  var horasdetrabajodia= Number (form.horasdetrabajodia .value);
  

  var totalgastosmensuales = gastosViv+gastosLuz+gastosTeleInter+gastosTelCel+gastosTran+gastosentre+gastosCom;
  var gastosyganancia= totalgastosmensuales + (totalgastosmensuales * porcentajeganancias);
  
  var minimoingresomensual= gastosyganancia + (gastosyganancia * porcentajeJubilacion);
  var totalhoras= horasdetrabajodia * diastrabajosemana * 4;
  var costohora= minimoingresomensual / totalhoras;

   
  
  var totales = document.querySelector('.totales');
  totales.innerHTML=totalgastosmensuales;

  var mim = document.querySelector('.mim');
  mim.innerHTML=minimoingresomensual;

  var cph = document.querySelector('.cph');
  cph.innerHTML=costohora;
});

reiniciar.addEventListener('click', function(e){
  e.preventDefault();
  currentSection =0;
var form= document.querySelector("form");
  form.reset();

  TweenMax.set('section',{display: 'none'});
  TweenMax.set(sections[currentSection],{display: 'flex'});
  
  
});