import React from 'react'
import classes from './css/HeaderFooter.module.css';
import image1 from '../assets/images/DOE Department of Environment White Logo Redraw.png';
import {Link} from 'react-router-dom';

export default function Footer() {
 

  return (
    <section className={`${classes.footer_main} mt-5 p-5`}>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='text-center'>
                        <h5>Department of Environment</h5>
                        <div className='footer_image_des'>
                           <Link to="/"><img src={image1}></img></Link> 
                        </div> 
                        <span className='lead'>PO Box W693, #1 Victoria Park Botanical Gardens, Factory Rd, St. John’s, Antigua</span><br></br>
                        <span>+1 (268) 462-4625  | <a href="#" onClick={() => window.location = 'mailto:doe@ab.gov.ag'}>doe@ab.gov.ag</a> </span><br></br>
                        <a href='https://environment.gov.ag'>https://environment.gov.ag</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
