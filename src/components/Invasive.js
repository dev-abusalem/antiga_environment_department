import React from 'react'
import images from '../assets/images/wild-ruddy-mongoose-urva-smithii-wild.jpg'

export default function Invasive() {
  return (
    <section className='mb-5'>
        <div className="mb-3 page_header_image">
            <img src={images} alt="my_image1" />
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>

                <div className='mb-3 '>
                        <h4 className='font-italic d-inline p-1 bg-warning'>Invasive Species in Antigua and Barbuda</h4><br></br>
                    </div>



                    <div>
                        <p>Antigua and Barbuda is characterized by an environment of relatively rich agricultural land, open spaces and no rivers. However, these characteristics are under constant threat from the pressures of invasive species from residential and agriculturaldevelopment.Given the huge potential for invasive alien species establishment in Antigua and Barbuda,and limited resources available, it is necessary to prioritize action. This requires the assessment of a species current distribution and its ability to establish and spread.This determines whether it is a high threat to biodiversity,agricultural and amenity assets. There are three types of invasive species:
New: a species that is not yet in Antigua and Barbuda,but may be in neighboring countries  or regions of similar climate and conditions. These species would have significant potential to invade and spread if they were to establish within the country. 
Emerging: a species that has recently been detected in the region or has been here for some time but has only recently begun to expand its distribution.
Established: a species that is already established and widespread within Antigua and Barbuda. 

                        </p>

                        <p>Over the past 25 years, Antigua and Barbuda has seen the introduction of at least 22 verified invasive alien species.  Twelve(12) species have been identified in Antigua and Barbuda as priority concerns.  Giant African snail (Achatina fulica), the Lethal Yellowing Phytoplasma of palms, Black Rats (Rattus rattus), Lionfish (Pterois volitans), the Southern Cattail (Typha domingensis),Cuban Tree Frog (Osteopilus septentrionalis), Agave Snout Weevil (Scyphophorus acupunctatus), Brown Rats (Rattus norvegicus), Citrus Greening disease (Candidatus Liberibacter), Bud Rot of palms (Phytophthora palmivora), Indian Mongoose (Helogate parvula), Varroa mite (Varroa spp. (Varroa mite)and lemongrass (Cymbopogan spp) are reported to be among the nation’s priority invasive alien species. Climate change modeling suggests the region will be subject to higher temperatures and lower rainfall that will affect species’ distribution. The potential for more frequent extreme weather such as flood and fire events increases the opportunity for invasive species establishment. The challenge for the country is to support the protection and restoration of our valuable natural and agricultural assets from the ongoing invasion of a diversity of invasive species.  According to the national budget Antigua and Barbuda spends approximately $1M XCD annually on the management of invasive alien species. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}