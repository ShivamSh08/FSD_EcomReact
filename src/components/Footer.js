const Footer = () => {
    return ( 
        <footer>
        <div className="footer_main">

            <div className="tag">
                <img src="image/logo.png"/>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quaerat ipsa aspernatur ad
                    sequi, dolore eveniet vitae quasi. Excepturi ipsa odio impedit sequi at hic velit, minus
                    vero sint. Voluptas?
                </p>

            </div>

            <div className="tag">
                <h1>Quick Link</h1>
                <a href="#Home">Home</a>
                <a href="#about">About</a>
                <a href="Products.html">Products</a>
                <a href="Products.html">Arrivals</a>
                <a href="#">Reviews</a>
                <a href="#">Blog</a>

            </div>

            <div className="tag">
                <h1>Contact Info</h1>
                <a href="#"><i className="fa-solid fa-phone"></i>+94 12 345 6789</a>
                <a href="#"><i className="fa-solid fa-phone"></i>+94 32 444 699</a>
                <a href="#"><i className="fa-solid fa-envelope"></i>bookstore123@gmail.com</a>

            </div>

            <div className="tag">
                <h1>Follow Us</h1>
                <div className="social_link">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                </div>

            </div>

            <div className="tag">
                <h1>Newsletter</h1>
                <div className="search_bar">
                    <input type="text" placeholder="You email id here"/>
                    <button type="submit">Subscribe</button>
                </div>
            </div>

        </div>

        <p className="end">Design By<span><i className="fa-solid fa-face-grin"></i> Shivam Shrotria</span></p>

    </footer>
     );
}
 
export default Footer;