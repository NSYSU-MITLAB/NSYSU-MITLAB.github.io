function selectPhoto(){
	new Ajax.Request(
		'index.php?module=gallery',
		{method:'post', postBody:'action=selectDiv', onComplete:cb_selectPhoto}
	);
}

function cb_selectPhoto(oXHR, oJSON){
	if (!oJSON.succ){
		alert(oJSON.msg);
	} else {
		var obj = $("galleryId");
		obj.length = 1;
		var opt;
		oJSON.script.each(
			function(v, i){
				opt = document.createElement('OPTION');
				opt.setAttribute('value', v.id);
				opt.appendChild(document.createTextNode(v.title));
				obj.appendChild(opt);
			}
		);
		$("photoList").src = "index.php?module=gallery&action=select";
		$("selectPhoto").style.display = "block";
	}
}

function changeGallery(obj){
	var galleryId = obj.options[obj.selectedIndex].value;
	if (galleryId != ""){
		$("photoList").src = "index.php?module=gallery&action=select&galleryId="+galleryId;
	}
}