(function () {
  var container = document.getElementById("container");
  var [icon] = document.getElementsByTagName("i");
  var [h1] = document.getElementsByTagName("h1");
  var h2 = document.getElementsByTagName("h2");
  var paragraphs = document.getElementsByTagName("p");
  var layout = "dark";

  function setLightLayout() {
    container.classList.add("white-background");
    h1.classList.add("black");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    icon.style.color = "white";
    for (var i = 0; i < h2.length; i++) h2[i].classList.add("black");
    for (var i = 0; i < paragraphs.length; i++)
      paragraphs[i].classList.add("black");
    layout = "white";
  }

  function removeLightLayout() {
    container.classList.remove("white-background");
    h1.classList.remove("black");
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
    icon.style.color = "black";
    for (var i = 0; i < h2.length; i++) h2[i].classList.remove("black");
    for (var i = 0; i < paragraphs.length; i++)
      paragraphs[i].classList.remove("black");
    layout = "dark";
  }

  function inverseViewMode() {
    if (layout === "dark") {
      setLightLayout();
    } else {
      removeLightLayout();
    }
    container.classList.remove("run-animation");
    container.classList.add("run-animation");
  }

  icon.addEventListener("click", function () {
    inverseViewMode();
  });
})();
