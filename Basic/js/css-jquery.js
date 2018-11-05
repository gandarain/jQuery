$(document).ready(function(){
  $('h1').click(function(){
    // $('h1').css({
    //   'color':'red',
    //   'fontSIze':'20px',
    //   'backgroundColor' : 'yellow'
    // });

    // $('h1').addClass('change');

    // $('h1').removeClass('change');

    $('h1').toggleClass('change');

    //remove, add dan toggle class
    //removeClass = menghapus class
    //addClass = menambahkan class
    //toggleClass = menghapus class jika sudah ada, dan menambahkan jika belum ada (gabungan dari remove dan after)

  });
});
