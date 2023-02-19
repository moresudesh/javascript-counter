
$(document).ready(function(){ 
  $('.tab-a').click(function(){  
    $(".tab").removeClass('tab-active');
    $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
    $(".tab-a").removeClass('active-a');
    $(this).parent().find(".tab-a").addClass('active-a');
   });
});




var count = 0;
function changeCount(num){
   count+=num;
   document.getElementById('counter').innerHTML = count;

}





 document.getElementById('floating-contact-form').style.opacity = 0;
 setTimeout(() => {  
   document.getElementById('floating-contact-form').style.opacity = 1;
 }, 3000);


 document.getElementById("closeButton").addEventListener("click", function() {
   document.getElementById("floating-contact-form").style.opacity = 0;
 });



 const buttons = document.querySelectorAll('.tabs button');
const contents = document.querySelectorAll('.tabs [data-tab-content]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;
    contents.forEach(content => {
      content.style.display = content.dataset.tabContent === tab ? 'block' : 'none';
    });
  });
});
