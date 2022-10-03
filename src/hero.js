import { signInWithGoogle } from "./firebase";


const Hero = () => {
    return (
        <div className="d-flex pt-5 hero-section">
            <div className="header-info pt-5">

                <div className="logo mb-5">
                    <img src="./images/logo.png" alt="Rethink Logo" className="pe-2"/>
                    <img src="./images/Retink.png" alt="" />
                </div>

                <h1 className="mt-5 fw-bold header-maininfo pb-4">Get Advanced AI<br></br>+ Expert Created<span className="primary-color">Logos</span></h1>

                <p className="header-subinfo fw-bold pb-4">Boost your sales <span className="primary-color">10x faster</span> with content customized by our<br></br> unique partnership of <span className="primary-color">human creativity and AI optimization</span></p>

                <form action="">
                    <h2 className="primary-color fw-bold pb-2">Sign Up For The BETA!</h2>
                    <div className="form-body d-flex pb-3">
                        <input type="text" class="hero-input" placeholder="Business Name"/>
                        <p className="pe-3">would like a beta invite sent to </p>
                        <input type="text" class="hero-input" placeholder="@email address"/>
                        <p>when it's ready</p>
                    </div>
                    <div className="buttons d-flex">
                        <button type = "submit" className="primary-button me-5">Notify Me</button>
                        <a href="" className="secondary-button" onClick={signInWithGoogle}>Sign up as a freelance partner</a>
                    </div>
                </form>
            </div>
            <img src="./images/Retink-avatar (1) 1.png" alt="" className="rethink-avatar"/>
        </div>
     );
}
 
export default Hero;