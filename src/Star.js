import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
export default function  Star (props) {
 return( <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={props.rate}
          onStarClick = {props.onStarClick}
       
        />
   )

}
