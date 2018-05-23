
export function updateBeats( params ){
	return ( dispatch ) => {
		dispatch({ type: 'UPDATE_BEATS', payload: params })
	}
}



