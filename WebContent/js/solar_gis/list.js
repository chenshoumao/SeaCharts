var toOpenDialog = true;
var chartlist;
var iroute;
var temo;
var Idlist;
var dialogOpts1, dialogOpts2;
var dingdanUrl;// 区别是 生成航线还是用来更新
var oldLinename;
var period = 0;
var selectType = 'AVCS Units Coastal';
var orderstatus;



/**
 * 航线选海图时触发
 */
function onRouteCoverage(route, chartlist) {
	if (route == undefined)
		route = iroute;
	else
		iroute = route;
	showChartlist({title: "航线所经海图", id: "route"}, chartlist);
}

function showChartlist(dlginfo, list) {
	
	$("table tr:eq(0)").siblings().remove();
	
	
		if (list == undefined)
			list = chartlist;
		else
			chartlist = list;
		
		// alert("selectType " + selectType);
		if (selectType == 'ARCS') {
			$('#type').find('option:eq("1")').attr('selected', 'selected');
			$('#type').attr('disabled', 'disabled');
			$('#head_number').show();
		} else {
			$('#type').attr('disabled', 'disabled');
			$('#head_number').hide();
		}
		var table = "";
		console.log(chartlist);
		var index = 1;
		$
				.each(
						chartlist,
						function(i, c) {// console.log(c.chartType);
							 
								table += "<tr>";
								table += "<td style='text-align: center;'>"
										+ index++ + "</td>";
								table += "<td style='text-align: center;' class='"
										+ c.chartType
										+ "'>"
										+ c.chartType
										+ "</td>";
								table += "<td id='" + c.chartNumber + "'>"
										+ c.chartNumber + "</td>";
								table += "<td>" + c.chartTitle + "</td>";
								table += "<td>" + c.chartScale + "</td>";
								table += "<td style='text-align: center;'><select name='period' id='period' onchange='changeItPeriod(this)' style='width:60px;'>"
								for (var i = 1; i <= 4; i++) {
									if (i - 1 == period) {
										table += '<option value="' + i*3
												+ '" selected="selected">' + i*3
												+ '</option>';
									} else {
										table += '<option value="' + i*3 + '">'
												+ i*3 + '</option>';
									}
								}
								table += "</select></td>";
							/*	var priceList = c.chartPrices;
								 
								table += "<td style='display:none;' class='price3'>"+priceList[0].RRP+"</td>";
								table += "<td style='display:none;' class='price2' >"+priceList[1].RRP+"</td>";
								table += "<td style='display:none;' class='price1'>"+priceList[2].RRP+"</td>";
								table += "<td class='price0'>"+priceList[3].RRP+"</td>";
								 */
								
								table += "<td style='text-align: center;'><input type='checkbox' onclick='highlightChart(\"" + c.id + "\", $(this).prop(\"checked\"))'></a></td>";
							 
								table += "</tr>";
							 
						});
		 
		 $("#dialog").show();
		 $("#charts").show();
		 $("#period").show();
		 
		 $("#charts").append(table);
		if (dialogOpts1 == undefined) {
			dialogOpts1 = {
				title : dlginfo.title,
				resizable : true,
				width : 750,
				id : dlginfo.id,
				buttons : {
					'生成航线' : function() {
						xiadan();

					},
					"取消" : function() {
						$("#dialog").dialog('close');
						$("#charts").hide();
					}
				}
			};
		}
		$("#dialog").dialog(dialogOpts1);
		dialogOpts1 = undefined;

		$("#" + dlginfo.id + "_tb").fixedHeaderTable({
			footer : false,
			altClass : 'odd',
		});

		
}


//当修改某一个特定的图的周期时触发价格修改
function changeItPeriod(a) {

	var itPeriod = $(a).val() / 3 - 1;
	for (var j = 0; j < 4; j++) {
		if (j == itPeriod) {
			$(a).parent().parent().find('.price' + itPeriod).show();
			$(a).parent().parent().find('.price' + itPeriod).attr("style","");
		} else
			$(a).parent().parent().find('.price' + j).hide();
	}

}


function xiadan() {
	$("#dialog").dialog('close');
	$("#ask").empty();
	var info = '<div><label>请输入航线名：<input id="linename"></label></div>';
	var dialogOpts = {
		title : "信息完善",
		buttons : {
			"确定" : function() {
				confirmToBuy($('#linename').val())
			},
			"取消" : function() {
				$("#ask").dialog('close');
			}
		}
	};
	$("#ask").append(info);
	$("#ask").dialog(dialogOpts);
	// console.log(data);
}
 
function confirmToBuy(linename) {
	console.log(j2s(iroute));
	// alert(info);
	var line = j2s(iroute);
	var data = '[';
	var length = $("tr").length;

	for (var i = 1; i < length; i++) {
		var period = $('tr').eq(i).children().eq(5).find('select').val();
		var number = $('tr').eq(i).children().eq(6).find('select').val();
		if (number == undefined)
			number = 1;
		var type = $('tr').eq(i).children().eq(1).html();
		var chartNumber = $('tr').eq(i).children().eq(2).html();
		var title = $('tr').eq(i).children().eq(3).html();
		var bili = $('tr').eq(i).children().eq(4).html();
	/*	var price = '';

		for (var j = 0; j < 4; j++) {
			var priceItem = $('tr').eq(i).find(".price" + j);
			if (priceItem.attr('style') == "") {
				price = priceItem.html();
			}
		}*/
		data += '{"chartNo":"' + chartNumber + '","chartNameCn":"' + title
		+ '","chartType":"' + type + '","rateRuler":"' + bili
		+ '","versionUnit":"' + "" + '","version":"' + ""
		+ '","period":"' + period   + '"},';
	}

	data = data.substring(0, data.length - 1);
	data += ']';

	console.log(data);
	$.ajax({
		url : '../CommitData',
		type : 'post',
	 
		data : {
			'data' : data,
			'linename' : linename,
			'oldLinename' : oldLinename,
			'line' : line,
			'type' : selectType
		},
		success : function(map) {
			var tmp = JSON.parse(map);
			if(tmp['state']){
				alert('提交成功！');
			}

			$("#dialog").dialog('close');
			$("#ask").dialog('close');
		}
	})
}

// 根据订单号获取航线信息
function getLineByOrderNumber(ordernumber) {
	var data = thisURL.split('?')[1];
	var ordernumber = data.split('=')[1];

	$.ajax({
		url : '/SeaCharts/ShowLine',
		type : 'post',
		dataType : 'json',
		data : { 
			'ordernumber' : ordernumber
		},
		success : function(map) {
			console.log(map);
			// 既然是根据订单来回显航线 最多也只是一次循环而已
		 
				var line = map.coords;
				console.log(line.coords);
				 
		}
		
	})
}


