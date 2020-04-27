window.onscroll = function () {
  scrollFunction();
};

window.onresize = function () {
  scrollFunction();
};

function scrollFunction() {
  var w = window.innerWidth;

  if (
    (document.body.scrollTop > 54 || document.documentElement.scrollTop > 54) &&
    w >= 992
  ) {
    document.getElementById("navbar").classList.remove("height-lg");
    document.getElementById("navbar").classList.add("fixed-top");
    document.getElementById("logo").classList.remove("logo-lg");
    document.getElementById("weather-bar").classList.remove("weather-bar-lg");
    document.getElementById("menu-a").classList.remove("menu-a-lg");
    document.getElementById("menu-bar").classList.add("menu-bar-top");
    document.getElementById("weather-date").classList.remove("d-lg-block");
  } else {
    document.getElementById("navbar").classList.add("height-lg");
    document.getElementById("navbar").classList.remove("fixed-top");
    document.getElementById("logo").classList.add("logo-lg");
    document.getElementById("weather-bar").classList.add("weather-bar-lg");
    document.getElementById("menu-a").classList.add("menu-a-lg");
    document.getElementById("menu-bar").classList.remove("menu-bar-top");
    document.getElementById("weather-date").classList.add("d-lg-block");
  }

  if (w < 992) {
    document.getElementById("navbar").classList.add("fixed-top");
    document.getElementsByTagName("main")[0].style["margin-top"] = "50px";
  } else {
    document.getElementsByTagName("main")[0].style["margin-top"] = "0px";
  }
}

window.onload = function () {
  scrollFunction();
  var item1 = document.getElementById("top-story-mobile").firstElementChild;
  document.getElementById("second-column").appendChild(item1.cloneNode(true));

  var item2 = document.getElementById("last-part-mobile").lastElementChild;
  document.getElementById("latest-news").appendChild(item2.cloneNode(true));
};
