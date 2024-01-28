function mostraMenu(){
    let menu = document.querySelector('.mobile-menu');

    if(menu.classList.contains("open")){
        menu.classList.remove("open");
        document.querySelector('.icon').src ="./img/menu_white_36dp - Copia.svg"
    }else {
        menu.classList.add("open");
        document.querySelector('.icon').src = "./img/close_white_36dp - Copia.svg"
    }

}