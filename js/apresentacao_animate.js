
var animate = $('.apresentacao_animate')
var tempo = 8000
$(document).ready(function () {
  setTimeout(function(){
    animate.css('opacity', '0')
  }, tempo)
  setTimeout(function(){
    animate.toggleClass('apresentacao_animate apresentacao_animate-toggle')
  }, tempo+2000)
  setTimeout(function(){
    $('#btnPass').toggleClass('button_pass_none button_pass')
  }, tempo+2000)
 
});
