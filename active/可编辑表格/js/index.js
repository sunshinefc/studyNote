/* 数据处理:
	1.使用json对象的原因:字段有名字    数组是[]有序号按照指定顺序去存储
		一组序号[]		一条信息{}
	2.用for in 循环遍历,添加属性时顺序不确定
	3.通过字符串连接

	思路:1.保存对象信息
		 2.获取		表格<table></table>中有<thead></thead>
		 								   <tbody></tbody>
		 								   <tfoot></tfoot>

		 3.第一个函数	创建一条信息：使用字符串连接成tr，返回信息
		 4.第二个函数	循环tr,连接成多个tr放到tbody中去


	功能:
		1. 新增:将空对象放到数组中,重新加载到页面中去
		2. 查询
*/

// 通过数组的形式保存对象
var studentof=[{
		studentid:201501,
		name:'小明',
		sex:'男',
		age:22,
		job:'学生',
	},{
		studentid:201502,
		name:'小七',
		sex:'女',
		age:19,
		job:'警察',
	},{
		studentid:201503,
		name:'楠楠',
		sex:'男',
		age:18,
		job:'程序猿',
	}]

$(function(){

	// 获取
	var tbody=$('tbody')[0]
	var btn=$('.button')[0]
	var index=0;


	//创建一条信息 <tr></tr>   通过字符串连接
	function creatTr(obj){
		var str='';
		// 每创建一个tr,序号加1
		index++;
		str+='<tr  class="'+(index-1)+'"><td>'+index+'</td>';
		// 遍历一个json对象的属性  i字段
			for(var i in obj){
				//将每一个遍历出的属性放到td标签中
				str+='<td at="xg" class="'+i+'">'+obj[i]+'</td>';
			}

		str+='<td><button id="del">删除</button></td>'
		// 将得到的所有td放到tr中
		str+='</tr>';
		// 返回创建的tr
		return str;
	}



	//重新绘制页面
	//循环创建的tr ,将所有创建tr连接起来放到tbody中
	function reloadData(){
		//序号,更新的序号每次都从1开始
		index=0;
		var str="";
		//遍历数组studentof中的json对象
		for (var i = 0; i < studentof.length; i++) {
			str+=creatTr(studentof[i])
			
		};
		tbody.innerHTML=str;
	}

	//绘制数据
	// 调用  将数组中自定义的json对象加载到页面中
	reloadData()


	// 添加按钮   点击事件
	btn.onclick=function(){
		// 将空的json对象添加到数组studentof后面
		studentof.push(
		{studentid:'',
		name:'',
		sex:'',
		age:'',
		job:'',

	})
		//调用将tr添加到tbody中的函数，将点击添加的空对象加载到页面中
		reloadData()
	}


	//修改数据
	tbody.onclick=function(e){
		var ev=e||window.event;
		//获取目标
		var elm=ev.target||ev.srcElement;
		
		//给每个框添加一个input
		var input=document.createElement('input')
		var val=elm.innerHTML;
		if(elm.nodeName=='TD'&&elm.getAttribute('at')=='xg'){
			elm.innerHTML='';
			input.value=val;
			elm.appendChild(input)
		}


		

		input.focus();
		//删除原本的,把新的放到页面中
		input.onblur=function(){
			var v=input.value;
			//删除input里面的内容
			elm.removeChild(input)
			input=null;
			//将修改之后的内容
			elm.innerHTML=v;




			//修改数组中的内容  得到要修改的编号,判断内容是否修改,修改之后的v赋给val
			//获取要修改行的序号
			if(val!=v){
				//获取index 先获取父节点tr
				var p=elm.parentNode;
				//获取父节点中的序号确定要修改信息的位置
				var o=elm.parentNode.className;
				//获取i
				var q=elm.className;
				//[]解析 q  	studentof[o].q属性,没有q这个属性			
				studentof[o][q]=v;
				// console.log(studentof)
				
			}

			
			

		}
		

		//删除  每一条tr后添加一个删除按钮,找数组中的下标,删除数组中的数据,重新绘制
		//获取删除按钮
		//点击的位置在删除按钮上,再进行下面的操作
		if(elm.nodeName=='BUTTON'&&elm.id=='del'){
			//获取删除按钮对应的tr 在数组中将tr删除
			var dtr=elm.parentNode.parentNode;
			 var dtrn=dtr.className;
			 studentof.splice(dtrn,1)             
			 reloadData()
		}
		



	}


	//查找




	
})