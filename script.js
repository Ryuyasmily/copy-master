//jQueryのコーディング


$(function(){

$(".toggle_btn").click(function(){

  if($("#header").hasClass("open")){
    
    $("#header").removeClass("open")
  
    //初期の状態
  }else{
    $("#header").addClass("open")
  }

});

//他の部分クリックしたら元に戻る

$("#mask").click(function(){
  $("#header").removeClass("open");
})


//スムーススクロール

$(".burger a").click(function(){

  //リンク先を取得
  var id=$(this).attr("href");
  //リンク先のトップからの距離を取得
  var position=$(id).offset().top;

  $("html,body").animate({

    "scrollTop":position
  },700);

});



$(".slider").slick({
  centerMode:true,

  //768pxになるまでは画面に3つ表示させる
  slidesToShow:3,
  //自動でスライドされる
  autoplay:true,
  
  //レスポンシブ対応
  responsive:[
    {
    breakpoint:768,
    settings:{
      //1つだけ表示される
      slidesToShow:1,
    }
    }
  ]


});



});