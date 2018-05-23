let initialState = {
	beats: 4
}

export default function reducer(state = initialState, action){
	switch ( action.type ){
		case "UPDATE_BEATS":
			console.log("Update_Beats Recuders")
			console.log(action, state);
			state = { ...state, ...action.payload };
			break;
		default:
			console.log("default reducer for RhythmBar");
			state = { ...state, ...action.payload };
			break;
	}
	return state;
}