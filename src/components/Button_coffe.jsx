import Image from "./Image";

function Button_coffe() {
    return (
        <>
            <div className="container_coffe">
                <input
                    type="checkbox"
                    id="button_coffe"
                    style={{ display: "none" }}
                />
                <label for="button_coffe" className="button_button"></label>
                <div className="form_coffe me-3">
                    <form action="" className="me-3">
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                            <label for="floatingInput">Nombre</label>
                        </div>
                        <div className="row">
                            <input type="text" />
                        </div>
                        <div className="row">
                            <input type="text" />
                        </div>
                        <div className="row">
                            <button className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                </div>

                <div className="button_coffe">
                    <Image nameImage="Coffe" styleImage={{ width: "60px" }} />
                </div>
            </div>

            {/* <div className="container_button">
                <input type="checkbox" name="" id="toggle_button" />
                <label for="toggle_button" className="button_button"></label>
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
