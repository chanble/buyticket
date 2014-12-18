/*
 * 由于我是一个linux用户，所以360,猎豹之类浏览器不能用，所以自己写一个小的抢票脚本
 * 这是一个简单的12306强票脚本
 * 功能：
 * 可以自动查询，预订。
 *
 * 缺陷：
 * 1,首先有好多，以下是笔者认为比较致命的
 * 2,预订结束后不能自动选择乘车人。
 * 3, 自动弹出浏览器
 *
 */
(function (window, $) {
    var ticketid = 'ticket_550000K37671';
    var queryTicketid = 'query_ticket';
    var queryTicketTimes = 2; //脚本执行次数
    var curQueryTicketTimes = 0; //当前执行的次数
    var preBuyTicketTimes = 20; //点击预订总次数
    var queryTicket = function () {
        if (curQueryTicketTimes < queryTicketTimes) {
            //console.log('queryTicket');
            $('#' + queryTicketid).click();
            var clickPrebuy = function () {
                //console.log('clickPrebuy');
                var calltimes = 0;
                var clickPrebuy1 = function () {
                    //console.log('clickPrebuy1');
                    if (calltimes < preBuyTicketTimes) {
                        var preBuyTicket = $('#' + ticketid + ' td.no-br a');
                        if (preBuyTicket.length > 0) {
                            preBuyTicket.click();
                        } else {
                            setTimeout(clickPrebuy1, 100);
                        }
                    } else {
                        queryTicket();
                    }
                    calltimes++;
                }
                return clickPrebuy1;
            };
            clickPrebuy() ();
        }
        curQueryTicketTimes++;
    };
    queryTicket();
}) (window, jQuery);
