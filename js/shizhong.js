
onload=function(){
	var oLi=document.getElementsByTagName("li");
	hour();
	min();
	sec();
	setInterval(hour,1000);
	setInterval(min,1000);
	setInterval(sec,1000);
	function hour(){
		var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var hdegree = hours * 30 + (mins / 2);
        var hrotate = "rotate(" + hdegree + "deg)";
        oLi[0].style.transform=hrotate;
	}
	function min(){
		var mins = new Date().getMinutes();
        var mdegree = mins * 6;
        var mrotate = "rotate(" + mdegree + "deg)";
        oLi[1].style.transform=mrotate;
	}
	function sec(){
		var seconds = new Date().getSeconds();
        var sdegree = seconds * 6;
        var srotate = "rotate(" + sdegree + "deg)";
        oLi[2].style.transform=srotate;
	}
}