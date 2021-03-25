import { StoryPoint } from "../state/types";
import { Speakers } from "./constants/speakers";

export const fakeStoryPoints: StoryPoint[] = [
    {
        identificator: "A000",
        text: "Continues next time",
        answers: undefined,
        speakerIdentificator:undefined,
        continuousStoryPointIdentificator: undefined //Must be manualy settet
    },
    {
        identificator: "A000",
        text: "This world is cruel, bloody hole... So can we start your weird story?",
        answers: [
            {
                relationRequired: 0,
                text: "Yes please",
                connectedStoryPointIdentificator: "A001"
            },
            {
                relationRequired: 0,
                text: "Ohhohoho yea!!",
                connectedStoryPointIdentificator: "A001"
            },
            {
                relationRequired: 0,
                text: "Shut up and let me go",
                connectedStoryPointIdentificator: undefined,             
            },
        ],
        speakerIdentificator:Speakers.StoryTeller,
        continuousStoryPointIdentificator: undefined
    },
    {
        identificator: "A001",
        text: "It was a long time ago, in a dark times when the wolfes rule the world, our world. Before the humans come into this cured lands. Before the elves rebelion and even before the Age of dragons.",
        answers: undefined,
        speakerIdentificator:Speakers.StoryTeller,
        continuousStoryPointIdentificator: "A002"
    },
    {
        identificator: "A002",
        text: "In these ancient times there was a one famous, brave and unbelievebily strong wolf. The Alpha was his name! Her claws was sharper than any sword, his teeths were stronger, than any dragon and his desire for blood was bigger than humans desires for power to rule the world.",
        answers: undefined,
        speakerIdentificator:Speakers.StoryTeller,
        continuousStoryPointIdentificator: "A003"
    },
    {
        identificator: "A003",
        text: "He was absolute rules of the world until his own death. During his live there was noone who can stand agains his will.",
        answers: undefined,
        speakerIdentificator:Speakers.StoryTeller,
        continuousStoryPointIdentificator: "A004"
    },
    {
        identificator: "A004",
        text: "Now you probably asking why i telling all of that to you and answer is as simple as terrified.",
        answers: undefined,
        speakerIdentificator:Speakers.StoryTeller,
        continuousStoryPointIdentificator: "A005"
    },
    {
        identificator: "A005",
        text: "The Alpha is back...",
        answers: undefined,
        speakerIdentificator:Speakers.StoryTeller,
        continuousStoryPointIdentificator: "A006"
    },
    {
        identificator: "A006",
        text: "The priests of D`Kheltan found his body, sacrifice many innocent lives and call him back from underworld",
        answers: undefined,
        speakerIdentificator:Speakers.StoryTeller,
        continuousStoryPointIdentificator: "A007"
    },
    {
        identificator: "A007",
        text: "Dark times coming. The darkest ancient in our history is before our gates and trying get in. The Alpha is awaken, but it will take some time until he gains back his full power. There is still a hope.",
        answers: undefined,
        speakerIdentificator:Speakers.StoryTeller,
        continuousStoryPointIdentificator: "A008"
    },
    {
        identificator: "A008",
        text: "You are the hope...",
        speakerIdentificator:Speakers.StoryTeller,
        answers: undefined,
        continuousStoryPointIdentificator: "A009"
    },
    {
        identificator: "A009",
        text: "Uhh that was a weird dream...",
        answers: undefined,
        speakerIdentificator:Speakers.Hero,
        continuousStoryPointIdentificator: "A010"
    },
    {
        identificator: "A010",
        text: "*You wake up and look around. Everythink looks as always, but the weird feel is still in your heart. Maybe it was more, than a dream? Maybe that cruel, creepy monster is real? You still see his eyes*",
        answers: undefined,
        speakerIdentificator:Speakers.Hero,
        continuousStoryPointIdentificator: "A011"
    },
    {
        identificator: "A011",
        text: "Shit! My head is really hurts... What now?",
        answers: [
            {
                text: "*Go outside to find some herbs*",
                relationRequired: 0,
                connectedStoryPointIdentificator: undefined
            },
            {
                text: "*Focus more on that weird dream*",
                relationRequired: 0,
                connectedStoryPointIdentificator: "A012"
            }
        ],
        speakerIdentificator:Speakers.Hero,
        continuousStoryPointIdentificator: undefined
    },
    {
        identificator: "A012",
        text: "*You trying focus as much as you can. You swimming deep into you head and try to wake up lost memories. And then you see it!",
        speakerIdentificator: Speakers.Hero,
        answers: undefined,
        continuousStoryPointIdentificator: "A013"
    },
    {
        identificator: "A013",
        text: "*You stand in middle of nothing. Everywhere around you is nothing more than a absolutly empty darkness. Nothing darker than anythink. Ground starts shaking and place before you cracks.",
        speakerIdentificator: Speakers.Hero,
        answers: undefined,
        continuousStoryPointIdentificator: "A014"
    },
    {
        identificator: "A014",
        text: "*Now you are looking into IT`s eyes. They are as deep as deepest ocean and as hungry as most perverse demon. You see nothing than endless suffering and pain*",
        speakerIdentificator: Speakers.Hero,
        answers: undefined,
        continuousStoryPointIdentificator: undefined,
    }
]