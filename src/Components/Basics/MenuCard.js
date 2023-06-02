import React from "react";

const MenuCard = ({ MenuData }) => {
  

  return (
    <>
      <section className="main-card--cointainer">
        {MenuData.map((curElem) => {
          const { id, name, category, images, description, price } = curElem;

          return (
            <>
            
               <div className="card-container" key={id}> 
                <div className="card ">
                  <div className="card-body">
                    {/* <span className="circle">{id}</span> */}
                    <span className="card-author"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <div>
                    <span className="price"> ₹{price}</span>
                    </div>
                    <span className="card-description">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div> <br></br>
                  <img src={images} alt="images" className="card-media" />
                  <button>
                 
                  <span className="card-tag">Order Now</span>
                                    
                  </button>
                </div>
              </div>
            </>
            
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;

