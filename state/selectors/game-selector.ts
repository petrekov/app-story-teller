import { ReduxState } from "../types";

export class GameSelectors {
    static getActualStoryPoint(state: ReduxState) {
        return state.game.actualStoryPoint;
    }
    static getActualShowenText(state: ReduxState) {
        return state.game.actualShowenText;
    }
    static getIsDrawingText(state: ReduxState) {
        return state.game.isDrawingText;
    }
    static getRemainingText(state: ReduxState) {
        return state.game.remainingText;
    }
    static getActualSpeaker(state: ReduxState) {
        return state.game.actualSpeaker;
    }
}