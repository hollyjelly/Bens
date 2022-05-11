$(function(){
    var wd = $(window).width();
    var bar = $('.hdrWrap .btn');
    var ex = $('.navTop .btn');
    var box = $('.navBox');
    var icon = $('.banner.bnr02 .image.i1>span');
    var imbox = $('.group');
    var cli = $('.banner.bnr02 .imgGroup');
    var xbtn = $('.banner.bnr02 .btn');
    var fixbtn = $('.topbtn');

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
    function bnr(){
        var ind = $(this).index();
        imbox.css({opacity:'0'});
        imbox.eq(ind).css({opacity:'1'});
    }
    function scroll(){
        $('html,body').stop().animate({
            scrollTop:'0'
        },1000);
    }

    icon.click(bnr);
    bar.last().click(mnuB);    
    ex.click(mnuX); 
    fixbtn.click(scroll);

    if(wd<1025){
       
        icon.click(function(){
            var ind = $(this).index();
            cli.css({height:'100vh',opacity:'1'});
            imbox.eq(ind).css({opacity:'1'});
        });
        xbtn.click(function(){
            cli.css({height:'0vh',opacity:'0'});
            imbox.css({opacity:'0'});
        });

    }




});