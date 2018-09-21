var alter = new Array();
alter[112] = '<span style=""><a href="http://mkt.twbbs.net.tw/mk/action/go.php?id=477" target="_blank"><img src="http://image.twbbs.net.tw/mkt/200904211352470.gif" width="728" height="90" border="0" /></a></span>';
alter[113] = '<span style=""><a href="http://mkt.twbbs.net.tw/mk/action/go.php?id=527" target="_blank">？？唬爛！錢是這樣賺低？</a></span>';
alter[114] = '<span style=""><a href="http://mkt.twbbs.net.tw/mk/action/go.php?id=403" target="_blank">女生私房秘密討論</a></span>';
alter[115] = '<span style=""><a href="http://mkt.twbbs.net.tw/mk/action/go.php?id=385" target="_blank">爆冏!!正妹到處被嗆聲!?</a></span>';

for (var p in alter) {
	var objAlter = document.getElementById("alter"+p);
	if (objAlter != null) {
		objAlter.innerHTML = alter[p];
	}
}