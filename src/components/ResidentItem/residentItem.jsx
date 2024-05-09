import './residentItem.css'

export const ResidentItem = ({src, title, description, alt="Texto alternativo"}) => {
  return (
    <div className="resident-item">
      <div className="row">
        <div className="col-12" style={{height: '32px'}}>
          <img className="img-fluid" src={src} alt={alt}></img>
        </div>
      </div>
      <div className="row text-wrapper" >
        <div className="col-12">
          <div className='row'>
            <div className='col-12'>
              <p className='title'>{title}</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <p className='description'>{description}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}