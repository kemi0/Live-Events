import React from 'react';

const ImageSlide =({ url }) => {
    const ImagineStyling ={
        backgroundImage:`url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition:'center'
    };

    return(
        <div className="Iiage-slide" style={styles}></div>
    );
}