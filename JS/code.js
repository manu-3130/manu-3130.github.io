const slider = document.getElementById("Slider")
const botones = document.getElementById("SLIDER-BOTONES")
const boton = document.getElementById("Menu_desplegable")
const header = document.getElementsByTagName("header")
const body = document.getElementsByTagName("body")
const section = document.getElementsByClassName("container", "subir")

let sumar =  0

//funciones
function Menu(){
    console.log(boton.style)
    boton.style.display =  "inline-flex"
}

function Slider_izquierdo(){
    if (sumar >= 0){
        sumar--
        console.log(sumar)
        console.log(Sliders[sumar].src)
        
        slider.style.backgroundImage = "url(" + Sliders[sumar].src + ")";
    }else if (sumar <= 0){
        sumar = 3
        console.log(sumar)
        console.log(Sliders[sumar].src)
        slider.style.backgroundImage = "url(" + Sliders[sumar].src + ")";
    }

}

function Slider_derecho(){
    
    if (sumar <= 3){
        sumar++
        console.log(sumar)
        console.log(Sliders[sumar].src)
        slider.style.backgroundImage = "url(" + Sliders[sumar].src + ")";
    }else if (sumar >= 3){
        sumar = 0
        console.log(sumar)
        console.log(Sliders[sumar].src)
        slider.style.backgroundImage = "url(" + Sliders[sumar].src + ")";
    }
}


//ABRIR POP UPS

/* const modal = document.getElementsByClassName("div-flex")
//modal[0].style.display = "none"

function abrir_modal(){
    console.log(modal)
    modal[0].style.display = "block"
    section[0].style.opacity = "0.5"
    section[1].style.opacity = "0.5"
    section[2].style.opacity = "0.5"
    section[3].style.opacity = "0.5"
    section[4].style.opacity = "0.5"
    section[5].style.opacity = "0.5"
    body[0].style.overflow = "hidden"
}

function abrir_modal1(){
    console.log(modal)
    modal[1].style.display = "block"
    section[0].style.opacity = "0.5"
    section[1].style.opacity = "0.5"
    section[2].style.opacity = "0.5"
    section[3].style.opacity = "0.5"
    section[4].style.opacity = "0.5"
    section[5].style.opacity = "0.5"
    body[0].style.overflow = "hidden"
}

function abrir_modal2(){
    console.log(modal)
    modal[2].style.display = "block"
    section[0].style.opacity = "0.5"
    section[1].style.opacity = "0.5"
    section[2].style.opacity = "0.5"
    section[3].style.opacity = "0.5"
    section[4].style.opacity = "0.5"
    section[5].style.opacity = "0.5"
    body[0].style.overflow = "hidden"
}

function abrir_modal3(){
    console.log(modal)
    modal[3].style.display = "block"
    section[0].style.opacity = "0.5"
    section[1].style.opacity = "0.5"
    section[2].style.opacity = "0.5"
    section[3].style.opacity = "0.5"
    section[4].style.opacity = "0.5"
    section[5].style.opacity = "0.5"
    body[0].style.overflow = "hidden"
}

function abrir_modal4(){
    console.log(modal)
    modal[4].style.display = "block"
    section[0].style.opacity = "0.5"
    section[1].style.opacity = "0.5"
    section[2].style.opacity = "0.5"
    section[3].style.opacity = "0.5"
    section[4].style.opacity = "0.5"
    section[5].style.opacity = "0.5"
    body[0].style.overflow = "hidden"
}

function abrir_modal5(){
    console.log(modal)
    modal[5].style.display = "block"
    section[0].style.opacity = "0.5"
    section[1].style.opacity = "0.5"
    section[2].style.opacity = "0.5"
    section[3].style.opacity = "0.5"
    section[4].style.opacity = "0.5"
    section[5].style.opacity = "0.5"
    body[0].style.overflow = "hidden"
}

function abrir_modal6(){
    console.log(modal)
    modal[6].style.display = "block"
    section[0].style.opacity = "0.5"
    section[1].style.opacity = "0.5"
    section[2].style.opacity = "0.5"
    section[3].style.opacity = "0.5"
    section[4].style.opacity = "0.5"
    section[5].style.opacity = "0.5"
    body[0].style.overflow = "hidden"
}

function abrir_modal7(){
    console.log(modal)
    modal[7].style.display = "block"
    section[0].style.opacity = "0.5"
    section[1].style.opacity = "0.5"
    section[2].style.opacity = "0.5"
    section[3].style.opacity = "0.5"
    section[4].style.opacity = "0.5"
    section[5].style.opacity = "0.5"
    body[0].style.overflow = "hidden"
}

//CERRAR POP UPS

function cerrar_modal(){
    modal[0].style.display = "none"
    section[0].style.opacity = "1"
    section[1].style.opacity = "1"
    section[2].style.opacity = "1"
    section[3].style.opacity = "1"
    section[4].style.opacity = "1"
    section[5].style.opacity = "1"
    body[0].style.overflow = "auto"
}


function cerrar_modal1(){
    modal[1].style.display = "none"
    section[0].style.opacity = "1"
    section[1].style.opacity = "1"
    section[2].style.opacity = "1"
    section[3].style.opacity = "1"
    section[4].style.opacity = "1"
    section[5].style.opacity = "1"
    body[0].style.overflow = "auto"
}

function cerrar_modal2(){
    modal[2].style.display = "none"
    section[0].style.opacity = "1"
    section[1].style.opacity = "1"
    section[2].style.opacity = "1"
    section[3].style.opacity = "1"
    section[4].style.opacity = "1"
    section[5].style.opacity = "1"
    body[0].style.overflow = "auto"
}

function cerrar_modal3(){
    modal[3].style.display = "none"
    section[0].style.opacity = "1"
    section[1].style.opacity = "1"
    section[2].style.opacity = "1"
    section[3].style.opacity = "1"
    section[4].style.opacity = "1"
    section[5].style.opacity = "1"
    body[0].style.overflow = "auto"
}

function cerrar_modal4(){
    modal[4].style.display = "none"
    section[0].style.opacity = "1"
    section[1].style.opacity = "1"
    section[2].style.opacity = "1"
    section[3].style.opacity = "1"
    section[4].style.opacity = "1"
    section[5].style.opacity = "1"
    body[0].style.overflow = "auto"
}

function cerrar_modal5(){
    modal[5].style.display = "none"
    section[0].style.opacity = "1"
    section[1].style.opacity = "1"
    section[2].style.opacity = "1"
    section[3].style.opacity = "1"
    section[4].style.opacity = "1"
    section[5].style.opacity = "1"
    body[0].style.overflow = "auto"
}

function cerrar_modal6(){
    modal[6].style.display = "none"
    section[0].style.opacity = "1"
    section[1].style.opacity = "1"
    section[2].style.opacity = "1"
    section[3].style.opacity = "1"
    section[4].style.opacity = "1"
    section[5].style.opacity = "1"
    body[0].style.overflow = "auto"
}

function cerrar_modal7(){
    modal[7].style.display = "none"
    section[0].style.opacity = "1"
    section[1].style.opacity = "1"
    section[2].style.opacity = "1"
    section[3].style.opacity = "1"
    section[4].style.opacity = "1"
    section[5].style.opacity = "1"
    body[0].style.overflow = "auto"
} */
 

//Menu hamburguesa
let menu = document.getElementsByClassName("Menu-hamburguesa-pop-up")

function menuhamburguesa(){
    menu[0].style.display = "block"
    body[0].style.overflow = "hidden"
}
function cerrarmenu(){
    menu[0].style.display = "none"
    body[0].style.overflow = "auto"
}

//NAV

/* let a = document.getElementsByTagName("a")

function cambiarcolor(){
    a[0].style.color = "#009985"
    a[1].style.color = "black"
    a[2].style.color = "black"
}

function cambiarcolor1(){
    a[0].style.color = "black"
    a[1].style.color = "#009985"
    a[2].style.color = "black"
}

function cambiarcolor2(){
    a[0].style.color = "black"
    a[1].style.color = "black"
    a[2].style.color = "#009985"
} */