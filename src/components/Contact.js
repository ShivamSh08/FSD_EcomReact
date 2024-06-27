const Contact = () => {
    return ( 
            <div className="container" id="contact">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" id="message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
     );
}
 
export default Contact;