$(document).ready(function(){

  //traversing
  // $('li').first().css('color','red');
  // $('li').last().css('color','green');
  // $('li').eq(1).css('color','blue');
  //
  // $('li').filter('#css').css('color','blue');
  // $('li').not('#css').css('background','yellow');

  // siblngs, next, nextAll, nextUntil(parameter)
  $('#css').siblings().css('fontSize','30px');
  // $('#css').next().css('color','red');
  // $('#css').nextAll().css('background','blue');
  $('#css').nextUntil('#db').css('background','blue');

});
