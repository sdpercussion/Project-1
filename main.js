//button that changes the paragraph
function clickyButton() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
};
//second button
function secondButton() {
  document.getElementById("demo2").innerHTML = "This one changed too.";
};
//Jquery test on header container
$(document).ready(function(){
  $('div').click(function(){
    $(this).css('background-color', 'red');
  });
});
