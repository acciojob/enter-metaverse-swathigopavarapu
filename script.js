//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // get elements
  const statusPara = document.getElementById("status");
  const enterBtn = document.getElementById("enterBtn");

  // add click event
  enterBtn.addEventListener("click", function () {
    statusPara.innerHTML = "<h1>Entered Metaverse</h1>";
  });
});