import React from 'react'
import './Tourgallery.css'
import g1 from '../Assets/g-1.jpg'
import g2 from '../Assets/g-2.jpg'
import g3 from '../Assets/g-3.jpg'
import g4 from '../Assets/g-4.jpg'
import g5 from '../Assets/g-5.jpg'
import g6 from '../Assets/g-6.jpg'
import g7 from '../Assets/g-7.jpg'
import g8 from '../Assets/g-8.jpg'
import g9 from '../Assets/g-9.jpg'

const Tourgallery = () => {
    return (
        <div>
            <section class="gallery" id="gallery">
                <h1 class="heading">
                    <span>G</span>
                    <span>A</span>
                    <span>L</span>
                    <span>L</span>
                    <span>E</span>
                    <span>R</span>
                    <span>Y</span>
                </h1>
                <div class="gallery-container">
                    <div class="gallery-box">
                        <img src={g1}alt="gall_pic"/>
                            <div class="content">
                                <h3>Amazing Place</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.</p>
                                {/* <a  class="btn-g">See More</a> */}
                                <button className='g-btn'>See More</button>
                            </div>
                    </div>
                    <div class="gallery-box">
                        <img src={g2} alt="gall_pic"/>
                            <div class="content">
                                <h3>Amazing Place</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur  elit. Qui, culpa.</p>
                                <button className='g-btn'>See More</button>
                            </div>
                    </div>
                    <div class="gallery-box">
                        <img src={g3} alt="gall_pic"/>
                            <div class="content">
                                <h3>Amazing Place</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.</p>
                                <button className='g-btn'>See More</button>
                            </div>
                    </div>
                    <div class="gallery-box">
                        <img src={g4} alt="gall_pic"/>
                            <div class="content">
                                <h3>Amazing Place</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.</p>
                                <button className='g-btn'>See More</button>
                            </div>
                    </div>
                    <div class="gallery-box">
                        <img src={g5} alt="gall_pic"/>
                            <div class="content">
                                <h3>Amazing Place</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.</p>
                                <button className='g-btn'>See More</button>
                            </div>
                    </div>
                    <div class="gallery-box">
                        <img src={g6} alt="gall_pic"/>
                            <div class="content">
                                <h3>Amazing Place</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.</p>
                                <button className='g-btn'>See More</button>
                            </div>
                    </div>
                    <div class="gallery-box">
                        <img src={g7} alt="gall_pic"/>
                            <div class="content">
                                <h3>Amazing Place</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.</p>
                                <button className='g-btn'>See More</button>
                            </div>
                    </div>
                    <div class="gallery-box">
                        <img src={g8} alt="gall_pic"/>
                            <div class="content">
                                <h3>Amazing Place</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.</p>
                                <button className='g-btn'>See More</button>
                            </div>
                    </div>
                    <div class="gallery-box">
                        <img src={g9} alt="gall_pic"/>
                            <div class="content">
                                <h3>Amazing Place</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur elit. Qui, culpa.</p>
                                <button className='g-btn'>See More</button>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tourgallery