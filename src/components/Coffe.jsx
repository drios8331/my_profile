import Image from "./Image";
import "../style.css";

function Coffe() {
  return (
    <>
      <div className="container_coffe">
        <input type="checkbox" name="" id="toggle" />
        <label for="toggle" className="button_coffe"></label>
        {/* <Image nameImage="Coffe" /> */}

        <nav className="nav_coffe">
          <a href="#"> Inicio</a>
          <a href="#"> Contactos</a>
          <a href="#"> Acerca de</a>
          <a href="#"> Suscribete</a>
        </nav>
      </div>
    </>
  );
}

export default Coffe;
