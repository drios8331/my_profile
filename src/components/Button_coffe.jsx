import { useState } from "react";
import Image from "./Image";

function Button_coffe() {
    const [ check, setCheck] = useState(false);
    const [rotat, setRotate] = useState('0deg');

    // let check = false;
    return (
        <>
            <div className="container_coffe">
                <input type="checkbox" id="button_coffe" checked={check} />
                {/* <label htmlFor="button_coffe" className="button_button"></label> */}

                <div className="card mb-3 card-coffe shadow-lg">
                    <div className="card-header bg-primary text-white text-center">
                        INVITAME A UN CAFÉ
                    </div>
                    <div className="card-body ms-4">
                        <div className="form_coffe me-3">
                            <form action="" className="me-3">
                                <div className="row">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="Valor"
                                            placeholder="Valor"
                                        />
                                        <label
                                            htmlFor="floatingInput"
                                            className="ms-3"
                                        >
                                            Dinero
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="name@example.com"
                                        />
                                        <label
                                            htmlFor="floatingInput"
                                            className="ms-3"
                                        >
                                            Nombre o Email
                                        </label>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control"
                                            placeholder="Leave a comment here"
                                            id="floatingTextarea"
                                        ></textarea>
                                        <label
                                            htmlFor="floatingTextarea"
                                            className="ms-3"
                                        >
                                            Comentarios
                                        </label>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-primary">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="button_image_coffe">
                    <a href="#val" id="btn_coffe" onClick={() => {
                        const stateCheck = document.querySelector('#button_coffe');
                        if (stateCheck.checked === false) {
                            setCheck(true);
                            setRotate('30deg');
                        } else {
                            setCheck(false);
                            setRotate('0deg');
                        }
                    }}>
                        <Image
                            nameImage="Coffe"
                            classImage="imag_coffe"
                            styleImage={{ width: "60px", rotate: rotat}}
                        />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Button_coffe;
