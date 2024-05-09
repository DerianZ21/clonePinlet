import './functionItem.css';

export const FunctionItem = ({src, content, alt="Texto alternativo"}) => {
  return (
    <div className="function-item">
      <div className="row">
        <div className="col-12">
          <img className="img-fluid" src={src} alt={alt}></img>
        </div>
      </div>
      <div className="row text-wrapper" >
        <div className="col-12">
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}