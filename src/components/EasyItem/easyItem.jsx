import "./easyItem.css";

export const EasyItem = ({number, text, selected=false}) => {
  return (
    <div className={"easy-item " + (selected?"selected":"") }>
      <div className="row steps">
        <div className="col-12 col-md-10 offset-md-1">
          <div className="row align-items-center">
            <div className="col-auto">
              <p className="number">{number}</p>
            </div>
            <div className="col-auto">
              <p className="text">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}