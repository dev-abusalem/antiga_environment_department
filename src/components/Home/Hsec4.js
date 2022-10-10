import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Hsec4() {
  return (
    <section className='mt-5 mb-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className="d-grid gap-2 text-center">

                        <Button variant="success" size="lg" href="https://www.google.com">
                            Download Action Plan 
                            <i class="fa-solid fa-file-pdf ml-1"></i>
                        </Button> 

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
