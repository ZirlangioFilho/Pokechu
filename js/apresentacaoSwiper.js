const swiper = new Swiper('.swiper', {
    loop: true,
    freeMode:true,
    keyboard: true,
    
    navigation:  '#btnPass'
  });

  $('#btnPass').on('click', function(){
    swiper.slideNext()
    $('#btnPass').toggleClass('button_pass button_pass_toggle')
    $('#btnGo').toggleClass('button_pass_toggle button_pass')
    
  })

$('#btnGo').on('click', function(){
  $('#apresentacao').css('transition', '2s').css('display', 'none')
  $('#pokemon_perfil').css('display', 'flex')
})