var $j = $.noConflict();

$j(document).ready(function () {
        ShowSelectedPPT();
});

function ShowSelectedPPT(){
    var id_client = $j("#CrossIdClient").text();
    var id_commande = $j("#CrossOrderId").text();

    if($j("#Hook").text()==='DD'){
        $j("#Hook").after('<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
    else if($j("#Hook").text()==='FD'){
        $j("#Hook").after('<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
    else if($j("#Hook").text()==='FM'){
        $j("#Hook").after('<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
}
