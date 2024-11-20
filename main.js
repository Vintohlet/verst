function activateBurgerMenu(){
    const burgerItem = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__nav");
    const menuClose = document.querySelector(".header__burger");

    burgerItem.addEventListener("click", () =>{
        menu.classList.toggle("header__nav-active");
    })
}
activateBurgerMenu();