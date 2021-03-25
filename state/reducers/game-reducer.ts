import { fakeSpeakers } from "../../fake-data/speakers-data";
import { fakeStoryPoints } from "../../fake-data/story-points-data";
import { GameActions, GameActionType, ReduxAction } from "../action-types";
import { GameState } from "../types";

const initState : GameState = {
    actualStoryPoint : fakeStoryPoints[1],
    actualShowenText: "",
    isDrawingText: true,
    remainingText: true,
    actualSpeaker: fakeSpeakers[0],
    storyTracking: [fakeStoryPoints[1].identificator]
}

export default function gameReducer(state: GameState = initState, action: GameActions): GameState{
    switch(action.type){
        case GameActionType.ChoosenAnswer: {
            if(action.payload.newStoryPoint === undefined || action.payload.newSpeaker === undefined ){
                //error
                throw new Error("Its error state");
            }

            state.storyTracking.push(action.payload.newStoryPoint.identificator);

            return {
                ...state,
                actualStoryPoint : action.payload.newStoryPoint,
                actualShowenText : "",
                isDrawingText: true,
                remainingText: true,
                actualSpeaker: action.payload.newSpeaker
            }
        }
        case GameActionType.StartDrawingText: {            
            return {
                ...state,
                actualShowenText : "",
                isDrawingText : true,
                remainingText: true
            }
        }
        case GameActionType.DrawRemainingText: {            
            return {
                ...state,
                actualShowenText : state.actualStoryPoint.text,
                isDrawingText: false,
                remainingText: false
            }
        }
        case GameActionType.DrawTextPart: {            
            return {
                ...state,
                actualShowenText : action.payload.actualShowenText,
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
                actualShowenText : action.payload.newStoryPoint.text,
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