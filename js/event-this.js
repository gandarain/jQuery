$(document).ready(function(){
  $('h1').click(function(){
    $('h1').css('color','red')
  });

  $('h1').mouseenter(function(){
    $('h1').css('color','yellow');
  });

  $('h1').mouseleave(function(){
    $('h1').css('color','green');
  });

  $('h1').click(function(){
    $('h1').css('color','red');
  });
  
  $('.boxes').mouseenter(function(){
    $(this).css('color','red');
  });
});
