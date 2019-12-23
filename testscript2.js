document.addEventListener("DOMContentLoaded", function(event) { 
    var id_client = document.getElementById("CrossIdClient").innerHTML;
    var id_commande = document.getElementById("CrossOrderId").innerHTML;
        
    if( document.getElementById("Hook").innerHTML==='DD'){
         document.getElementById("Hook").insertAdjacentHTML('afterend','<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
    else if( document.getElementById("Hook").innerHTML==='FD'){
         document.getElementById("Hook").insertAdjacentHTML('afterend','<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
    else if( document.getElementById("Hook").innerHTML==='FM'){
         document.getElementById("Hook").insertAdjacentHTML('afterend','<div id="mapDiv" class="order_carrier_content box" style="border-top:0px;">Point relais :<br><br><iframe style="border:1px solid #CCCCCC;"id="iFrameMap" width="100%" height="430" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPT.aspx?ID_COMMANDE='+id_commande+'&ID_CLIENT='+id_client+'" frameborder="0"></iframe><div><div class="clear"></div>');
    }
});
