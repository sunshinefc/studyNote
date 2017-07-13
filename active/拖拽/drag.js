
function drag(obj,options){
			//刚开始 this空对象	
							//方向 dir:'a'||'x'||'y' 默认a   
							//边界 slide:true||false  默认false 三元表达式
	this.options=options||{};
	// console.log(this.options)
	this.options.dir=options.dir||'a';
	this.options.slide=options.slide==undefined?false:options.slide;


	this.o=obj;
			//this={o:box}
			//this.o=box

	this.x=0;
	this.y=0;
	this.lenX=0;
	this.lenY=0;
	//找具有定位属性的前辈元素
	this.parent=this.o.offsetParent
	// console.log(this.parent)
}
drag.prototype.down=function(){
	//this={o:box,x:0;y:0;lenX:0;lenY:0}
					//this拖拽的对象  把要操作的对象保存在that中
	var that=this;
		
	this.o.onmousedown=function(e){
		//this=box
		// that={o:box,x:0;y:0;lenX:34;lenY:45}
		var ev=e||window.event;
		var cx=ev.clientX;
		var cy=ev.clientY;
		var ox=this.offsetLeft;
		var oy=this.offsetTop;
		that.lenX=cx-ox;
		that.lenY=cy-oy;

		that.move();
		that.up();
	}
}
drag.prototype.move=function(){
	var that=this;
	//that={options: Object, o:div.box, x:0, y: 0, lenX:356}
	
	document.onmousemove=function(e){
		//this=document
		ev=e||window.event;
		var cx=ev.clientX;
		var cy=ev.clientY;
		that.x=cx-that.lenX;
		that.y=cy-that.lenY;

		//边界
		// 获取box的宽高和具有定位属性的父元素的宽高

		var bw=that.o.offsetHeight;
		var bh=that.o.offsetWidth;
		var heziw=that.parent.offsetWidth;
		var hezih=that.parent.offsetHeight;
		// console.log(bw)
		// console.log(hezih)
		if(that.options.slide==true){
			if(that.x<0){
				that.x=0;
			}
			if(that.y<0){
				that.y=0;
			}
			if(that.x>heziw-bw){
				that.x=heziw-bw;
			}
			if(that.y>hezih-bh){
				that.y=hezih-bh;
			}
		}
		

		//方向
		if(that.options.dir=='x'){
			that.o.style.left=that.x+'px';
		}else if(that.options.dir=='y'){
			that.o.style.top=that.y+'px';
		}else if(that.options.dir=='a'){
			that.o.style.left=that.x+'px';
			that.o.style.top=that.y+'px';
		}
		
		

	}

}
drag.prototype.up=function(){
	document.onmouseup=function(){
		document.onmousemove=null;
		document.onmouseup=null;
	}
}