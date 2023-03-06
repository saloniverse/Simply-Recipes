const element1 = document.querySelectorAll(".nav-center div");
const proSubButton = document.createElement("a");
proSubButton.innerText = "Pro Subscription";
proSubButton.className = "btn";
proSubButton.href = "#";
element1[2].appendChild(proSubButton);

const element2 = document.querySelector(".tags-container div");
const myChinese = document.createElement("a");
myChinese.innerText = "Chinese (7)";
myChinese.href = "#";
element2.appendChild(myChinese);

const element3 = document.querySelector(".recipe-gallery");
const mynewDIV = document.createElement("div");
mynewDIV.innerText = "add 6th card here";
mynewDIV.style.fontWeight = "bold";
mynewDIV.className = "card";
element3.appendChild(mynewDIV);

