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
