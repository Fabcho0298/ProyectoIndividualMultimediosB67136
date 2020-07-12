var ultimoX=0;
var ultimoY=0;

$(document).mousemove(function(e){

    $('.header__astronauta').css({left:e.pageX+10, top:e.pageY+5});
        if(ultimoX>e.clientX){
            if(e.pageX >= $(window).width()-78){
                $('.header__astronauta').css({
                    display: 'none'
                  });
            }
            else{
                $('.header__astronauta').attr("src", "img/astro-left.png");
                $('.header__astronauta').css({
                    display: 'initial'
                    
                  });
                  
            }
        }
        else if(ultimoX<e.clientX){
            if(e.pageX >= $(window).width()-78){
                $('.header__astronauta').css({
                    display: 'none'
                  });
            }
            else{
                $('.header__astronauta').attr("src", "img/astro-right.png");
                $('.header__astronauta').css({
                    display: 'initial'
                  });
                  
            }
        }
	ultimoX=e.clientX;
    ultimoY=e.clientY;    
});
