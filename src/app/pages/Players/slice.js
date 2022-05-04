import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    fetching: false,
    players: [
        { id: '1', first_name: 'Michael', last_name: 'Jordan',  position: 'Guard' },
    ],
    teams: [],
    total: 0,
}

const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        getPlayers() {},
        getTeams() {},
        playerAdded(state, action){
            state.players.push(action.payload)
        },
        playerUpdated(state, action){

        },
        persistState(state, action) {
			return { ...state, ...action.payload }
		}
    }
})

export const { getPlayers, getTeams,  playerAdded, playerUpdated, persistState } = playersSlice.actions

export default playersSlice.reducer

