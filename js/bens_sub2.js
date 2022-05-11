$(function(){
    var bar = $('.hdrWrap .btn');
    var ex = $('.navTop .btn');
    var box = $('.navBox');
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

    fixbtn.click(scroll)
    bar.last().click(mnuB);    
    ex.click(mnuX); 
    btn.click(slidebtn);
});