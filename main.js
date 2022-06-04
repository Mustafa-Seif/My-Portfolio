// + =

// Dark Mode ---------
const mode = document.querySelector(".switch-mode");
const iconMode = document.querySelector(".fa-moon");
const body = document.querySelector("body");
// ------------------

mode.addEventListener("click", (eo) => {
  if (eo.target.classList == "fa-solid fa-moon moon" || "switch-mode") {
    mode.classList.toggle("darkness");
    body.classList.toggle("dark");
  }
});
//  End Dark Mode ---------

// ---------onscrll progress bar
const skills = document.querySelector(".content-skills");
const all = document.querySelectorAll(".all");
const about = document.querySelector(".about");
const aboutRight = document.querySelector(".about-right");
// --------------------
// ---------onscrll to up show
const toUp = document.querySelector(".to-up");
// --------------------
// ---------onscrll project show
const cardRight = document.querySelectorAll(".card-right");
const cardLeft = document.querySelectorAll(".card-left");
const projects = document.querySelector(".projects");
// --------------------

window.onscroll = function () {
  // ---------onscrll progress bar
  if (window.scrollY >= skills.offsetTop - 300) {
    all.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  // ---------onscrll project show
  if (window.scrollY >= projects.offsetTop - 150) {
    cardRight.forEach((item) => {
      item.style.opacity = "1";
      item.style.right = "0px";
    });
  }

  if (window.scrollY >= projects.offsetTop - 150) {
    cardLeft.forEach((item) => {
      item.style.opacity = "1";
      item.style.left = "0px";
    });
  }
  // ---------onscrll to up show
  if (window.scrollY >= 300) {
    toUp.classList.add("toUpShow");
  } else {
    all.forEach((span) => {
      span.style.width = "0%";
    });

    toUp.classList.remove("toUpShow");

    cardLeft.forEach((item) => {
      item.style.opacity = "0";
      item.style.left = "500px";
    });

    cardRight.forEach((item) => {
      item.style.opacity = "0";
      item.style.right = "500px";
    });
  }
};

// ---------

toUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// switch color------------------

const switchColor = document.querySelector(".switch-color");
const switchMenu = document.querySelector(".switch-color-menu");

// item nav color change
const aboutImg = document.querySelector(".about-img");
const navSpan = document.querySelectorAll(".nav-span");

// item span color change
const moving = document.querySelector(".movingchild");

// title Change
const allChange = document.querySelectorAll(".allChange");

// progress bar
const allSkills = document.querySelectorAll(".all");

// loader-color
const loader = document.querySelector(".loader ");

// localStorage set==========================================
// localStorage.clear()

if (localStorage.red != null) {
  aboutImg.style.backgroundColor = localStorage.red;
  navSpan.forEach((item) => {
    item.style.color = localStorage.red;
  });
  moving.style.backgroundColor = localStorage.red;
  allChange.forEach((item) => {
    item.style.backgroundColor = localStorage.red;
  });
  allSkills.forEach((item) => {
    item.style.backgroundColor = localStorage.red;
  });
  switchColor.style.backgroundColor = localStorage.red;
  loader.style.borderTopColor = localStorage.red;
}
if (localStorage.green != null) {
  aboutImg.style.backgroundColor = localStorage.green;
  navSpan.forEach((item) => {
    item.style.color = localStorage.green;
  });
  moving.style.backgroundColor = localStorage.green;
  allChange.forEach((item) => {
    item.style.backgroundColor = localStorage.green;
  });
  allSkills.forEach((item) => {
    item.style.backgroundColor = localStorage.green;
  });
  switchColor.style.backgroundColor = localStorage.green;
  loader.style.borderTopColor = localStorage.green;
}
if (localStorage.pink != null) {
  aboutImg.style.backgroundColor = localStorage.pink;
  navSpan.forEach((item) => {
    item.style.color = localStorage.pink;
  });
  moving.style.backgroundColor = localStorage.pink;
  allChange.forEach((item) => {
    item.style.backgroundColor = localStorage.pink;
  });
  allSkills.forEach((item) => {
    item.style.backgroundColor = localStorage.pink;
  });
  switchColor.style.backgroundColor = localStorage.pink;
  loader.style.borderTopColor = localStorage.pink;
}
if (localStorage.default != null) {
  aboutImg.style.backgroundColor = localStorage.default;
  navSpan.forEach((item) => {
    item.style.color = localStorage.default;
  });
  moving.style.backgroundColor = localStorage.default;
  allChange.forEach((item) => {
    item.style.backgroundColor = localStorage.default;
  });
  allSkills.forEach((item) => {
    item.style.backgroundColor = localStorage.default;
  });
  switchColor.style.backgroundColor = localStorage.default;
  loader.style.borderTopColor = localStorage.default;
}

switchColor.addEventListener("click", (eo) => {
  switchMenu.classList.toggle("switchMenu");
});

switchMenu.addEventListener("click", (eo) => {
  if (eo.target.classList == "red color") {
    aboutImg.classList.add("toRedBack");
    aboutImg.classList.remove("toGreenBack");
    aboutImg.classList.remove("toBlackBack");
    aboutImg.classList.remove("toDefaultBack");
    // localStorage
    localStorage.setItem("red", "#f72b1c");
    localStorage.removeItem("green");
    localStorage.removeItem("pink");
    localStorage.removeItem("default");

    // ----
    navSpan.forEach((item) => {
      item.classList.add("toRedColor");
      item.classList.remove("toGreenColor");
      item.classList.remove("toBlackColor");
      item.classList.remove("toDefaultColor");
    });
    // ----
    moving.classList.add("toRedBack");
    moving.classList.remove("toGreenBack");
    moving.classList.remove("toBlackBack");
    moving.classList.remove("toDefaultBack");

    // ----
    allChange.forEach((item) => {
      item.classList.add("toRedBack");
      item.classList.remove("toGreenBack");
      item.classList.remove("toBlackBack");
      item.classList.remove("toDefaultBack");
    });
    // ----
    allSkills.forEach((item) => {
      item.classList.add("toRedBack");
      item.classList.remove("toGreenBack");
      item.classList.remove("toBlackBack");
      item.classList.remove("toDefaultBack");
    });
    // ----
    switchColor.classList.add("toRedBack");
    switchColor.classList.remove("toGreenBack");
    switchColor.classList.remove("toBlackBack");
    switchColor.classList.remove("toDefaultBack");
    // ----
  }

  if (eo.target.classList == "green color") {
    aboutImg.classList.add("toGreenBack");
    aboutImg.classList.remove("toRedBack");
    aboutImg.classList.remove("toBlackBack");
    aboutImg.classList.remove("toDefaultBack");
    // localStorage
    localStorage.setItem("green", "#72b626");
    localStorage.removeItem("red");
    localStorage.removeItem("pink");
    localStorage.removeItem("default");

    // ----
    navSpan.forEach((item) => {
      item.classList.add("toGreenColor");
      item.classList.remove("toRedColor");
      item.classList.remove("toBlackColor");
      item.classList.remove("toDefaultColor");
    });
    // ----
    moving.classList.add("toGreenBack");
    moving.classList.remove("toRedBack");
    moving.classList.remove("toBlackBack");
    moving.classList.remove("toDefaultBack");

    // ----
    allChange.forEach((item) => {
      item.classList.add("toGreenBack");
      item.classList.remove("toRedBack");
      item.classList.remove("toBlackBack");
      item.classList.remove("toDefaultBack");
    });
    // ----
    allSkills.forEach((item) => {
      item.classList.add("toGreenBack");
      item.classList.remove("toRedBack");
      item.classList.remove("toBlackBack");
    });
    // ----
    switchColor.classList.add("toGreenBack");
    switchColor.classList.remove("toRedBack");
    switchColor.classList.remove("toBlackBack");
    switchColor.classList.remove("toDefaultBack");
  }

  if (eo.target.classList == "black color") {
    aboutImg.classList.add("toBlackBack");
    aboutImg.classList.remove("toRedBack");
    aboutImg.classList.remove("toGreenBack");
    aboutImg.classList.remove("toDefaultBack");
    // localStorage
    localStorage.setItem("pink", "#ee6192");
    localStorage.removeItem("red");
    localStorage.removeItem("green");
    localStorage.removeItem("default");

    // ----
    navSpan.forEach((item) => {
      item.classList.add("toBlackColor");
      item.classList.remove("toRedColor");
      item.classList.remove("toGreenColor");
      item.classList.remove("toDefaultColor");
    });
    // ----
    moving.classList.add("toBlackBack");
    moving.classList.remove("toRedBack");
    moving.classList.remove("toGreenBack");
    moving.classList.remove("toDefaultBack");

    // ----
    allChange.forEach((item) => {
      item.classList.add("toBlackBack");
      item.classList.remove("toRedBack");
      item.classList.remove("toGreenBack");
      item.classList.remove("toDefaultBack");
    });
    // ----
    allSkills.forEach((item) => {
      item.classList.add("toBlackBack");
      item.classList.remove("toRedBack");
      item.classList.remove("toGreenBack");
      item.classList.remove("toDefaultBack");
    });
    // ----
    switchColor.classList.add("toBlackBack");
    switchColor.classList.remove("toRedBack");
    switchColor.classList.remove("toGreenBack");
    switchColor.classList.remove("toDefaultBack");
  }

  if (eo.target.classList == "default color") {
    aboutImg.classList.add("toDefaultBack");
    aboutImg.classList.remove("toBlackBack");
    aboutImg.classList.remove("toRedBack");
    aboutImg.classList.remove("toGreenBack");
    // localStorage
    localStorage.setItem("default", "#ffbf00");
    localStorage.removeItem("red");
    localStorage.removeItem("green");
    localStorage.removeItem("pink");

    // ----toDefaultColor
    navSpan.forEach((item) => {
      item.classList.add("toDefaultColor");
      item.classList.remove("toBlackColor");
      item.classList.remove("toRedColor");
      item.classList.remove("toGreenColor");
    });
    // ----
    moving.classList.add("toDefaultBack");
    moving.classList.remove("toBlackBack");
    moving.classList.remove("toRedBack");
    moving.classList.remove("toGreenBack");
    // ----
    allChange.forEach((item) => {
      item.classList.add("toDefaultBack");
      item.classList.remove("toBlackBack");
      item.classList.remove("toRedBack");
      item.classList.remove("toGreenBack");
    });
    // ----
    allSkills.forEach((item) => {
      item.classList.add("toDefaultBack");
      item.classList.remove("toBlackBack");
      item.classList.remove("toRedBack");
      item.classList.remove("toGreenBack");
    });
    // ----
    switchColor.classList.add("toDefaultBack");
    switchColor.classList.remove("toRedBack");
    switchColor.classList.remove("toGreenBack");
    switchColor.classList.remove("toBlackBack");
  }
});

const miniMenu = document.querySelector(".mini-menu");
const navlink = document.querySelector(".nav-link");
const exitIconChild = document.querySelector(".exitIconChild");
const navlinks = document.querySelectorAll(".nav-links");


// console.log(navlinks);

miniMenu.addEventListener("click", (eo) => {
  navlink.classList.add("nav-linkShow");
});

exitIconChild.addEventListener("click", (eo) => {
  navlink.classList.remove("nav-linkShow");
});


function remove () {
  navlink.classList.remove("nav-linkShow");
  
}

const aboutt = document.querySelector(".about")
console.log(aboutt)


const onloading = document.querySelector(".onloading");
// const bodyy = document.querySelector("body")

window.onload = function () {};
aboutt.style.marginTop="0px"
aboutt.style.opacity="1"

setTimeout(on, 1000);

function on(params) {
  onloading.style.marginTop = "1000px";
  onloading.style.transition = "2s";
}













function rotate() {
  var lastChild = $('.slider div:last-child').clone();
  /*$('#test').html(lastChild)*/
  $('.slider div').removeClass('firstSlide')
  $('.slider div:last-child').remove();
  $('.slider').prepend(lastChild)
  $(lastChild).addClass('firstSlide')
}

window.setInterval(function(){
  rotate()
}, 4000);
