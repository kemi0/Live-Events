import React from 'react';



export default props => {
    return (
<div>
    <div className="container-fluid">
        <div className="row about-event-display-text">
            <div className="col-xs-12 text-center">
                <p>ABOUT THIS EVENT</p>
            </div>
        </div>
    </div>
    <div className="row">
        <div className=" col-xs-6 event-detail-image-container">
            <img src='../assets/images/artist_image_example.jpg' />
        </div>

    <div className="col-xs-6 text-left">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse voluptates corrupti qui illo, recusandae architecto
                fugit atque, ratione dolorem sapiente accusantium numquam dicta? Sunt quod in placeat laudantium deleniti
                nesciunt!
        </p>
    </div>
    </div>
</div>

    );
}