import React from 'react'
import Table2 from './Table2'
import image1 from '../../assets/images/polypedates-otilophus-closeup.jpg'

export default function Invanimals() {
  return (
    <section className='mb-5'>

        
        <div className="mb-3 page_header_image">
            <img src={image1} alt="my_image1" />
        </div>


        <div className='container'>
            <div className='row'>
                <div className='col-12'>

                    <div className='mb-3 '>
                        <h4 className='font-italic d-inline p-1 bg-warning'>Invasive Animals</h4><br></br>
                    </div>

                    <div className='table'> 
                        <p>
                        Feral or pest animals are species that have been introduced to Antigua and Barbuda since the European settlement. Invasive non-indigenousanimals can have significant impacts on Antigua and Barbuda’s natural environment, as well as being detrimental to agriculture.  They may graze on indigenous plant species, reduce crop production and prey on livestock or on indigenousfauna,or in the case of the mongoose feed on avian eggs, compete with indigenous animals for resources such as food and shelter. Introduced animals have become established in the country through escape from captivity and domestication, deliberate release (legal and illegal) and accidental relocation viatransport. The species that establish in the wild typically have few natural predators or diseases, high reproductive potential,a generalized diet, are adaptable to a modified landscape and have a climatic match between the place where they became established and the place where they occur naturally, for example goats and pigs. These Factors result in populations which do not naturally diminish and can multiply rapidly if conditions are favourable.The National Pest Management Plan (2012) highlights alien invasive black rats as the most pervasive pests on the offshore islands of Antigua and Barbuda. Rats have been eradicated from Redonda, Maiden West, and Great Bird Island, and there has been significant success in preserving the endangered Antigua Racer Snake, improving island vegetation, bird species populations, native snail populations and turtle nesting activities. While on mainland Antigua, the Giant African Snail continues to negatively impact agriculture and residential areas and is spreading at an alarming rate.  Antigua and Barbuda has achieved successes in several eradication programmes that have targeted rats and several species such as the Pink Hibiscus Mealybug (Macoonellicoccus hirsutus) and the papaya Mealybug (Paracoccus marginatus) (see table 2).    
                        </p>

                        <p>Invasive vertebrate animals of major concern within Antigua and Barbuda include invasive fish, rats and house mice. Invasive invertebrate animals in Antigua and Barbuda include EuropeanWasps, European Honey Bees and fire ants.
                        </p>

                        <Table2 />


<p>Source: Antigua and Barbuda 2017 Dossier on Invasive Alien Species; 	Plant Pest Management in Antigua and Barbuda (2018) ;  

                         <span className='tb_bottom'>
                         Invasive Alien Species – Antigua and Barbuda: A Status Report (2017)
                        </span>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
