import React from 'react';
import './Tourpackage.css'
import p1 from '../Assets/p-1.jpg'
import p2 from '../Assets/p-2.jpg'
import p3 from '../Assets/p-3.jpg'
import p4 from '../Assets/p-4.jpg'
import p5 from '../Assets/p-5.jpg'
import p6 from '../Assets/p-6.jpg'
import Card from './Card';

const Tourpackage = ({ all_trips }) => {
    return (
        <div>


            <section class="packages" id="packages">
                <h1 class="heading">
                    <span>P</span>
                    <span>A</span>
                    <span>C</span>
                    <span>K</span>
                    <span>A</span>
                    <span>G</span>
                    <span>E</span>
                    <span>S</span>
                </h1>
                <div className='packages'>
                    <div className='packages-container'>
                        {
                            all_trips.map((all_trips) => {
                                return <Card  {...all_trips} ></Card>
                            })
                        }

                    </div>

                </div>
            </section>

        </div>


    )
}

export default Tourpackage