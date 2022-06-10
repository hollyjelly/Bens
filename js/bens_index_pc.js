$(function(){
    var bar = $('.hdrWrap .btn');
    var ex = $('.navTop .btn');
    var box = $('.navBox');
    var c1gr = $('.content.cnt01 .artGroup');
    var c1btn = $('.content.cnt01 .leftBtn');
    var c1li = $('.content.cnt01 li');
    var b1btn = $('.bnrWrap li');
    var b1bgc = $('.bnrWrap').eq(0);
    var b1btx = $('.banner.bnr01 h2');
    var b1tg = $('.banner.bnr01 .dsg');   
    var bni1 =$('.banner.bnr01 .image').eq(0);
    var bni2 =$('.banner.bnr01 .image').eq(1);
    var bni3 =$('.banner.bnr01 .image').eq(2);
    var fixbtn = $('.topbtn');
    var wd = $(window).width();
    var bn1 = 0, bn2 = 0;

    if(wd>1024){

        bn1 = '1'
        bn2 = '2'
        bn3 = '3'
        
    }else if(wd<=1024 && wd>420){

        bn1 = '4'
        bn2 = '5'
        
    }else{
        
        bn1 = '6'
        bn2 = '7'

    }

        function bnrbtn1(){
            bni1.removeClass('i'+bn1);
            setTimeout(function(){
                bni1.addClass('i'+bn1);
            },1);
            bni2.removeClass('i'+bn2);
            setTimeout(function(){
                bni2.addClass('i'+bn2);
            },1);
            bni3.removeClass('i3');
            setTimeout(function(){
                bni3.addClass('i3');
            },1);

            b1btx.eq(0).removeClass('op');
            setTimeout(function(){
                b1btx.eq(0).addClass('op')
            });
            b1btx.eq(1).removeClass('op2');
            setTimeout(function(){
                b1btx.eq(1).addClass('op2')
            });
        }
        b1btn.click(bnrbtn1);

    
    c1gr.css({marginLeft:'-100%'});
    // 인덱스슬라이드
    function indSlid(){
        var ori = Number(c1gr.find('.article:eq(1)').attr('data-ind'));
        
        var ind = Number($(this).index());
        
        if(ind > ori){
            var dd = ind-ori;            
            if(dd==1){
                c1gr.stop().animate({
                    marginLeft:'-200%'
                },2000,function(){
                    c1gr.find('.article:eq(0)').appendTo(c1gr);
                    c1gr.css({marginLeft:'-100%'});
                });
            }else if(dd==2){
                c1gr.stop().animate({
                    marginLeft:'-300%'
                },2000,function(){
                    c1gr.find('.article:eq(0)').appendTo(c1gr);
                    c1gr.find('.article:eq(0)').appendTo(c1gr);
                    c1gr.css({marginLeft:'-100%'});
                });
            }else if(dd==3){
                c1gr.stop().animate({
                    marginLeft:'0%'
                },2000,function(){
                    c1gr.find('.article:last').prependTo(c1gr);
                    c1gr.css({marginLeft:'-100%'});
                });
            }
        }else if(ind < ori){
            var dd = ori-ind;
            if(dd==1){
                c1gr.stop().animate({
                    marginLeft:'0%'
                },2000,function(){
                    c1gr.find('.article:last').prependTo(c1gr);
                    c1gr.css({marginLeft:'-100%'});
                });
            }else if(dd==2){
                c1gr.stop().animate({
                    marginLeft:'-300%'
                },2000,function(){
                    c1gr.find('.article:eq(0)').appendTo(c1gr);
                    c1gr.find('.article:eq(0)').appendTo(c1gr);
                    c1gr.css({marginLeft:'-100%'});
                });
            }else if(dd==3){
                c1gr.stop().animate({
                    marginLeft:'-200%'
                },2000,function(){
                    c1gr.find('.article:eq(0)').appendTo(c1gr);
                    c1gr.css({marginLeft:'-100%'});
                });
            }
        }
    }
    c1gr.swipeleft(function(){
        c1gr.stop().animate({
            marginLeft:'-200%',
        },2000,function(){ 
            c1gr.find('.article:first').appendTo(c1gr);
            c1gr.css({marginLeft:'-100%'});
            var i = Number(c1gr.find('.article:eq(1)').attr('data-ind'));
            c1li.removeClass('show');
            c1li.eq(i).addClass('show');
        });
    });
    c1gr.swiperight(function(){
        c1gr.stop().animate({
            marginLeft:'0%',
        },2000,function(){ 
            c1gr.find('.article:last').prependTo(c1gr);
            c1gr.css({marginLeft:'-100%'});
            var i = Number(c1gr.find('.article:eq(1)').attr('data-ind'));
            c1li.removeClass('show');
            c1li.eq(i).addClass('show');
        });
    });
    // 메뉴박스
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
    // 컨텐츠1
    function bthv(){
        c1li.removeClass('show');
        $(this).addClass('show');
    }
    function c1sli(){
        c1gr.stop().animate({
            marginLeft:'-200%',
        },2000,function(){ 
            c1gr.find('.article:first').appendTo(c1gr);
            c1gr.css({marginLeft:'-100%'});
            var i = Number(c1gr.find('.article:eq(1)').attr('data-ind'));
            c1li.removeClass('show');
            c1li.eq(i).addClass('show');
        });
    }

    // 배너1
    function b1li(){
        // 이미지변경
        var img1 = bni1.attr('data-img1');   
        var img2 = bni2.attr('data-img1');   
        var img3 = bni3.attr('data-img1'); 
        bni1.css({backgroundImage:img1});
        bni2.css({backgroundImage:img2});
        bni3.css({backgroundImage:img3});  

        // 텍스트변경
        bni1.find('span').text('elsa white high glossy');
        bni2.find('span').text('polsen queen fabric');
        bni3.find('span').text('polsen gray 3.5');

        // css변경 
         b1btn.removeClass('show2');
        $(this).addClass('show2');
        b1bgc.css({backgroundColor:'#a3a1a3',transition:'all 0.5s'});
        b1btx.text('m o r d e r n');
    }
    function b1con(){
        // 이미지변경
        var img1 = bni1.attr('data-img2');   
        var img2 = bni2.attr('data-img2');   
        var img3 = bni3.attr('data-img2');   
        bni1.css({backgroundImage:img1});
        bni2.css({backgroundImage:img2,backgroundPosition:'right'});
        bni3.css({backgroundImage:img3});

        // 텍스트변경
        bni1.find('span').text('jebell display cupboard');
        bni2.find('span').text('elia 501 queen american walnut');
        bni3.find('span').text('elga chest walnut');
        
        // css변경
        b1bgc.css({backgroundColor:'#cbcbcb'});
        b1btx.text('n a t u r a l');
    }

    function indsli(){
        var ind = c1gr.find('.article:eq(1)').attr('data-ind');
        var liind = c1li.index();
    }

    fixbtn.click(function(){
        $('html,body').animate({
            scrollTop:'0'
        },1000)
    });

    
    // 값
    c1li.click(indsli);
    bar.last().click(mnuB);    
    ex.click(mnuX); 
    c1li.click(bthv);
    b1btn.click(b1li);
    b1btn.eq(1).click(b1con);
    $('.content.cnt01 li').click(indSlid);
    c1btn.click(c1sli);

    console.log('<나현지>의 3번째 포트폴리오 Bens 봐주셔서 감사합니다(´▽`ʃ♡ƪ)');

});