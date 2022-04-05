import React, { useState } from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { GiCampingTent } from "react-icons/gi";
import { GiTreehouse } from "react-icons/gi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SkyDiving() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [house, setHouse] = useState(0);
  const [tent, setTent] = useState(0);

  return (
    <Section id="sectionContainer">
      <Carousel infiniteLoop autoPlay>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1418846531910-2b7bb1043512?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="diving"
          />
        </div>

        <div className="image">
          <img
            src="https://www.cypres.aero/wp-content/uploads/2020/10/CraigOb-NKP.jpg"
            alt="camp"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1456139333202-745e9029f0ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="camp"
          />
        </div>
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1633891943299-9b140ba00a39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="camp"
          />
        </div>
      </Carousel>
      {/* Content start */}
      <div className="background">
        <div className="content">
          <br></br>
          <br></br>
          <h1 className="title"> Description :-</h1>
          <p className="para">
            Skydiving is parachuting from an airplane for fun. Skydiving can be
            done individually and with groups of people. Training is required.
            Unlike most paratroopers, skydivers often wait until they are low,
            before opening the parachute. The jump can also be made from a
            helicopter or a balloon that is high enough in the sky. Skydiving
            can be an exciting sport.
          </p>
        </div>

        <br></br>
        <br></br>
        <div className="content">
          <h1 className="title"> About the activity : - </h1>
          <p className="para">
            Tandem Skydiving<br></br>
            Getting Your Skydiving License<br></br>
            Group Jumps & Fun Skydiving Exits<br></br>
            Hoop Jumps<br></br>
            Mr. Potato Head Jump<br></br>
            Silly Outfits For Skydiving<br></br>
            Balloon Jumps<br></br>
            Skydiving Out Of A Helicopter<br></br>
            Halo Jumps<br></br>
            Night Jumps<br></br>
            Jumping From A Biplane<br></br>
            Beach Landings<br></br>
          </p>
        </div>
        <div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Advisory</h1>
            <p className="para">
              1. For safety purposes, this activity is not recommended for women
              who are more than 3 months pregnant, anyone that has had major
              surgery, or has a broken leg/arm, has chronic back or neck pains,
              etc.<br></br>
              2. The activity might be delayed or postponed due to weather
              conditions. In such a scenario, the next best possible time slot
              will be informed.<br></br>
              3. Any meals or transfers not mentioned in the itinerary are not
              included in the package cost<br></br>
              4. Any personal expenses or items of personal nature will not be
              in part fo the deal7<br></br>
              5. The package is exclusive of any en-route or personal expenses,
              videography and photography of the flight.<br></br>
              6. ID proof is mandatory for each individual guest at the time of
              booking, and also upon arrival. PAN card will not be considered as
              a valid address proof.<br></br>
              7. Travel insurance covering medical evacuation,hospitalization,
              baggage insurance is not included in the package.<br></br>
              8. The number of guests must not exceed the count mentioned at the
              time of booking.<br></br>
              9.Guidelines issued by the State-Government is to be followed.
              Social distancing to be maintained. Frequent hand sanitization and
              use of mask recommended.<br></br>
            </p>
          </div>
          <br></br>
          <br></br>
          <div className="content">
            <h1 className="title">Accommodation</h1>
            <p className="para">
              Tree House <GiTreehouse />, Tent <GiCampingTent />
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
        {/* <h4>Check In {moment(new Date()).format("MMMM Do YYYY")} </h4> */}
        <table className="table">
          <tr className="heading">
            <th>Type</th>
            <th>Price per camper(s)</th>
            <th>Quantity</th>
            <th>No of People</th>
            <th>Total Price</th>
          </tr>
          <tr>
            <td>Tree House</td>
            <td>4500/2</td>
            <td>
              <h4 className="type">{house}</h4>
              <div className="btnContainer">
                <button
                  className="btn"
                  onClick={() => setHouse(house - (house > 0 ? 1 : 0))}
                >
                  -
                </button>
                <button
                  className="btn"
                  onClick={() => setHouse(house + (house < 10 ? 1 : 0))}
                >
                  +
                </button>
              </div>
            </td>
            <td> {house * 2}</td>
            <td> {house * 4500}</td>
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
    // background-color: #f2f2f2;
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
