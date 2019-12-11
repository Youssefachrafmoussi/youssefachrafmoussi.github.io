var $wk_jq = $.noConflict();


$wk_jq(document).ready(function () {
        ShowSelectedPPT();
});

function ShowSelectedPPT(){
    var id_client = $wk_jq("#CrossIdClient").text();
    var id_commande = $wk_jq("#CrossOrderId").text();

    if($wk_jq("#Hook").text()==='DD'){
        $wk_jq("#Hook").after('<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
    else if($wk_jq("#Hook").text()==='FD'){
        $wk_jq("#Hook").after('<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
    else if($wk_jq("#Hook").text()==='FM'){
        $wk_jq("#Hook").after('<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
}
