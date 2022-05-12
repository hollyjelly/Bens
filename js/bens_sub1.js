$(function(){
    var bar = $('.hdrWrap .btn');
    var ex = $('.navTop .btn');
    var box = $('.navBox');
    var color = $('.gr');
    var bnimg = $('.detail .imgGroup.i1 .image');
    var bnimg2 = $('.detail .imgGroup.i2 .image');
    var bntxt = $('.detail .bottom p');
    var tyli = $('.content.cnt02 li');
    var tyimg = $('.content.cnt02 .image');
    var sizimg = $('.content.cnt04 .image');
    var sizli = $('.content.cnt04 li');
    var fixbtn = $('.topbtn');
    var rightbtn = $('.fixbox .btn');
    var mainbtn = $('.mainRight h4');
    var cart = $('.cartBox');
    var art = $('.content.cnt03 article');
    var img6 = $('.content.cnt03 .image.i6');
    var txt6 = $('.content.cnt03 article .texts');

    if(window.innerWidth>1024){
        
        art.eq(3).mouseover(function(){
            art.eq(4).css({opacity:'0'});
            art.eq(5).css({opacity:'1'});
            img6.css({height:'11rem',maxHeight:'440px',opacity:'1'});
            txt6.eq(5).css({opacity:'1',top:'-15%'});
        });
    }

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
    function colorBox(){
        var ind = $(this).index();
        bnimg.css({opacity:0});
        bnimg.eq(ind).css({opacity:1});
        bnimg2.css({opacity:0});
        bnimg2.eq(ind).css({opacity:1});
        bntxt.css({opacity:0,left:'200px'});
        bntxt.eq(ind).css({opacity:1,left:'0'});
        color.find('span').css({opacity:'0'});
        $(this).find('span').css({opacity:'1'});
    }
    function typebtn(){
        var ind = $(this).index();
        tyimg.css({opacity:'0'});
        tyimg.eq(ind).css({opacity:'1'});
        tyli.find('span').css({opacity:'0'});
        $(this).find('span').css({opacity:'0.6'});
    }

    function scroll(){
        $('html,body').stop().animate({
            scrollTop:'0'
        },1000)
    }
    function scroolpm(){
        $('html,body').stop().animate({
            scrollTop:'0'
        },1000);
    }
    function sizlicli(){
        var ind = $(this).index();
        console.log(ind)
        sizimg.css({opacity:'0'});
        sizimg.eq(ind).css({opacity:'1'});
        sizli.find('span').css({opacity:'0'});
        $(this).find('span').css({opacity:'0.6'});
    }
    function cartal(){
        cart.toggleClass('on');
    }
    function buytal(){
        alert('구매페이지로 넘어가시겠습니까?');
    }
    
    mainbtn.eq(0).click(buytal);
    mainbtn.eq(1).click(cartal);
    sizli.click(sizlicli);
    rightbtn.eq(1).click(scroolpm);
    fixbtn.click(scroll);
    tyli.click(typebtn);
    color.click(colorBox);
    bar.last().click(mnuB);    
    ex.click(mnuX); 
})