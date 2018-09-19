import './css/styles.css';
import './sass/styles.scss';

console.log("heyyy there!");

$(document).ready(function() {
  console.log("Jquery is running");
  $("img").hover(function() {
    console.log("So there's hovering.");
    $(".bg-swap").toggle();
  })

})
