//Funcion que construye el DOM
function construyeDOM(elemento, ubicacion) {
    ubicacion.append(elemento)
}

//Aparicion con fade in del section principal
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });
window.onload =()=>{$('.principal').fadeIn(4000)}


//Transicion lenta (animacion)
const transicionLenta = (ubicacion, velocidad) => {
    $('html, body').animate({
       scrollTop: $(`#${ubicacion}`).offset().top
    }, velocidad)
}
$('#btn-seguime').click(()=> {transicionLenta("footer", 1000)})
$('#btn-seguime-celu').click(()=> {transicionLenta("footer", 1800)})

//Toggle para la pc y el celu  
function toggle(e){e.click(e.slideToggle(0800))}

//Oculta el aside con el boton de la flechita en la pc
function ocultar(e){e.slideUp(0800)}







