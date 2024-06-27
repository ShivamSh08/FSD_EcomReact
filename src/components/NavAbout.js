const NavAbout = () => {
    return ( 
        <section style={{backgroundImage:'./image/bg.png'}}>   

        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid" id="Home">
                <div className="row">
                    <div className="col-sm-3">
                        <a className="navbar-brand" href="#">
                            <img src="./image/logo.png" alt="..."/>
                        </a>
                    </div>
                
                    <div className="col-sm-6 n ">
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#Home" aria-current="page">Home</a>
                                </li>
        
                                <li className="nav-item">
                                    <a className="nav-link active" href="#about" aria-current="page">About</a>
                                </li>
        
                                <li className="nav-item">
                                    <a className="nav-link active" href="#Products" aria-current="page">Products</a>
                                </li>
        
                                <li className="nav-item">
                                    <a className="nav-link active" href="#Reviews" aria-current="page">Reviews</a>
                                </li>
        
                                <li className="nav-item">
                                    <a className="nav-link active" href="#Blog" aria-current="page">Blog</a>
                                </li> 

                                <li className="nav-item">
                                    <a className="nav-link active" href="#contact" aria-current="page" >Contact Us</a>
                                </li> 

                                <li className="nav-item">
                                     {/* <a className="nav-link active" href="#Login" aria-current="page" >Login</a> */}
                                     <button
                                        type="button"
                                        class="btn btn-primary btn-lg"
                                        data-bs-toggle="modal"
                                        data-bs-target="#modalId"
                                    >
                                        Launch
                                    </button>
                            
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

           
        </nav>



        <div className="main">

            <div className="main_tag">
                <h1>WELCOME TO<br/><span>BOOK STORE</span></h1>

                <p>
                    Welcome to our Book Store, where every book is a new adventure waiting to be explored! Whether
                    you're a passionate reader, a student, or simply looking for a thoughtful gift, our diverse
                    collection of books is sure to captivate your imagination.
                </p>
                <a href="#" className="main_btn">Learn More</a>

            </div>

            <div className="main_img">
                <img src="./image/table.png"/>
            </div>

        </div>

    </section>
     );
}
 
export default NavAbout;

// target="_blank"