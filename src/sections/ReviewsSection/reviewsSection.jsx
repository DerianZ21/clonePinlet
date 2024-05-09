import Slider from 'react-slick';
import { ReviewItem } from '../../components/ReviewItem/reviewItem';
import './reviewsSection.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export const ReviewsSection = () => {
  return (
    <div id="reviews-section" className="reviews-section">
      <div className='container'>
        <div className="row">
          <div className="col-12 col-xl-10 offset-xl-1">
            <div className="row header-wrapper">
              <div className="col-12 text-center header">
                <p>Tus visitas pasan tranqui</p>
              </div>
            </div>

            <div className='row carrousel-wrapper align-items-center'>
              <div className='col-12 p-4 col-lg-8 offset-lg-2'>
                <Slider {...settings}>
                  <div className='p-4'>
                    <ReviewItem name='Daniela Gallego'/>
                  </div>
                  <div className='p-4'>
                    <ReviewItem name='Patricia Palacios' comment='Es bueno entrar sin hacer mucha fila'/>
                  </div>
                  <div className='p-4'>
                    <ReviewItem name='Nicole Villao' comment='Facil y sencillo usando solo el QR'/>
                  </div>
                </Slider>
              </div>
            </div>

            <div className='bottom-space'></div>
          </div>
        </div>
      </div>
    </div>
  )
}