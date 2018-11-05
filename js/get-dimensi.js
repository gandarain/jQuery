$(document).ready(function(){
  //dimensi
  //mengambil nilai
  //width = koneten
  //innerWidth = konten + padding
  //outerWidth = konten + padding + border
  //innerWidth(true) = konten + padding + border + margin

  // var nilai = $('#boxes_wrap').innerWidth();

  // var nilai = $('#boxes_wrap').outerWidth();

  var nilai = $('#boxes_wrap').outerWidth(true);
  $('#box1').text(nilai);
});
