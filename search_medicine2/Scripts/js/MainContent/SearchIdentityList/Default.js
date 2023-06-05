$(document).ready(function () {

    $(".col-image").elevateZoom({ zoomWindowPosition: 7, borderSize: 1, zoomWindowWidth: 320, zoomWindowHeight: 225, zoomWindowFadeIn: 200, zoomWindowFadeOut: 200, zoomWindowOffety: 15, cursor: 'move' });

    $(".table-striped tbody tr").on("click", function (e) {

        if ($(this).data("item_seq") != null) {

            $('#item_seq').val($(this).data("item_seq"));
            $('#edi_code').val($(this).data("edi_code"));

            $('#drugApprovalDetail').submit();
        }
    });
});


function SearchIdentityListPage(itemnm, mnfentpnm, ingrname, compoundyn, printchar, printchareq, markimgage, formcode, linefont, lineback, shape, color, nowpage, page, totalcount) {
    $('#itemnm').val(itemnm);
    $('#mnfentpnm').val(mnfentpnm);
    $('#ingrname').val(ingrname);
    $('#compoundyn').val(compoundyn);
    $('#printchar').val(printchar);
    $('#printchareq').val(printchareq);
    $('#markimgage').val(markimgage);
    $('#formcode').val(formcode);
    $('#linefont').val(linefont);
    $('#lineback').val(lineback);
    $('#shape').val(shape);
    $('#color').val(color);

    $('#page').val(page);

    $('#searchIdentityList').submit();

    return false;
}