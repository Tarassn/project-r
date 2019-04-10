import React from 'react';

const SliderDot = (props) => (
    <div style={props.focused?{opacity:1}:{opacity:0.4}}
         onClick={()=>{props.changeKeyOnDot(props.id)}}>
    </div>
);
export default SliderDot;