/*兼容性 
	IE6-8不支持类名获取
*/
function getClass(classname,range){
	if(range.getElementsByClassName){
		// alert('支持')
		return range.getElementsByClassName(classname)
	}else{
		// alert('不支持')
		var all=range.getElementsByTagName('*')
		var a=[];
		for(var i=0;i<all.length;i++){
			
			if (checkClass(all[i].className,classname)) {
				a.push(all[i])
			}
		}
		return a;
	}
	
}
function checkClass(tagClass,aClass){
	var a= tagClass.split(' ')
	for(var i=0;i<a.length;i++){
		if(a[i]==aClass){
			return true;
		}
		
	}
	return false;
}


function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}

}

/*兼容性
	操作内容 IE6-8不支持textContent

	1.innerHTML 用来设置或获取
	2.innerText 用来设置或获取(IE)
	  textContent用来设置或获取

*/
function text(obj,val){
	//判断内容是否为空 是空值设置
	if(val==undefined){
		//判断浏览器是否支持这个方法
		if(obj.textContent!=undefined){
			alert('textContent' )
			return obj.textContent;
		}else{
			alert('innerText')
			return obj.innerText;
		}
		//不是空值 把val赋值给它
	}else{
		if(obj.textContent!=undefined){
			 obj.textContent=val;
		}else{
			 obj.innerText=val;
		}
	}
}



/*  1.获取页面元素
		$('#box')	id
		$('.box')	classname
		$('div')	tagname
	2.页面加载
		$(function(){})
*/
function $(selector,range){
	if(typeof selector=='string'){
		// alert('获取')
		var range=range||document;
		if(selector.charAt(0)=='#'){
			return document.getElementById(selector.substr(1))
		}
		else if(selector.charAt(0)=='.'){
			return getClass(selector.substr(1),range)
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
			return range.getElementsByTagName(selector)
		}
	}else if(typeof selector=='function'){
		// alert('页面加载')
		window.onload=selector;
	}

}