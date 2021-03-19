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
		case 'PUT_POPULAR':
			return{
				...state,
				popular: action.payload
			};
		case 'PUT_KIDS':
			return{
				...state,
				kids:action.payload 
			};
		case 'PUT_RATED':
			return{
				...state,
				rated:action.payload 
			};
		case 'PUT_COMEDY':
			return{
				...state,
				comedy:action.payload 
			};
		case 'PUT_DATA':
			console.log(action.payload)
		return{
			...state,
			data: action.payload.length
			?action.payload
			: [] 
			
		};

		  
		default:
            return state; 
            }
}
export default reducer;