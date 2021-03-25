import { Speaker, StoryPoint } from "../state/types";
import { HeroImage } from "./constants/heroImage";
import { Speakers } from "./constants/speakers";
import { StoryTellerImage } from "./constants/storyTellerImage";

export const fakeSpeakers: Speaker[] = [
    {
        identificator: Speakers.StoryTeller,
        name: "Story teller",
        relation: 0,
        image: StoryTellerImage
    },
    {
        identificator: Speakers.Hero,
        name: "Hero",
        relation: 0,
        image: HeroImage
    },

]

