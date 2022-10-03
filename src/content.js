import { signInWithGoogle } from "./firebase";

const Content = () => {
    return ( 
        <div className="main-content mt-5">
            <div className="video-section">
                <h3 className="primary-color text-center fw-bold">EXPLAINER VIDEO</h3>
                <video controls>
                    <source src="./videos/rethink.MP4" type="video/mp4"></source>
                </video>
            </div>
            <div className="card-section">
                <div className="card-body">
                    <div className="card-content">
                        <img src="./images/artificial-intelligence-svgrepo-com 1.png" alt=""  className="card-icons pt-5"/>
                        <h3 className="fw-bold card-header pb-3">MakeAI-assisted Content Choices</h3>
                        <p className="">Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-content">
                        <img src="./images/cards-maintain.png" alt=""  className="card-icons pt-5"/>
                        <h3 className="fw-bold card-header pb-3">Upload and Maintain your Brand Identity</h3>
                        <p className="">Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-content">
                        <img src="./images/cards-informed.png" alt=""  className="card-icons pt-5"/>
                        <h3 className="fw-bold card-header pb-3">Be informed as we create</h3>
                        <p className="">Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.</p>
                    </div>
                </div>
            </div>
            <div className="card-section2">
                <div className="card-body">
                    <div className="card-content">
                        <img src="./images/cards-receive.png" alt=""  className="card-icons pt-5"/>
                        <h3 className="fw-bold card-header pb-3 text-center">Receive and Review</h3>
                        <p className="">The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-content">
                        <img src="./images/cards-publish.png" alt=""  className="card-icons pt-5"/>
                        <h3 className="fw-bold card-header pb-3">Publish and Monitor your contents’ progress</h3>
                        <p className="">The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
                    </div>
                </div>
            </div>

            <div className="offers-section">
                <h3 className="offers-header primary-color text-center pb-4 fw-bold">Transform your Creation Process</h3>
                <p className="text-center pb-5">With a new approach toordering content, you can now stop juggling multiple documents and meetings and start publishing content faster and on demand</p>

                <h3 className="offers-header primary-color text-center pb-4 fw-bold">Activate your business growth with RetinkContent. </h3>
                <p className="text-center">Save time and maintain your brand identity within your budget range or sign up for affordable plans and still access multiple content services like:</p>

                <div className="offers-info row">
                    <div className="offer col-lg-4 col-md-6">
                        <img src="./images/offersblog.png" alt="" />
                        <div className="offer-name">Logos</div>
                        <div className="offer-text pt-4"> Have a unique & creative logo designed to express and represent your brand identity.
                        </div>
                    </div>
                    <div className="offer col-lg-4 col-md-6">
                        <img src="./images/offersblog.png" alt="" />
                        <div className="offer-name">Blog Writing</div>
                        <div className="offer-text pt-4"> Write SEO enriched blog posts as long or short articles on any topic of your choice .
                        </div>
                    </div>
                    <div className="offer col-lg-4 col-md-6">
                        <img src="./images/offerscopywriting.png" alt="" />
                        <div className="offer-name">Animated Videos</div>
                        <div className="offer-text pt-4">Bring animated characters to life to keep your viewers engaged and  entertained.
                        </div>
                    </div>
                    <div className="offer col-lg-4 col-md-6 pt-4">
                        <img src="./images/offersblog.png" alt="" />
                        <div className="offer-name">Product Demo</div>
                        <div className="offer-text pt-4">Introduce your product to potential customers in a clear and creative video.

                        </div>
                    </div>
                    <div className="offer col-lg-4 col-md-6 pt-4">
                        <img src="./images/offersblog.png" alt="" />
                        <div className="offer-name">Copywriting</div>
                        <div className="offer-text pt-4">Have creative and compelling copies written to boost your product, brand, service or company.


                        </div>
                    </div>
                    <div className="offer col-lg-4 col-md-6 pt-4">
                        <img src="./images/offers-social-media-ads.png" alt="" />
                        <div className="offer-name">Social Media Ads</div>
                        <div className="offer-text pt-4">Boost sales and awareness with tailor made ads from experts.


                        </div>
                    </div>
                </div>
            </div>
            <div className="offers-form text-center">
                <form className="form" action="">
                    <h2 className="primary-color fw-bold py-4">Sign Up For The BETA to see more</h2>
                    <div className="form-inputs d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="Business Name" className="secondary-button me-2"/>
                        <input type="text" placeholder="Email" className="secondary-button"/>
                    </div>
                    <button type = "submit" className="primary-button mt-5 m-auto">Notify Me</button>
                    <a href="" className="secondary-button mt-5 m-auto" onClick={signInWithGoogle}>Sign up as a freelance partner</a>
                </form>
            </div>
        </div>
        
     );
}
 
export default Content;