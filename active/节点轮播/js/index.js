$(function(){
		var imgBox=$('.img-box')[0];
		var wheelBox=imgBox.parentNode;
		var divs=getChilds(imgBox);
		var cw=document.documentElement.clientWidth;
		imgBox.style.width=cw*divs.length+'px';
		//获取左右按钮
		var btn=$('.button',wheelBox)[0]
		var leftbtn=$('.leftbtn',btn)[0]
		var rightbtn=$('.rightbtn',btn)[0]
		// console.log(rightbtn)
		for(var i=0;i<divs.length;i++){
			divs[i].style.width=cw+'px';
			var img=getChilds(divs[i])[0];
			var iw=parseInt(getStyle(divs[0],'width'))
			// img.style.left='50%';
			marginLeft=-iw/2+'px';
		}
	var t=setInterval(wheel,2000);
	function wheel(){
		animate(imgBox,{left:-cw},500,
			function(){imgBox.appendChild(getFirst(imgBox))
				imgBox.style.left=0;

			}

			)
	}	
	wheelBox.onmouseover=function(){
		clearInterval(t)
	}
	wheelBox.onmouseout=function(){
		t=setInterval(wheel,2000)
	}
	
	rightbtn.onclick=function(){
		wheel()
	}
	var flag=true;
	leftbtn.onclick=function(){
		if(!flag){return};
		flag=false;
		imgBox.insertBefore(getLast(imgBox),getFirst(imgBox));
		imgBox.style.left=-cw+'px' 
		animate(imgBox,{left:0},500,function(){
			flag=true;
		})

	}





	})