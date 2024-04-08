const body = document.body.children[2];
function toggleAnswer(o) {
  let t = o.target.nextElementSibling;
  (t.style.display = "none" === t.style.display ? "block" : "none"),
    o.stopPropagation();
}
body.addEventListener("click", function () {
  "white" === body.style.backgroundColor || "" === body.style.backgroundColor
    ? ((body.style.backgroundColor = "rgb(0,50,100)"),
      (body.style.color = "white"))
    : ((body.style.backgroundColor = "white"), (body.style.color = "black"));
});
const faq = document.getElementById("faq");
faq.addEventListener("click", function () {
  event.stopPropagation();
});
const ob = document.querySelectorAll(".objectives-buttons button");
ob.forEach(function (s) {
  s.addEventListener("click", function () {
    event.stopPropagation();
    const bt = event.target.textContent;
    const obd = document.querySelector(".objective-details");
    obd.children[1].innerHTML = changeText[bt];
    obd.children[0].style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var messageContainer = document.getElementById("message-container");
  var closeButton = document.getElementById("close-button");

  messageContainer.style.display = "block";

  closeButton.addEventListener("click", function () {
    messageContainer.style.display = "none";
  });
});
