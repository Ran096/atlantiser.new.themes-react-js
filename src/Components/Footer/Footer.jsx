import React from 'react'
import "./Footer.css"
import FooterImage from "../Image/nav.chakra-container.png"
import { BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
const Footer = () => {
  return (
    <>
      <div className="container-fluid hero-header bg-black py-5">
        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-3 col-md-8">
                <h5 className="text-white mb-3">Policy Info</h5>
                <ul className="list-unstyled text-muted">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Sale</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Report Abuse & Takedown Policy</a></li>
                  <li ><a href="#">FAQ</a></li>
                </ul>
                <ul className="ftco-footer-social p-2">
                <li className="ftco-animate "><a href="#" title="Facebook"><FaFacebookF /></a></li>
                <li className="ftco-animate "><a href="#" title="Twitter"><BsTwitter /></a></li>
                <li className="ftco-animate "><a href="#" title="Instagram"><FaLinkedinIn /></a></li>
                <li className="ftco-animate "><a href="#" title="Linkedin"><FaInstagram /></a></li>
              </ul>
              </div>
              
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Company</h5>
              <ul className="list-unstyled text-muted">
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3"> Business</h5>
              <ul className="list-unstyled text-muted">
                <li><a href="#">Shopping App</a></li>
                <li><a href="#">Sell or Site</a></li>
                <li><a href="#">Get started</a></li>
                <li><a href="#">Media Enquiries</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Popular Links</h5>
              <ul className="list-unstyled text-muted">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Get started</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-3">Subscribe </h5>

              <form action="#">
                <div className="input-group mb-3">
                  <input className="form-control" type="text" placeholder="Your email address" aria-label="Your email address                                                                    " aria-describedby="button-addon2" />
                  <button style={{ backgroundColor: "#333333", color: "#FFFFFF" }} className="btn " id="button-addon2" type="button">Subscribe</button>
                </div>
              </form>
              <p style={{ color: "#A5A5A5" }} className="small">Register now to get updates on promotions and</p>
              <p style={{ color: "#A5A5A5" }} className='small '>coupons. <a style={{ color: "#25A8ED" }} href="#">Or Download App</a></p>
            </div>
          </div>
          <div className="container-fluid p-0">
                <div className=" justify-content-md-end  ">
                    <img src={FooterImage} class="card-img-top" alt="..." />
                    
                </div>
            </div>
      </div>
    </footer >
      </div >
    </>
  )
}

export default Footer