const $animalInfo = document.querySelector(".animal-info");
const $name = document.getElementById("name");
const $color = document.getElementById("color");
const ageElement = document.querySelector("#age");
const infoItem = document.querySelectorAll(".info-item");

$name.className = "dog-name";
$name.classList.remove("info-item");
$color.classList.add("dog-color");

ageElement.textContent = "5살";
$color.style.color = "blue";
