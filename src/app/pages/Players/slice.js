import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fetching: false,
    players: [
        { id: '1', first_name: 'Michael', last_name: 'Jordan',  position: 'Guard' },
    ],
    total: 0,
}

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        getPlayers() {},
        playerAdded(state, action){
            state.players.push(action.payload)
        },
        persistState(state, action) {
			return { ...state, ...action.payload }
		}
    }
})

export const { getPlayers, playerAdded, persistState } = playersSlice.actions

export default playersSlice.reducer

