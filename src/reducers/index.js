const reducer = (state, action) =>{
	switch(action.type){
		case "SET_FAVORITE":
      return {
        ...state,
        myList: state.myList.some(items => items.id === action.payload.id)
          ? [...state.myList]
          : [...state.myList, action.payload],
	  };
	  case "DELETE_FAVORITE": 
		  return{
			  ...state,
			  myList: state.myList.filter( e => e.id != action.payload)
		  };
		case 'PUT_MOVIES':
			return{
				...state,
				movies:action.payload 
			};

		  
		default:
            return state; 
            }
}
export default reducer;