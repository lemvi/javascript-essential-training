/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const header = document.querySelector(".siteheader");
const menu = document.createElement("ul");
const menuElement1 = document.createElement("li");
const menuElement2 = document.createElement("li");
const menuElement3 = document.createElement("li");
const menuElement4 = document.createElement("li");
const menuElement5 = document.createElement("li");

menu.insertAdjacentElement("beforeend", menuElement1);
menu.insertAdjacentElement("beforeend", menuElement2);
menu.insertAdjacentElement("beforeend", menuElement3);
menu.insertAdjacentElement("beforeend", menuElement4);
menu.insertAdjacentElement("beforeend", menuElement5);

menu.style.listStyleType = "none";

menuElement1.insertAdjacentHTML("beforeend", "<a href = '#'>Home</a>");
menuElement2.insertAdjacentHTML("beforeend", "<a href = '#'>More</a>");
menuElement3.insertAdjacentHTML("beforeend", "<a href = '#'>Shop</a>");
menuElement4.insertAdjacentHTML("beforeend", "<a href = '#'>FAQ</a>");
menuElement5.insertAdjacentHTML("beforeend", "<a href = '#'>About</a>");

menu.classList.add("menu");
menu.setAttribute("id", "menuBar");

header.append(menu);

console.log(
  document
    .querySelectorAll("ul li")
    .forEach(
      (item) => (
        (item.style.display = "inline"), (item.style.margin = "0 10 0 0")
      )
    )
);

console.log(
  document
    .querySelectorAll("ul li:first-child")
    .forEach((item) => (item.style.marginLeft = 0))
);

console.log(
  document.querySelectorAll("a").forEach((item) => (item.style.color = "black"))
);
