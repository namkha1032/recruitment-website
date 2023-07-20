
import { Box } from "@mui/system";
import React from "react";
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import slider from './slider.json'

//
function example (props){
    return(
        
        <Carousel>
            {
                slider.map(item=> <Item key={item.id} item={item}/>)
            }
        </Carousel>
    )
}

export default example