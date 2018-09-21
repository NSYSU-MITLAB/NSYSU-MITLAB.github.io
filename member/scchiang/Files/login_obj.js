var login_obj = {
	doUserLogin:function() {
		var objAccounts = $F('user.username');
		//var objAccounts = $('user.username').value;
		var objPassword = $F('user.pwd');
		var objAutoLogin = $F('user.pwd');
		var url = 'index.php';
		var par = 'module=index&action=userLoginAjax&accounts='+objAccounts+'&password='+objPassword+'&autoLogin='+objAutoLogin;
		var myAjax = new Ajax.Request(
			url,
			{
				method:'post',parameters:par,onComplete:login_obj.showResponseLogin
			}
		);
	},
	showResponseLogin:function(originalRequest)
	{
		var strVal = originalRequest.responseText;
		if (strVal == 'false') {
			Login_Dialog.setTip("帳號或者密碼錯誤！");
		} else if (strVal == 'active') {
			Login_Dialog.setTip("新註冊的會員需要電話認證！");
			window.top.location.href="./index.php?action=activeAccounts";
		} else {
			location.reload();
			window.top.frames['rightmain'].frames['userNav'].location.reload();
		}
	},
	showUserLogout:function() {
		var url = 'index.php';
		var par = 'module=index&action=userLogoutAjax';
		var myAjax = new Ajax.Request(url,{method:'get',parameters:par,onComplete:login_obj.showResponseLogout});
	},
	showResponseLogout:function() {
		var strVal = originalRequest.responseText;
		if (strVal == 'true') {
			location.reload();
			window.top.frames['rightmain'].frames['userNav'].location.reload();
		}
	}
}