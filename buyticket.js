/*
 * 这是一个 JavaScript 代码片段速记器。
 *
 * 输入一些 JavaScript，然后可点击右键或从 执行 菜单中选择：
 * 1. 运行 对选中的文本求值(eval) (Ctrl+R)，
 * 2. 查看 对返回值使用对象查看器 (Ctrl+I)，
 * 3. 显示 在选中内容后面以注释的形式插入返回的结果。 (Ctrl+L)
 */
(function (window, $) {
    var ticketid = 'ticket_550000K37671';
    var queryTicketid = 'query_ticket';
    //乘车人在联系人第几个
    var riderOrder = 1;
    var queryInterval = 3000;
    var preBuyTimeout = 500;
    var queryTicketTimes = 20; //脚本执行次数
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
