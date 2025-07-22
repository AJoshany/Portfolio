import React from 'react'
import './Skills.css'

export default function Skills() {
    return (
        <>
            <div className='skills-container'>
                <div className='skills__heading'>
                    <h1>Skills</h1>
                    <p>These are some of the tools in my developer’s toolbox.
                        To see everything I’ve been sharpening, take a look at my full resume.</p>
                </div>
                <div className="skills__box">
                    <div className="skill">
                        <svg class="icon">
                            <use xlinkHref="/sprite-skills.svg#React-icon"></use>
                        </svg>
                        <h3>ReactJs</h3>
                    </div>
                    <div className="skill">
                        <svg class="icon">
                            <use xlinkHref="/sprite-skills.svg#cdnlogo.com_javascript"></use>
                        </svg>
                        <h3>Javascript</h3>
                    </div>
                    <div className="skill">
                        <svg class="icon">
                            <use xlinkHref="/sprite-skills.svg#HTML5_Badge"></use>
                        </svg>
                        <h3>HTML</h3>
                    </div>
                    <div className="skill">
                        <svg class="icon">
                            <use xlinkHref="/sprite-skills.svg#CSS3_logo"></use>
                        </svg>
                        <h3>CSS</h3>
                    </div>
                    <div className="skill">
                        <svg class="icon">
                            <use xlinkHref="/sprite-skills.svg#Tailwind_CSS_Logo"></use>
                        </svg>
                        <h3>Tailwind</h3>
                    </div>

                    <div className='centered-row'>
                        <div className="skill">
                            <svg class="icon">
                                <use xlinkHref="/sprite-skills.svg#Bootstrap_logo"></use>
                            </svg>
                            <h3>Bootstrap</h3>
                        </div>
                        <div className="skill">
                            <svg class="icon">
                                <use xlinkHref="/sprite-skills.svg#WordPress_blue_logo"></use>
                            </svg>
                            <h3>WordPress</h3>
                        </div>
                    </div>
                </div>
            </div>
            {/* <svg class="icon">
                <use xlink:href="#Git_icon"></use>
            </svg><svg class="icon">
                <use xlink:href="#HTML5_Badge"></use>
            </svg><svg class="icon">
                <use xlink:href="#React-icon"></use>
            </svg><svg class="icon">
                <use xlink:href="#Tailwind_CSS_Logo"></use>
            </svg><svg class="icon">
                <use xlink:href="#WordPress_blue_logo"></use>
            </svg><svg class="icon">
                <use xlink:href="#Bootstrap_logo"></use>
            </svg><svg class="icon">
                <use xlink:href="#cdnlogo.com_javascript"></use>
            </svg> */}
        </>
    )
}
