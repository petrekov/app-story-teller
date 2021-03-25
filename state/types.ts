import { InteractionManager } from "react-native";
import { Speakers } from "../fake-data/constants/speakers";

export interface ReduxState {
    user: UserState,
    game: GameState,
    stats: StatsState
}

// ---------------- TOP LEVEL STATES -----------------
export interface UserState {
    username: string
}

export interface GameState {
    actualStoryPoint: StoryPoint,
    actualShowenText: string,
    isDrawingText: boolean,
    remainingText: boolean,
    actualSpeaker: Speaker,
    storyTracking: string[]
}

export interface StatsState {
    storyCompletetion: number,
    deaths: number,
    wins: number
}

// ---------------- GAME STATE -----------------------
export interface StoryPoint {
    identificator: string,
    text: string,
    speakerIdentificator: string | undefined,
    answers: Answer[] | undefined,
    continuousStoryPointIdentificator: string | undefined
}

export interface Speaker {
    identificator: string 
    name: string,
    relation: number,
    image: string 
}

export interface Answer {
    text: string,
    connectedStoryPointIdentificator: string | undefined,
    relationRequired: number,
}


