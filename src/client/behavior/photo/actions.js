export const GET_PHOTOS_OF_THE_MONTH= 'GET_PHOTOS_OF_THE_MONTH';

export const getPhotosOfTheMonth = monthYear => async (dispatch, getState, api) => {
    const res = await api.get(`/photography/photo-of-the-day/_jcr_content/.gallery.${monthYear}.json`);

    dispatch({
        type: GET_PHOTOS_OF_THE_MONTH,
        data: res.data.items,
        monthYear
    });
};