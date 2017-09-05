var toOpenDialog = true;
var chartlist;
var iroute;
var temo;
var Idlist;
var dialogOpts1, dialogOpts2;
var dingdanUrl;// 区别是 下单还是用来更新
var oldLinename;
var period = 0;
var selectType = 'AVCS';
var orderstatus;
/**
 * 航线选海图时触发
 */
function onSelectSeachart(route, list) {
	alert(123);
	$("table tr:eq(0)").siblings().remove();
	if (!toOpenDialog) {
		var tmp = j2s(route);
		var obj = JSON.parse(tmp);
		var id = obj['id'];
		removeRoute(id);
	}
	if (toOpenDialog) {
		if (route == undefined)
			route = iroute;
		else
			iroute = route;
		if (list == undefined)
			list = chartlist;
		else
			chartlist = list;

		// 查看route
		console.log(j2s(route));

		if (selectType == 'ARCS') {
			$('#type').find('option:eq("1")').attr('selected', 'selected');
		//	$('#type').attr('disabled', 'disabled');
			$('#head_number').show();
		} else {
		//	$('#type').attr('disabled', 'disabled');
			$('#head_number').hide();
		}
		var table = "";
		var index = 1;
		$
				.each(
						chartlist,
						function(i, c) {// console.log(c.chartType);
							if (selectType == c.chartType && c.chartTitle != '') {
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
								table += "<td style='text-align: center;'><select name='period' id='period' style='width:60px;'>"
								for (var i = 1; i <= 12; i++) {
									if (i - 1 == period) {
										table += '<option value="' + i
												+ '" selected="selected">' + i
												+ '</option>';
									} else {
										table += '<option value="' + i + '">'
												+ i + '</option>';
									}
								}
								table += "</select></td>";
								if (selectType == 'ARCS') {
									table += "<td style='text-align: center;'><select name='period' id='period' style='width:60px;'>"
									for (i = 1; i <= 12; i++) {
										if (i - 1 == period) {
											table += '<option value="' + i
													+ '" selected="selected">'
													+ i + '</option>';
										} else {
											table += '<option value="' + i
													+ '">' + i + '</option>';
										}
									}
									table += "</select></td>";

								}
								table += "<td style='text-align: center;width:200px;'><input type='checkbox' name='checkbox' value='"
										+ c.chartNumber
										+ "' onclick='highlightChart(\""
										+ c.chartType
										+ "\", \""
										+ c.chartNumber
										+ "\", $(this).prop(\"checked\"))'></a></td>";
								table += "</tr>";
							}
						});
		$("#charts").show();
		$("#charts").append(table);
		if (dialogOpts1 == undefined) {
			dialogOpts1 = {
				title : "航线所经海图",
				resizable : true,
				width : 750,
				id : "route",
				buttons : {
					'下单' : function() {
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

		$('#charts').fixedHeaderTable({
			footer : false,
			altClass : 'odd',
		});
 
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
		data += '{"chartNo":"' + chartNumber + '","chartNameCn":"' + title
		+ '","chartType":"' + type + '","rateRuler":"' + bili
		+ '","versionUnit":"' + "" + '","version":"' + ""
		+ '","period":"' + period + '"},';
	}

	data = data.substring(0, data.length - 1);
	data += ']';

	console.log(data);
	$.ajax({
		url : '../CommitData',
		type : 'post',
		dataType : 'json',
		data : {
			'data' : data,
			'linename' : linename,
			'oldLinename' : oldLinename,
			'line' : line,
			'type' : selectType
		},
		success : function(map) {
			alert(map['result']);

			$("#dialog").dialog('close');
			$("#ask").dialog('close');
		}
	})
}

function changeType() {
	$("table tr:eq(0)").siblings().remove();
	selectType = $("#type").val();
	period = 0;
	$("tr").eq(0).children().eq(5).find('select option:eq(' + 0 + ')').attr(
			'selected', 'selected');
	if ($("#type").val() != 'AVCS') {
		$('#head_number').show();
	} else {
		$('#head_number').hide();
	}
	var table = "";
	validateLine(oldLinename);
	onSelectSeachart();

}
 