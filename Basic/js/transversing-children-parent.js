$(document).ready(function(){
  //children satu level dibawah nya
  //$('ul').children('span').css('color','red');

  //find
  //$('ul').find('span').css('color','red');

  //parent satu level diatasnya
  //$('#css').parent().css('color','red');

  //parents semua level diatasnya
  //$('#css').parents('ul').css('border','2px solid red');

  //parentsUntil
  $('#css').parentsUntil('#tester').css('border','2px solid red');

});
