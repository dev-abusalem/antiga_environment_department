import React from 'react'
import images from '../../assets/images/thickets-reeds-banks-river.jpg'


export default function Absec1() {
  return (
    <section className='mb-5'>
        <div className="mb-3 page_header_image">
            <img src={images} alt="my_image1" />
        </div>

       


        <div className='container'>
            <div className='row'>
                <div className='col-12'>

                    <div className='mb-3 '>
                        <h4 className='font-italic d-inline p-1 bg-warning'>About</h4><br></br>
                    </div>
                    
                    <div>
                        <h3>About the National Invasive Species Strategy and Action  Plan (NISSAP) </h3>
                        <p>Invasive plants, animals and pathogens are having significant impacts on the environmental, cultural, social and economic values of Antigua and Barbuda. Impacts include loss of biodiversity, reduced agricultural productivity, deterioration of the quality of sporting grounds and playgrounds, damage to heritage sites, issues of safety and site access and increased fuel loads.  This plan supports a landscape view of invasive species management across Antigua and Barbuda and provides a strategic and coordinated approach to invasive species management across the landscape. It lays out the scope, vision, objectives, guiding principles and actions that staff, external agencies, contractors and landowners can use to manage invasive species within Antigua and Barbuda. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
