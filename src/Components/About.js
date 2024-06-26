import './About.css';
import logo from '../logo.png';
import HomePage from './HomePage';
import { Link } from 'react-router-dom';
import pp from './pp.jpeg'

function About() {
  return (
    <div className="About">
      <div className="navBar">
        <div className="leftNavBar">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="rightNavBar">
          <Link to="/about">
            <p>ABOUT</p>
          </Link>
          <Link to="/contact">
            <p>CONTACT</p>
          </Link>
        </div>
      </div>
      <div className="underLine"></div>
      <div className="aboutMe">
        <h2>Profile</h2>
        <div className="profileInfo">
          <img src={pp} alt="profile" />
          <p>Hello and welcome to my website! My name is Ujjwal Adhikari, 
            and I'm a passionate artist who loves to draw and paint. I'm currently a student 
            at Howard University, pursuing my academic interests while simultaneously developing
            my artistic talents. Originally from Nepal, I've always been inspired by the rich 
            cultural heritage of my homeland, and I try to incorporate those influences into my
            art whenever possible. For me, art is a way to connect with others, to express myself,
            and to explore the world around me. I believe that everyone has the capacity to appreciate
            art, and I'm excited to share my work with you. Thank you for visiting my website, and 
            I hope you enjoy my paintings!
          </p>
        </div>
      </div>
      <div className="underLine"></div>
      <p>Copyright © 2023 - All Rights Reserved</p>
    </div>
  );
}

export default About;
