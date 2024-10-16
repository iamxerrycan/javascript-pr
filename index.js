document.addEventListener("DOMContentLoaded", function () {
  let para = document.getElementById("paragraph");
  let button = document.getElementById("button");

  button.addEventListener("click", function () {
    setTimeout(function () {
      para.style.color = "red";
    }, 2000);
    setInterval(() => {
      para.style.color = "";
    }, 4000);
  });
});
