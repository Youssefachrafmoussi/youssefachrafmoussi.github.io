
  var swapped = 0 ; 
  function swapDom(a,b) 
{
     var aParent = a.parentNode;
     var bParent = b.parentNode;

     var aHolder = document.createElement("div");
     var bHolder = document.createElement("div");

     aParent.replaceChild(aHolder,a);
     bParent.replaceChild(bHolder,b);

     aParent.replaceChild(b,aHolder);
     bParent.replaceChild(a,bHolder);    
}
$(document).ready(function () {
  alert('yes');
$(window).resize(function () {

  if ($(window).width() < 996) {
    $('#HorizontalProgressBar').hide();
    $('#VerticalProgressBar').show();
  } else {

    $('#HorizontalProgressBar').show();
    $('#VerticalProgressBar').hide();
  }

  if ($(window).width() < 840) {

    var BarreHHolder = document.getElementById('BarreHHolder');
    var TransporterVHolder = document.getElementById('TransporterVHolder');
    var ProduitsCommandeHHolder = document.getElementById('ProduitsCommandeHHolder');
    if(swapped==0){
    swapDom(ProduitsCommandeHHolder,BarreHHolder);
    swapDom(ProduitsCommandeHHolder,TransporterVHolder);
    swapped=1;
    }
    $('#home-button').css('margin-right','0px');
    $('#truck-button').css('margin-right','0px');
    $('#list-button').css('margin-right','0px');


  } else {
    $('#home-button').css('margin-right','40px');
    $('#truck-button').css('margin-right','40px');
    $('#list-button').css('margin-right','40px');

    var BarreHHolder = document.getElementById('BarreHHolder');
    var TransporterVHolder = document.getElementById('TransporterVHolder');
    var ProduitsCommandeHHolder = document.getElementById('ProduitsCommandeHHolder');

    if(swapped==1){
    swapDom(ProduitsCommandeHHolder,TransporterVHolder);
    swapDom(ProduitsCommandeHHolder,BarreHHolder);
    swapped=0;
    }

    $('#HorizontalProgressBar').show();
    $('#VerticalProgressBar').hide();
  }

});
$(window).trigger('resize');
  

});
$(window).on('load', function(){
var width = document.getElementById('MapHeader').offsetWidth;
var height = 430;
if(width<700){
  height = 640;
  }
else{
  height = 430;
    }
document.getElementById("mapDiv").insertAdjacentHTML('afterend','<div id="mapDiv" class="order_carrier_content box" ><iframe id="iFrameMap" width="100%" height="'+height+'" src="https://wscartography.crossdesk.com/CMS/Front/picker.aspx?ID_COMMANDE=TestToken2&ID_CLIENT=8f3d093b-3a54-11e3-acfb-d8d385e2f9ec&QUERY=75002+Paris&COUNTRY=FR" frameborder="0"></iframe><div><div class="clear"></div>');
});