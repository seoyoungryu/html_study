$(document).ready(function () {

    $("input").keydown(function (key) {
        if (key.keyCode == 13) {

            event.preventDefault();

            Search();
        } 
    });
    $("#mark").click(function(){
        fn_test();
    });
    initialize();

    // 단일/복합
    $('#compound').bind('click', function (e) {
        $("#compound").prop("checked", true);
        $("#compound1").prop("checked", false);
        $("#compound2").prop("checked", false);
    });

    $('#compound1').bind('click', function (e) {
        $("#compound").prop("checked", false);
        $("#compound1").prop("checked", true);
        $("#compound2").prop("checked", false);
    });

    $('#compound2').bind('click', function (e) {
        $("#compound").prop("checked", false);
        $("#compound1").prop("checked", false);
        $("#compound2").prop("checked", true);
    });

    // 마크
    $('#mark').bind('click', function (e) {
        getMarkCodeImg($("input[type=checkbox][name=use_yn]:checked").val(), $("input[type=checkbox][name=group_code]:checked").val(), 1);
    }); 

    $('#use_y').bind('click', function (e) {
        $("#use_y").prop("checked", true);
        $("#use_all").prop("checked", false);

        getMarkCodeImg($("input[type=checkbox][name=use_yn]:checked").val(), $("input[type=checkbox][name=group_code]:checked").val(), 1);
    });

    $('#use_all').bind('click', function (e) {
        $("#use_y").prop("checked", false);
        $("#use_all").prop("checked", true);

        getMarkCodeImg($("input[type=checkbox][name=use_yn]:checked").val(), $("input[type=checkbox][name=group_code]:checked").val(), 1);
    });

    $('#group_codecom').bind('click', function (e) {
        $("#group_codecom").prop("checked", true);
        $("#group_codebody").prop("checked", false);
        $("#group_codeaniplant").prop("checked", false);
        $("#group_codeetc").prop("checked", false);
        $("#group_codeall").prop("checked", false);

        getMarkCodeImg($("input[type=checkbox][name=use_yn]:checked").val(), $("input[type=checkbox][name=group_code]:checked").val(), 1);
    });

    $('#group_codebody').bind('click', function (e) {
        $("#group_codecom").prop("checked", false);
        $("#group_codebody").prop("checked", true);
        $("#group_codeaniplant").prop("checked", false);
        $("#group_codeetc").prop("checked", false);
        $("#group_codeall").prop("checked", false);

        getMarkCodeImg($("input[type=checkbox][name=use_yn]:checked").val(), $("input[type=checkbox][name=group_code]:checked").val(), 1);
    });

    $('#group_codeaniplant').bind('click', function (e) {
        $("#group_codecom").prop("checked", false);
        $("#group_codebody").prop("checked", false);
        $("#group_codeaniplant").prop("checked", true);
        $("#group_codeetc").prop("checked", false);
        $("#group_codeall").prop("checked", false);

        getMarkCodeImg($("input[type=checkbox][name=use_yn]:checked").val(), $("input[type=checkbox][name=group_code]:checked").val(), 1);
    });

    $('#group_codeetc').bind('click', function (e) {
        $("#group_codecom").prop("checked", false);
        $("#group_codebody").prop("checked", false);
        $("#group_codeaniplant").prop("checked", false);
        $("#group_codeetc").prop("checked", true);
        $("#group_codeall").prop("checked", false);

        getMarkCodeImg($("input[type=checkbox][name=use_yn]:checked").val(), $("input[type=checkbox][name=group_code]:checked").val(), 1);
    });

    $('#group_codeall').bind('click', function (e) {
        $("#group_codecom").prop("checked", false);
        $("#group_codebody").prop("checked", false);
        $("#group_codeaniplant").prop("checked", false);
        $("#group_codeetc").prop("checked", false);
        $("#group_codeall").prop("checked", true);

        getMarkCodeImg($("input[type=checkbox][name=use_yn]:checked").val(), $("input[type=checkbox][name=group_code]:checked").val(), 1);
    });

    // 제형
    $('#formcode').bind('click', function (e) {
        $("#formcode").prop("checked", true);
        $("#formcode1").prop("checked", false);
        $("#formcode2").prop("checked", false);
        $("#formcode3").prop("checked", false);
        $("#formcode4").prop("checked", false);
    });

    $('#formcode1').bind('click', function (e) {
        $("#formcode").prop("checked", false);
        $("#formcode1").prop("checked", true);
        $("#formcode2").prop("checked", false);
        $("#formcode3").prop("checked", false);
        $("#formcode4").prop("checked", false);
    });

    $('#formcode2').bind('click', function (e) {
        $("#formcode").prop("checked", false);
        $("#formcode1").prop("checked", false);
        $("#formcode2").prop("checked", true);
        $("#formcode3").prop("checked", false);
        $("#formcode4").prop("checked", false);
    });

    $('#formcode3').bind('click', function (e) {
        $("#formcode").prop("checked", false);
        $("#formcode1").prop("checked", false);
        $("#formcode2").prop("checked", false);
        $("#formcode3").prop("checked", true);
        $("#formcode4").prop("checked", false);
    });

    $('#formcode4').bind('click', function (e) {
        $("#formcode").prop("checked", false);
        $("#formcode1").prop("checked", false);
        $("#formcode2").prop("checked", false);
        $("#formcode3").prop("checked", false);
        $("#formcode4").prop("checked", true);
    });


    // 허가사항 내 검색
    $('#doctypediv .dropdown-menu li > a').bind('click', function (e) {
        var html = $(this).html();
        $('#doctypediv button.dropdown-toggle').html(html + ' <span class="caret"></span>');
    });

    // 식약처 분류
    $('#meftdivnolv1div .dropdown-menu li > a').bind('click', function (e) {
        var html = $(this).html();
        $('#meftdivnolv1div button.dropdown-toggle').html(html + ' <span class="caret"></span>');
    });

    // ATC 코드
    /* $('#atccodelv1div .dropdown-menu li > a').bind('click', function (e) {
        var html = $(this).html();
        $('#atccodelv1div button.dropdown-toggle').html(html + ' <span class="caret"></span>');
    }); */

    // 제형
    $('#gnlnmcdfomntpcd .dropdown-menu li > a').bind('click', function (e) {
        var html = $(this).html();
        $('#gnlnmcdfomntpcd button.dropdown-toggle').html(html + ' <span class="caret"></span>');
    }); 

    // 분할선 앞
    $('#linef').bind('click', function (e) {
        $("#linef").prop("checked", true);
        $("#linef1").prop("checked", false);
        $("#linef2").prop("checked", false);
        $("#linef3").prop("checked", false);
        $("#linef4").prop("checked", false);
    });

    $('#linef1').bind('click', function (e) {
        $("#linef").prop("checked", false);
        $("#linef1").prop("checked", true);
        $("#linef2").prop("checked", false);
        $("#linef3").prop("checked", false);
        $("#linef4").prop("checked", false);
    });

    $('#linef2').bind('click', function (e) {
        $("#linef").prop("checked", false);
        $("#linef1").prop("checked", false);
        $("#linef2").prop("checked", true);
        $("#linef3").prop("checked", false);
        $("#linef4").prop("checked", false);
    });

    $('#linef3').bind('click', function (e) {
        $("#linef").prop("checked", false);
        $("#linef1").prop("checked", false);
        $("#linef2").prop("checked", false);
        $("#linef3").prop("checked", true);
        $("#linef4").prop("checked", false);
    });

    $('#linef4').bind('click', function (e) {
        $("#linef").prop("checked", false);
        $("#linef1").prop("checked", false);
        $("#linef2").prop("checked", false);
        $("#linef3").prop("checked", false);
        $("#linef4").prop("checked", true);
    });

    // 분할선 뒤
    $('#lineb').bind('click', function (e) {
        $("#lineb").prop("checked", true);
        $("#lineb1").prop("checked", false);
        $("#lineb2").prop("checked", false);
        $("#lineb3").prop("checked", false);
        $("#lineb4").prop("checked", false);
    });

    $('#lineb1').bind('click', function (e) {
        $("#lineb").prop("checked", false);
        $("#lineb1").prop("checked", true);
        $("#lineb2").prop("checked", false);
        $("#lineb3").prop("checked", false);
        $("#lineb4").prop("checked", false);
    });

    $('#lineb2').bind('click', function (e) {
        $("#lineb").prop("checked", false);
        $("#lineb1").prop("checked", false);
        $("#lineb2").prop("checked", true);
        $("#lineb3").prop("checked", false);
        $("#lineb4").prop("checked", false);
    });

    $('#lineb3').bind('click', function (e) {
        $("#lineb").prop("checked", false);
        $("#lineb1").prop("checked", false);
        $("#lineb2").prop("checked", false);
        $("#lineb3").prop("checked", true);
        $("#lineb4").prop("checked", false);
    });

    $('#lineb4').bind('click', function (e) {
        $("#lineb").prop("checked", false);
        $("#lineb1").prop("checked", false);
        $("#lineb2").prop("checked", false);
        $("#lineb3").prop("checked", false);
        $("#lineb4").prop("checked", true);
    });

    // 모양
    $('#shape').bind('click', function (e) {
        $("#shape").prop("checked", true);
        $("#shape1").prop("checked", false);
        $("#shape2").prop("checked", false);
        $("#shape3").prop("checked", false);
        $("#shape4").prop("checked", false);
        $("#shape5").prop("checked", false);
        $("#shape6").prop("checked", false);
        $("#shape7").prop("checked", false);
        $("#shape8").prop("checked", false);
        $("#shape9").prop("checked", false);
        $("#shape10").prop("checked", false);
        $("#shape11").prop("checked", false);

        $("#shapeetc").hide();
        $("#shape12").prop("checked", false);
        $("#shape13").prop("checked", false);
        $("#shape14").prop("checked", false);
        $("#shape15").prop("checked", false);
        $("#shape16").prop("checked", false);
        $("#shape17").prop("checked", false);
        $("#shape18").prop("checked", false);
        $("#shape19").prop("checked", false);
        $("#shape20").prop("checked", false);
        $("#shape21").prop("checked", false);
        $("#shape22").prop("checked", false);
        $("#shape23").prop("checked", false);
        $("#shape24").prop("checked", false);
        $("#shape25").prop("checked", false);
        $("#shape26").prop("checked", false);
        $("#shape27").prop("checked", false);
        $("#shape28").prop("checked", false);
        $("#shape29").prop("checked", false);
        $("#shape30").prop("checked", false);
        $("#shape31").prop("checked", false);
        $("#shape32").prop("checked", false);
    });

    $('#shape1').bind('click', function (e) {
        $("#shape").prop("checked", false);

        if (true == $("#shape1").prop("checked")) {
            $("#shape2").prop("checked", false == $("#shape2").is("checked") ? true : false);
        }
    });

    $('#shape2').bind('click', function (e) {
        $("#shape").prop("checked", false);

        if (true == $("#shape2").prop("checked")) {
            $("#shape1").prop("checked", false == $("#shape1").is("checked") ? true : false);
        }
    });

    $('#shape3').bind('click', function (e) {
        $("#shape").prop("checked", false);
    });

    $('#shape4').bind('click', function (e) {
        $("#shape").prop("checked", false);
    });

    $('#shape5').bind('click', function (e) {
        $("#shape").prop("checked", false);
    });

    $('#shape6').bind('click', function (e) {
        $("#shape").prop("checked", false);

        if (true == $("#shape6").prop("checked")) {
            $("#shape7").prop("checked", false == $("#shape7").is("checked") ? true : false);
        }
    });

    $('#shape7').bind('click', function (e) {
        $("#shape").prop("checked", false);

        if (true == $("#shape7").prop("checked")) {
            $("#shape6").prop("checked", false == $("#shape6").is("checked") ? true : false);
        }
    });

    $('#shape8').bind('click', function (e) {
        $("#shape").prop("checked", false);
    });

    $('#shape9').bind('click', function (e) {
        $("#shape").prop("checked", false);
    });

    $('#shape10').bind('click', function (e) {
        $("#shape").prop("checked", false);
    });

    $('#shape11').bind('click', function (e) {
        $("#shape").prop("checked", false);

        if (false == $("#shapeetc").is(':visible')) {
            $("#shapeetc").show();
        }
        else {

            if ($("#shape11").prop("checked")) {
                $("#shapeetc").show();
            }
            else {
                $("#shapeetc").hide();
            }            

            $("#shape12").prop("checked", false);
            $("#shape13").prop("checked", false);
            $("#shape14").prop("checked", false);
            $("#shape15").prop("checked", false);
            $("#shape16").prop("checked", false);
            $("#shape17").prop("checked", false);
            $("#shape18").prop("checked", false);
            $("#shape19").prop("checked", false);
            $("#shape20").prop("checked", false);
            $("#shape21").prop("checked", false);
            $("#shape22").prop("checked", false);
            $("#shape23").prop("checked", false);
            $("#shape24").prop("checked", false);
            $("#shape25").prop("checked", false);
            $("#shape26").prop("checked", false);
            $("#shape27").prop("checked", false);
            $("#shape28").prop("checked", false);
            $("#shape29").prop("checked", false);
            $("#shape30").prop("checked", false);
            $("#shape31").prop("checked", false);
            $("#shape32").prop("checked", false);
        }
    });

    $('#shape12').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape12').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape13').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape14').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape15').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape16').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape17').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape18').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape19').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape20').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape21').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape22').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape23').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape24').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape25').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape26').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape27').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape28').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape29').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape30').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape31').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    $('#shape32').bind('click', function (e) {
        $("#shape").prop("checked", false);
        $("#shape11").prop("checked", false);
    });

    // 색상
    $('#color').bind('click', function (e) {
        $("#color").prop("checked", true);
        $("#color1").prop("checked", false);
        $("#color2").prop("checked", false);
        $("#color3").prop("checked", false);
        $("#color4").prop("checked", false);
        $("#color5").prop("checked", false);
        $("#color6").prop("checked", false);
        $("#color7").prop("checked", false);
        $("#color8").prop("checked", false);
        $("#color9").prop("checked", false);
        $("#color10").prop("checked", false);
        $("#color11").prop("checked", false);
        $("#color12").prop("checked", false);
        $("#color13").prop("checked", false);
        $("#color14").prop("checked", false);
        $("#color15").prop("checked", false);
        $("#color16").prop("checked", false);
    });

    $('#color1').bind('click', function (e) {
        $("#color").prop("checked", false);
    });

    $('#color2').bind('click', function (e) {
        $("#color").prop("checked", false);        

        if (true == $("#color2").prop("checked")) {
            //$("#color2").prop("checked", false == $("#color2").is("checked") ? true : false);
            $("#color3").prop("checked", false == $("#color3").is("checked") ? true : false);
            $("#color4").prop("checked", false == $("#color4").is("checked") ? true : false);
            $("#color5").prop("checked", false == $("#color5").is("checked") ? true : false);
            $("#color6").prop("checked", false == $("#color6").is("checked") ? true : false);
        }        
    });

    $('#color3').bind('click', function (e) {
        $("#color").prop("checked", false); 

        if (true == $("#color3").prop("checked")) {
            $("#color2").prop("checked", false == $("#color2").is("checked") ? true : false);
            $("#color4").prop("checked", false == $("#color4").is("checked") ? true : false);
            $("#color5").prop("checked", false == $("#color5").is("checked") ? true : false);
            $("#color6").prop("checked", false == $("#color6").is("checked") ? true : false);
        }        
    });

    $('#color4').bind('click', function (e) {
        $("#color").prop("checked", false);

        if (true == $("#color4").prop("checked")) {
            $("#color2").prop("checked", false == $("#color2").is("checked") ? true : false);
            $("#color3").prop("checked", false == $("#color3").is("checked") ? true : false);
            $("#color5").prop("checked", false == $("#color5").is("checked") ? true : false);
            $("#color6").prop("checked", false == $("#color6").is("checked") ? true : false);
        }        
    });

    $('#color5').bind('click', function (e) {
        $("#color").prop("checked", false);

        if (true == $("#color5").prop("checked")) {
            $("#color2").prop("checked", false == $("#color2").is("checked") ? true : false);
            $("#color3").prop("checked", false == $("#color3").is("checked") ? true : false);
            $("#color4").prop("checked", false == $("#color4").is("checked") ? true : false);
            $("#color6").prop("checked", false == $("#color6").is("checked") ? true : false);
        }        
    });

    $('#color6').bind('click', function (e) {
        $("#color").prop("checked", false);

        if (true == $("#color6").prop("checked")) {
            $("#color2").prop("checked", false == $("#color2").is("checked") ? true : false);
            $("#color3").prop("checked", false == $("#color3").is("checked") ? true : false);
            $("#color4").prop("checked", false == $("#color4").is("checked") ? true : false);
            $("#color5").prop("checked", false == $("#color5").is("checked") ? true : false);
        }
    });

    $('#color7').bind('click', function (e) {
        $("#color").prop("checked", false);

        if (true == $("#color7").prop("checked")) {
            $("#color8").prop("checked", false == $("#color8").is("checked") ? true : false);
            $("#color9").prop("checked", false == $("#color9").is("checked") ? true : false);
        }
    });

    $('#color8').bind('click', function (e) {
        $("#color").prop("checked", false);

        if (true == $("#color8").prop("checked")) {
            $("#color7").prop("checked", false == $("#color7").is("checked") ? true : false);
            $("#color9").prop("checked", false == $("#color3").is("checked") ? true : false);
        }
    });

    $('#color9').bind('click', function (e) {
        $("#color").prop("checked", false);

        if (true == $("#color9").prop("checked")) {
            $("#color7").prop("checked", false == $("#color7").is("checked") ? true : false);
            $("#color8").prop("checked", false == $("#color8").is("checked") ? true : false);
        }
    });

    $('#color10').bind('click', function (e) {
        $("#color").prop("checked", false);

        if (true == $("#color10").prop("checked")) {
            $("#color11").prop("checked", false == $("#color11").is("checked") ? true : false);
        }
    });

    $('#color11').bind('click', function (e) {
        $("#color").prop("checked", false);

        if (true == $("#color11").prop("checked")) {
            $("#color10").prop("checked", false == $("#color10").is("checked") ? true : false);
        }
    });

    $('#color12').bind('click', function (e) {
        $("#color").prop("checked", false);

        if (true == $("#color12").prop("checked")) {
            $("#color13").prop("checked", false == $("#color13").is("checked") ? true : false);
        }
    });

    $('#color13').bind('click', function (e) {
        $("#color").prop("checked", false);

        if (true == $("#color13").prop("checked")) {
            $("#color12").prop("checked", false == $("#color12").is("checked") ? true : false);
        }
    });

    $('#color14').bind('click', function (e) {
        $("#color").prop("checked", false);
    });

    $('#color15').bind('click', function (e) {
        $("#color").prop("checked", false);
    });

    $('#color16').bind('click', function (e) {
        $("#color").prop("checked", false);
    });
});

// 다시 입력
function initialize() {

    $("#itemnm").val("");
    $("#ingrname").val("");
    $("#mnfentpnm").val("");
    
    $("#compound").prop("checked", true);
    $("#compound1").prop("checked", false);
    $("#compound2").prop("checked", false);

    $("#printchar").val("");
    $("#printchareq").prop("checked", false);

    $("#markcodeimgdiv").hide();
    $("#markcodeimgdivtdoby").html("");
    $("#markimgage").val("");
    $("#mark").attr("src", "../../MARK_IMAGE/addbox.png");
    $("#mark").attr("style", "width: 36px; height: 36px;");
    $("#use_y").prop("checked", true);
    $("#use_all").prop("checked", false);
    $("#group_codecom").prop("checked", true);
    $("#group_codebody").prop("checked", false);
    $("#group_codeaniplant").prop("checked", false);
    $("#group_codeetc").prop("checked", false);
    $("#group_codeall").prop("checked", false);

    $("#formcode").prop("checked", true);
    $("#formcode1").prop("checked", false);
    $("#formcode2").prop("checked", false);
    $("#formcode3").prop("checked", false);
    $("#formcode4").prop("checked", false);

    $("#linef").prop("checked", true);
    $("#linef1").prop("checked", false);
    $("#linef2").prop("checked", false);
    $("#linef3").prop("checked", false);
    $("#linef4").prop("checked", false);

    $("#lineb").prop("checked", true);
    $("#lineb1").prop("checked", false);
    $("#lineb2").prop("checked", false);
    $("#lineb3").prop("checked", false);
    $("#lineb4").prop("checked", false);

    $("#shape").prop("checked", true);
    $("#shape1").prop("checked", false);
    $("#shape2").prop("checked", false);
    $("#shape3").prop("checked", false);
    $("#shape4").prop("checked", false);
    $("#shape5").prop("checked", false);
    $("#shape6").prop("checked", false);
    $("#shape7").prop("checked", false);
    $("#shape8").prop("checked", false);
    $("#shape9").prop("checked", false);
    $("#shape10").prop("checked", false);
    $("#shape11").prop("checked", false);

    $("#shapeetc").hide();
    $("#shape12").prop("checked", false);
    $("#shape13").prop("checked", false);
    $("#shape14").prop("checked", false);
    $("#shape15").prop("checked", false);
    $("#shape16").prop("checked", false);
    $("#shape17").prop("checked", false);
    $("#shape18").prop("checked", false);
    $("#shape19").prop("checked", false);
    $("#shape20").prop("checked", false);
    $("#shape21").prop("checked", false);
    $("#shape22").prop("checked", false);
    $("#shape23").prop("checked", false);
    $("#shape24").prop("checked", false);
    $("#shape25").prop("checked", false);
    $("#shape26").prop("checked", false);
    $("#shape27").prop("checked", false);
    $("#shape28").prop("checked", false);
    $("#shape29").prop("checked", false);
    $("#shape30").prop("checked", false);
    $("#shape31").prop("checked", false);
    $("#shape32").prop("checked", false);

    $("#color").prop("checked", true);
    $("#color1").prop("checked", false);
    $("#color2").prop("checked", false);
    $("#color3").prop("checked", false);
    $("#color4").prop("checked", false);
    $("#color5").prop("checked", false);
    $("#color6").prop("checked", false);
    $("#color7").prop("checked", false);
    $("#color8").prop("checked", false);
    $("#color9").prop("checked", false);
    $("#color10").prop("checked", false);
    $("#color11").prop("checked", false);
    $("#color12").prop("checked", false);
    $("#color13").prop("checked", false);
    $("#color14").prop("checked", false);
    $("#color15").prop("checked", false);
    $("#color16").prop("checked", false);
}

// 검색
function Search() {

    if ("" == $("#itemnm").val() &&
        "" == $("#ingrname").val() &&
        "" == $("#mnfentpnm").val() &&
        "" == $("#printchar").val() &&
        true == $("#compound").prop("checked") &&
        "" == $("#markimgage").val() &&
        true == $("#formcode").prop("checked") &&
        true == $("#linef").prop("checked") &&
        true == $("#lineb").prop("checked") &&
        true == $("#shape").prop("checked") &&
        true == $("#color").prop("checked")) {

        showAlertDiv("검색하실 약품의 정보를 입력하신 후 검색해주세요.");

        //필요시
        $("#alert_yes").off("click");
        $("#alert_yes").on("click", function () {

            $("#alert_div").hide();
            $("#alert_msg").text("");

            //기존 처리함수
            $("#itemnm").focus();
        });

        return;
    }

    $('#searchIdentity').submit();
}

/* function getMarkCodeImg(use_yn, group_code, page) {

    var data = {
        "use_yn": use_yn,
        "group_code": group_code,
        "page": page
    };

    //ajax 호출
    $.ajax({
        url: "/Api/GetMarkCodeImg/",
        cache: false,
        type: 'GET',
        dataType: "json",
        contentType: 'application/html; charset=utf-8',
        data: data,
        success: function (data) {

            var html = "";
            var navhtml = "";

            var imax = data.item.length / 5;
            
            for (var i = 0; i < imax; i++) {

                html += '<tr style="text-align:center;">';

                for (var j = 0 + (5 * i); j < (5 * i) + 5; j++) {

                    if (data.item.length == j) {
                        break;
                    }

                    html += "<td><img onclick=\"markimgclick('" + data.item[j].mark_code + "', '" + data.item[j].mark_code_img_filename + "')\" alt=\"" + data.item[j].mark_code + "\" style=\"width:50px;height:50px;border:1px solid;\" src=\"/MARK_IMAGE/" + data.item[j].mark_code_img_filename + "\" /></td>";
                    
                }
                
                html += '</tr>';

            }

            for (var i = 1; i <= data.count; i++) {

                if ("" == navhtml) {
                    navhtml = "<tr><td colspan=\"5\"><div style=\"text-align: center;\"><ul class=\"pagination\" style=\"left: 47 %;\">";
                }

                if (1 == i) {
                    if (page == i) {
                        navhtml += "<li><a class=\"pagelist\" style=\"cursor: pointer;\"><span>&lt;</span></a></li>";
                    }
                    else {
                        navhtml += "<li><a class=\"pagelist\" style=\"cursor: pointer;\" onclick=\"getMarkCodeImg('" + use_yn + "', '" + group_code + "', " + i + ")\"><span>&lt;</span></a></li>";
                    }
                }
                
                if (page == i) {
                    navhtml += "<li><a class=\"active\" style=\"cursor: pointer;\" onclick=\"getMarkCodeImg('" + use_yn + "', '" + group_code + "', " + i + ")\"><span><b>" + i + "</b></span></a></li>";
                }
                else {
                    navhtml += "<li><a class=\"pagelist\" style=\"cursor: pointer;\" onclick=\"getMarkCodeImg('" + use_yn + "', '" + group_code + "', " + i + ")\"><span>" + i + "</span></a></li>";
                }

                if (data.count == i) {
                    if (page == i) {
                        navhtml += "<li><a class=\"pagelist\" style=\"cursor: pointer;\"><span> &gt; </span></a></li>";
                    }
                    else {
                        navhtml += "";
                        navhtml += "<li><a class=\"pagelist\" style=\"cursor: pointer;\" onclick=\"getMarkCodeImg('" + use_yn + "', '" + group_code + "', " + i + ")\"><span> &gt; </span></a></li>";
                    }
                }                
            }

            navhtml += "</ul></div><div style=\"text-align:center;\"><a class=\"btn btn-default\" href=\"javascript:void(0);\" onclick=\"closemarkimg();\" attr-a=\"onclick : attr-a\">닫기</a></div></td></tr>";
            html += navhtml;

            $("#markcodeimgdivtdoby").html("");
            $("#markcodeimgdivtdoby").html(html);

            var height = $("#markcodeimgdiv").height();
            var left = $("#markleft").val();
            var top = ($(window).height() - height) / 4;

            top = top <= 0 ? 150 : top;

            $("#markcodeimgdiv").css("top", top);
            $("#markcodeimgdiv").css("left", left);

            $("#markcodeimgdiv").show();

            $('html, body').animate({ scrollTop: top - 266 }, $(window).scrollTop());

            return true;
        }, error: function (request, status, error) {
            showAlertDiv("마크이미지" + use_yn + "+" + group_code + " 조회 실패.");
            return true;
        }
    });
} */

function markimgclick(markcode, markcodeimgfilename) {
    $("#markimgage").val(markcode);
    $("#mark").attr("src", "../../MARK_IMAGE/" + markcodeimgfilename); 
    $("#mark").attr("style", "width: 36px; height: 36px; border: 1px solid;");

    $("#markcodeimgdiv").hide();
    $("#markcodeimgdivtdoby").html("");

    //$("#use_y").prop("checked", true);
    //$("#use_all").prop("checked", false);
    $("#group_codecom").prop("checked", true);
    $("#group_codebody").prop("checked", false);
    $("#group_codeaniplant").prop("checked", false);
    $("#group_codeetc").prop("checked", false);
    $("#group_codeall").prop("checked", false);
}

function closemarkimg() {    
    $("#markcodeimgdiv").hide();
    $("#markcodeimgdivtdoby").html("");

    //$("#use_y").prop("checked", true);
    //$("#use_all").prop("checked", false);
    $("#group_codecom").prop("checked", true);
    $("#group_codebody").prop("checked", false);
    $("#group_codeaniplant").prop("checked", false);
    $("#group_codeetc").prop("checked", false);
    $("#group_codeall").prop("checked", false);
}

function fn_test(){
    $('#markcodeimgdiv').show();
}