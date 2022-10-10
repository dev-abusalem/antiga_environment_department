
import React from 'react'
import Table3 from './Table3'

export default function Ipathogens() {
  return (
    <section className='mt-5 mb-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>

                    <div className='mb-3 '>
                        <h4 className='font-italic d-inline p-1 bg-warning'>Invasive Pathogens</h4><br></br>
                    </div>

                    <div>
                      <p>Invasive pathogens can include bacteria, viruses, fungi and parasites that have negatively impacted the organisms of the native environment usually by causing disease. They can have significant impacts on many native plants and animals, agricultural crops and domesticated animals. In many cases invasive pathogens can rapidly spread through natural habitats, affecting the health and resilience of indigenous species. It is necessary to focus on vectors for effective control.</p>
                    </div>

                    <div className='table'>
                        <h5 className='mb-4'>Invasive Alien Pathogens in Antigua and Barbuda</h5>
                        <Table3 />

                        <p>Source: Antigua and Barbuda 2017 Dossier on Invasive Alien Species; 	Plant Pest Management in Antigua and Barbuda (2018); 	Invasive Alien species – Antigua and Barbuda: A Status Report 
                          <span className='tb_bottom'> (2017)</span>
                        </p>


                    </div>

                    <div>
                      <p>There are other pathogens which directly affect human health, e.g. HIV, COVID-19 which should not be ignored, however they are outside the scope of this project.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
