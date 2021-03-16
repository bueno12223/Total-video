const reducer = (state, action) =>{
	switch(action.type){
		case 'SET_FAVORITE':
			return {
				...state,
				myList: [...state.mylist, action.payload]} 
		default:
            return state; 
            }
}
export default reducer;