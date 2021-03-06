/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 13-5-26
 * Time: 下午10:21
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
//script goes here

    var opt = {
        preset: 'date', //日期
        theme: 'sense-ui', //皮肤样式
        display: 'modal', //显示方式
        mode: 'scroller', //日期选择模式
        dateFormat: 'yy-mm-dd', // 日期格式
        setText: '确定', //确认按钮名称
        cancelText: '取消',//取消按钮名籍我
        dateOrder: 'yymmdd', //面板中日期排列格式
        dayText: '日', monthText: '月', yearText: '年', //面板中年月日文字
        endYear: 2015//结束年份
    };
    $("#sickDate").mobiscroll(opt).date(opt);

    $("#task").on("pageshow",function(event){

        getDoctors();

    });
    $("#contact").on("pageshow",function(event){

        getContactors();

    });
    $("#similiarCase").on("pageshow",function(event){

        initSimiliarCase();

    });
    $("#daily").on("pageshow",function(event){

        initDaily();

    });
    $("#adviceOnline").on("pageshow",function(event){

        initadviceOnline();

    });
    $("#daily").on("pageshow",function(event){

        var myDate = new Date();
        var today = myDate.getFullYear()+"-"+ (myDate.getMonth()+1)+"-"+myDate.getDate();      //获取当前年份(2位)
       $("#dailyLabel").empty();
        $("#dailyLabel").append("今日："+today);

    });
   function initSimiliarCase(){
        if(localStorage.getItem('username')!=null&&localStorage.getItem('username')!="null"&&localStorage.getItem('username')!=""){
            compare();
        }else{
            alert("请先描述你的情况！");
            $.mobile.changePage("#register", { transition: "none", changeHash: false });
        }
   }
    function initDaily(){
        if(localStorage.getItem('username')!=null&&localStorage.getItem('username')!="null"&&localStorage.getItem('username')!=""){

        }else{
            alert("请先描述你的情况！");
            $.mobile.changePage("#register", { transition: "none", changeHash: false });
        }
    }
    function initadviceOnline(){
        if(localStorage.getItem('username')!=null&&localStorage.getItem('username')!="null"&&localStorage.getItem('username')!=""){

        }else{
            alert("请先描述你的情况！");
            $.mobile.changePage("#register", { transition: "none", changeHash: false });
        }
    }
    $("#register").on("pageinit",function(event){
        if(localStorage.getItem("my-1")!=null&&localStorage.getItem("my-1")!="null"&&localStorage.getItem("my-1")!=""&&localStorage.getItem("my-1")!=undefined){
            $("#situation").hide();
            $("#sickContent").show();
            $("#sickContent").empty();
            $("#sickContent").append("症状：").append(localStorage.getItem("sickContent"));
            $("#description").show();
            $("#description").empty();
            $("#description").append(localStorage.getItem("description"));
            $("#sickDesc").show();
            $("#sickDesc").empty();
            $("#sickDesc").append("详情：").append(localStorage.getItem("description"));
            $("#sickContent").click(function () {
                $.mobile.changePage("#mysituaton", { transition: "none", changeHash: false });
            });
        }
    });
    $("#survey-1").on("pageinit",function(){
        setSurvey();
    });
    $("#survey-2").on("pageinit",function(){
       if(localStorage.getItem('s4') != undefined){
            $('input[name="s4"][value="' + localStorage.getItem('s4') + '"]').prop('checked', true).checkboxradio("refresh");
        }
        if(localStorage.getItem('s5') != undefined){
            $('input[name="s5"][value="' + localStorage.getItem('s5') + '"]').prop('checked', true).checkboxradio("refresh");
        }
    });
    $("#survey-3").on("pageinit",function(){
        if(localStorage.getItem('s6') != undefined){
            $('input[name="s6"][value="' + localStorage.getItem('s6') + '"]').prop('checked', true).checkboxradio("refresh");
        }
        if(localStorage.getItem('s7') != undefined){
            $('input[name="s7"][value="' + localStorage.getItem('s7') + '"]').prop('checked', true).checkboxradio("refresh");
        }
    });
    $("#survey-4").on("pageinit",function(){
        if(localStorage.getItem('s8') != undefined){
            $('input[name="s8"][value="' + localStorage.getItem('s8') + '"]').prop('checked', true).checkboxradio("refresh");
        }
        if(localStorage.getItem('s9') != undefined){
            $('input[name="s9"][value="' + localStorage.getItem('s9') + '"]').prop('checked', true).checkboxradio("refresh");
        }
    });
    $("#survey-5").on("pageinit",function(){
        if(localStorage.getItem('s10') != undefined){
            $('input[name="s10"][value="' + localStorage.getItem('s10') + '"]').prop('checked', true).checkboxradio("refresh");
        }
        if(localStorage.getItem('s11') != undefined){
            $('input[name="s11"][value="' + localStorage.getItem('s11') + '"]').prop('checked', true).checkboxradio("refresh");
        }
    });
  function setSurvey6(){
        if (localStorage.getItem('ss12-1') == "true") {
            $("#ss12-1").attr('checked','true') ;
        }
        if (localStorage.getItem('ss12-2') == "true") {
            $("#ss12-2").attr('checked','true') ;
        }
        if (localStorage.getItem('ss12-3') == "true") {
            $("#ss12-3").attr('checked','true') ;
        }
        if (localStorage.getItem('ss12-4') == "true") {
            $("#ss12-4").attr('checked','true') ;
        }
        if (localStorage.getItem('ss12-5') == "true") {
            $("#ss12-5").attr('checked','true') ;
        }
        if (localStorage.getItem('ss12-6') == "true") {
            $("#ss12-6").attr('checked','true') ;
        }
        if (localStorage.getItem('ss12-7') == "true") {
            $("#ss12-7").attr('checked','true') ;
        }
        if (localStorage.getItem('ss12-8') == "true") {
            $("#ss12-8").attr('checked','true') ;
        }
        if (localStorage.getItem('ss12-9') == "true") {
            $("#ss12-9").attr('checked','true') ;
        }
        if (localStorage.getItem('ss12-10') == "true") {
            $("#ss12-10").attr('checked','true') ;
        }
    }



   // $("#birthday").mobiscroll(opt).date(opt);

    if(localStorage.getItem('username')!=null&&localStorage.getItem('username')!="null"&&localStorage.getItem('username')!=""){
        $("#divUserName").show();
        $("#divinputusername").hide();
        $("#username").val(localStorage.getItem('username'));
        $("#userid").val(localStorage.getItem('userId'));
        $("#divUserName").append(localStorage.getItem('username'));
        if( localStorage.getItem('sex')=='woman'){
            $('input[id=woman]').attr('checked','checked');
        }
       $("#birthday").val(localStorage.getItem('birthday'));
        $("#career").val(localStorage.getItem('career'));
        setMySituation();
        setSurvey6();
    } else{
        $("#divUserName").hide();
        $("#username").show();

    }
    function trim(str)
    {
        return str.replace(/(^\s*)|(\s*$)/g,'');
    }

    function changepage() {
        $.mobile.changePage("#index", { transition: "slideup", changeHash: false });
    }

    $("#welcome").bind("pagecreate", function () {

        setTimeout(function () {
            changepage();
        }, 3000);
    });
    $("#submit1").click(function () {
        localStorage.setItem('s1', $("#s1").val());
        localStorage.setItem('s2', $('input[type="radio"][name="s2"]:checked').val());
        localStorage.setItem('s3', $('#s3').val());



        $.mobile.changePage("#survey-2", { transition: "slideup", changeHash: false });
    });
    $('input[type="radio"][name="s4"]').click(function () {
        localStorage.setItem('s4', $('input[type="radio"][name="s4"]:checked').val());
        if ($('input[type="radio"][name="s5"]:checked').val() != undefined) {
            $.mobile.changePage("#survey-3", { transition: "slideup", changeHash: false });
        }
    });
    $('input[type="radio"][name="s5"]').click(function () {
        localStorage.setItem('s5', $('input[type="radio"][name="s5"]:checked').val());
        if ($('input[type="radio"][name="s4"]:checked').val() != undefined) {
            $.mobile.changePage("#survey-3", { transition: "slideup", changeHash: false });
        }
    });
    $('input[type="radio"][name="s6"]').click(function () {
        localStorage.setItem('s6', $('input[type="radio"][name="s6"]:checked').val());
        if ($('input[type="radio"][name="s7"]:checked').val() != undefined) {
            $.mobile.changePage("#survey-4", { transition: "slideup", changeHash: false });
        }
    });
    $('input[type="radio"][name="s7"]').click(function () {
        localStorage.setItem('s7', $('input[type="radio"][name="s7"]:checked').val());
        if ($('input[type="radio"][name="s6"]:checked').val() != undefined) {
            $.mobile.changePage("#survey-4", { transition: "slideup", changeHash: false });
        }
    });
    $('input[type="radio"][name="s8"]').click(function () {
        localStorage.setItem('s8', $('input[type="radio"][name="s8"]:checked').val());
        if ($('input[type="radio"][name="s9"]:checked').val() != undefined) {
            $.mobile.changePage("#survey-5", { transition: "slideup", changeHash: false });
        }
    });
    $('input[type="radio"][name="s9"]').click(function () {
        localStorage.setItem('s9', $('input[type="radio"][name="s9"]:checked').val());
        if ($('input[type="radio"][name="s8"]:checked').val() != undefined) {
            $.mobile.changePage("#survey-5", { transition: "slideup", changeHash: false });
        }
    });
    $('input[type="radio"][name="s10"]').click(function () {
        localStorage.setItem('s10', $('input[type="radio"][name="s10"]:checked').val());
        if ($('input[type="radio"][name="s11"]:checked').val() != undefined) {
            $.mobile.changePage("#survey-6", { transition: "slideup", changeHash: false });
        }
    });
    $('input[type="radio"][name="s11"]').click(function () {
        localStorage.setItem('s11', $('input[type="radio"][name="s11"]:checked').val());
        if ($('input[type="radio"][name="s10"]:checked').val() != undefined) {
            $.mobile.changePage("#survey-6", { transition: "slideup", changeHash: false });
        }
    });
    $("#yyNumber").click(function(){
       if(localStorage.getItem("surveyValue")!=undefined&&localStorage.getItem("surveyValue")!="null"&&localStorage.getItem("surveyValue")!=null){
           calculateValue();
           $.mobile.changePage("#survey-1", { transition: "slideup", changeHash: false });
       }else{
           $.mobile.changePage("#survey-1", { transition: "slideup", changeHash: false });
       }

    });
    function calculateValue() {
        var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
        var value1 = localStorage.getItem('s1');
        s1 = 0;
        if (value1 < 10) {
            s1 = 2;
        }
        if (value1 < 7) {
            s1 = 5;
        }
        if (value1 <= 3) {
            s1 = 10;
        }
        var value2 = localStorage.getItem('s2');
        s2 = 0;
        if (value2 == 1) {
            s2 = 3;
        }
        if (value2 == 3) {
            s2 = 4;
        }
        var value3 = localStorage.getItem('s3');
        s3 = 0;
        if (value3 <= 3) {
            s3 = 10;
        }
        if (value3 <= 5) {
            s3 = 5;
        }
        var value4 = localStorage.getItem('s4');
        s4 = 0;
        if (value4 == 3) {
            s4 = 5;
        }
        if (value4 == 4) {
            s4 = 10;
        }

        var value5 = localStorage.getItem('s5');
        s5 = 0;
        if (value5 == 9 || value5 == 10) {
            s5 = 10;
        }
        if (value5 == 8) {
            s5 = 5;
        }
        var value6 = localStorage.getItem('s6');
        s6 = 0;
        if (value6 == 12) {
            s6 = 1;
        }
        if (value6 == 13) {
            s6 = 3;
        }
        if (value6 = 14) {
            s6 = 5
        }
        var interval = value6 - value5;
        var value00 = 0;
        if (interval <= 2) {
            value00 = 5;
        }
        if (interval <= 1) {
            value00 = 10;
        }
        if (interval == 3) {
            value00 = 3;
        }
        s6 = s6 + value00;
        s7 = parseInt(localStorage.getItem('s7'));
        s8 = parseInt(localStorage.getItem('s8'));
        s9 = parseInt(localStorage.getItem('s9'));
        s10 = parseInt(localStorage.getItem('s10'));
        s11 = parseInt(localStorage.getItem('s11'));
        var xx = 0;
        var checks = "";
        $("input[name='s12']:checkbox").each(function () {
            if (this.checked) {
                xx = xx + 1;
                checks += $(this).val() + "*";
            }
        })
        s12 = xx * 10;
        var sall = (s1 + s2 + s3 + s4+s3*s4 + s5 + s6 + s7 + s8 + s9 + s10 + s12) * s11;
        $('#surveyValue').text(sall);
        localStorage.setItem('checks', checks);
        localStorage.setItem('checkNum', xx);
        localStorage.setItem('surveyValue', sall);
    }


    $("#submit6").click(function () {
        localStorage.setItem('ss12-1', $("#ss12-1").prop("checked"));
        localStorage.setItem('ss12-2', $("#ss12-2").prop("checked"));
        localStorage.setItem('ss12-3', $("#ss12-3").prop("checked"));
        localStorage.setItem('ss12-4', $("#ss12-4").prop("checked"));
        localStorage.setItem('ss12-5', $("#ss12-5").prop("checked"));
        localStorage.setItem('ss12-6', $("#ss12-6").prop("checked"));
        localStorage.setItem('ss12-7', $("#ss12-7").prop("checked"));
        localStorage.setItem('ss12-8', $("#ss12-8").prop("checked"));
        localStorage.setItem('ss12-9', $("#ss12-9").prop("checked"));
        localStorage.setItem('ss12-10', $("#ss12-10").prop("checked"));

        calculateValue();
        submitSurvey();
    });
 function submitSurvey() {
     showLoader();
                $.ajax({
                    type: "get",
                    url: 'http://www.ysrule.com/yy/survey.asp',
                    data: {userId:localStorage.getItem('userId'),
                        s1: localStorage.getItem('s1'), s2: localStorage.getItem('s2'), s3: localStorage.getItem('s3'), s4: localStorage.getItem('s4'), s5: localStorage.getItem('s5'), s6: localStorage.getItem('s6'), s7: localStorage.getItem('s7'), s8: localStorage.getItem('s8'), s9: localStorage.getItem('s9'), s10: localStorage.getItem('s10'), s11: localStorage.getItem('s11'), s12: localStorage.getItem("checks"), surveyValue: localStorage.getItem("surveyValue")
                    },
                    cache: true,
                    dataType: "jsonp",
                    jsonp: "callbackfun",
                    jsonpCallback: "jsonpCallback",
                    success: function (json) {
                        hideLoader();
                    },
                    error: function (error) {
                        hideLoader();
                        alert("网络连接错误！");
                    }
                });


                function jsonpCallback(data)
                {
                    alert(data.message); //
                }
        }


    $("#clearLocal").click(function(){
        localStorage.setItem('userId', null);
        localStorage.setItem('username', null);
        localStorage.setItem('career', null);
        localStorage.setItem('sex',null);
        localStorage.setItem('birthday', null);
        localStorage.setItem('surveyValue', null);
        localStorage.setItem('my-1',null);
    });
    function saveUserInfo(){
        if($("#username").val()!=""||$("#username").val()!=null){
        showLoader();
        $.ajax({
            type: "get",
            url: 'http://www.ysrule.com/yy/reg.asp',
            data: {userId:localStorage.getItem('userId'),description:escape($("#description").val()),username: escape($("#username").val()), career: $("#career").val(), birthday: $("#birthday").val()==""?"0":$("#birthday").val(),t1:localStorage.getItem('my-1'),t2:localStorage.getItem('my-2'),
                t3:localStorage.getItem('my-3'),t4:localStorage.getItem('my-4'),t5:localStorage.getItem('my-5'),t6:localStorage.getItem('my-6'),t7:localStorage.getItem('my-7'),t8:localStorage.getItem('my-8'),t9:localStorage.getItem('my-9'),t10:localStorage.getItem('my-10'),
                sex: $('input[type="radio"][name="sex"]:checked').val(),sickDate:$("#sickDate").val(),sickContent:escape($("#sickContent").html().substring(15).substr(0,$("#sickContent").html().substring(15).length-51))
            },
            cache: true,
            dataType: "jsonp",
            jsonp: "callbackfun",
            jsonpCallback: "jsonpCallback",


            success: function (json) {
                hideLoader();
                var data = json.magazineTab.records;
                $.each(data, function(i, n){
                    localStorage.setItem('userId', n.ID);
                    localStorage.setItem('username', $("#username").val());
                    localStorage.setItem('career', $("#career").val());
                    localStorage.setItem('sex', $('input[type="radio"][name="sex"]:checked').val());
                    localStorage.setItem('birthday', $("#birthday").val());
                    localStorage.setItem('sickDate', $("#sickDate").val());
                    localStorage.setItem('sickContent', $("#sickContent").html());

                });

            },
            error: function (error) {
                hideLoader();
                alert("网络连接错误！");
            }
        });

        }

        function jsonpCallback(data) //回调函数
        {
            alert(data.message); //
        }

    }

    $("#regbtn").click(function () {
            saveUserInfo();

        }

    );
    $("#career").change(function(){
        saveUserInfo();
    });
//    $("#username").blur(function(){
//        saveUserInfo();
//    });
    $("#saveUser").click(function(){
        saveUserInfo();
    });
    $("#adviceHistory").click(function (){
       // $("#messageList").empty();
         getQuestionList();
        $.mobile.changePage("#adviceList", { transition: "slideup", changeHash: false });
        $("#preButton").click(function(){
            $.mobile.changePage("#doctorDetail", { transition: "none", changeHash: false });
        });

    });
    $("#myQuestions").click(function (){
        localStorage.setItem('topic', "我的");
        getMyQuestionList(localStorage.getItem('userId'));
        $.mobile.changePage("#adviceList", { transition: "slideup", changeHash: false });
        $("#preButton").click(function(){
            $.mobile.changePage("#register", { transition: "none", changeHash: false });
        });
    });
    $("#dailyHistory").click(function (){
        localStorage.setItem('topic', "我的");
        $("#dailyListContent").empty();
        getMyDailyList(localStorage.getItem('userId'));
        $.mobile.changePage("#dailyList", { transition: "slideup", changeHash: false });
        $("#preDaily").click(function(){
            $.mobile.changePage("#daily", { transition: "none", changeHash: false });
        });
    });

    $("#dailySubmit").click(function () {
            if($("#dailyText").val().length<6){
                alert("最少6个字！");
                return;
            }
            showLoader();
            $.ajax({
                type: "get",
                url: 'http://www.ysrule.com/yy/saveDaily.asp',
                data: {userId:localStorage.getItem('userId'),username:escape($("#username").val()),content:escape($("#dailyText").val())

                },
                cache: true,
                dataType: "jsonp",
                jsonp: "callbackfun",
                jsonpCallback: "jsonpCallback",


                success: function (json) {
                    hideLoader();
                    $("#dailyText").val("");
                   alert("日记保存成功！");

                },
                error: function (error) {
                    hideLoader();
                    alert("网络连接错误！");
                }
            });


            function jsonpCallback(data) //回调函数
            {
                alert(data.message); //
            }

        }

    );
    $("#submitQuestion").click(function () {
            if($("#questionAsk").val().length<8){
                alert("最少8个字！");
                return;
            }
            showLoader();
            $.ajax({
                type: "get",
                url: 'http://www.ysrule.com/yy/askQuestion.asp',
                data: {userId:localStorage.getItem('userId'),ownerId:localStorage.getItem('userId'),username: escape($("#username").val()), doctorid: localStorage.getItem('currentDoctorID'), content: escape($("#questionAsk").val()),
                    doctorname: escape(localStorage.getItem('currentDoctorName'))
                },
                cache: true,
                dataType: "jsonp",
                jsonp: "callbackfun",
                jsonpCallback: "jsonpCallback",


                success: function (json) {
                    hideLoader();
                    $("#questionAsk").val("");
                    if(json.message=="success"){
                        alert("提问成功！");
                    }else if(json.message=="pay"){
                        alert("免费健康值已经用完，请联系客服，或者写咽炎日记，即刻赚取！");
                    }


                },
                error: function (error) {
                    hideLoader();
                    alert("网络连接错误！");
                }
            });


            function jsonpCallback(data) //回调函数
            {
                alert(data.message); //
            }

        }

    );
 function getDoctors() {
     showLoader();
            $.ajax({
                type: "get",
                url: 'http://www.ysrule.com/yy/doctorView.asp',
                data: {userId:localStorage.getItem('userId')
                },
                cache: true,
                dataType: "jsonp",
                jsonp: "callbackfun",
                jsonpCallback: "jsonpCallback",
                success: function (json) {
                    var ul=$("#listDoctor").empty();
                    var data = json.magazineTab.records;
                    $.each(data, function(i, n){
                        addDoctor(n);

                    });
                    $("#listDoctor").listview("refresh");
                    var ulHomes = $("#listDoctor")[0].children;
                    hideLoader();
                    $(ulHomes).each(function(){
                        $(this).click(function(){
                            localStorage.setItem('currentID', this.id);

                            $.each(data, function(i, n){
                                if(n.ID==localStorage.getItem('currentID')){
                                    localStorage.setItem('currentDoctorName', unescape(n.username));
                                    localStorage.setItem('topic', unescape(n.username)+"医生的");
                                    localStorage.setItem('currentDoctorID', n.ID);
                                    $("#doctorUsername")[0].innerText=unescape(n.username);
                                    $("#doctorTitle")[0].innerText=unescape(n.title);
                                    $("#doctorRemark")[0].innerText=unescape(n.remark);
                                    $("#doctorAddress")[0].innerText=unescape(n.address);
                                }

                            });

                            $.mobile.changePage("#doctorDetail", { transition: "slideup", changeHash: false });
                        });

                    });
                },
                error: function (error) {
                    hideLoader();
                    alert("网络连接错误！");
                }
            });


            function jsonpCallback(data) //回调函数
            {
                alert(data.message); //
            }

        }
    function getContactors() {
        showLoader();
        $.ajax({
            type: "get",
            url: 'http://www.ysrule.com/yy/contactView.asp',
            data: {userId:localStorage.getItem('userId')
            },
            cache: true,
            dataType: "jsonp",
            jsonp: "callbackfun",
            jsonpCallback: "jsonpCallback",
            success: function (json) {
                var ul=$("#contactListDetail").empty();
                var data = json.magazineTab.records;
                $.each(data, function(i, n){
                    addContact(n);

                });
                $("#contactListDetail").listview("refresh");
                hideLoader();
            },
            error: function (error) {
                hideLoader();
                alert("网络连接错误！");
            }
        });


        function jsonpCallback(data) //回调函数
        {
            alert(data.message); //
        }

    }

    $("#submitQuestionMore").click(function () {
            if($("#questionAskMore").val().length<8){
                alert("最少8个字！");
                return;
            }
           showLoader();
            $.ajax({
                type: "get",
                url: 'http://www.ysrule.com/yy/askMoreQuestion.asp',
                data: {userId:localStorage.getItem('userId'),username: escape($("#username").val()), doctorid: localStorage.getItem('currentDoctorID'), content: escape($("#questionAskMore").val()),
                    doctorname: escape(localStorage.getItem('currentDoctorName')),currentChatId:localStorage.getItem('currentChatId'),isDoctor:0
                },
                cache: true,
                dataType: "jsonp",
                jsonp: "callbackfun",
                jsonpCallback: "jsonpCallback",
                success: function (json) {
                    hideLoader();
                    if(json.message=="success"){
                        var msg=new Object();
                        msg.createtime= new Date();
                        msg.content= $("#questionAskMore").val();
                        msg.ID=900000;
                        msg.agreenumber=0;
                        msg.username=$("#username").val();
                        addQuestionDetails(msg);
                        $("div[data-role=content] ul").listview({ defaults: true });
                        $("#questionAskMore").val("");
                    }else if(json.message=="pay"){
                        alert("免费健康值已经用完，请联系客服，或者写咽炎日记，即刻赚取！");
                    }

                },
                error: function (error) {
                    hideLoader();
                    alert("网络连接错误！");
                }
            });


            function jsonpCallback(data) //回调函数
            {
                alert(data.message); //
            }

        }

    );
    function getMyQuestionList(userid) {
        showLoader();
        $.ajax({
            type: "get",
            url: 'http://www.ysrule.com/yy/myQuestionList.asp',
            data: {userId:userid
            },
            cache: true,
            dataType: "jsonp",
            jsonp: "callbackfun",
            jsonpCallback: "jsonpCallback",


            success: function (json) {
                hideLoader();
                var data = json.magazineTab.records;
                $.each(data, function(i, n){
                    addQuestions(n);

                });
                $("div[data-role=content] ul").listview({ defaults: true });
                var uls=$("#divMessageList")[0].children;
                $(uls).each(function(){
                        var ulHomes = this.children;

                $(ulHomes).each(function(){
                    if(this.id!=""){
                    $(this).click(function(){
                         $("#messageDetails").empty();
                         getmessageDetail(this.id);
                        localStorage.setItem('currentChatId', this.id);
                        $.mobile.changePage("#adviceListDetail", { transition: "slideup", changeHash: false });
                    });
                    }

                });
                });

            },
            error: function (error) {
                alert("网络连接错误！");
            }
        });


        function jsonpCallback(data) //回调函数
        {
            alert(data.message); //
        }
    }
    function getHisQuestionList(userid) {
        showLoader();
        $.ajax({
            type: "get",
            url: 'http://www.ysrule.com/yy/hisQuestionList.asp',
            data: {userId:userid,ownerId:localStorage.getItem('userId')
            },
            cache: true,
            dataType: "jsonp",
            jsonp: "callbackfun",
            jsonpCallback: "jsonpCallback",


            success: function (json) {
                hideLoader();
                var data = json.magazineTab.records;
                $.each(data, function(i, n){
                    addQuestions(n);

                });
                $("div[data-role=content] ul").listview({ defaults: true });
                var uls=$("#divMessageList")[0].children;
                $(uls).each(function(){
                    var ulHomes = this.children;

                    $(ulHomes).each(function(){
                        if(this.id!=""){
                            $(this).click(function(){
                                $("#messageDetails").empty();
                                getmessageDetail(this.id);
                                localStorage.setItem('currentChatId', this.id);
                                $.mobile.changePage("#adviceListDetail", { transition: "slideup", changeHash: false });
                            });
                        }

                    });
                });

            },
            error: function (error) {
                alert("网络连接错误！");
            }
        });


        function jsonpCallback(data) //回调函数
        {
            alert(data.message); //
        }
    }
    function getMyDailyList(userid) {
        showLoader();
        $.ajax({
            type: "get",
            url: 'http://www.ysrule.com/yy/myDailyList.asp',
            data: {userId:userid
            },
            cache: true,
            dataType: "jsonp",
            jsonp: "callbackfun",
            jsonpCallback: "jsonpCallback",
            success: function (json) {
                hideLoader();
                var data = json.magazineTab.records;
                if(data.length==0){
                    addDailyBlank();
                }
                $.each(data, function(i, n){
                    addDaily(n);

                });
                $("div[data-role=content] ul").listview({ defaults: true });
            },
            error: function (error) {
                hideLoader();
                alert("网络连接错误！");
            }
        });


        function jsonpCallback(data) //回调函数
        {
            alert(data.message); //
        }

    }
    function getQuestionList() {
        showLoader();
        $("#divMessageList").empty();
        $.ajax({
            type: "get",
            url: 'http://www.ysrule.com/yy/questionList.asp',
            data: {doctorid:localStorage.getItem('currentDoctorID')
            },
            cache: true,
            dataType: "jsonp",
            jsonp: "callbackfun",
            jsonpCallback: "jsonpCallback",


            success: function (json) {
                hideLoader();
                var data = json.magazineTab.records;
                $.each(data, function(i, n){
                    addQuestions(n);

                });
                $("div[data-role=content] ul").listview({ defaults: true });
                var uls=$("#divMessageList")[0].children;
                $(uls).each(function(){
                var ulHomes = this.children;

                $(ulHomes).each(function(){
                    if(this.id!=""){
                        $(this).click(function(){
                            $("#messageDetails").empty();
                            getmessageDetail(this.id);
                            localStorage.setItem('currentChatId', this.id);
                            $.mobile.changePage("#adviceListDetail", { transition: "slideup", changeHash: false });
                        });
                    }

                });
                });

            },
            error: function (error) {
                hideLoader();
                alert("网络连接错误！");
            }
        });


        function jsonpCallback(data) //回调函数
        {
            alert(data.message); //
        }

    }


    function getmessageDetail(parentid){
        showLoader();
        $.ajax({
                type: "get",
                url: 'http://www.ysrule.com/yy/questionListDetails.asp',
                data: {parentid:parentid
                },
                cache: true,
                dataType: "jsonp",
                jsonp: "callbackfun",
                jsonpCallback: "jsonpCallback",


                success: function (json) {
                    hideLoader();
                    $("#divMessageDetails").empty();
                    var data = json.magazineTab.records;
                    $.each(data, function(i, n){
                        addQuestionDetails(n);

                    });
                    $("div[data-role=content] ul").listview();
                },
                error: function (error) {
                    hideLoader();
                    alert("网络连接错误！");
                }
            });


            function jsonpCallback(data) //回调函数
            {
                alert(data.message); //
            }

        }

    $("#compare").click(function () {

            compare();
        }

    );
    $("#dailyRefer").click(function () {

            compare();
        }

    );

    function compare(){
        showLoader();
        $.ajax({
            type: "get",
            url: 'http://www.ysrule.com/yy/searchFolder.asp',
            data: {userId:localStorage.getItem('userId'),username: escape($("#username").val()), career: $("#career").val(), birthday: $("#birthday").val(),t1:localStorage.getItem('my-1'),t2:localStorage.getItem('my-2'),
                t3:localStorage.getItem('my-3'),t4:localStorage.getItem('my-4'),t5:localStorage.getItem('my-5'),t6:localStorage.getItem('my-6'),t7:localStorage.getItem('my-7'),t8:localStorage.getItem('my-8'),t9:localStorage.getItem('my-9'),t10:localStorage.getItem('my-10'),
                sex: $('input[type="radio"][name="sex"]:checked').val(),sickDate:$("#sickDate").val(),sickContent:escape($("#sickContent").html().substring(15).substr(0,$("#sickContent").html().substring(15).length-5))
            },
            cache: true,
            dataType: "jsonp",
            jsonp: "callbackfun",
            jsonpCallback: "jsonpCallback",


            success: function (json) {
                hideLoader();
                $("#listViewUser").empty();
                var data = json.magazineTab.records;
                $.each(data, function(i, n){
                    addLi(n);

                });

                $.mobile.changePage("#similiarCase", { transition: "none", changeHash: false });
                $("#listViewUser").listview("refresh");
                var ulHomes = $("#listViewUser")[0].children;

                $(ulHomes).each(function(){
                    $(this).click(function(){
                        localStorage.setItem('currentID', this.id);
                        $.each(data, function(i, n){
                            if(n.ID==localStorage.getItem('currentID')){
                                $("#detailUsername")[0].innerText=unescape(n.username);
                               // localStorage.setItem('topic', unescape(n.username)+"的");
                                $("#detailSex")[0].innerText=$("#detailSex")[0].innerText.substr(0,3)+(unescape(n.sex)=="man"?"男":"女");
                                $("#detailBirthday")[0].innerText=$("#detailBirthday")[0].innerText.substr(0,3)+(unescape(n.birthday));
                                $("#detailJob")[0].innerText=$("#detailJob")[0].innerText.substr(0,3)+unescape(n.job);
                                var sc=unescape(n.sickContent);
                                $("#detailSickContent")[0].innerText=$("#detailSickContent")[0].innerText.substr(0,3)+sc;
                                $("#detailSickDesc")[0].innerText=$("#detailSickDesc")[0].innerText.substr(0,3)+ unescape(n.description);
                                $("#detailSickDate")[0].innerText=$("#detailSickDate")[0].innerText.substr(0,3)+ages(unescape(n.sickDate))+"年";
                                $("#hisQuestion").unbind();
                                $("#hisQuestion").click(function(){
                                    $("#divMessageList").empty();
                                    getHisQuestionList(localStorage.getItem('currentID'));
                                    $.mobile.changePage("#adviceList", { transition: "slideup", changeHash: false });

                                });
                                $("#hisDaily").unbind();
                                $("#hisDaily").click(function(){
                                    $("#dailyListContent").empty();

                                    getMyDailyList(localStorage.getItem('currentID'));
                                    $.mobile.changePage("#dailyList", { transition: "slideup", changeHash: false });

                                })

                            }

                        });
                        $("#preButton").click(function(){
                            $.mobile.changePage("#userDetail", { transition: "none", changeHash: false });
                        });
                        $("#preDaily").click(function(){
                            $.mobile.changePage("#userDetail", { transition: "none", changeHash: false });
                        });
                        $.mobile.changePage("#userDetail", { transition: "slideup", changeHash: false });
                    });

                });

            },
            error: function (error) {
                hideLoader();
                alert("网络连接错误！");
            }
        });


        function jsonpCallback(data) //回调函数
        {
            alert(data.message); //
        }
    }
    function  ages(str)
    {
        var r =  str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if(r==null)return false;
        var d= new  Date(r[1],r[3]-1,r[4]);
        if(d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4])
        {
            var Y = new Date().getFullYear();
            return (Y-r[1]);
        }
        return "error";
    }
    function addLi(obj) {
        var ul=$("#listViewUser");
        var li= document.createElement("li");
        var href_a = document.createElement("a");
        var head = document.createElement("h2");
        var img = document.createElement("img");
        var sc=unescape(obj.sickContent);
        var sexType=unescape(obj.sex);
        var imageStr;
        if(sexType=="man"){
            imageStr= "images/man.jpg";
        }else{
            imageStr= "images/woman.jpg";
        }
        href_a.innerHTML="<img width='100%' height='100%' src='"+imageStr+"'><h2>"+unescape(obj.username)+"</h2><p>"+sc.substr(0,sc.length)+"</p> <p class='ui-li-aside'>"+unescape(obj.job)+"</p>";
        li.innerHTML= href_a.outerHTML;
        li.id=obj.ID;
        li.class="userListClass";
        ul[0].innerHTML+=li.outerHTML;
    }
    function addDoctor(obj) {
        var ul=$("#listDoctor");
        var li= document.createElement("li");
        var href_a = document.createElement("a");
        var head = document.createElement("h2");
        var img = document.createElement("img");
        href_a.innerHTML="<img class='image'  src='http://www.ysrule.com/yy/pic/"+obj.image+"'><h2>"+unescape(obj.username)+"</h2><p>"+unescape(obj.remark)+"</p> <p class='ui-li-aside'>主治医师</p>";
        li.innerHTML= href_a.outerHTML;
        li.id=obj.ID;
        li.class="userListClass";
        ul[0].innerHTML+=li.outerHTML;
    }
    function addDaily(obj) {
        var div=$("#dailyListContent");

        //" <ul data-role='listview'  class='ui-listview' data-inset='true' role='listbox' >"+
        var listStr= "<ul data-role='listview' id='messageList'  class='ui-listview selector' data-inset='true' role='listbox'><li data-role='list-divider' role='heading' tabindex='0' class='ui-bar-d ' style='white-space:normal;font-size:8pt;font-weight:normal'>"+
            unescape(obj.username)+" 发布于："+unescape(obj.createtime)+
            //"<span class='ui-li-count ui-btn-up-c ui-btn-corner-all' style='right:55px;background: url(images/comments.jpg) no-repeat;padding:3px;padding-left:20px'>"+obj.commentNum+"</span>"+
            "<span onclick='spanClick("+obj.ID+");' class='ui-li-count ui-btn-up-c ui-btn-corner-all' style='right:5px;" +
            "background: url(images/like1.jpg) no-repeat;padding:4px;padding-left:20px'>"+obj.agreenumber+"</span></li>"+
            "<li id='"+obj.ID+"' role='option' tabindex='0' data-theme='c' >"+
            "<a href='#'>"+
            // "<img width='40' height='40' src='images/apple.jpg'/>"+
            "<div style='font-size:11pt;font-weight:normal;white-space:normal;word-break:break-all;'>"+unescape(obj.content)+"</div></a></li></ul>";
        div[0].innerHTML +=listStr;
    }
    function addDailyBlank() {
        var div=$("#dailyListContent");

        //" <ul data-role='listview'  class='ui-listview' data-inset='true' role='listbox' >"+
        var listStr= "<ul data-role='listview' id='messageList'  class='ui-listview selector' data-inset='true' role='listbox'><li data-role='list-divider' role='heading' tabindex='0' class='ui-bar-d ' style='white-space:normal;font-size:8pt;font-weight:normal'>"+

            //"<span class='ui-li-count ui-btn-up-c ui-btn-corner-all' style='right:55px;background: url(images/comments.jpg) no-repeat;padding:3px;padding-left:20px'>"+obj.commentNum+"</span>"+
            "<span  class='ui-li-count ui-btn-up-c ui-btn-corner-all' style='right:5px;" +
            "background:  no-repeat;padding:4px;padding-left:20px'>"+"</span></li>"+
            "<li  role='option' tabindex='0' data-theme='c' >"+
            "<a href='#'>"+
            // "<img width='40' height='40' src='images/apple.jpg'/>"+
            "<div style='font-size:11pt;font-weight:normal;white-space:normal;word-break:break-all;'>还没写日记！</div></a></li></ul>";
        div[0].innerHTML +=listStr;
    }
    function addContact(obj) {
        var ul=$("#contactListDetail");
        var li= document.createElement("li");
        var href_a = document.createElement("a");
        var head = document.createElement("h2");
        var img = document.createElement("img");
        href_a.innerHTML="<img class='image'  src='http://www.ysrule.com/yy/pic/"+obj.userimage+"'><h2>"+unescape(obj.username)+"</h2><p>"+unescape(obj.usercontact)+"</p> <p class='ui-li-aside'>值班护士</p>";
        li.innerHTML= href_a.outerHTML;
        li.id=obj.ID;
        li.class="userListClass";
        ul[0].innerHTML+=li.outerHTML;
    }
    function addQuestions(obj) {
       var div=$("#divMessageList");

       //" <ul data-role='listview'  class='ui-listview' data-inset='true' role='listbox' >"+
       var listStr= "<ul data-role='listview' id='messageList'  class='ui-listview selector' data-inset='true' role='listbox'><li data-role='list-divider' role='heading' tabindex='0' class='ui-bar-d ' style='white-space:normal;font-size:8pt;font-weight:normal'>"+
           unescape(obj.username)+" 提问  "+unescape(obj.createtime)+
           "<span class='ui-li-count ui-btn-up-c ui-btn-corner-all' style='right:55px;background: url(images/comments.jpg) no-repeat;padding:3px;padding-left:20px'>"+obj.commentNum+"</span>"+
           "<span onclick='spanClick("+obj.ID+");' class='ui-li-count ui-btn-up-c ui-btn-corner-all' style='right:5px;" +
           "background: url(images/like1.jpg) no-repeat;padding:4px;padding-left:20px'>"+obj.agreenumber+"</span></li>"+
           "<li id='"+obj.ID+"' role='option' tabindex='0' data-theme='c' >"+
            "<a href='#'>"+
               // "<img width='40' height='40' src='images/apple.jpg'/>"+
                "<div style='font-size:11pt;font-weight:normal;white-space:normal;word-break:break-all;'>"+unescape(obj.content)+"</div></a></li></ul>";
        div[0].innerHTML +=listStr;
    }
    function addQuestionDetails(obj) {
        var div=$("#divMessageDetails");
        var listStr="";
        if(obj.isDoctor!="True"){
            listStr= "<ul data-role='listview'  class='ui-listview' data-inset='true' role='listbox'><li data-role='list-divider' data-theme='b' role='heading' tabindex='0'  class='ui-li ui-li-divider ' style='font-size:8pt;font-weight:normal;white-space:normal;'>"+
                unescape(obj.username)+" 提问于："+unescape(obj.createtime)+
                "<span onclick='spanClick("+obj.ID+");' class='ui-li-count ui-btn-up-e ui-btn-corner-all' style='right:5px;background: url(images/like1.jpg) no-repeat;padding:3px;padding-left:20px'>"+obj.agreenumber+"</span></li>"+
                "<li id='"+obj.ID+"' role='option' tabindex='0' data-theme='c' >"+
                "<a href='#'>"+
                //"<img width='40' height='40' src='images/like.jpg'/>"+
                "<div style='font-size:11pt;font-weight:normal;word-break:break-all;white-space:normal;'>"+unescape(obj.content)+"</div></a></li></ul>";
        }else{
            listStr= "<ul data-role='listview'  class='ui-listview' data-inset='true' role='listbox'><li data-role='list-divider' data-theme='d' role='heading' tabindex='0' class='ui-li ui-li-divider ui-btn-c ui-bar-c ui-btn-up-c' style='font-size:8pt;font-weight:normal'>"+
               // "<img class='imagesmall'  src='http://www.ysrule.com/yy/pic/"+obj.image+"'>"+
                unescape(obj.doctorname)+" 回答于："+unescape(obj.createtime)+
                "<span onclick='spanClick("+obj.ID+");' class='ui-li-count ui-btn-up-c ui-btn-corner-all' style='right:5px;background: url(images/like1.jpg) no-repeat;padding:3px;padding-left:20px'>"+obj.agreenumber+"</span></li>"+
                "<li id='"+obj.ID+"' role='option' tabindex='0' data-theme='c' >"+
                "<a href='#'>"+
                //"<img width='40' height='40' src='images/apple.jpg'/>"+
                "<div style='font-size:11pt;font-weight:normal;word-break:break-all;white-space:normal;'>"+unescape(obj.content)+"</div></a></li></ul>";
        }
        div[0].innerHTML+=listStr;
    }
    function setSurvey(){
        if(localStorage.getItem('s1') != undefined){
            $("#s1").val(localStorage.getItem('s1')).slider("refresh");
        }
        if(localStorage.getItem('s2') != undefined){
            $('input[name="s2"][value="' + localStorage.getItem('s2') + '"]').prop('checked', true).checkboxradio("refresh");
        }
        if(localStorage.getItem('s3') != undefined){
            $("#s3").val(localStorage.getItem('s3')).slider("refresh");
        }
    }
    function setMySituation() {
        if (localStorage.getItem('my-1') == "true") {
             $("#my-1").attr('checked','true') ;
        }
        if (localStorage.getItem('my-2') == "true") {
            $("#my-2").attr('checked','true') ;
        }
        if (localStorage.getItem('my-3') == "true") {
            $("#my-3").attr('checked','true') ;
        }
        if (localStorage.getItem('my-4') == "true") {
            $("#my-4").attr('checked','true') ;
        }
        if (localStorage.getItem('my-5') == "true") {
            $("#my-5").attr('checked','true') ;
        }
        if (localStorage.getItem('my-6') == "true") {
            $("#my-6").attr('checked','true') ;
        }
        if (localStorage.getItem('my-7') == "true") {
            $("#my-7").attr('checked','true') ;
        }
        if (localStorage.getItem('my-8') == "true") {
            $("#my-8").attr('checked','true') ;
        }
        if (localStorage.getItem('my-9') == "true") {
            $("#my-9").attr('checked','true') ;
        }
        if (localStorage.getItem('my-10') == "true") {
            $("#my-10").attr('checked','true') ;
        }

    }
    function getmysitution() {
        var txt = '';
        if (localStorage.getItem('my-1') == "true") {
            txt = txt + trim($("#my-1").prev('label').text());
        }
        if (localStorage.getItem('my-2') == "true") {
            txt =txt+',' + trim($("#my-2").prev('label').text());
        }
        if (localStorage.getItem('my-3') == "true") {
            txt = txt+',' + trim($("#my-3").prev('label').text());
        }
        if (localStorage.getItem('my-4') == "true") {
            txt = txt+',' + trim($("#my-4").prev('label').text());
        }
        if (localStorage.getItem('my-5') == "true") {
            txt = txt+',' +trim( $("#my-5").prev('label').text());
        }
        if (localStorage.getItem('my-6') == "true") {
            txt = txt+',' + trim($("#my-6").prev('label').text());
        }
        if (localStorage.getItem('my-7') == "true") {
            txt = txt+',' + trim($("#my-7").prev('label').text());
        }
        if (localStorage.getItem('my-8') == "true") {
            txt = txt+',' + trim($("#my-8").prev('label').text());
        }
        if (localStorage.getItem('my-9') == "true") {
            txt = txt+',' + trim($("#my-9").prev('label').text());
        }
        if (localStorage.getItem('my-10') == "true") {
            txt = txt+',' + trim($("#my-10").prev('label').text());
        }
        $("#sickContent").append('从' + $("#sickDate").val() + '开始： ' + txt + '<p style="color:#6DCFC0;text-align:right;">点击修改</p>');
        $("#sickDesc").show();
        $("#sickDesc").empty();
        $("#sickDesc").append("详细描述：").append(localStorage.getItem('description'));
    }

    $("#submitmy").click(function () {

        //alert($("#my-1").prev('label').text());
        localStorage.setItem('my-1', $("#my-1").prop("checked"));
        localStorage.setItem('my-2', $("#my-2").prop("checked"));
        localStorage.setItem('my-3', $("#my-3").prop("checked"));
        localStorage.setItem('my-4', $("#my-4").prop("checked"));
        localStorage.setItem('my-5', $("#my-5").prop("checked"));
        localStorage.setItem('my-6', $("#my-6").prop("checked"));
        localStorage.setItem('my-7', $("#my-7").prop("checked"));
        localStorage.setItem('my-8', $("#my-8").prop("checked"));
        localStorage.setItem('my-9', $("#my-9").prop("checked"));
        localStorage.setItem('my-10', $("#my-10").prop("checked"));
        localStorage.setItem('sickDate', $("#sickDate").text());
        localStorage.setItem('description',$("#description").val());
        $("#situation").hide();
        //alert($("#my-1").prev('label').text());
        $("#sickContent").show();
        $("#sickContent").empty();
        getmysitution();
        $("#sickContent").click(function () {
            $.mobile.changePage("#mysituaton", { transition: "none", changeHash: false });
        });
       saveUserInfo();
        $.mobile.changePage("#register", { transition: "none", changeHash: false });
    });


    $("#submit3").click(function () {
        localStorage.setItem('s7', $('input[type="radio"][name="s7"]:checked').val());
        localStorage.setItem('phoneNumber', $('#phoneNumber').val());
        // $.mobile.changePage( "#survey-3", { transition: "slideup", changeHash: false });


        $.ajax({
            type: "get",
            url: 'http://www.ysrule.com/ysrule/survey.asp',
            data: {id: 10, code: $("#phoneNumber").val()},
            cache: true,
            dataType: "jsonp",
            jsonp: "callbackfun",
            jsonpCallback: "jsonpCallback",


            success: function (json) {
                alert(json.message);
            },
            error: function (error) {
                alert("erroe1");
            }
        });


        function jsonpCallback(data) //回调函数
        {
            alert(data.message); //
        }

    });
    $('input[type="radio"][name="reason"]').click(function () {
        localStorage.setItem('reason', $('input[type="radio"][name="reason"]:checked').val());
            $.mobile.changePage("#surveyResult", { transition: "slideup", changeHash: false });
    });
    $("#submitques").click(function () {
        if (!localStorage.getItem('phoneNumber')) {
            alert(1);
        } else {
            $.ajax({
                type: "get",
                url: 'http://www.ysrule.com/ysrule/question.asp',
                data: {id: 10, code: localStorage.getItem('phoneNumber'), question: $('#question').val()},
                cache: true,
                dataType: "jsonp",
                jsonp: "callbackfun",
                jsonpCallback: "jsonpCallback",
                success: function (json) {
                    if (json.message == 0) {
                        alert('提交成功！');
                    }
                },
                error: function (error) {
                    alert("error");
                }
            });
        }


        function jsonpCallback(data) //回调函数
        {
            alert(data.message); //
        }


    });

});