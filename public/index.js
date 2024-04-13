// SCROLLING EFFECT

const wrapper = document.getElementsByClassName("wrapper")[0];
const navbar = document.getElementsByTagName("nav")[0];

let prevScroll = 0;

wrapper.addEventListener("scroll", (event) => {
  let currentScroll = event.target.scrollTop;

  if (currentScroll - prevScroll > 0) {
    // console.log("moving down");
    navbar.style.top = "-80px";
  } else if (currentScroll < prevScroll) {
    // console.log("moving up");
    navbar.style.top = "0px";
  }
  prevScroll = currentScroll;
});

// CURRENT PAGE

const navItems = document.querySelectorAll(".nav-item a");
// const documentUrl = document.URL.split("#");
// const currentPage = documentUrl[documentUrl.length - 1];

if (!document.URL.includes("#")) {
  navItems[0].classList.add("current-page");
}

navItems.forEach((navItem) => {
  if (navItem.href === document.URL) {
    navItem.classList.add("current-page");
    console.log("classlsit added");
  }

  navItem.addEventListener("click", () => {
    setTimeout(location.reload.bind(location), 1);
  });
});
