$(function(){
    var bar = $('.hdrWrap .btn');
    var ex = $('.navTop .btn');
    var box = $('.navBox');
    var content1mouse = $('.cntWrap').eq(0);
    var con1article = $('.content.cnt01 article').eq(0);
    var con1article2 = $('.content.cnt01 article').eq(1);
    var content2mouse = $('.cntWrap').eq(1);
    var con2article = $('.content.cnt02 article').eq(0);
    var con2article2 = $('.content.cnt02 article').eq(1);
    var con2article3 = $('.content.cnt02 article').eq(2);
    var content3mouse = $('.cntWrap').eq(2);
    var con3article = $('.topSlide article').eq(0);
    var con3article2 = $('.btmSlide article');

    content3mouse.mouseenter(function(){
        con3article.css({opacity:'1',top:'0'});
        setTimeout(function(){
            con3article2.css({opacity:'1',top:'0'});
        },1000);
    });
    
    content2mouse.mouseenter(function(){
        con2article.css({opacity:'1',top:'0'});
        setTimeout(function(){
            con2article2.css({opacity:'1',top:'0'});
        },1000);
        setTimeout(function(){
            con2article3.css({opacity:'1',top:'0'});
        },1700);
    });
    
    // 슬라이드
    var btn = $('.content.cnt03 .btn');
    var topSlide = $('.topSlide .imgGroup');
    var btmSlide = $('.btmSlide .imgGroup');
    var fixbtn = $('.topbtn');

    topSlide.css({marginLeft:'-100%'})
    btmSlide.css({marginLeft:'-100%'})


    function mnuB(){
        box.stop().animate({
            opacity:'1',
            width:'100%'
        },1000,function(){
            box.css({opacity:'1',width:'100%'});
        });
    };
    function mnuX(){
        box.stop().animate({
            width:'0%',
            opacity:'0'
        },1000);
    }
    function slidebtn(){
        topSlide.stop().animate({
            marginLeft:'-200%'
        },2000,function(){
            topSlide.css({marginLeft:'-100%'});
            topSlide.find('.image:first').appendTo(topSlide);
        });

        btmSlide.stop().animate({
            marginLeft:'-200%'
        },2000,function(){
            btmSlide.css({marginLeft:'-100%'});
            btmSlide.find('.image:first').appendTo(btmSlide);
        });
    }
    function scroll(){
        $('html,body').stop().animate({
            scrollTop:'0'
        },1000);
    }

    // 마우스

    content1mouse.mouseenter(function(){
        con1article.css({opacity:'1',top:'0'});
        setTimeout(function(){
            con1article2.css({opacity:'1',top:'0'});
        },800);
    });

    fixbtn.click(scroll)
    bar.last().click(mnuB);    
    ex.click(mnuX); 
    btn.click(slidebtn);
});