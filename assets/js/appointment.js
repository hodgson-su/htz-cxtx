$(function(){
	//先要将页面上所有提示框进行关闭
	$(".info-box").hide();
	
	//再根据点击对应打开
	$("#call_phone").click(function(){
		$(".mask").show();
		$("#call_phone_info").show();
	})
	
	$(".btn-cancel").click(function(){
		closeAll();
	})
	
	//对于成功方案没有具体实现
	$(".btn-ok").click(function(){
		closeAll();
	})
	
	//选择接单后
	$("#appoint-get-btn").click(function(){
		$(".mask").show();
		$(".mask").css('background','rgba(178,178,178,1.0)');
		$("#appoint-success").show();		
	})
	//返回
	$("#appoint-success .btn-cancel").click(function(){
		location.href = "appointment.html";
	})
	//查看预约详情
	$("#appoint-success .btn-ok").click(function(){
		$("#appoint-get-btn").hide();
		$("#appointBookDetail").show();
	})
	
	
	//修改预约时间
	$("#modify").click(function(){
		$("#appointChangeDetail").show();
		$(".bottom-nav-bar").hide();
	})
	
	//预约时间修改
	$("#appointChangeDetail input").blur(function(){
		$(".mask").show();
		$("#modify-success").show();
	})
	$("#modify-success .btn-require").click(function(){
		closeAll();
		$("#appointChangeDetail").hide();
		$(".bottom-nav-bar").show();
	})
	
	//达成后跳转到上传合同页面
	$("#reach").click(function(){
		location.href = "appointReach.html";
	})
	
	
	function closeAll(){
		$('.mask').hide();
		$('.mask .info-box').hide();
	}
	
	
	//取消
	$('#remove').click(function(){
		$('.bottom-nav-bar').hide();
		$('.close-appoint').show();
		$('.btn-appoint-reason').show();
		closeReason();
	})
	
	function closeReason(){
		
		_check = $('.appoint-reason-row .icon-checkbox');
		_checked = $('.appoint-reason-row .icon-checkbox-checked');
		
		_check.click(function(){
			$(this).addClass('icon-checkbox-checked');
			$(this).removeClass('icon-checkbox');
			closeReason();
		})
		
		_checked.on('click',function(){
			$(this).addClass('icon-checkbox');
			$(this).removeClass('icon-checkbox-checked');
			closeReason();
		})
		
		$('.other-reason').on('click',function(){
			
			if($(this).is('.icon-checkbox-checked')){
				$('.appoint-reason-textarea').show();
			}else{
				$('.appoint-reason-textarea').hide();
			}
		})
	}
	
	//取消原因填写后确定
	$('.btn-appoint-reason').click(function(){
		$('body').css('overflow','hidden');
		$('.mask').show();
		$('#cancel-success').show();
		$('#cancel-success .btn-require').click(function(){
			location.href = './appointment.html';
		})
	})
})
