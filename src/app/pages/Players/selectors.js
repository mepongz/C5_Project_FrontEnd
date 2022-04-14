import { createSelector } from '@reduxjs/toolkit'

const selectPlayersState = (state) => state.players

export const playerSelector = createSelector([selectPlayersState], (state) => state)
