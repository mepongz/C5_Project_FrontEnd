import { put, call, takeLatest, delay } from "redux-saga/effects"
import { getPlayers, getTeams, playerUpdated, persistState } from "./slice"
import PlayersService from '../../../services/api/PlayersService'
import TeamsService from '../../../services/api/TeamsService'

function* getPlayersAsync({payload: {search, sort_by, sort_column}}) {
    try{
        // Call to using Players service to get players
        const response = yield call(PlayersService.getPlayers, {search, sort_by, sort_column})

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

function* getTeamsAsync() {
    try{
        // Call to get all teams
        const response = yield call(TeamsService.getTeams)

        let fetchedTeams = []

        // 
        if(response){
            const {
                data: {
                    data: teams
                }
            } = response

            fetchedTeams = [...teams]
        }
        
        yield put({
            type: persistState.type,
            payload: {
              teams: fetchedTeams
            }
        })

    } catch (error) {
        console.log(error?.message)
    }
}

function* updatePlayerAsync({payload : { data }}){
    try{
        const response = yield call(PlayersService.putPlayer, data)
        if(response.status == 200){
            alert('Updated!')
        }
    }catch(error){
        console.log(error)
    }
}

export default function* playersSaga() {
    yield takeLatest(getPlayers.type, getPlayersAsync)
    yield takeLatest(getTeams.type, getTeamsAsync)
    yield takeLatest(playerUpdated.type, updatePlayerAsync)
}