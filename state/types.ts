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
    actualShowedText: string,
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
    identification: string,
    text: string,
    speakerIdentification: string | undefined,
    answers: Answer[] | undefined,
    continuousStoryPointIdentification: string | undefined
}

export interface Speaker {
    identificator: string 
    name: string,
    relation: number,
    image: string 
}

export interface Answer {
    text: string,
    connectedStoryPointIdentification: string | undefined,
    relationRequired: number,
}


