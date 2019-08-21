/**
 * Module Croslog PrestaShop
 * @author <Crosslog>
 * @copyright  Copyright (c) 2019
 * @license Crosslog
 */
//  ////////////////////////////////////////////////////////////////////////////////////////////////
//   
//  	Crosslog International
//  		--> Module Crosslog Prestashop : CrosslogTools v1.0
//  
//  ////////////////////////////////////////////////////////////////////////////////////////////////

var xlUrl = "https://wscartography.crossdesk.com";
var xlPptCarriers = "";

$(document).ready(function() {
if (xlCustomerId.xlCustomerId)
    xlInit();
});
function xlInit() {
    if (document.URL.indexOf("controller=order") != -1) {
        xlDisplayMap();
    }    
    if (document.URL.indexOf("laboutiquedestoons.com/fr/commande") != -1) {
        xlDisplayMap();
    }
    if (document.URL.indexOf("gayacosmetics.fr/fr/commande-rapide") != -1) {
        xlDisplayMap();
    }
    if (document.URL.indexOf("gayacosmetics.fr/en/commande-rapide") != -1) {
        xlDisplayMap();
    }
    if (document.URL.indexOf("laboutiquedestoons.com/fr/historique-commandes") != -1) {
        xlBuildCustomerOrderDetails();
    }
    if (document.URL.indexOf("controller=AdminOrders") != -1) {
        xlBuildAdminOrderDetails();
    }
    if (document.URL.indexOf("controller=order-detail") != -1) {
        xlBuildCustomerOrderDetails();
    }
}

function xlDisplayMap() {
    var xlDeliveryOptions = document.querySelectorAll('[id^="delivery_option"]');
    var xlShowMap = 0;
    [].forEach.call(xlDeliveryOptions, function(div) {
        document.addEventListener('click',function(e){
            if(e.target && e.target.id== div.id){
                event.preventDefault();
                xlDisplayMap();
             }
         });
        if (div.checked) {
            var containingDiv = null;
            var nbrParents = parseInt(xlPickupPointDiv.xlPickupPointDiv);

            if(nbrParents)
            {
                containingDiv = $(div).parents().eq(nbrParents);
            }
            else{
                containingDiv = $(div).parents().eq(5);
            }
            var CrossDeliveryIds =xlPickupPointCarriers.xlPickupPointCarriers.split(';');
            var arrayLength = CrossDeliveryIds.length;
            var DelivOptions = [];
            for (var i = 0; i < arrayLength; i++) {
                     DelivOptions.push(CrossDeliveryIds[i]+',');
                    }
                    

            if (DelivOptions.indexOf($(div).attr('value'))!=-1) { 
                //(div.getAttribute("value") == xlPptCarriers + ",") {
                xlShowMap = 1;
                var iFrameMap = document.getElementById('mapDiv');
                
                if (iFrameMap != null) {
                    
                    iFrameMap.parentNode.removeChild(iFrameMap);
                }
                var height = "430";
                
                //if (document.getElementById('delivery').offsetWidth < 700) {
                  //  height = "740";

                //}
                var couleur = xlPickupPointBtnColor.xlPickupPointBtnColor ;
                if(!couleur)
                {
                    couleur='d23c7c';
                }
                var iframe = "<div id='mapDiv' class='order_carrier_content box' style='border-top:0px;'>";
                iframe += "Cliquez sur l'un des num\351ros disponibles ci-dessous.<br>Le point relais affich\351 est celui ou sera effectu\351e la livraison.<br><br>";
                iframe += "<iframe style='border:1px solid #CCCCCC;' id='iFrameMap' width='100%' height='" + height + "' ";
                iframe += "src='" + xlUrl + "/CMS/Front/prestashopcart.aspx?CustomerId=" + xlCustomerId.xlCustomerId + "&CartId=" + xlCartId.xlCartId + "&Color="+couleur+"' ";
                iframe += "frameborder=\"0\"></iframe>";
                iframe += "<div>";
                iframe += "<br><br>";
                
                
				containingDiv.after(iframe);
            }
        }
    });

    if (xlShowMap != 1) {
        var iFrameMap = document.getElementById('mapDiv');
        if (iFrameMap != null) {
            iFrameMap.parentNode.removeChild(iFrameMap);
        }
    }
}

function xlBuildCustomerOrderDetails() {
    var xlHtmlDetail;
    xlHtmlDetail = "<div id =\"xlPointRelais\" class=\"addresses\">";
    xlHtmlDetail += "<div class=\"col-lg-12 col-md-12 col-sm-12\">";
    xlHtmlDetail += "<article id=\"point-relais\" class=\"box\">";
    xlHtmlDetail += "<h4>Point relais de livraison</h4>";
    xlHtmlDetail += "<address>";
    xlHtmlDetail += "<iframe id=\"iFrameMap\" width=\"100%\" height=\"270\"  frameborder=\"0\" ";
    xlHtmlDetail += "src=\"" + xlUrl + "/cms/back/selectedPPT.aspx?ID_COMMANDE=" + xlGetUrlVars()["id_order"] + "&ID_CLIENT=" + xlCustomerId.xlCustomerId + "\">";
    xlHtmlDetail += "</iframe>";
    xlHtmlDetail += "</address>";
    xlHtmlDetail += "</article>";
    xlHtmlDetail += "</div>";
    xlHtmlDetail += "<div class=\"clearfix\"></div>";
    xlHtmlDetail += "</div>";

    $("#xlPointRelais").remove();
    $(xlHtmlDetail).insertAfter(".adresses_bloc");
}

function xlFullscreen() {

    var modalDiv = "<div id=\"xlModal\" style=\"position:fixed;top:0;bottom:0;background-color:rgba(0,0,0,.8);left:0;right:0;z-index:3000;\">";
    modalDiv += "<div id=\"xlModalInner\" style=\"padding:18px;margin:80px;height:1080px;background-color:#F1F1F1;text-align:left;z-index:3001;border-radius:6px;border:1px solid #666666;\">";
    modalDiv += "<div style='float:right;font-weight:bold;font-size:22px;'  onclick=\"$('#xlModal').remove();\"><a href='#'>X</a>&nbsp;&nbsp;</div>";
    modalDiv += "<div style=\"align:left;\"><h2>Crosslog Tools</h2>";
    modalDiv += "";
    modalDiv += "";
    modalDiv += "";
    modalDiv += "";
    modalDiv += "";
    modalDiv += "";
    modalDiv += "</div>";
    modalDiv += "</div>";
    modalDiv += "</div>";
    window.scrollTo(0, 0);
    $("#header").append(modalDiv);
}

function xlBuildAdminOrderDetails() {

    var xlErrorState = 0;
    if (IsCrosslogErrorState.IsCrosslogErrorState) {
        xlErrorState = 1;
    }
    /*
    var iframe = "<iframe id='iFrameTools' width='100%' height='260' ";
    iframe += "src='" + xlUrl + "/CMS/Back/Toolbar.aspx?IS_FLOW_ERROR=" + xlErrorState + "&ID_CLIENT=" + xlCustomerId.xlCustomerId + "&ID_COMMANDE=" + xlOrderId.xlOrderId + "&ID_REFERENCE=" + xlOrderReference.xlOrderReference + "&Color=d23c7c' ";
    iframe += "frameborder=\"0\"></iframe>";
 
	if (xlParameter3.xlParameter3!="0")
    {
		var xlHtmlAdmin = "";
		xlHtmlAdmin = "<div id=\"xlFrame\" class=\"panel\">";
		xlHtmlAdmin += "<div class=\"panel-heading\">";
		xlHtmlAdmin += "<i class=\"icon-exchange\"></i> ";
		xlHtmlAdmin += "Crosslog";
		if (xlParameter4.xlParameter4 == "DebugMode=1") {
			xlHtmlAdmin += "<div style='float:right;' onclick=\"xlFullscreen();\"><a href='#' style=\"font-size:12px;\">Outils</a>&nbsp;&nbsp;</div>";
		}
		xlHtmlAdmin += "</div>";
		xlHtmlAdmin += "<div class=\"row\">";
		xlHtmlAdmin += iframe;
		xlHtmlAdmin += "</div>";
		xlHtmlAdmin += "</div>";

		$("#xlFrame").remove();
		$(".col-lg-5").prepend(xlHtmlAdmin);
	} */
    var xlPSOrderCarrierReference = xlOrderCarrierReference.xlOrderCarrierReference;
    xlPptCarriers = xlPickupPointCarriers.xlPickupPointCarriers;
   
    if(xlPptCarriers)
    if (xlPptCarriers.split(";").includes(xlPSOrderCarrierReference)) {
        var xlHtmlPointRelais = "";
        xlHtmlPointRelais += "<h4>POINT RELAIS DE LIVRAISON :</h4>";
        xlHtmlPointRelais += "<iframe id=\"iFrameMap\" frameborder=\"0\" width=\"100%\" height=\"268\" border=\"0\"  ";
        xlHtmlPointRelais += " src=\"" + xlUrl + "/cms/back/selectedPPT.aspx?ID_COMMANDE=" + xlOrderId.xlOrderId + "&ID_CLIENT=" + xlCustomerId.xlCustomerId + "\">";
        xlHtmlPointRelais += " </iframe>";

        $("#shipping").append("<hr>" + xlHtmlPointRelais);
    }
}

function xlGetUrlVars() {
    var xlQs = [],
        xlHash;
    var xlHashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < xlHashes.length; i++) {
        xlHash = xlHashes[i].split('=');
        xlQs.push(xlHash[0]);
        xlQs[xlHash[0]] = xlHash[1];
    }
    return xlQs;
}