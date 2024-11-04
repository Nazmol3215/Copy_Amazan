import React from "react";
import  hfdv from '../imagesAll/3.jpg';
import  hfdv21 from '../imagesAll/4.jpg';
import  hfdv22 from '../imagesAll/mob acca11.jpg';
import  hfdv23 from '../imagesAll/2.jpg';
import  hfdv25 from '../imagesAll/mob acca11.jpg';
import  hfdv26 from '../imagesAll/momail2.jpg';
import  hfdv24 from '../imagesAll/liop1.jpg';
import  hfdv241 from '../imagesAll/lop18.jpg';
import  hfdv2421 from '../imagesAll/lop111.jpg';
import { useNavigate } from "react-router-dom";

export default function HomeSection() {
  const navigateTo = useNavigate();
  return (
    <div className="container my-4">
      <div className="row">
        
        {/* Section 1: Pick up where you left off */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h5>Pick up where you left off</h5>
            <div className="row">
              <div className="col-6 mb-3"  onClick={() => navigateTo("/MobaileDetails")}>
                <img src= {hfdv} alt="Motorola Moto G" className="img-fluid" />
                <p className="text-muted">Motorola Moto G Pure</p>
              </div>
              <div className="col-6 mb-3"  onClick={() => navigateTo("/ProductGrid")}>
                <img src= {hfdv23} alt="NUU A23" className="img-fluid" />
                <p className="text-muted">NUU A23Plus Basic</p>
              </div>
              <div className="col-6 mb-3">
                <img src=  {hfdv25} alt="Apple iPhone XR" className="img-fluid" />
                <p className="text-muted">Apple iPhone XR</p>
              </div>
              <div className="col-6 mb-3"  onClick={() => navigateTo("/MobaileDetails")}>
                <img src= {hfdv26}  className="img-fluid" />
                <p className="text-muted">Samsung Galaxy Note</p>
              </div>
            </div>
            <a href="#" className="text-primary">See more</a>
          </div>
        </div>

        {/* Section 2: Continue shopping deals */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h5>Continue shopping deals</h5>
            <div className="row">
              <div className="col-6 mb-3"  onClick={() => navigateTo("/MobaileDetails")}>
                <img src= {hfdv21} alt="Smartphone" className="img-fluid" />
                <p className="text-muted">NUU A23Plus Basic</p>

              </div>
              <div className="col-6 mb-3"  onClick={() => navigateTo("/MobaileDetails")}>
                <img src= {hfdv22} alt="Headphones" className="img-fluid" />
                <p className="text-muted">NUU A23Plus Basic</p>

              </div>
              <div className="col-6 mb-3"  onClick={() => navigateTo("/MobaileDetails")}>
                <img src=  {hfdv23}  alt="Tablet" className="img-fluid" />
                <p className="text-muted">NUU A23Plus Basic</p>

              </div>
              <div className="col-6 mb-3"  onClick={() => navigateTo("/MobaileDetails")}>
                <img src= {hfdv24} alt="Smart device" className="img-fluid" />
                <p className="text-muted">NUU A23Plus Basic</p>

              </div>
            </div>
            <a href="#" className="text-primary">See all deals</a>
          </div>
        </div>

        {/* Section 3: Enjoy all the Prime benefits */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3 border bg-light">
            <h5>Enjoy all the Prime benefits Prime benefits</h5>
            <div className="row">
              <div className="col-6 mb-3" onClick={() => navigateTo("/MobaileDetails")}>
                <img src=  {hfdv24} alt="Essentials" className="img-fluid" />
                <p className="text-muted">Save 15% on essentials</p>
              </div>
              <div className="col-6 mb-3"  onClick={() => navigateTo("/MobaileDetails")}>
                <img src= {hfdv241} alt="Movies and shows" className="img-fluid" />
                <p className="text-muted">Popular movies and </p>
              </div>
              <div className="col-6 mb-3"  onClick={() => navigateTo("/MobaileDetails")}>
                <img src={hfdv2421} alt="Food delivery" className="img-fluid" />
                <p className="text-muted">$0 Grubhub delivery Grubhub delivery  fees</p>
              </div>
              <div className="col-6 mb-3"  onClick={() => navigateTo("/MobaileDetails")} >
                <img src={hfdv24} alt="Fast shipping" className="img-fluid" />
                <p className="text-muted">Fast shipping</p>
              </div>
            </div>
            <a href="#" className="text-primary">Join Prime</a>
          </div>
        </div>
      </div>
    </div>
  );
}
