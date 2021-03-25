import { Speakers } from "../fake-data/constants/speakers";
import { Speaker, StoryPoint } from "./types";

export type ReduxAction =
    | GameActions
    | StatsActions
    | UserActions

// -------------------- GAME --------------------
export enum GameActionType {
    ChoosenAnswer = "CHOOSEN_ANSWER",
    StartDrawingText = "START_DRAWING_TEXT",
    FinishDrawingText = "FINISH_DRAWING_TEXT",
    DrawTextPart = "DRAW_TEXT_PART",
    DrawRemainingText = "DRAW_REMAINING_TEXT",
    GoOnPreviousStoryPoint = "GO_ON_PREVIOUS_STORY_POINT",
    GoOnInitialStoryPoint = "GO_ON_INITIAL_STORY_POINT",
}

export type GameActions = GameChoosenAnswer | GameStartDrawingText | GameFinishDrawingText | GameDrawTextPart | GameDrawRemainingText | GameGoOnPreviousStoryPoint | GameGoOnInitialStoryPoint;

export interface GameChoosenAnswer {
    type: typeof GameActionType.ChoosenAnswer,
    payload: {
        newStoryPoint: StoryPoint | undefined,
        newSpeaker: Speaker | undefined
    }
}

export interface GameStartDrawingText {
    type: typeof GameActionType.StartDrawingText,
}

export interface GameDrawRemainingText {
    type: typeof GameActionType.DrawRemainingText,
}

export interface GameGoOnPreviousStoryPoint {
    type: typeof GameActionType.GoOnPreviousStoryPoint,
    payload: {
        newStoryPoint: StoryPoint | undefined,
        newSpeaker: Speaker | undefined
    }
}

export interface GameGoOnInitialStoryPoint {
    type: typeof GameActionType.GoOnInitialStoryPoint,
}

export interface GameDrawTextPart {
    type: typeof GameActionType.DrawTextPart,
    payload: {
        actualShowenText : string,
        remainingText: boolean,
    }
}

export interface GameFinishDrawingText {
    type: typeof GameActionType.FinishDrawingText,
}

// -------------------- STATS --------------------
export enum StatsActionType {
    Base = "STATS_BASE"
}

export type StatsActions = StatsBase;

export interface StatsBase {
    type: typeof GameActionType.ChoosenAnswer,
    payload: {
        nextText: string,
        speakerName: string
    }
}

// -------------------- USER --------------------
export enum UserActionType {
    Base = "USER_BASE"
}

export type UserActions = UserBase;

export interface UserBase {
    type: typeof GameActionType.ChoosenAnswer,
    payload: {
        nextText: string,
        speakerName: string
    }
}