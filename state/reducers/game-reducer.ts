import { fakeSpeakers } from "../../fake-data/speakers-data";
import { fakeStoryPoints } from "../../fake-data/story-points-data";
import { GameActions, GameActionType, ReduxAction } from "../action-types";
import { GameState } from "../types";

const initState : GameState = {
    actualStoryPoint : fakeStoryPoints[1],
    actualShowedText: "",
    isDrawingText: true,
    remainingText: true,
    actualSpeaker: fakeSpeakers[0],
    storyTracking: [fakeStoryPoints[1].identification]
}

export default function gameReducer(state: GameState = initState, action: GameActions): GameState{
    switch(action.type){
        case GameActionType.ChoosenAnswer: {
            if(action.payload.newStoryPoint === undefined || action.payload.newSpeaker === undefined ){
                //error
                throw new Error("Its error state");
            }

            state.storyTracking.push(action.payload.newStoryPoint.identification);

            return {
                ...state,
                actualStoryPoint : action.payload.newStoryPoint,
                actualShowedText : "",
                isDrawingText: true,
                remainingText: true,
                actualSpeaker: action.payload.newSpeaker
            }
        }
        case GameActionType.StartDrawingText: {            
            return {
                ...state,
                actualShowedText : "",
                isDrawingText : true,
                remainingText: true
            }
        }
        case GameActionType.DrawRemainingText: {            
            return {
                ...state,
                actualShowedText : state.actualStoryPoint.text,
                isDrawingText: false,
                remainingText: false
            }
        }
        case GameActionType.DrawTextPart: {            
            return {
                ...state,
                actualShowedText : action.payload.actualShowenText,
                remainingText: action.payload.remainingText
            }
        }
        case GameActionType.FinishDrawingText: {            
            return {
                ...state,
                isDrawingText : false
            }
        }
        case GameActionType.GoOnPreviousStoryPoint: {  
            if(action.payload.newStoryPoint === undefined || action.payload.newSpeaker === undefined ){
                //error
                throw new Error("Its error state");
            }

            return {
                ...state,
                actualShowedText : action.payload.newStoryPoint.text,
                actualSpeaker : action.payload.newSpeaker,
                actualStoryPoint: action.payload.newStoryPoint,
                remainingText:false,
                isDrawingText : false                            
            }
        }
        case GameActionType.GoOnInitialStoryPoint: {            
            return initState;
        }
        case GameActionType.FinishDrawingText: {            
            return {
                ...state,
                isDrawingText : false
            }
        }
        default: 
            return state
    }
}