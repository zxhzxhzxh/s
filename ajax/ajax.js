function ajax(path,fnSuccess,fnFailer){
		    //1.声明ajax对象
			 var xhr ;
			 if(window.XMLHttpRequest){
				 xhr= new XMLHttpRequest();
			 }else{
				 xhr= new ActiveXObject("Microsoft.XMLHTTP");
			 }
			 // console.dir(xhr)
			 //2.连接服务器
			 xhr.open("get",path,true);
			 //3.发送请求
			 xhr.send();
			 //4.建立事件
			 xhr.onreadystatechange=function(){
				 //监控几个属性 xhr.readyState || xhr.status || xhr.responseText
				 // alert(xhr.readyState+" "+xhr.status);  //test
				 if(xhr.readyState==4){
					 if(xhr.status==200){
						 // alert(xhr.responseText);
						 fnSuccess(xhr.responseText);
					 }else{
						 if(fnFailer){
							 fnFailer(xhr.status);
						 }
					 }
					 
				 }
			 }
}