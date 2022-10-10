import React from 'react'
import image1 from '../assets/images/DOE Department of Environment Logo Redraw.png'

const Contact = () => {
  return (
    <section className='mt-5 mb-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'> 

                  <div className='text-center '>  
                      <h1 className='font-weight-bold p-1 text-success'>CONTACT US</h1><br></br>
                      
                      <div className='contact_page_logo'>
                       <img src={image1}></img>
                      </div>
                       

                      <div>        
                        <h5>Department of Environment</h5>
                              <span className='lead'>PO Box W693, #1 Victoria Park Botanical Gardens, Factory Rd, St. John’s, Antigua</span><br></br>
                              <span>+1 (268) 462-4625  | <a href="#" onClick={() => window.location = 'mailto:doe@ab.gov.ag'}>doe@ab.gov.ag</a> </span><br></br>

                              <a href='https://environment.gov.ag'>https://environment.gov.ag</a>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Contact ;