import React, { useState } from "react";

import './Tour.css';
import Card from "../UI/Card";

const Tour = (props) => {

    const textPreviewLength = 160;
    const [text, setText] = useState(props.text.substring(0, textPreviewLength));
    const [buttonTxt, setButtonTxt] = useState("Read more...");
    const [expanded, setExpanded] = useState(false);

    console.log(text);

    const togglePreview = () => {
        if (expanded) {
            setText(props.text.substring(0, textPreviewLength));
            setButtonTxt("Read more...");
        }
        else {
            setText(props.text);
            setButtonTxt("Show less...");
        }
        setExpanded(!expanded);
        console.log(expanded);
    }

    const removeTour = () => {
        props.removeTour(props.tourId);
    }

    return (
        <Card className="tour">
            <div className="image">
                <img src={props.imgSrc} />
            </div>
            <div className="header">
                <span className="title">{props.title}</span>
                <span className="price">${props.price}</span>
            </div>
            <div className="body">
                <span className="text">{text} {(text.length >= textPreviewLength) && <span className="expand" onClick={togglePreview}>{buttonTxt}</span>}</span>
                
            </div>
            <div className="footer">
                <button className="remove-btn" onClick={removeTour}>Not Interested</button>
            </div>
        </Card>
    );
}

export default Tour;