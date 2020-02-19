$(document).ready(function () {
    $(window).resize(function () {
      if ($(window).width() < 996) {
        $('#HorizontalProgressBar').hide();
        $('#VerticalProgressBar').show();
      } else {
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