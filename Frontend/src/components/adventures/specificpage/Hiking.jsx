import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaWalking } from "react-icons/fa";
import { GiMountainCave } from "react-icons/gi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Hiking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [tent, setTent] = useState(0);
  const [backPack, setBackPack] = useState(0);
  return (
    <Section id="sectionContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="hiking"
          />
        </div>

        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1623945619536-63f2cd1bad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="hiking"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1444405406630-ac78b6e0b1fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80"
            alt="hiking"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1559680343-d8ac0cec3859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
            alt="hiking"
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
            Hiking is a long, vigorous walk, usually on trails or footpaths in
            the countryside. Walking for pleasure developed in Europe during the
            eighteenth century. Religious pilgrimages have existed much longer
            but they involve walking long distances for a spiritual purpose
            associated with specific religions.
          </p>
        </div>

        <br></br>
        <br></br>
        <div className="content">
          <h1 className="title"> About the activity </h1>
          <p className="para">
            Day 1 - Adventure Activities Day<br></br>
            <br></br>
            1.Reach campsite in Manali on your own.<br></br>
            2.Drop your bags at the campsite and enjoy the activities arranged
            for you at the camp.<br></br>
            3.The guide will take you for hiking which will take around 1.5
            hours.<br></br>
            4.In the evening, you will be served tea and snacks, followed by a
            singing and dancing activity around the bonfire.<br></br>
            5.Dinner and overnight in the riverside camp with attached washroom.
            <br></br>
            <br></br> <br></br>
            Day 2 - Paragliding and checkout from campsite<br></br> <br></br>1.
            Post Breakfast , The Group will head to paragliding takeoff point{" "}
            <br></br>2. The flight lasts 20 minutes with experienced glider
            <br></br> 3. The pilot will take care of controlling the flight
            while you enjoy the mesmerizing views <br></br>4. You will then come
            back to camp to end the tour here
          </p>
        </div>
        <div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Things to Carry</h1>
            <p className="para">
              1.Thrillophilia voucher (can present mobile voucher)<br></br>{" "}
              2.Valid ID proof for each member<br></br> 3.Personal toiletries
              and medication (if any)<br></br> 4.Warm and comfortable clothes
              <br></br> 5.Slippers and comfortable shoes <br></br>6.Water
              bottles, backpack, energy bars/snacks, etc.<br></br>
              7.Mosquito & insect repellent<br></br> 8.Sunscreen lotion<br></br>{" "}
              9.Sunglasses<br></br>
              10.Binoculars <br></br>11.Camera <br></br>12.Flashlight (with
              spare batteries)<br></br>
            </p>
          </div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Accommodation</h1>
            <p className="para">
              Trekking <FaWalking /> , Climbing <GiMountainCave />
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
          <tr>
            <td>BackPack</td>
            <td>1500/1</td>
            <td>
              <h4 className="type">{backPack}</h4>
              <div className="btnContainer">
                <button
                  className="btn"
                  onClick={() => setBackPack(backPack - (backPack > 0 ? 1 : 0))}
                >
                  -
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    setBackPack(backPack + (backPack < 10 ? 1 : 0))
                  }
                >
                  +
                </button>
              </div>
            </td>
            <td> {backPack * 1}</td>
            <td> {backPack * 1500}</td>
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
