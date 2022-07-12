function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

//

//

//

function moveToSelected(element) {
  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");
  // .removeClass().
  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");
  //nextRightSecond
  // prevLeftSecond;
  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");
  // ;hideLeft;
  $(nextSecond).nextAll().removeClass().addClass("hideRight");

  $(prevSecond).prevAll().removeClass().addClass("hideLeft");
}

// Eventos teclado
$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      moveToSelected("prev");
      break;

    case 39: // right
      moveToSelected("next");
      break;

    default:
      return;
  }
  e.preventDefault();
});

$("#carousel .common").click(function () {
  moveToSelected($(this));
});

$("#prev").click(function () {
  moveToSelected("prev");
});

$("#next").click(function () {
  moveToSelected("next");
});

//
//
//
//
$("b").each(function () {
  $(this).mouseover(function () {
    $(this).addClass("c");
    $("a").children("b").not("c").addClass("b");
  });
  $(this).mouseleave(function () {
    $(this).removeClass("c");
    $("a").children(".b").not(".c").removeClass("b");
  });
});
//
//
// js for top up btn
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
// to display links having no value
const linkvar = document.querySelectorAll("a");
for (let i = 0; i < linkvar.length; i++) {
  if (linkvar[i].getAttribute("href") === "#") {
    linkvar[i].style.display = "none";
  }
  if (linkvar[i].getAttribute("href") === "mailto:jssaksargyan@gmail.com") {
    linkvar[i].setAttribute("href", "mailto:jssakshargyan@gmail.com");
  }
}

const branch = document.querySelectorAll(".our_team_indi div");
const short = document.querySelectorAll(".our_team_indi h2 span");
const branchAlign = document.querySelectorAll(".our_team_indi div p");
for (let k = 0; k < branch.length; k++) {
  if (!branch[k].classList.contains("our_teams_indi_links_conatainer")) {
    branch[k].style.height = "70px";
  }
}
for (let k = 0; k < branchAlign.length; k++) {
  branchAlign[k].classList.add("modify");
}
console.log(branchAlign);

for (let k = 0; k < short.length; k++) {
  short[k].textContent = "";
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    scrollToTop();
  }
});

// js for linked in

const footerHeaderGmailChange = new Array(
  linkvar[8],
  linkvar[linkvar.length - 2]
);

for (let i of footerHeaderGmailChange) {
  i.href = "https://www.linkedin.com/company/akshargyan";
}

const footerLinkedinContent = document.querySelectorAll(
  ".aksargyan_footer_logo span"
);

footerLinkedinContent[0].innerHTML = "Akshargyan";

document
  .querySelector(".aksargyan_logo")
  .removeChild(document.querySelectorAll(".aksargyan_logo_image")[0]);

const logoLink = document.createElement("a");

logoLink.setAttribute("href", "index.html");

logoLink.innerHTML = `<div class="aksargyan_logo_image"></div>`;

document.querySelector(".aksargyan_logo").appendChild(logoLink);

console.log(document.querySelectorAll(".aksargyan_footer_logo")[1]);

const newNum = 9451720357;

document.querySelectorAll(
  ".aksargyan_footer_logo"
)[1].innerHTML = `<img src="images/Phone.png" /><h4>+91 ${newNum}</h4>`;

document
  .querySelectorAll(".aksargyan_footer_item>a")[0]
  .setAttribute("href", `tel:+91 ${newNum}`);

// snippet for team page
