//identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

const menuItems = document.querySelectorAll(
  ".header_menu ul li a.nav, .introducao a, .map p a",
);

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target) - 150;

  scrollToPosition(to);
}

function scrollToPosition(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth"
  // });

  smoothScrollTo(0, to);
}
/*------------------------EDIT PROMO------------------------------------------------*/
const menuItems2 = document.querySelectorAll(
  ".header_menu ul li a.navP, .map p a.navP",
);

menuItems2.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick2);
});

function getScrollTopByHref2(element) {
  const id2 = element.getAttribute("href");
  return document.querySelector(id2).offsetTop;
}

function scrollToIdOnClick2(event) {
  event.preventDefault();
  const to = getScrollTopByHref2(event.target) - 50;

  scrollToPosition2(to);
}

function scrollToPosition2(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth"
  // });

  smoothScrollTo2(0, to);
}
/*------------------------------------------------------------------------*/
/*------------------------EDIT CONTATO------------------------------------------------*/
const menuItems3 = document.querySelectorAll(
  ".header_menu ul li a.navCO, .map p a.navCO",
);

menuItems3.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick3);
});

function getScrollTopByHref3(element) {
  const id3 = element.getAttribute("href");
  return document.querySelector(id3).offsetTop;
}

function scrollToIdOnClick3(event) {
  event.preventDefault();
  const to = getScrollTopByHref3(event.target) - 1;

  scrollToPosition3(to);
}

function scrollToPosition3(to) {
  // window.scroll({
  //   top: to,
  //   behavior: "smooth"
  // });

  smoothScrollTo3(0, to);
}
/*------------------------------------------------------------------------*/
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 600;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}
/*------------------------------------------------Scroll PROMO-----------------*/
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo2(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 600;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}
/*------------------------------------------------Scroll CONTATO-----------------*/
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo3(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 600;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}
/*------------------------------------------------Scroll menu-----------------*/
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("header").addClass("header-mod");
  } else {
    $("header").removeClass("header-mod");
  }
});
