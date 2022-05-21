import React from 'react'
import logo from "./Images/logo.png";
import about from "./Images/about.png";
import './StudyMaterials.css';
import { Link } from "react-router-dom";
import {AiOutlineArrowRight,AiFillCopyrightCircle} from 'react-icons/ai';
import {IoIosArrowDown} from 'react-icons/io';
function StudyMaterials() {
  return (
    <div>
        {/* <div className="header">
        <input id="nav-toggle" type="checkbox" />
              <img src={logo}></img>
                <div className='buttons'>
                  <button className='exam' >Exam</button>
                    <button className='examresult' >Exam Result</button>
                    <button className='assignments' >Assignments</button>
                    <button className='studymaterial'>Study Material</button>
                </div>
                <label htmlFor="nav-toggle" className="icon-burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
        </div> */}
        <nav>
        <input id="nav-toggle" type="checkbox" /> 
        <img src={logo}></img>
      <ul class="links">
        <li><a href="#home">Exam</a></li>
        <li><a href="#about">Exam Result</a></li>
        <li><a href="#work">Assignments</a></li>
        <li><a href="#projects">Study Material</a></li>
      </ul>
	<label for="nav-toggle" class="icon-burger">
		<div class="line"></div>
		<div class="line"></div>
		<div class="line"></div>
	</label>
</nav>
        <div className='banner'>
            <div className='banner-left'>
                <button className='contents'>
                    <h1>TABLE OF CONTENTS</h1>
                    <h4><AiOutlineArrowRight/>  Maxzon Academy study material</h4>
                    <h4><AiOutlineArrowRight/>  Class-wise Maxzon Academy study material</h4>
                    <h4><AiOutlineArrowRight/>  Maxzon Academy study material-Benefits</h4>
                    <h4><AiOutlineArrowRight/>  How to download Maxzon Academy study material</h4>
                </button>
            </div>
            <div className='banner-right'>
                <button className='material'><h1>Maxzon Academy study material</h1> <img className='aboutimg' src={about}></img></button>
                <textarea rows="14" cols="50" spellcheck="false" >Maxzon Academy Study Material - Maxzon Academy is a postgraduate, research-intensive, international university supported
                     by the participating countries of the East Asia Summit. The university has made available the study material of Maxzon Academy 
                     online on the official website. The purpose of releasing the study material is to help the students in preparing for the exam. 
                     The officials provide the learning material for a total of 105 courses available in the university.  The students ofMaxzon Academy
                      can download and use the study material to prepare for the exam.The students can download the e-content from the official website 
                      of Maxzon Academy. The students pursuing UG, PG, diploma and certificate courses can access the learning material without any login 
                      credentials. The e-content is available in PDF format. The study resources will cover all the topics and help the students to score
                       well in the examination. Read the article to know more about the Maxzon Academy study material. </textarea>
            </div>
            <div className='download'>
              <h1>Maxzon Academy study material</h1>
              <button className='btn'>
                <button className='course'>Select Your Course  <IoIosArrowDown/> </button>
                <button className='semester'>Semester <IoIosArrowDown/> </button>
                <button className='subject'>Subject <IoIosArrowDown/> </button>
                <h3 className='studytext'>Study Material<button className='clickhere' >Click Here</button></h3>
              </button>
            </div>
        </div>
        <div className='row-left'>
              <div className='benefit'>
              <button className='benefits'>
                <h3>Maxzon Academy Study Material: Benefits</h3>
                <h4>
                The officials upload the study material for all the distance education students.
                 The material comprises all the crucial points related to the topics. 
                Aspirants can access the study material anytime from anywhere.
                 Check below the benefits of Maxzon Academy study material-
                </h4>
               <div>
                1.The study material is free of cost.
                <br/>
                2.The study material is accessible to all the aspirants irrespective of their location.<br/>
                3.The students can use the online e-content to prepare for the exam.
                </div>
              </button>
              </div>
              <div className='ben'>
              <button className='howto'>
                <h3>How to Download Maxzon Academy Study Material?</h3>
                <h4>
                The students pursuing a course from the university can download the study material from
                 the official website. No login is required to access the e-content. The purpose of 
                 uploading the study material is to help students prepare for the exam with the correct
                  resource. The online resource is accessible to all irrespective of their location. 
                  Check below the steps to download theMaxzon Academy study material-
                  </h4>
                  <div>
                  1st Step: Visit the official website of Maxzon Academy
                  <br/>
                  2nd Step: Click on the study material  under 'students corner.'
                  <br/>
                  3rd Step: A page with the course and study material link will open.
                  <br/>
                  4th Step: Download the study material
                  </div>
              </button>
              </div>
            </div>
            <div className='footer'>
            <h3>Copyright <AiFillCopyrightCircle /> 2022, Maxzon Academy. All rights reserved.</h3>
            </div>
    </div>
  )
}

export default StudyMaterials