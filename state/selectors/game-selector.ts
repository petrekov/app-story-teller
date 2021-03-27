import { ReduxState } from "../types";

export class GameSelectors {
    static getActualStoryPoint(state: ReduxState) {
        return state.game.actualStoryPoint;
    }
    static getActualStoryPointText(state: ReduxState) {
        return state.game.actualStoryPoint.text;
    }
    static getActualStoryPointAnswers(state: ReduxState) {
        return state.game.actualStoryPoint.answers;
    }
    static getActualStoryPointContinuousStoryPointIdent(state: ReduxState) {
        return state.game.actualStoryPoint.continuousStoryPointIdentification;
    }
    static getActualShowedText(state: ReduxState) {
        return state.game.actualShowedText;
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