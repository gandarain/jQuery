$(document).ready(function(){

    //hide, show and toggle
    // $('#btn1').click(function(){
    //   $('#box1').show();
    // });
    //
    // $('#btn2').click(function(){
    //   $('#box1').hide();
    // });
    //
    // $('#btn3').click(function(){
    //   $('#box1').toggle();
    // });

    //fadeOut, fadeIn, fadeToggle
    // $('#btn1').click(function(){
    //   $('#box1').fadeIn();
    // });
    //
    // $('#btn2').click(function(){
    //   $('#box1').fadeOut();
    // });
    //
    // $('#btn3').click(function(){
    //   $('#box1').fadeToggle();
    // });
    // $('#btn3').click(function(){
    //   $('#box1').fadeTo(2000, 0.5);
    // });

    //slideDown, slideUp, slideToggle
    // $('#btn1').click(function(){
    //   $('#box1').slideDown(2000);
    // });
    //
    // $('#btn2').click(function(){
    //   $('#box1').slideUp(2000);
    // });
    //
    // $('#btn3').click(function(){
    //   $('#box1').slideToggle(2000);
    // });

    //2000 = 2 detik

    // stop animasi, callback, chaining
    // callback memanggil function setelah selesai menjalankan sebuah fungsi
    function selesai(){
      alert('selesai!');
    }

    $('#btn1').click(function(){
      $('#box1').slideDown(2000,selesai);
    });
    //chaining menambahkan animasi sebanyak mungkin
    $('#btn2').click(function(){
      $('#box1').slideUp(2000).fadeIn(2000).fadeTo(2000, 0.5);
    });

    $('#btn3').click(function(){
      $('#box1').slideToggle(2000);
    });
    //stop
    $('#btn4').click(function(){
      $('#box1').stop();
    });

});
