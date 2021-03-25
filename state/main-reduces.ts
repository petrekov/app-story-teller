import { ReduxAction } from "./action-types"
import gameReducer from "./reducers/game-reducer"
import { ReduxState } from "./types"

const initState: any = {
    game: undefined
}

export default function mainReducer(state: ReduxState = initState, action: ReduxAction): ReduxState {
    __DEV__ && console.debug('MAIN REDUCER CALLED with action ' + action.type)

    return {
        game : gameReducer(state.game,action),
        stats: {
            storyCompletetion: 10,
            deaths: 10,
            wins: 10
        },
        user: {
            username : "someone"
        }
    }
}