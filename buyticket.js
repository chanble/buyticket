
/*
 * 这是一个抢票js，
 * 本js只适用有编程基础的人使用。
 * 用法说明：
 * 1,登录上www.12306.cn,到查询车票页(ihttps://kyfw.12306.cn/otn/leftTicket/init),
 * 2,选择自己好自己要买的日期和出发地和目的地,
 * 3,找到自己要购买的车票的那个td的id，类似ticket_5000K28243
 *
 */
(function(window, $){
	var ticketid = 'ticket_550000K15200';
	var queryTicketid = 'query_ticket';
	//乘车人在联系人第几个
	var riderOrder = 2;
	var queryInterval = 1000;
	var preBuyTimeout = 1000;
	var queryTicket = function(){
		$("#" + queryTicketid).click();
		var preBuyTicket = $("#"+ticketid+' td.no-br a');
		if(preBuyTicket.length > 0){
			setTimeout(function(){
				preBuyTicket.click();
			}, queryInterval);
		}
		var rider = $('#normalPassenger_' + riderOrder);
		if(rider.length > 0){
			rider.click();
			$('#randCode').focus();
			//弹出浏览器
		}else{
			setTimeout(queryTicket, preBuyTimeout);
		}
	};
	queryTicket();
})(window, jQuery);
