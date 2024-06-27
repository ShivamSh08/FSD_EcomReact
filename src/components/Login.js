const Login = () => {
    return (
            <div
                className="modal fade"
                id="modalId"
                tabindex="-1"
                role="dialog"
                aria-labelledby="modalTitleId"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalTitleId">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div class="mb-3">
                                    <label for="" class="form-label">User Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name=""
                                        id=""
                                        aria-describedby="helpId"
                                        placeholder=""
                                    />
                                </div>

                                <div class="mb-3">
                                    <label for="" class="form-label">Password</label>
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        class="form-control"
                                        placeholder=""
                                        aria-describedby="helpId"
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" >Login</button>
                        </div>
                    </div>
                </div>
            </div>
    
    );
}
 
export default Login;
// tabindex="-1"{/*<button
// type="button"
// className="btn btn-primary btn-lg"
// data-bs-toggle="modal"
// data-bs-target="#modalId"
// >
// Launch
// </button> */}