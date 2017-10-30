<%@page import="java.net.URLDecoder"%>
<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>221</title>
<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/ol.js"></script>
<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
<link rel="stylesheet" href="css/ol.css" type="text/css">
<link rel="stylesheet"
	href="css/jquery-ui/themes/smoothness/jquery-ui.min.css"
	type="text/css">
<link rel="stylesheet" href="css/main.css" type="text/css">
<%
	 String type = request.getParameter("type");
     String jsonStr = request.getParameter("jsonStr");
     jsonStr = URLDecoder.decode(jsonStr, "utf-8");
   
%>
</head>
<body>
	<div id="mapcontainer">
		<div id="map" tabindex="1"></div>
		<div id="progress"></div>
		<div class="maptoolbar ol-unselectable ol-control"></div>
	</div>
</body>

<script src="js/main.js"></script>
<script src="../js/solar_gis/list.js"></script>
<script src="js/jquery.fixedheadertable.min.js"></script>
<link rel="stylesheet" href="css/fixedheadertable.css" type="text/css">
<link rel="stylesheet" href="css/fixedheadertable.my.css"
	type="text/css">
<style>
td {
	text-align: center;
}
</style>

<script>

$(function(){
	    var readonly  = true;
	    
	    /* var type = 1; 
	    readonly = type == 0 ? true : false;
		var json = {
			"coords" : [ [ 113.20353124999997, 22.999098137991353 ],
					[ 115.18107031249998, 20.90012155827489 ] ],
			"id" : "rou-c8b30ad9-35fe-9b8a-90db-1b9cf571bbda",
			"orderNumber" : "L0774201709131001"
		};*/
		
		//var json = {"coords":[[114.98331640624997,18.31306511531497],[114.32413671874997,17.91627754946076]],"id":"rou-74de33e0-ff66-4eeb-6339-b976410c46d5","orderNumber":"L0774201710131000"};
		var json = $.parseJSON('<%=jsonStr%>');
		var type = "<%=type%>";
		
		orderCoords = json.coords;
		if(json != ''){
		

		displayRoute(json['id'] + '_' + json.orderNumber , json['coords'], '', {
			// 航线只读（不能被修改坐标）
			readonly : readonly,
			// tooltip的button的标题，缺省是“选图”
			buttonText : "选图",
			// tooltip的button的click事件，缺省是选图
			// 其实下面click事件代码与选图完成同样的功能
			buttonClick : function() {
				//validateLine(line.linename);
				getRouteCoverage(json['id']  + '_' + json.orderNumber , onRouteCoverage);
			},
		});
		}

	})

	/**
	 * map里选中船只时触发
	 */
	function onSelectShip(id) {
		alert(id);
	}

	// 在map里的工具条上加个按钮
	addToolbarButton("Just a test", "<img src='images/view.png'>", function() {
		var route = {
			"id" : "rou-c8b30ad9-35fe-9b8a-90db-1b9cf571bbda",
			"coords" : [ [ 113.20353124999997, 22.999098137991353 ],
					[ 114.14835546874998, 22.10624694432596 ],
					[ 115.18107031249998, 20.90012155827489 ],
					[ 117.64200781249998, 19.497916642494445 ],
					[ 121.21020026748329, 19.50466356530677 ],
					[ 125.12133307998329, 17.755758440632192 ],
					[ 127.51635261123329, 16.958826829009652 ],
					[ 128.2853955799833, 14.079847347534084 ],
					[ 128.37328620498326, 10.775850313246266 ],
					[ 127.97777839248327, 9.91123603410746 ],
					[ 127.40648932998327, 10.214120833729893 ],
					[ 127.0768994862333, 11.228793566250062 ],
					[ 125.80248542373327, 11.228793566250062 ] ]
		};
		//{"id":"rou-d5758051-92d8-9576-a397-a0ffd03276f0","coords":[[-239.13499644386113,27.775846041522897],[-233.77366831886113,23.094823303357188],[-221.4689808188611,17.24042724337717],[-179.00024303008922,16.0672123489513],[-131.1877430300892,15.220873585766185],[-106.49047740508922,21.63727934218211]]};
		//alert("Hi");
		//! displayRoute 一个函数。回显一条航线
		//!   这样调用与制订新航线同：允许修改、重新选图等（缺省）
		//displayRoute(route.id, route.coords, "测试一下");
		//!   这样调用回显的航线只读，且自定义选图按钮
		console.log(route);
		console.log(route.id);
		console.log(route.coords);
		displayRoute(route.id, route.coords, "测试一下", {
			// 航线只读（不能被修改坐标）
			readonly : true,
			// tooltip的button的标题，缺省是“选图”
			buttonText : "测试",
			// tooltip的button的click事件，缺省是选图
			// 其实下面click事件代码与选图完成同样的功能
			buttonClick : function() {
				alert("Hi");
				// 下行代码，相当于新航线选图功能
				//! getRouteCoverage 一个函数。获取航线覆盖的海图（选图）
				getRouteCoverage(route.id, onRouteCoverage);
			},
		});

		//removeShip("mytest");
	});

	addToolbarButton("定位船只", "<img src='images/find.png'>", function() {
		//! displayShip 一个函数。
		displayShip("mytest", [ 0, 0 ], "起帆号");

		//removeRoute("rou-c8b30ad9-35fe-9b8a-90db-1b9cf571bbda");
	});

	//!!
	//!! ------------------- 函数表 --------------------
	//!!
	//!! #1  onRouteCoverage	- （新）航线选海图时触发
	//!! #2  onSelectShip		- map里选中船只时触发
	//!! #3  addToolbarButton	- 在map里的工具条上加个按钮
	//!! #4  displayRoute		- 回显一条航线
	//!! #5  removeRoute		- 删除一条航线。注，不带参数表示删掉全部航线
	//!! #6  displayShip		- 显示一条船
	//!! #7  removeShip			- 删除一条船。注，不带参数表示删掉全部船
	//!! #8  highlightChart		- 高亮显示海图区
	//!! #9  showDialog			- 在map里显示一个dialog
	//!! #10 getRouteCoverage	- 获取航线覆盖的海图（选图）。两个参数，第一个是航线（必须是已经显示的航线）id；第二个是回调函数（获取海图后调用），该函数原型见上述onRouteCoverage
	//!!
	//!! 注，函数的例子见上
	//!!
	function changePeriod(a) {
		var length = $("tr").length;
		period = $(a).val() / 3 - 1;
		for (var i = 1; i < length; i++) {
			//var oo = $("tr").eq(i).find("select").find("option:selected").text();
			// console.log(oo);
			//$('#gg option:eq(3)').attr('selected','selected');
			var temp = $("tr").eq(i).children().find(
					'select option:eq(' + period + ')');
			temp.attr('selected', 'selected');
			temp.siblings().attr('selected', false);
			//$("#content").children().eq(i).children().find("td").find("select").find("option[text='"+text+"']").attr("selected",true);
		}
	}
</script>

<div id="dialog" style="display: none;">
	<div id="head" style='color: #888;font-size: 12px;padding-bottom: 6px;'>
	</div>
	<div style="height: 250px; width: 700px">
		<table id="charts" class="fancyTable" style="width:700px">
			<tr class="header">
				<td class="csm">序号</td>
				<td>类型</td>
				<td>图号</td>
				<td>图标题</td>
				<td>图比例尺</td>
				<td>周期 <select onchange="changePeriod(this)" class="period">
						<option value="3">3</option>
						<option value="6">6</option>
						<option value="9">9</option>
						<option value="12">12</option>
				</select>
				</td>
				<td id="head_number">张数</td>
				<td>高亮</td>
			</tr>
		</table>


	</div>
</div>

<div id="alert"></div>
<div id="ask"></div>

</html>