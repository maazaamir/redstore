<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 225f221 (Initial clean commit after Git reset)
document.addEventListener("DOMContentLoaded", function () {
    var MenuItems = document.getElementById("MenuItems");

    function menutoggle() {
        if (MenuItems.style.maxHeight === "0px" || MenuItems.style.maxHeight === "") {
            MenuItems.style.maxHeight = "200px"; // Expand menu
        } else {
            MenuItems.style.maxHeight = "0px"; // Collapse menu
        }
    }

    document.querySelector(".menu-icon").addEventListener("click", menutoggle);
});
var  productImg =document.getElementById("productImg");
var  smallImg =document.getElementById("small-img")

smallImg[0].onclick = function()
{
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function()
{
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function()
{
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function()
{
    productImg.src = smallImg[3].src;
}
var productImg = document.getElementById("productImg");
var smallImgs = document.getElementsByClassName("small-img");

for (let i = 0; i < smallImgs.length; i++) {
    smallImgs[i].onclick = function() {
        productImg.src = smallImgs[i].src;
    }
}
<<<<<<< HEAD
=======
=======
document.addEventListener("DOMContentLoaded", function () {
    var MenuItems = document.getElementById("MenuItems");

    function menutoggle() {
        if (MenuItems.style.maxHeight === "0px" || MenuItems.style.maxHeight === "") {
            MenuItems.style.maxHeight = "200px"; // Expand menu
        } else {
            MenuItems.style.maxHeight = "0px"; // Collapse menu
        }
    }

    document.querySelector(".menu-icon").addEventListener("click", menutoggle);
});
>>>>>>> a3efaf5 (Initial commit)
>>>>>>> 225f221 (Initial clean commit after Git reset)
