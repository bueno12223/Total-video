const reducer = (state, action) => {
  switch (action.type) {
    case 'PUT_DATA':
      return {
        ...state,
        [action.payload.key]: action.payload.data,

      };
    case 'PUT_FAVORITE':
      return {
        ...state,
        myList: [action.payload, ...state.myList],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((e) => e.id !== action.payload),
      };
    default:
      return state;

  }
};
export default reducer;
