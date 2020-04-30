import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';

import { getPhotosOfTheMonth } from '../behavior/photo/actions';
import PhotoHeaderComponent from "../components/PhotoHeaderComponent";
import HelmetComponent from "../components/HelmetComponent";
import DateSelectorComponent from "../components/DateSelectorComponent";
import moment from "moment";

const PhotoOfTheDayPage = ({photos, getPhotosOfTheMonth, monthYear}) => {
    const [date, setDate] = useState(moment(new Date()));

    const findPhoto = () => {
        let dateFormattedAsPublishDate = date.format('MMMM D, YYYY'); // publishDate format in NatGeo JSON
        let p = photos.find(p => p.publishDate === dateFormattedAsPublishDate)
        if (!p) p = photos[0]; // default latest if no photo was found
        return p;
    }

    useEffect(()=>{
        let formattedDate = getFormattedDate(date);
        if (formattedDate !== monthYear) //if it is the same month and year, we already have all the photos
            getPhotosOfTheMonth(formattedDate);
    }, [date]);

    const renderPhoto = () => {
        let photo = findPhoto();

        return (
            <div>
                <DateSelectorComponent date={date} setDate={setDate} />
                {photo ?
                    <div><HelmetComponent photo={photo} />
                        <div className="bgimg-1" style={{backgroundImage: `url(${photo.image.uri})`}}>
                            <PhotoHeaderComponent title={photo.image.title} description={photo.social['og:description']}/>
                        </div>
                    </div> : <PhotoHeaderComponent title="Photo not found" description="Try another date"/>
                }
            </div>
        );
    };

    return renderPhoto();
};

const getFormattedDate = date => {
    return date.format('YYYY-MM');
}

const mapStateToProps = (state) => ({
    photos: state.photo.photosOfTheMonth,
    monthYear: state.photo.monthYear,
});

const loadData = (store) => {
    return store.dispatch(getPhotosOfTheMonth(getFormattedDate(moment(new Date()))));
}

export default {
    loadData,
    component: connect(mapStateToProps, { getPhotosOfTheMonth: getPhotosOfTheMonth })(PhotoOfTheDayPage)
};