(function ($) {
  $(document).ready(function() {
        ShowSelectedPPT();
  });
})(jQuery);

function ShowSelectedPPT(){
    var id_client = $("#CrossIdClient").text();
    var id_commande = $("#CrossOrderId").text();

    if($("#Hook").text()==='DD'){
        jQuery("#Hook").after('<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
    else if($("#Hook").text()==='FD'){
        jQuery("#Hook").after('<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
    else if($("#Hook").text()==='FM'){
        jQuery("#Hook").after('<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
}
