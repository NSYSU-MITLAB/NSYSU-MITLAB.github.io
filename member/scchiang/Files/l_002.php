var alter = new Array();
alter[83] = '<span style=""><a href="http://mkt.twbbs.net.tw/mk/action/go.php?id=35" target="_blank"><img src="http://image.twbbs.net.tw/mkt/200807151126300.gif" width="728" height="90" border="0" /></a></span>';
alter[84] = '<span style=""><a href="http://mkt.twbbs.net.tw/mk/action/go.php?id=505" target="_blank"><img src="http://image.twbbs.net.tw/mkt/200904201804120.gif" width="728" height="90" border="0" /></a></span>';
alter[85] = '<span style=""><a href="http://mkt.twbbs.net.tw/mk/action/go.php?id=546" target="_blank"><img src="http://image.twbbs.net.tw/mkt/200904231821200.gif" width="120" height="20" border="0" /></a></span>';
alter[86] = '<span style=""><a href="http://mkt.twbbs.net.tw/mk/action/go.php?id=438" target="_blank"><img src="http://image.twbbs.net.tw/mkt/200904101604120.gif" width="300" height="250" border="0" /></a></span>';

for (var p in alter) {
	var objAlter = document.getElementById("alter"+p);
	if (objAlter != null) {
		objAlter.innerHTML = alter[p];
	}
}