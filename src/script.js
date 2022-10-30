// import { click } from "@testing-library/user-event/dist/click";

const boton = document.querySelector('#button_coffe');
const btn_coffe = document.querySelector('#btn_coffe');

btn_coffe.addEventListener('click', ()=>{
    boton.checked = true;
});