export const actionTypes = {
  GET_PHOTOS: "GET_PHOTOS",
  UPDATE_PHOTOS: "UPDATE_PHOTOS"
};

export const actions = {
  getPhotos: url => ({
    type: actionTypes.GET_PHOTOS,
    url
  }),
  updatePhotos: data => ({
    type: actionTypes.UPDATE_PHOTOS,
    data
  })
};

export default function(state = [], action) {
  switch (action.type) {
    case actionTypes.UPDATE_PHOTOS:
      return [...action.data];
    default:
      return state;
  }
}
