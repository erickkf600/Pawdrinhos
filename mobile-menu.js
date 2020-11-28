function togglemMenu() {
    var menu = document.getElementById("menu");
    if (document.getElementsByClassName("header__menu--hide").length == 0) {
        menu.className = "header__menu header__menu--hide";
    } else {
        menu.className = "header__menu header__menu--show";

    }
}