import React from 'react';
// import Onemov from './onemovie';
import Rate from "./rate";
import Hoc from "./HOC";
const List = (props) => {

    return (
        <div className="movieclass">
            {props.liste.map(el => <div className="onmovie">
            <h4> {el.title}</h4>
            <h3>{el.year}</h3>
            <Rate movieRating={el.rate} setRate={()=> {}}/> 
           {/* <div className="divmovie">
           <img  className="imgmovie"src={el.image} />
            <iframe  width="200" height="200" src={el.src}  frameborder="0" allowfullscreen></iframe>
            
           </div> */}
           <img  className="imgmovie" src={el.image} />

            </div>)}

        </div>


    )


}

export default Hoc(List);
