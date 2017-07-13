$(function(){
	
	var conBox = $('.contain');
	
	for(var i=0;i<conBox.length;i++){
	whell(conBox[i])
	}


	

	function whell(conBox){
		var imgBox=$('.imgbox',conBox)[0];
		var imgs=$('img',imgBox);
		var iw=parseInt(getStyle(imgs[0],'width'));
		imgBox.style.width=iw*imgs.length+'px';
		var lists=$('.list',conBox)[0];
		var lis=$('li',lists)
		var button=$('.button',conBox)[0]
		var left=$('.left',button)[0]
		var right=$('.right',button)[0]
			var index=0;
			lis[0].style.backgroundColor='pink'
			var t=setInterval(move,1000)
			function move(){
				index++;
				if(index==imgs.length){index=0}
				for(var i=0;i<imgs.length;i++){
					lis[i].style.backgroundColor=''
				}
				animate(imgBox,{left:-iw*index})
				lis[index].style.backgroundColor='pink'
				
			}

			conBox.onmouseover=function(){
				clearInterval(t)
			}

			conBox.onmouseout=function(){
				t=setInterval(move,1000)
			}

			for(var i=0;i<imgs.length;i++){
				lis[i].index=i;
				lis[i].onclick=function(){
					for(var j=0;j<imgs.length;j++){
						lis[j].style.background=''
					}
					animate(imgBox,{left:-iw*this.index})
					lis[this.index].style.background='pink';
					index=this.index;
				}
			}

			right.onclick=function(){
					move();
				}

				left.onclick=function(){
					index--;
					if(index==-1){index=lis.length-1}
						for(var i=0;i<imgs.length;i++){
							lis[i].style.backgroundColor=''
						}
					animate(imgBox,{left:-iw*index})
					lis[index].style.backgroundColor='pink'
				}
		}
})