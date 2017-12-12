<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
<script src="gis/js/jquery.js"></script>
<script type="text/javascript">
	$(function(){
		
		$.ajax({
			 url:'InterfaceServlet',
			 type:'get',
			  
			 success:function(data){
				 $('#ip').val(data);
			 }
		 });
		 
		$('#submit').click(function(){
			 $.ajax({
				 url:'InterfaceServlet',
				 type:'post',
				 data:{'ip':$('#ip').val()},
				 success:function(state){
					 if(state) 
						 alert("配置接口路径成功！");
					  
					 else
						 alert("配置接口路径失败！");
					 window.close();
				 }
			 })
		})
	})
</script>
</head>
<body>

	<div style="text-align: center;margin-top: 100px;">
		 
			<label>接口路径: </label>
			<input name="ip" id="ip" style="width:320px;"> 
			<button  style="marging-left: -150px;" id="submit">提交</button>
		 
	</div>
	
	 
</body>
</html>