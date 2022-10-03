const Contact = () => {
    return ( 
        <div className="contact-section d-flex justify-content-between">
            <div>
                <div className="logo mb-5">
                    <img src="./images/logo.png" alt="Rethink Logo" className="pe-2"/>
                    <img src="./images/Retink.png" alt="" />
                </div>
                <div className="contact-textbox d-flex text-left">
                    <div className="first-column">
                        <p className="fw-bold">Product by Retink Media UG</p>
                        <p className="fw-bold">Bonn, Germany</p>
                    </div>
                    <div className="second-column">
                        <p className="fw-bold ms-5">Get Early Access</p>
                        <p className="fw-bold ms-5">Provide Feedback</p>
                    </div>
                </div>
            </div>
            <div className="social-links">
                <p className="connect text-left">Connect with Us</p>
                <div className="social-media-icons d-flex justify-content-between">
                    <a href="" className="me-3"><img src="./images/Facebook.png" alt="" /></a>
                    <a href="" className="me-3"><img src="./images/Twitter.png" alt="" /></a>
                    <a href="" className="me-3"><img src="./images/LinkedIn.png" alt="" /></a>
                    <a href="" className="me-3"><img src="./images/YouTube.png" alt="" /></a>
                    <a href="" className="me-3"><img src="./images/Pinterest.png" alt="" /></a>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;