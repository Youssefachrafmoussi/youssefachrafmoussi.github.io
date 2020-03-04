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



    //MODIFY EDITOR HERE


    document.addEventListener('click', function (e) {
      if (e.target.contains("Bonne")) {
          alert('yes');
      }
      else{
        alert('no');
      }
  }, false);




    //END EDITOR MODIFICATION HERE




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
    //document.getElementById("mapDiv").insertAdjacentHTML('afterend','<div id="mapDiv" class="order_carrier_content box" ><iframe id="iFrameMap" width="100%" height="'+height+'" src="https://wscartography.crossdesk.com/CMS/Back/selectedPPTV2.aspx?ID_COMMANDE=TestToken2&ID_CLIENT=4ae89fbd-23b1-479f-b368-68bce6177454&Debug=1" frameborder="0"></iframe><div><div class="clear"></div>');
    
    $('body').on('click', 'fa-desktop', function() {
      alert('yes');
    });
  
  });