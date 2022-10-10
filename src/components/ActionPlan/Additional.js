
import React from 'react'
import { Button } from 'react-bootstrap'

export default function Additional() {
  return (
    <section className='mt-5 mb-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    
                    <div className='mb-3 '>
                        <h4 className='font-italic d-inline p-1 bg-warning'>Acronyms</h4><br></br>
                    </div>

                    <div className='addtion_p'>   
                      <p className='font-weight-bold'>ABNSBAP:</p>
                      <p><span className='font-weight-bold'>CABI:</span>Centre for Agriculture and Biosciences International</p>
                      <p><span className='font-weight-bold'>CBD:</span>Convention on Biological Diversity</p>
                      <p><span className='font-weight-bold'>DOE:</span>Department of Environment</p>
                      <p><span className='font-weight-bold'>GEF:</span>Global Environmental Fund</p>
                      <p><span className='font-weight-bold'>GOAB:</span>Government of Antigua and Barbuda</p>
                      <p><span className='font-weight-bold'>IAS:</span>Invasive Alien Species</p>
                      <p><span className='font-weight-bold'>MALF&BA:</span>Ministry of Agriculture, Lands, Fisheries and Barbuda Affairs</p>
                      <p><span className='font-weight-bold'>MES&T:</span>Ministry of Education, Science and Technology</p>
                      <p><span className='font-weight-bold'>MH&W&E:</span>Ministry of Health, Wellness and the Environment</p>
                      <p><span className='font-weight-bold'>MHL&UR: </span>Ministry of Housing, Lands and Urban Renewal</p>
                      <p><span className='font-weight-bold'>MT&I:</span></p>
                      <p><span className='font-weight-bold'>NIASSC:</span></p>
                      <p><span className='font-weight-bold'>NISSAP: </span>National Invasive Species Strategy and Action Plan 2020-2030</p>
                      <p><span className='font-weight-bold'>OECS: </span>Organization of Eastern Caribbean States</p>
                      <p><span className='font-weight-bold'>TOR:</span>Terms of Reference</p>
                      <p><span className='font-weight-bold'>UNEP:</span></p>
                    </div>

                    <div className='m-4 d-flex justify-content-center'>
                       
                        <Button className='m-1' variant="danger" size="lg" href="https://www.google.com">
                        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>

                           <span className='ml-1'>Back to DOE Site</span>  
                            
                        </Button> 
                        <Button className='m-1' variant="success" size="lg" href="https://www.google.com">
                              Download PDF 
                            <i class="fa-solid fa-file-pdf ml-1"></i>
                        </Button> 
                    </div>


          
                </div>
            </div>
        </div>
    </section>
  )
}
