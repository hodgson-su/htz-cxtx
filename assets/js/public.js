//主要是底部栏点击页面跳转

$(function(){
//	$("#bottom-nav-bar").click(function(){
//		console.log("ehll");
//	})
	//返回
	$(".back").click(function(){
		history.back();
	})
	
	
	
	//底部栏跳转
	$('#bottom-nav-bar span').eq(0).click(function(){
		location.href = '../homePage/homePage.html';
	});
	
	$('#bottom-nav-bar span').eq(1).click(function(){
		console.log(2);
		location.href = '../appoint/appointment.html';
	});
	
	$('#bottom-nav-bar span').eq(3).click(function(){
		location.href = '../information/information.html';
	});
	
	$('#bottom-nav-bar span').eq(4).click(function(){
		location.href = '../my/My.html';
	});
	
	//关于发布
	$('#bottom-nav-bar span').eq(2).click(function(){
		$('.mask-release').show();
		$('body').css('overflow','hidden');
	})
	
	$('.release-close').click(function(){
		$('.mask-release').hide();
		$('body').css('overflow','auto');
	})
	
	
	//验证码的获取
	$('.btn-get-code').click(function(){
		$('.btn-get-code').addClass('active');
		countDown(60);
	})
	
	function countDown(count){
		var _count = count - 1;
		var _text = _count +"s后重新获取";
		$('.btn-get-code').text(_text);
		
		if(_count == 0){
			$('.btn-get-code').removeClass('active');
			$('.btn-get-code').text('获取验证码');
		}else{
			setTimeout(function(){
				countDown(_count);
			},1000);
		}
		
	}
	
	//跳转到登录页
	$('.login').click(function(){
		location.href = 'login.html';
	})
	
	
	//发布需求
	$('.mask-release .left .circle').click(function(){
		location.href = '../publish/releaseRequirement.html';
	})
	
	//发布房源
	$('.mask-release .right .circle').click(function(){
		location.href = '../publish/releaseInventory.html';
	})
	
	
	
	//所有取消按钮键close
	$('.close').click(function(){
		history.go(-1);
	})
	
	
	//展示区长按删除
	var timeout = undefined;
	$('.appoint-show').mousedown(function(){
		self = $(this);
		timeout = setTimeout(function(){
			console.log("mousedown");
			clearShow(self);
		},2000);
	});
	$('.appoint-show').mouseup(function(){
		console.log("mouseup");
		clearTimeout(timeout);
	});
	$(".appoint-show").mouseout(function(){
		console.log("mouseout");
		clearTimeout(timeout);
	})

	function clearShow(self){
		_self = self;
		$('.mask').show();
		$('.require-move').show();
		$('.btn-cancel').click(function(){
			$('.mask').hide();
			$('.require-move').hide();
		})
		$('.btn-ok').click(function(){
			console.log("ok");
			$(".mask").hide();
			$(".require-move").hide();
			console.log(_self);
			_self.remove();
		})
	}
	
	$.ajax({
		url:'http://127.0.0.1:9798/api/index',
		type:'get',
		dataType:'json',
		success:function(data){
			for(var i = 0,lg=data.length;i<lg;i++){
				$('.estate-name').eq(i).text(data[i]['name']);
			}
		}
	})
})
