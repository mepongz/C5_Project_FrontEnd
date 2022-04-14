import { put, call, takeLatest, delay } from "redux-saga/effects"
import { getPlayers, persistState } from "./slice"
import PlayersService from '../../../services/api/PlayersService'

function* getPlayersAsync({payload: {search}}) {
    try{
        // Call to using Players service to get players
        const response = yield call(PlayersService.getPlayers, {search})

        let fetchedPlayers = []

        // 
        if(response){
            const {
                data: {
                    data: players
                }
            } = response

            fetchedPlayers = [...players]
        }
        
        yield put({
            type: persistState.type,
            payload: {
              players: fetchedPlayers
            }
        })

    } catch (error) {
        console.log(error?.message)
    }
}

export default function* playersSaga() {
    yield takeLatest(getPlayers.type, getPlayersAsync)
}