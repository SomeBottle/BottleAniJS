function FadeIn(e,t){
	//t=100 = 1秒
	var m=document.getElementById(e);
	m.style.opacity=0;
	var g=1/t;
	var timer;
	function fi(){
	m.style.opacity=Number(m.style.opacity)+g;
	if(Number(m.style.opacity)>=1){
		clearInterval(timer);
	}
	}
	timer=setInterval(fi,1);
}
function FadeOut(e,t){
	//t=100 = 1秒
	var m=document.getElementById(e);
	m.style.opacity=1;
	var g=1/t;
	var timer;
	function fi(){
	m.style.opacity=Number(m.style.opacity)-g;
	if(Number(m.style.opacity)<=0){
		clearInterval(timer);
	}
	}
	timer=setInterval(fi,1);
}
function FadeInAndOut(e,t1,t2,tw){ //(元素，渐入时间，渐出时间，中间停留时间)
//渐入
	var m=document.getElementById(e);
	m.style.opacity=0;
	var g=1/t1;
	var timer;
	function fi(){
	m.style.opacity=Number(m.style.opacity)+g;
	if(Number(m.style.opacity)>=1){
		clearInterval(timer);
		function fo(){
			FadeOut(e,t2);
		}
		setTimeout(fo,tw*10);
	}
	}
	timer=setInterval(fi,1);
}