import React, { useState } from 'react';
import styled from 'styled-components';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';

export default function SignIn() {
  return (
    <Section
      style={{
        fontFamily: "'Lato', sans-serif",
        background: '#f6f5f7',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: '-20px 0 50px',
      }}
    >
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <GrFacebookOption />
              </a>
              <a href="#" className="social">
                <AiOutlineGooglePlus />
              </a>
              <a href="#" className="social">
                <GrLinkedinOption />
              </a>
            </div>
            <span> or use your email for registration</span>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign UP</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social">
                <GrFacebookOption />
              </a>
              <a href="#" className="social">
                <AiOutlineGooglePlus />
              </a>
              <a href="#" className="social">
                <GrLinkedinOption />
              </a>
            </div>
            <span> or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1> Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1> Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us </p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  * {
    box-sizing: border-box;
  }

  h1 {
    font-weight: bold;
    margin: 0;
  }
  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
  }
  span {
    font-size: 12px;
  }
  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }
  .container {
    background: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.85) 0px 5px 15px;
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 48%;
    min-height: 580px;
  }
  .form-container form {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .social-container {
    margin: 20px 0;
  }
  .social-container a {
    border: 1px solid #ddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }
  .form-container input {
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
  }

  button {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background: #ff4b2b;
    color: #fff;
    font-size: 12px;
    font-width: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
  }
  button:active {
    transform: scale(0.95);
  }

  button:focus {
    outline: none;
  }
  .button .ghost {
    background: transparent;
    border-color: #fff;
  }
  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }
  .sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
  }
  .sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transform: transform 0.6s ease-in-out;
    z-index: 100;
  }
  .overlay {
    background-image: url('https://images.unsplash.com/photo-1589979812000-4eab44f02c30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=695&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transform: transform 0.6s ease-in-out;
  }
  .overlay-panel {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateX(0);
    transform: transform 0.6s ease-in-out;
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }
  .overlay-left {
    transform: translateX(-20%);
  }
`;
