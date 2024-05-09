import './bitacoraItem.css';

export const BitacoraItem = ({text='Texto'}) => {
  return (
    <div className='bitacora-item'>
      <div className='row'>
        <div className='col-12 wrapper'>
          <div className='icon-wrapper'>
            <i className="fa-solid fa-check icon"></i>
          </div>
          <p className='text'>{text}</p>
        </div>
      </div>
    </div>
  )
}