document.addEventListener("DOMContentLoaded", function () {

    const MenuItems = document.getElementById("MenuItems");
    const menuIcon = document.querySelector(".menu-icon");

    if (MenuItems) {
        MenuItems.style.maxHeight = "0px";
    }

    function menutoggle() {
        if (MenuItems.style.maxHeight === "0px") {
            MenuItems.style.maxHeight = "200px";
        } else {
            MenuItems.style.maxHeight = "0px";
        }
    }

    if (menuIcon) {
        menuIcon.addEventListener("click", menutoggle);
    }

    const productImg = document.getElementById("productImg");
    const smallImgs = document.getElementsByClassName("small-img");

    if (productImg && smallImgs.length > 0) {
        for (let i = 0; i < smallImgs.length; i++) {
            smallImgs[i].addEventListener("click", function () {
                productImg.src = this.src;
            });
        }
    }

});