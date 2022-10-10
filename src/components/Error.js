import React from 'react'
import { Link } from 'react-router-dom'
import './css/error.css'



export default function Error() {
  return (
    <section className='mt-5 mb-5 error_body'>
        <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2 className='error_text'>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="error-actions">     
                     <Link class="btn btn-danger btn-lg" to="/" ><span class="glyphicon glyphicon-home"></span>Take Me Home</Link>
                </div>
            </div>
        </div>
    </div>
</div>
    </section>
  )
}
