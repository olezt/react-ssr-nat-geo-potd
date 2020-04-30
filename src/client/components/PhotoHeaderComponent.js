import React  from 'react';

const PhotoHeaderComponent = ({title, description}) => {
    return (
        <div>
            <div className="captionTitle">
                <span className="borderTitle">{title}</span><br/>
            </div>
            <div className="captionDescription">
                <span className="borderDescription">{description}</span><br/>
            </div>
        </div>
    );
};

export default PhotoHeaderComponent;