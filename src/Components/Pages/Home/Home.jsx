import React from 'react'
import HeaderImg from "../../Image/figure.unit-image.png"
import icons1 from "../../Image/Vector (2).png"
import icons2 from "../../Image/Vector (1).png"
import icons3 from "../../Image/Vector.png"
import "./Home.css"
import image1 from "../../Image/unsplash_ahjzVINkuCs.png"
import image2 from "../../Image/unsplash_vcPtHBqHnKk.png"
const Home = () => {
    return (
        <>
            {/* Home Page Header 2 Section  */}
            <div class="container-fluid hero-header bg-black py-5 mb-4">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div style={{ color: "white" }} className="col-lg-6">
                            <h1 className="display-4 mb-3 animated slideInDown">The Pro Account That Does More</h1>
                            <p className="animated slideInDown">Invoice. Cash Out. Spend. Manage. Centralize. And much more.</p>
                        </div>
                        <div className="col-lg-6 animated fadeIn">
                            <div className="row g-3">
                                <div claclassNamess="col-6 text-end">
                                    <img className="img-fluid  w-100 mb-1" src={HeaderImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div style={{ justifyContent: "center" }} className="d-flex  align-items-center pt-4 animated slideInDown">
                            <button style={{ width: "270px", backgroundColor: "white", color: "black", borderRadius: "20px" }} className="btn" type="button">OPEN ACCOUNT</button>
                            <button style={{ width: "270px", color: "white", borderRadius: "20px" }} className="btn btn-outline-dark ms-4 mb-0 d-none d-sm-block " type="button">COMPARE OUR OFFERS</button>
                        </div>
                        <div style={{ justifyContent: "center" }} className="d-flex  align-items-center pt-4 animated slideInDown">
                            <img alt='' src={icons1} style={{ marginRight: "10px" }} /> <h6 style={{ width: "200px", color: "white" }} className="col-3">1 Month Free</h6>
                            <img alt="" src={icons2} />   <h6 style={{ width: "200px", color: "white" }} className="col-3 ms-4 mb-0 d-none d-sm-block " >Opens in 5 Mins</h6>
                            <img alt="" src={icons3} />  <h6 style={{ width: "200px", color: "white" }} className="col-3 ms-4 mb-0 d-none d-sm-block " >Without Engagement</h6>

                        </div>
                    </div>
                </div>
            </div>
            {/* Home Page 2 Section  */}
            <div className="container-fluid hero-header bg-white py-2 mb-2">
                <div className="container py-2">
                    <div className="row g-4 align-items-center">
                        <div style={{ color: "black" }} className="col-lg-6 d-flex  align-items-center pt-4 animated slideInDown">
                            <div className="mt-1 row text-center d-flex justify-content-between align-items-center">

                                <div className="small-ratings">
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                </div>
                                <h6 style={{ width: "200px", color: "black" }} className="col-3 ms-4 mb-0 d-none d-sm-block " >4.8 App Store</h6>
                            </div>

                            <div class="mt-1 row text-center d-flex justify-content-between align-items-center">

                                <div className="small-ratings">
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                </div>
                                <h6 style={{ width: "200px", color: "black" }} className="col-3 ms-4 mb-0 d-none d-sm-block " >4.6 Google Play</h6>

                            </div>
                        </div>
                        <div className="col-lg-6 animated fadeIn">
                            <div className="row g-3">
                                <div claclassNamess="col-6 col-md-0 col-sm-0 d-flex text-center">
                                    <div className="d-flex" style={{ height: "100px" }}>
                                        <div style={{ width: "5px" }} class="vr">
                                        </div>
                                        <div className='ml-10 '>
                                            <h4 className="mr-4  p-4">+100,000 Satisfied Customers</h4><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Home Page  3 Section */}
            <div className="container-fluid p-0">
                <div className="card   text-black">
                    <img src={image1} class="card-img-top" alt="..." />
                    <h1 style={{ maxWidth: "auto", position: "absolute" }} className="w-100 text-center  position-absolute text-black mt-4  pr-5">More Agile Than a Traditional Bank More <br /> Human Than An Online Bank</h1>

                    <div className="card-img-overlay w-50 ContentStyle ">
                        <h1 className="card-title ">The cards in hand to go further</h1>
                        <p className="card-text">Des services bancaires pour vous accompagner tous les jours,<br /> Accessibles partout et des cartes physiques ou<br /> virtuelles pour vos dépenses pro.</p>
                        <button className="btn btn-secondary btn-lg w-50 rounded">DISCOVER OUR SERVICES</button>
                    </div>
                </div>
            </div>
            {/* Home page 4 Section */}
            <div className="container-fluid p-0">
                <div className="card justify-content-md-end  ">
                    <img src={image2} class="card-img-top" alt="..." />
                    <div className="card-img-overlay1 w-50 text-white ContentStyle1 ">
                        <h1 className="card-title ">Smoother Management</h1>
                        <p className="card-text mt-2">Des services bancaires pour vous accompagner tous les jours,<br /> Accessibles partout et des cartes physiques ou<br /> virtuelles pour vos dépenses pro.</p>
                        <button className="btn bg-white color-black btn-lg w-75 rounded">DISCOVER OUR SERVICES</button>
                    </div>

                    <div className="card-img-overlay2 w-50  text-black ContentStyle2 ">
                        <h1 className="card-title ">A Partner more than a bank</h1>
                        <p className="card-text">Des services bancaires pour vous accompagner tous les jours,<br/> Accessibles partout et des cartes physiques ou virtuelles pour vos dépenses pro.</p>
                        <button className="btn btn-secondary btn-lg w-75 rounded">DISCOVER OUR SUPPORT</button>
                    </div>
                </div>
            </div>


            {/* Home page 5 Section */}

            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home