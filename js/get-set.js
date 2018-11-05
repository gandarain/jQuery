$(document).ready(function(){
  $('form').submit(function(){
    var tulisan = $('#inputText').val();
    $('#boxes_wrap').html('<b>Halo</b>')
    $('h1').text(tulisan);

    //mencegah reload ke tab baru
    event.preventDefault();
  })
});
