var i = 0;

window.onload = () => {
  if (window.innerWidth < 1000) {
    sideBar.classList.add("closeD");
  } else {
    sideBar.classList.remove("closeD");
  }
  if (window.innerWidth > 576) {
    searchBtnIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
};

const sideLinks = document.querySelectorAll(
  ".sidebarD .side-menu li a:not(.logout):not(.clickSetting)"
);

sideLinks.forEach((item) => {
  const li = item.parentElement;
  item.addEventListener("click", () => {
    sideLinks.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

const menuBar = document.querySelector(".content nav .bx.bx-menu");
const sideBar = document.querySelector(".sidebarD");

menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("closeD");
});

const searchBtn = document.querySelector(
  ".content nav form .form-input button"
);
const searchBtnIcon = document.querySelector(
  ".content nav form .form-input button .bx"
);
const searchForm = document.querySelector(".content nav form");

searchBtn.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault;
    searchForm.classList.toggle("show");
    if (searchForm.classList.contains("show")) {
      searchBtnIcon.classList.replace("bx-search", "bx-x");
    } else {
      searchBtnIcon.classList.replace("bx-x", "bx-search");
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 1000) {
    sideBar.classList.add("closeD");
  } else {
    sideBar.classList.remove("closeD");
  }
  if (window.innerWidth > 576) {
    searchBtnIcon.classList.replace("bx-x", "bx-search");
    searchForm.classList.remove("show");
  }
});

const toggler = document.getElementById("theme-toggle");

toggler.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

function openNav() {
  i++;
  document.getElementById("mySidenav").style.width = "270px";
  if (i > 1) {
    closeNav();
    i = 0;
  }
}

function closeNav() {
  i = 0;
  document.getElementById("mySidenav").style.width = "0px";
}

const mainColorLink = document.querySelectorAll(".choosemain div div");

mainColorLink.forEach((item) => {
  const li = item;
  item.addEventListener("click", () => {
    mainColorLink.forEach((i) => {
      i.classList.remove("border-active");
    });
    li.classList.add("border-active");
  });
});

function mainColorPink() {
  document.body.classList.remove("blue");
  document.body.classList.remove("green");
  document.body.classList.remove("orange");
  document.body.classList.remove("cyan");
  document.body.classList.add("pink");
}

function mainColorBlue() {
  document.body.classList.remove("pink");
  document.body.classList.remove("green");
  document.body.classList.remove("orange");
  document.body.classList.remove("cyan");
  document.body.classList.add("blue");
}

function mainColorGreen() {
  document.body.classList.remove("blue");
  document.body.classList.remove("pink");
  document.body.classList.remove("orange");
  document.body.classList.remove("cyan");
  document.body.classList.add("green");
}

function mainColorOrange() {
  document.body.classList.remove("blue");
  document.body.classList.remove("green");
  document.body.classList.remove("pink");
  document.body.classList.remove("cyan");
  document.body.classList.add("orange");
}

function mainColorCyan() {
  document.body.classList.remove("blue");
  document.body.classList.remove("green");
  document.body.classList.remove("orange");
  document.body.classList.remove("pink");
  document.body.classList.add("cyan");
}
