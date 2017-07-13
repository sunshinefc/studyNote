$(function(){
	var scres=$('.screen')
	
	var ch=document.documentElement.clientHeight;
	var cw=document.documentElement.clientWidth;
	console.log(ch)
	var index=0;
	var next=0;
	var flag=true;
	scres[0].style.top=0;
	mouseWheel(document,function(){
		if(!flag){return}
			flag=false;
		next--;
		if(next<0){next=scres.length-1}
		scres[next].style.top='-100%';
		scres[next].style.left='-100%';		
		animate(scres[index],{top:ch,left:cw},1000)
		animate(scres[next],{top:0,left:0},500,function(){
			flag=true;
		})
		index=next;
	},function(){
		if(!flag){return}
			flag=false;
		next++;
		if(next==scres.length){next=0}
		scres[next].style.top='100%';
		scres[next].style.left='100%';
		animate(scres[index],{top:-ch,left:-cw},1000)
		animate(scres[next],{top:0,left:0},500,function(){
			flag=true;
		})
		
		index=next;
		
	})
})