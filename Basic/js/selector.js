$(document).ready(function(){
  $('h1').css('color','blue');
  $('#box1').css('color','red');
  $('.boxes').css('color','aqua');

  $('.boxes:first').css('color','green');
  $('.boxes:last').css('color','yellow');
  $('.boxes:eq(2)').css('color','pink');
});
