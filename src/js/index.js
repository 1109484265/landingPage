console.log('11111')
$(function() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        onLeave:function(index,nextindex){
            console.log(index,nextindex);
            if (index==4) {
              document.querySelector(".footer-arrow").style.visibility="hidden";
              // document.querySelector(".footer").style.bottom="27%";
            }else{
              document.querySelector(".footer-arrow").style.visibility="visible";
              // document.querySelector(".footer").style.bottom="2%";
            }
          }
    });
})