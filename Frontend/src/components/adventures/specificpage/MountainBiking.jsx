import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaHotel } from "react-icons/fa";
import { GiCampingTent } from "react-icons/gi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MountainBiking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hotel, setHotel] = useState(0);
  const [tent, setTent] = useState(0);

  return (
    <Section id="sectionContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1624879844389-28236d904da4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="biking"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1548360046-aedb7ed40838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="biking"
          />
        </div>

        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="biking"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1511264568880-afe3b1951e46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="biking"
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
            Mountain biking is a sport of riding bicycles off-road, often over
            rough terrain, usually using specially designed mountain bikes.
            Mountain bikes share similarities with other bikes but incorporate
            features designed to enhance durability and performance in rough
            terrain, such as air or coil-sprung shocks used as suspension,
            larger and wider wheels and tires, stronger frame materials, and
            mechanically or hydraulically actuated disc brakes. Mountain biking
            can generally be broken down into five distinct categories: cross
            country, trail riding, all mountain (also referred to as "Enduro"),
            downhill, and free ride.
          </p>
        </div>

        <br></br>
        <br></br>
        <div className="content">
          <h1 className="title"> About the activity </h1>
          <p className="para">
            Day 1 - Benefits you'll get from Mountain Biking<br></br>
            <br></br>
            1. Whole-body muscle work out
            <br></br>
            2.(Joint health)Whether you ride at high-intensity or low-intensity,
            any time spent on your bike could take inches off your waistline.
            You can burn 600-800 calories an hour while riding, more if you’re
            at high-intensity. <br></br>
            3.As well as working out your muscles you’ll be using all of your
            joints, keeping them working better for longer. <br></br>
            4.In the evening, you will be served tea and snacks, followed by a
            singing and dancing activity around the bonfire.<br></br>
            5.( Bigger, better appetite)Mountain biking will increase your
            appetite, and with the calories you’ve burned, you can safely serve
            up an extra-large portion – just remember to eat your greens.
            <br></br>
            <br></br>
          </p>
        </div>
        <div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Things we provide</h1>
            <p className="para">
              1. Spare tubes (Two) ,<br></br> 2. Patch kit <br></br> 3. Tire
              pump <br></br> 4. Multi-tool <br></br> 5. Tire lever <br></br>6.
              Chain lube <br></br> 7. Lip balm ,Sunscreen <br></br>8. Packable
              rain jacket <br></br>9. First-aid kit<br></br>
              10. Derailleur hanger<br></br> 11. Master link <br></br>12.
              Chainring bolt
              <br></br> 13. Zip-ties <br></br>14. Spare spoke with nipple
              <br></br> 15. Small but bright headlight <br></br>16. Tool roll or
              pouch
            </p>
          </div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Accommodation</h1>
            <p className="para">
              Hotel <FaHotel /> , Tent <GiCampingTent />
            </p>
          </div>
        </div>
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
            <td>Hotel</td>
            <td>3500/3</td>
            <td>
              <h4 className="type">{hotel}</h4>
              <div className="btnContainer">
                <button
                  className="btn"
                  onClick={() => setHotel(hotel - (hotel > 0 ? 1 : 0))}
                >
                  -
                </button>
                <button
                  className="btn"
                  onClick={() => setHotel(hotel + (hotel < 10 ? 1 : 0))}
                >
                  +
                </button>
              </div>
            </td>
            <td> {hotel * 3}</td>
            <td> {hotel * 3500}</td>
          </tr>
          <tr>
            <td>Tent</td>
            <td>2500/2</td>
            <td>
              <h4 className="type">{tent}</h4>
              <div className="btnContainer">
                <button
                  className="btn"
                  onClick={() => setTent(tent - (tent > 0 ? 1 : 0))}
                >
                  -
                </button>
                <button
                  className="btn"
                  onClick={() => setTent(tent + (tent < 10 ? 1 : 0))}
                >
                  +
                </button>
              </div>
            </td>
            <td> {tent * 2}</td>
            <td> {tent * 2500}</td>
          </tr>
        </table>
        <br></br>

        <button className="booking">Book Camp</button>
        <br></br>
        <br></br>
      </div>
      {/* Booking End */}
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
