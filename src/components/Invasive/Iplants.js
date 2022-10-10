import React from 'react'
import Table1 from './Table1'
import image1 from '../../assets/images/Tanglad_(lemongrass,_Cymbopogon_citratus)_-_Philippines.jpeg'
export default function Iplants() {
  return (
    <section className='mb-5'>


        <div className="mb-3 page_header_image">
            <img src={image1} alt="my_image1" />
        </div>


        <div className='container'>
            <div className='row'>
                <div className='col-12'>

                    <div className='mb-3 '>
                        <h4 className='font-italic d-inline p-1 bg-warning'>Invasive plants</h4><br></br>
                    </div>
                    <div>
                      <p>Hundreds of plant species are present in Antigua and Barbuda, but not yet naturalized. Harris <span className='tb_bottom'>(1965) </span> and other authors  <span className='tb_bottom'>(Lovelace, 1960; Beard, 1949)</span> have collectively identified 204 alien plant species in Antigua. Many were introduced for food or other specific purposes and many have become naturalized.  The current rate of new plant naturalisations in Antigua and Barbuda is at least ten per year, with an estimated 35 species already naturalized.</p>
                    </div>
                    <div className='table'>
                        <h5 className='mb-4'>Invasive Alien Plants in Antigua and Barbuda</h5>
                        <Table1 />
                        <p className='tb_bottom_div mb-4'>
                          Source: Antigua and Barbuda 2017 Dossier on Invasive Alien Species; 	Invasive Alien species – Antigua and Barbuda: A Status Report (2017), *The Wild Plants of Antigua and Barbuda (2009)
                        </p>

                        <p>Weeds, seeds and cuttings can enter and spread across the country through nursery sales, garden plantings, dumped garden cuttings, on vehicles and machinery, in waterways, bywind, by animals and on clothing.Invasive plants can destroy habitats, out-compete native plants,choke waterways, reduce farm productivity, harm livestock and reduce the amenity value of public parks and gardens.
</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
