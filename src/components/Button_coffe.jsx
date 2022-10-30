import { useState } from "react";
import Image from "./Image";

function Button_coffe() {
    const [ check, setCheck] = useState(false);

    // let check = false;
    return (
        <>
            <div className="container_coffe">
                <input type="checkbox" id="button_coffe" checked={check} />
                {/* <label htmlFor="button_coffe" className="button_button"></label> */}

                <div className="card mb-3 card-coffe">
                    <div className="card-header text-primary">
                        INVITAME A UN CAFÉ
                    </div>
                    <div className="card-body">
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
                    <a href="#" id="btn_coffe" onClick={() => {
                        const stateCheck = document.querySelector('#button_coffe');
                        if (stateCheck.checked === false) {
                            setCheck(true);
                        } else {
                            setCheck(false);
                        }
                    }}>
                        <Image
                            nameImage="Coffe"
                            styleImage={{ width: "60px" }}
                        />
                    </a>
                </div>
            </div>

            {/* <div className="container_button">
                <input type="checkbox" name="" id="toggle_button" />
                <label htmlFor="toggle_button" className="button_button"></label>
                <a href="#">
                    <Image
                        nameImage="Coffe"
                        classImage="position-absolute"
                        styleImage={{ width: "3%", margin: "auto" }}
                    />
                </a>
            </div> */}
        </>
    );
}

export default Button_coffe;
