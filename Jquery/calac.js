$(document).ready(function() {
    $("button").click(function() {
        var f_num = $("#box_1").val();
        var s_num = $("#box_2").val();
        var opr = $(this).html();
        var expr = f_num + opr + s_num;
        var result = eval(expr);
        $(".result").html(result);
    })
});