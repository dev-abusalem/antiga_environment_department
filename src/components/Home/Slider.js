import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/images/beautiful-green-lemongrass-leaf-background-with-water-drop.jpg';
import image2 from '../../assets/images/large-herbivorous-lizard-staring-grass.jpg';
import image3 from '../../assets/images/black-widow-spider-garden.jpg';
import image4 from '../../assets/images/lizard-animal-green-lizard-with-blur-background.jpg';
import image5 from '../../assets/images/brown-rat-grass-river-bank.jpg';


function Slider() {
  return (
    <div className='home_slider'>

<Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${image1}?text=First slide&bg=f5f5f5`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h2 className='slider_text'>IAS National Species Strategy and Action Plan 2020-2030</h2>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${image2}?text=Second slide&bg=eee `}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h2 className='slider_text'>IAS National Species Strategy and Action Plan 2020-2030</h2>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${image3}?text=Third slide&bg=e5e5e5 `}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className='slider_text'>IAS National Species Strategy and Action Plan 2020-2030</h2>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${image4}?text=Third slide&bg=e5e5e5 `}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className='slider_text'>IAS National Species Strategy and Action Plan 2020-2030</h2>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${image5}?text=Third slide&bg=e5e5e5 `}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2 className='slider_text'>IAS National Species Strategy and Action Plan 2020-2030</h2>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>


    </div>

      );

}

export default Slider;