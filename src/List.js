import React from "react";
import Item from "./Item.js";

function List(props) {

    return(
       <div className="List">
           {
               props.items.map(item => 
                    <Item 
                        title={item.title} 
                        id={item.id}
                        key={item.id}
                        image={item.image}
                        rating={item.rating} />
                )
           }
       </div>
    );

}

export default List;