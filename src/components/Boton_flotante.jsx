// import "../style.css";
import Image from "./Image";

function boton_flotante() {
    return (
        <>
            <div className="container_button">
                <input type="checkbox" name="" id="toggle_button" />
                <label for="toggle_button" className="button_button"></label>
                {/* <Image nameImage="Coffe" /> */}

                <div className="form_button">
                    <a href="#" className="bi bi-facebook"></a>
                    <a href="#" className="bi bi-whatsapp"></a>
                    <a href="#" className="bi bi-messenger"></a>
                    <a href="#" className="bi bi-meta"></a>
                </div>
                <div className="toggle_button">
                    <label
                        for="toggle_button"
                        className="bi bi-plus-circle icon-mas"
                    ></label>
{/* 
                    <Image
                        nameImage="Coffe"
                        for="toggle_button"
                        classImage="icon-mas"
                        styleImage={{ width: "50px", heigth: "20px" }}
                    /> */}
                </div>
            </div>
        </>
    );
}

export default boton_flotante;
