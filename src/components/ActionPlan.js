import React from 'react'
import AcTable1 from './ActionPlan/AcTable1'
import images from '../assets/images/fish-lionfish-zebra-pterois-volitans.jpg'

export default function ActionPlan() {
  return (
    <section className='mb-5'>

        <div className="mb-3 page_header_image">
            <img src={images} alt="my_image1" />
        </div>


        <div className='container'>
            <div className='row'>
                <div className='col-12'>

                    <div className='mb-3 '>
                        <h4 className='font-italic d-inline p-1 bg-warning'>The Action Plan</h4><br></br>
                    </div>

                    <div> 
                        <p>Actions necessary to prevent new invasive species arriving and establishing, and to reduce the impact of existing invasive species on the natural heritage and livelihoods of the people of Antigua and Barbuda, are described in the Action Plan below. The Action Plan provides a response to invasive species management with a focus on the priorities, roles and responsibilities of government ministries and agencies.  It includes actions to be undertaken directly by the government’s operations and services and actions that support responses from residents and community groups.The vision, goals, objectives and actions in this document were derived through interdepartmental discussions and review as well as community feedback.
                        </p>
                        
                        <p>The Action Plan has been divided according to the objectives. </p>
                        <p>These actions have been developed through considerable internal and external consultation and are designed to ensure effective implementation of the plan. The implementation of these actions will involve the community, National Steering Committee and external organizations. All actions will be reviewed regularly and revised where necessary.  Some actions will need to be supported financially by the government.  </p>
                        <p>The table of actions are separated into Activities, Actions, Milestones, Review Date, and Responsibilities.</p>
                    </div>


                    <div className='table_wrapper'>
                      <AcTable1 />
                    </div>




                </div>
            </div>
        </div>
    </section>
  )
}
