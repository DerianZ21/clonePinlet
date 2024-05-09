import './reviewItem.css';

export const ReviewItem = ({name='Usuario', type='Cliente', stars = 5, comment='Pasé de una y sin perder tiempo'}) => {
  return (
    <div className='row review-item'>
      <div className='col-12 align-items-center'>
        <div className='row'>
          <div className='col-4 col-md-6'>
            <img className='img-fluid avatar' src='assets/Recurso15.png' alt='Avatar'/>
          </div>
          <div className='col-8 col-md-6 text-start align-self-center'>
            <p className='name'>{ name }</p>
            <p className='subtitle'>{type}</p>
            <div className='starts-wrapper d-flex'>
              <img className='star' src='assets/Recurso13.png' alt="Imagen de estrella"/>
              <img className='star' src='assets/Recurso13.png' alt="Imagen de estrella"/>
              <img className='star' src='assets/Recurso13.png' alt="Imagen de estrella"/>
              <img className='star' src='assets/Recurso13.png' alt="Imagen de estrella"/>
              <img className='star' src='assets/Recurso13.png' alt="Imagen de estrella"/>
            </div>
          </div>
        </div>
        <div className='row text-start'>
          <div className='col-12'>
            <p className='comment'>{comment}</p>
          </div>
        </div>
      </div>
    </div>
  )
}