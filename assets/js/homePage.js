/**
 * Created by Administrator on 2016/11/15.
 */
$(function(){
    function lunbo(){
        var swiper = new Swiper('.swiper-container',{
            //direction:'vertical',
            loop:true,
            autoplay:2000,
            pagination:'.swiper-pagination'
        });
    }
    lunbo();

//				$(window).scroll(function()
//					judegScrollTop();
//				})

    $('.right-bar-to-top').click(function(){
        $('body').scrollTop(0);
        judegScrollTop(0);
    })

    function judegScrollTop(scrollTop){
        scrollTop = scrollTop || $(window).scrollTop();
        console.log("scrollTop",scrollTop);
        if(scrollTop > 0 && $(".homePage-top").css("height") != "40px"){
            $(".homePage-top").animate({
                height:"40px",
            },200,start.Up);
        }
        if(scrollTop == 0){
            if($(window).innerWidth() == 320){
                $(".homePage-top").animate({
                    height:"270px",
                },200,start.Down);
            }else{
                $(".homePage-top").animate({
                    height:"310px",
                },200,start.Down);
            }

        }

    }

    var start = {
        "Up":function(){
            $(".swiper-container").slideUp();
            $(".homePage-top").addClass('homePage-top-active');
            $(".homePage-top p").hide();
            $(".homePage-top .search").addClass('search-active');
            $(".fixed-top").addClass('fixed-top-active');
            $('body').css({
                'padding-top':100,
                'padding-bottom':50
            })
        },
        "Down":function(){
            $('.swiper-container').slideDown();
            $(".homePage-top").removeClass('homePage-top-active');
            $('.homePage-top p').show();
            $(".homePage-top .search").removeClass('search-active');
            $(".fixed-top").removeClass("fixed-top-active");
            $('body').css({
                'padding-top':0,
                'padding-bottom':0
            })
            //					lunbo();
            $('.select-table').hide();
            $('.mask').hide();
        }
    }


    //对于区域、面积、单价、更多选择点击后效果
    $(".select-bar li").each(function(i,e){
        var _priceIcon = $('.select-bar li').eq(4).find('i');
        $(".select-bar li").removeClass("acitve");
        $('.select-bar li').eq(i).click(function(){
            //判断是否top是否收起
            var _scroll = $(window).scrollTop();
            if(_scroll == 0){
                $("html,body").animate({
                    "scrollTop":100
                },800)
                judegScrollTop(100);
            }

            //判断是收起来还是下拉
            if($(this).hasClass("acitve")){
                console.log("is");
                $(".select-bar li").removeClass("acitve");

                $(".select-table").hide();
                $('.mask').hide();
            }else{
                console.log($(this));
                $(".select-bar li").removeClass("acitve");
                _priceIcon.removeClass('content_icon01_down').removeClass('content_icon01_litre');
                $(this).addClass("acitve");

                $('.select-table').show();
                $('.select-table .acreage').hide();
                $('.select-table .acreage').eq(i).show();

                $('.mask').show();
            }


            //关于更多
            if(i==3){
                $(".select-areage .select-left li").eq(0).addClass("active");
                $(".select-areage .select-right .corr-select").css("display","none");
                $(".select-areage .select-right .corr-select").eq(0).show();
                $(".select-areage .select-left li").each(function(i,e){
                    $(".select-areage .select-left li").eq(i).click(function(){
                        $(".select-areage .select-left li").removeClass("active");
                        $(this).addClass("active");
                        $(".select-areage .select-right .corr-select").hide();
                        $(".select-areage .select-right .corr-select").eq(i).show();
                    })
                })
            }

            if(i==4){
                //价钱从低到高排列,判断是否存在价格从低到高排列的class，无则添加
                if(!_priceIcon.is('.content_icon01_down')){
                    _priceIcon.removeClass('content_icon01_litre');
                    _priceIcon.addClass('content_icon01_down');

                }else{
                    _priceIcon.removeClass('content_icon01_down');
                    _priceIcon.addClass('content_icon01_litre');

                }
                $('.mask').hide();
            }
        })
    })
    $(".select-table .acreage li").not(".select-areage .select-left li").click(function(){
        console.log($(this));
        $(".select-bar li").removeClass("acitve");
        $('.select-table').hide();
        $('.mask').hide();
    })

    var id = 310000;//默认上海地
    getProvince();
    //选择区域中对于所在具体地址的选择
    //
    function getProvince(){
        //上海北京两地，上海id310000，北京id110000
        var city_sh;
        var city_bj;

        for(var i = 0,lg=province.length;i<lg;i++){
            for(var ns in province[i]){

                if(province[i]['id'] == 310000){

                }
            }

        }
        console.log(city_sh);
        //获取得到city_sh和city_bj后进行排序
        getCity(city_sh);

    }

    function getCity(city){
        var _cityLi = '';
        console.log(city);
        for(var ns in city){
            _cityLi = _cityLi + '<li>'+city[name]+'</li>';
        }

        $('.select-city').append(_cityLi);
    }

    function getArea(){

    }

    //主要就是y轴上的操作
    var startY;
    var endY;

    function load (){
        document.addEventListener('touchstart',touch, false);
        document.addEventListener('touchmove',touch, false);
        document.addEventListener('touchend',touch, false);
        function touch (event){
            var event = event || window.event;
            switch(event.type){
                case "touchstart":
                    scrollTop = $(window).scrollTop();
                    console.log("当解除到屏幕的时候，屏幕距离顶端距离：",scrollTop);
                    startY = event.touches[0].clientY;
                    console.log("此时手指所在位置：",startY);
                    break;
                case "touchend":
                    endY = event.changedTouches[0].clientY;
                    console.log("结束位置：",endY,"产生距离：",endY-startY);
                    if(scrollTop <100 && (endY-startY)<0){
                        console.log("产生向上效果");
                        $(".homePage-top").animate({
                            height:"40px",
                        },200,start.Up);
                    }
                    if((endY-startY)>=scrollTop){
                        if($(window).innerWidth() == 320){
                            $(".homePage-top").animate({
                                height:"270px",
                            },200,start.Down);
                        }else{
                            $(".homePage-top").animate({
                                height:"310px",
                            },200,start.Down);
                        }
                    }
                    break;
                case "touchmove":
//              event.preventDefault();  //添加这个后可以阻止屏幕在滑动过程中滑动
                    break;
            }

        }
    }
    window.addEventListener('load',load, false);

    judegScrollTop();
})