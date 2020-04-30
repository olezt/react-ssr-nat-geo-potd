import React  from 'react';
import {Helmet} from "react-helmet";

const HelmetComponent = ({ photo }) => {
    return (
        <Helmet>
            <title>{`NatGEO photo of the day: ${photo.image.title}`}</title>
            {Object.keys(photo.social).map(key =>
                <meta key={key} property={key} content={photo.social[key]}/>
            )}
            <meta property="og:image" content={photo.image.uri}/>
        </Helmet>
    );
};

export default HelmetComponent;