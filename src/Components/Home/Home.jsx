import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div className="home--main">
            <div className='home__left'>
                <h1 className='home--heading'>Ali Joshany</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium sunt ad suscipit tenetur, ab incidunt consequatur omnis placeat quaerat similique.</p>
                <button className='home--btn'><a href='/projects'>Projects</a></button>
            </div>

            <div>
                <img src="./public/images/home.jpg" alt="Ali Joshany" width="500px" className='home--img' />
            </div>
        </div>
    )
}
