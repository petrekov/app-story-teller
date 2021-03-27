import { Dispatch } from "redux";
import { fakeSpeakers } from "../../fake-data/speakers-data";
import { fakeStoryPoints } from "../../fake-data/story-points-data";
import { GameActions, GameActionType, GameChoosenAnswer } from "../action-types";
import { ReduxState, StoryPoint } from "../types";

export const ChooseAnswer = (answerIdentificator: string) => {
    
    return async (dispatch: Dispatch<GameActions>, getState: () => ReduxState): Promise<void> => {
        const state = getState();
        let newStoryPoint = fakeStoryPoints.find(x=>x.identification === answerIdentificator);

            dispatch({
                type: GameActionType.ChoosenAnswer,
                payload:{
                    newStoryPoint: newStoryPoint,
                    newSpeaker: fakeSpeakers.find(x=>x.identificator == newStoryPoint?.speakerIdentification)
                }
            });
            //StartDrawingText();
    }   
}
/*
export const StartDrawingText = () => {
    
    return async (dispatch: Dispatch<GameActions>): Promise<void> => {
            dispatch({
                type: GameActionType.StartDrawingText,
            });
    }   
}*/

export const GoOnPreviousStoryPoint = () => {
    
    return async (dispatch: Dispatch<GameActions>, getState: () => ReduxState): Promise<void> => {
        const state = getState();

        state.game.storyTracking.pop();
        let identificatorOfPreviousStoryPoint = state.game.storyTracking[state.game.storyTracking.length-1];
        let newStoryPoint = fakeStoryPoints.find(x=>x.identification === identificatorOfPreviousStoryPoint);
        let newSpeaker = fakeSpeakers.find(x=>x.identificator == newStoryPoint?.speakerIdentification);

        dispatch({
                type: GameActionType.GoOnPreviousStoryPoint,
                payload: {
                    newStoryPoint: newStoryPoint,
                    newSpeaker:newSpeaker
                }
            });
    }   
}

export const GoOnInitialStoryPoint = () => {
    
    return async (dispatch: Dispatch<GameActions>): Promise<void> => {
            dispatch({
                type: GameActionType.GoOnInitialStoryPoint,
            });
    }   
}
/*
export const DrawTextPart = (numberOfCharactersToDraw:number) => {
    
    return async (dispatch: Dispatch<GameActions>, getState: () => ReduxState): Promise<void> => {
        const state = getState();

        // Check if remaining text is no longer than a text to be showen
        numberOfCharactersToDraw = 
            (state.game.actualShowenText.length + numberOfCharactersToDraw > state.game.actualStoryPoint.text.length)
            ? state.game.actualStoryPoint.text.length - state.game.actualShowenText.length
            : numberOfCharactersToDraw;
        
        let newShowenText = state.game.actualShowenText + state.game.actualStoryPoint.text.slice(state.game.actualShowenText.length,state.game.actualShowenText.length + numberOfCharactersToDraw);

        let isThereRemainingText = !(state.game.actualShowenText.length === state.game.actualStoryPoint.text.length);
        console.log("I drawing text");
            dispatch({
                type: GameActionType.DrawTextPart,
                payload: {
                    actualShowenText: newShowenText,
                    remainingText: isThereRemainingText,
                }
            });

    }   

}*/
export const DrawRemainingText = () => {
    
    return async (dispatch: Dispatch<GameActions>): Promise<void> => {
        dispatch({
            type: GameActionType.DrawRemainingText,
        })

    }   
}

export const FinishDrawingText = () => {
    
    return async (dispatch: Dispatch<GameActions>): Promise<void> => {
            dispatch({
                type: GameActionType.FinishDrawingText,
            })
    }   
}