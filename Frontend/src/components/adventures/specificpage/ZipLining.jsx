import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ZipLining() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [form, setForm] = useState(0);

  return (
    <Section id="sectionContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://www.choicehotels.com/cms/images/choice-hotels/pace/hero-explore-zip-lining-locations-ziplining/hero-explore-zip-lining-locations-ziplining.jpg"
            alt="ziplining"
          />
        </div>

        <div className="image">
          <img
            src="https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.newyorkupstate.com/home/nyup-media/width2048/img/outdoors/photo/2015/06/13/zip-lining-at-hunter-mountain-in-the-catskills-7d227ecd15cd18be.jpg"
            alt="ziplining"
          />
        </div>
        <div className="image">
          <img
            src="https://traveler.marriott.com/wp-content/uploads/2018/02/zipline.jpg"
            alt="ziplining"
          />
        </div>
      </Carousel>
      {/* Content start */}
      <div className="background">
        <div className="content">
          <br></br>
          <br></br>
          <h1 className="title"> Description</h1>
          <p className="para">
            A zip-line, zip line, zip-wire, or flying fox is a pulley suspended
            on a cable, usually made of stainless steel, mounted on a slope. It
            is designed to enable cargo or a person propelled by gravity to
            travel from the top to the bottom of the inclined cable by holding
            on to, or being attached to, the freely moving pulley. It has been
            described as essentially a Tyrolean traverse that engages gravity to
            assist its speed of movement. Its use is not confined to adventure
            sport, recreation, or tourism, although modern-day usage tends to
            favor those meanings.
          </p>
        </div>

        <br></br>
        <br></br>
      </div>
      {/* Content End */}
      <br></br>
      <br></br>
      {/* Booking */}

      <div className="container">
        <br></br>
        <h1>Select Camping Dates</h1>
        <br></br>
        <div className="date">
          <h4 className="checkIn">Check In </h4>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            minDate={new Date()}
            dateFormat="dd/MM/yyyy , p"
            placeholderText="Select Date"
          />
          <br></br>
          <br></br>
        </div>
        <table className="table">
          <tr className="heading">
            <th>Type</th>
            <th>Price per camper(s)</th>
            <th>Quantity</th>
            <th>No of People</th>
            <th>Total Price</th>
          </tr>
          <tr>
            <td>Form Cottage</td>
            <td>5500/4</td>
            <td>
              <h4 className="type">{form}</h4>
              <div className="btnContainer">
                <button
                  className="btn"
                  onClick={() => setForm(form - (form > 0 ? 1 : 0))}
                >
                  -
                </button>
                <button
                  className="btn"
                  onClick={() => setForm(form + (form < 10 ? 1 : 0))}
                >
                  +
                </button>
              </div>
            </td>
            <td> {form * 4}</td>
            <td> {form * 5500}</td>
          </tr>
        </table>
        <br></br>

        <button className="booking">Book Camp</button>
        <br></br>
        <br></br>
      </div>
    </Section>
  );
}

const Section = styled.section`

 
  .carousel {
    display: flex;
    justify-content: center;
    
  }
  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    // background: #595f5f;
  }
 
  .carousel .carousel-status{
    display:none;
  }

  .carousel .thumb {
    display: none;
  }

  .carousel .slider {
    background-size: cover;
    height: 80vh;
    border-radius: 25px;
  }
  .carousel .slide img {
    max-height: 100%;
    // width: auto;
  }
  .image {
    // height: 100%;
    // width: auto;
  }
  .background {
    background-color:;
    border-radius: 15px;
  }

  .content {
    display: grid;
    gap: 3rem;
    padding: 0 3rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #8338ec14;

    // background-image: url("https://t4.ftcdn.net/jpg/03/10/16/27/360_F_310162798_6hWbaSFgDtWp4AhhaKPlTgAZUDL1c4UY.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    border-radius: 1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
    }
    .title {
      text-transform: uppercase;
      justify-content: center;
      color: black;
      font-family:'Lato',sans-serif;
      font-weight:bold;
      
    }
    .para {
      margin: 30px;
      // text-indent: 50px;
      text-align: justify;
      letter-spacing: 0.7px;
      color: black;
      font-family: 'Lato', sans-serif;
      line-height:1.5rem;
    }
  }

  //Bookings start
  .container{
   font-family: 'Lato', sans-serif;
   line-height:1.5rem;
    text-align:center;
   float:center;
   background-color: #e6ffff;
   border-radius: 1rem;
   transition: 0.3s ease-in-out;
   &:hover {
     transform: translateX(0.4rem) translateY(-1rem);
     box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
     
   }
 
  }
    .table {
      padding:15px 15px;
      margin:auto;
      table-layout:fixed;
      width: fit-content;

  }
 
  .heading {
    background-color:#ffff66;
    border:none;
    border-radius:15px;
   
   }
   td, th {
     border: 1px solid #dddddd;
     text-align: center;
     padding: 8px;
     border:none;
   }
 
   .btn{
     margin:3px;
     padding:5px;  
   }

   //date start

   input {
     padding:4px;
     margin-top:13px;
     text-align:center;

   }
 
   .react-datepicker-wrapper {
    width:35%;
   }
   //date end
   
  
   .booking {
       padding: 10px 15px;
       font-size: 14px;
       cursor: pointer;
       text-align: center;
       text-decoration: none;
       outline: none;
       color: #fff;
       background-color: #4caf50;
       border: none;
       border-radius: 15px;
       box-shadow: 0 9px #99;
       
   }
   //Bookings End

  //Responsive
  @media all and (max-width: 1024px) {
    .carousel .slide img {
     width:auto;
    }
    @media all and (max-width:425px) {
      .carousel .slider {
       height: 35vh;
      }
      .carousel .slide img {
        max-height: 100%;
        width: 100%;
      }
      .content .para{
        // letter-spacing: 1px;

      }
      @media all and (max-width:375px) {
        .carousel .slider {
      height: 30vh;
        
        }
        .carousel .slide img {
          max-height: 100%;
          width: 100%;
        }
        @media all and (max-width:320px) {
          .carousel .slider {
        height: 25vh;
          
          }
          .carousel .slide img {
            max-height: 100%;
            width: 100%;
          }
`;
