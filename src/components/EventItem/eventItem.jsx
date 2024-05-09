import "./eventItem.css";

export const EventItem = ({src, title, description, alt="Texto alternativo", type="normal"}) => {
  let itemWidth = "col-12";
  let textWidth = "col-7";
  let imgWidth = "col-4";

  switch(type) {
    case 'medium':
      itemWidth = "col-12 col-sm-10 offset-sm-1"
      break;
    case 'small':
      itemWidth = "col-8 offset-2"
      break;
    default:
      itemWidth = "col-12";
  }
  return (
    <div className={`event-item ${type} ${itemWidth}`}>
      <div className="row align-items-center">
        <div className="col-12">
          <div className="row">
          
            <div className={`${textWidth} offset-1 text-start align-self-center`}>
              <div className="row">
                <p className="title">{title}</p>
              </div>
              <div className="row">
                <p className="description">{description}</p>
              </div>
            </div>
            <div className={imgWidth}>
              <img className="img-fluid image" src={src} alt={alt}></img>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  )
}