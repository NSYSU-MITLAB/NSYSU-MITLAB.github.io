var showHideDiv = {
	$:function(obj) {
		return document.getElementById(obj);
	},
	drawDiv:function(objId,objInnerHtml,objWidth,objHeight,objTop,objLeft)
	{
		if (!this.$(objId)) {
			var objHtml = document.createElement("div");
			objHtml.id = objId;
			objHtml.innerHTML = objInnerHtml;
			objHtml.style.cssText = "position:absolute; background-color:#F5F9FA; z-index:20; padding:15px; border:2px solid #336699;color:#000;";
			objHtml.style.width = objWidth + "px";
			//objHtml.style.height = objHeight + "px";
			objHtml.style.display = "block";
			document.body.appendChild(objHtml);
			this.closeTab(objId);
		}

		this.showAllType(objId,objTop,objLeft);
	},
	showAllType:function(objId,top,left)
	{
		var divTypeList = this.$(objId);
		
		divTypeList.style.top = top+'px';
		divTypeList.style.left = left+'px';
		divTypeList.style.display = "block";
	},
	hidType:function(objId)
	{
		var divTypeList = this.$(objId);
		divTypeList.style.display = "none";
	},
	closeTab:function(parentId)
	{
		var closeHtml = document.createElement("div");
		closeHtml.id = 'closeTab';
		closeHtml.innerHTML = "close <img src='img/close.png' align='absmiddle' />";
		closeHtml.style.cssText = "text-align:right;font-size:11pt;clear:both;font-weight:bold;color:#336699;cursor:hand;padding-top:8px;";
		this.$(parentId).appendChild(closeHtml);
		this.$('closeTab').onclick = function() {
			showHideDiv.hidType(parentId);
		}
	}
};