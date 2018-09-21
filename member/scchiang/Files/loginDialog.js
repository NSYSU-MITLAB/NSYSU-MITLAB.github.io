var Login_Dialog = {
	resType:1,  // respond type
	isLogin:0,  // Login flag
	saveStr:'', // string
	showDialog:function()
	{
		if ($('login_dlg'))
		{
			Login_Dialog.setPosition();
			$('login_dlg').style.display = '';
			return false;
		}
		var ihtml = '<iframe width="100%" height="100%" frameborder="0"></iframe><div id="DlgTitle" class="DlgTitle"><h1>會員登入</h1><div class="DlgClose" onclick="Login_Dialog.hideDialog();" title="關閉"></div>'
								+'</div>'
								+ '<div id="DlgCont"><form action="?" method="post" onsubmit="return Login_Dialog.callShell();"><ul>'
								+ '<li id="DlgTip" class="DlgTip">您還未登入，請輸入帳號和密碼</li>'
								+ '<li>帳　號：<input tabindex="1" id="user.username" size="20" name="accounts" style="color:#336699;" maxlength="70" value="" /></li>'
								+ '<li>密　碼：'
								+ '<input tabindex="2" id="user.pwd" class="input_pwd" type="password" size="20" maxlength="20" '
								+ 'size="20" name="password" /></li>'
								+ '<li class="LoginBtn"><input type="submit" name="submit" value=" 登 入 " width="48" height="68" tabindex="4" onClick="login_obj.doUserLogin();"/>'
								+ '　　<input type="button" value="註冊會員" onclick="location.href=\'index.php?module=user\'" width="48" height="68" tabindex="5"/></li>'
								+ '</ul>'
								+'</form></div>';
    var dlg = document.createElement("DIV");
		dlg.id = 'login_dlg';
		dlg.className = 'LoginDlg';		
		dlg.style.position = "absolute";
		dlg.style.width = "430px";
		dlg.style.height = "170px";		
		dlg.style.display = "none";
		dlg.innerHTML = ihtml;
		document.body.appendChild(dlg);
		Login_Dialog.setPosition();
		$('login_dlg').style.display = '';
		$('user.username').focus();
		Drag.init($('DlgTitle'), $('login_dlg'));
		return false;
	},
	hideDialog:function()
	{
		$('login_dlg').style.display = 'none';
	},
	callShell:function()
	{
		var username = $('user.username').value;
		var pwd = $('user.pwd').value;
		if (('' == username) || ('' == pwd))
		{
			Login_Dialog.setTip("錯誤：請輸入賬號和密碼");
			$('user.pwd').value = '';
			$('user.username').focus();
			return false;
		}
		/*
		var isFind = location.href.indexOf("/f?") > -1;
		var url = isFind ? "f" : "index.php";
		var postStr = isFind ? "module=index&" : "module=user&";
		postStr += "action=xmlLogin&user_username="+username+"&user_pwd="+pwd;
		Http_Post_Request(url, postStr, Login_Dialog.callCore);
		*/
		Login_Dialog.setTip('請稍等，正在檢測賬號和密碼...');
		return false;
	},
	setPosition:function()
	{		
		if (self.innerHeight) {	// all except Explorer
			windowHeight = self.innerHeight;
		}	else {
			windowHeight = document.body.clientHeight;
		}
		$('login_dlg').style.left = (window.document.body.offsetWidth - parseInt($('login_dlg').style.width))/2 + 'px';
		// $('login_dlg').style.top = document.documentElement.scrollTop + (windowHeight - parseInt($('login_dlg').style.height))/2 + 'px';
		$('login_dlg').style.top = (document.documentElement.scrollTop + (windowHeight - parseInt($('login_dlg').style.height)))/2 + 'px';
	},
	callCore:function(val)
	{
		if ('' == val)
		{
			Login_Dialog.setTip('錯誤：請填寫正確的賬號和密碼');			
			$('user.pwd').value = '';
			$('user.username').focus();
			return false;
		}
		Login_Dialog.setTip('請稍等，正在登入中...');
		Login_Dialog.callEvent(val);
	},
	// To respond to different events that could repeat the use of
	// if (Login_Dialog.isLogin != 1) {Login_Dialog.resType=2; Login_Dialog.showDialog();} else impeach_dialog.showImpeach();
  callEvent:function(val)
	{
		// respond type
		switch (this.resType)
		{
			case 1: 
				     Login_Dialog.callQuestion(val);
						 break;
			case 2:
						 Login_Dialog.callImpeach(val);
						 break;
			case 3: 
				     Login_Dialog.callVoteArticle(val);
						 break;
			case 4: 
			       Login_Dialog.callFavWare(val);
						 break;
			case 5:
			       Login_Dialog.callForumPost(val);
						 break;
			case 6:
			       Login_Dialog.callApply(val);
						 break;
			case 7:
			       Login_Dialog.callReply(val);
						 break;
			case 8: 
			       Login_Dialog.callPostModify(val);
						 break;
			case 9:
						 Login_Dialog.callPostOutline(val);
						 break;
			case 10:
						 Login_Dialog.callGetIframeList(val);
						 break;	
			case 11:
						 Login_Dialog.callDoUploadImg(val);
						 break;							 
		}
		Login_Dialog.isLogin = 1;		
		return false;
	},
	// question event
	callQuestion:function(val)
	{
		document.postQu.submit();
	},
	// Impeach event 
	callImpeach:function(val)
	{
		Login_Dialog.initLoginInfo(val);
		Login_Dialog.hideDialog();
		impeach_dialog.showImpeach();
	},
		// Article event
	callVoteArticle:function(val)
	{
		Login_Dialog.initLoginInfo(val);
		Login_Dialog.hideDialog();
		document.voteForm.submit();
	},
	// Favorite event
	callFavWare:function(val)
	{
		Login_Dialog.initLoginInfo(val);
		Login_Dialog.hideDialog();
		$('islogin').value = 1;		
		var Arr = Login_Dialog.saveStr.split(',');
		optFavWare(Arr[0], Arr[1], Arr[2]);
	},	
	// Forum event
	callForumPost:function(val)
	{
		Login_Dialog.initLoginInfo(val);
		Login_Dialog.hideDialog();
		impeach_dialog.showImpeach(3);
	},
	// Apply event
	callApply:function(val)
	{
		document.forms[0].submit();
	},
	// Reply event
	callReply:function(val)
	{
		window.location.reload();
	},
	// PostModify event
	callPostModify:function(val)
	{
		var ownerid = document.postImpeach.owner_id.value;
		var Arr = val.split(':');
		var user_id = Arr[0];	
		if (user_id != ownerid) { 
			alert('錯誤： 您沒有刊登此筆物件');
			window.location.reload();
		}
		var upper_str = item_type.charAt(0).toUpperCase() + item_type.substring(1); // 首字母大寫
		var url = 'index.php?module=house&action=update' + upper_str + '&houseid=' + item_id;
		document.location.href = url;
	},	
  callPostOutline : function(val)
	{
		document.postForm.submit();		 
	},
  callGetIframeList : function(val)
	{
	  showGallery();			
		document.iImageList.src = "index.php?module=photo&action=iframeList";	 
		Login_Dialog.hideDialog();		
	},	
  callDoUploadImg : function(val)
	{
		document.frames('ifpostImg1').location.reload(true);
		Login_Dialog.hideDialog();		
	},	
  initLoginInfo:function(val)
	{
		var Arr = val.split(':');
		var username = Arr[1];
		$('HeadInfo1').innerHTML = '<font color="#ff0000" style="font-weight: bold;">'+username+'</font> 您好，歡迎來到 591 ！';
		$('HeadInfo2').innerHTML = '離開 591 時，請先 <a href="index.php?module=user&action=logout">安全登出</a>';
		Login_Dialog.isLogin = 1;	  
	},
	setTip:function(text)
	{
		$('DlgTip').innerHTML = text;
	}
}