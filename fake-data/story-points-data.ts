import { StoryPoint } from "../state/types";
import { Speakers } from "./constants/speakers";

export const fakeStoryPoints: StoryPoint[] = [
    {
        identification: "A000",
        text: "Continues next time",
        answers: undefined,
        speakerIdentification:undefined,
        continuousStoryPointIdentification: undefined //Must be manually settet
    },
    {
        identification: "A000",
        text: "This world is cruel, bloody hole... So can we start your weird story?",
        answers: [
            {
                relationRequired: 0,
                text: "Yes please",
                connectedStoryPointIdentification: "A001"
            },
            {
                relationRequired: 0,
                text: "Ohhohoho yea!!",
                connectedStoryPointIdentification: "A001"
            },
            {
                relationRequired: 0,
                text: "Shut up and let me go",
                connectedStoryPointIdentification: undefined,             
            },
        ],
        speakerIdentification:Speakers.StoryTeller,
        continuousStoryPointIdentification: undefined
    },
    {
        identification: "A001",
        text: "It was a long time ago, in a dark times when the wolfes rule the world, our world. Before the humans come into this cured lands. Before the elves rebellion and even before the Age of dragons.",
        answers: undefined,
        speakerIdentification:Speakers.StoryTeller,
        continuousStoryPointIdentification: "A002"
    },
    {
        identification: "A002",
        text: "In these ancient times there was a one famous, brave and unbelievably strong wolf. The Alpha was his name! Her claws was sharper than any sword, his teethes were stronger, than any dragon and his desire for blood was bigger than humans desires for power to rule the world.",
        answers: undefined,
        speakerIdentification:Speakers.StoryTeller,
        continuousStoryPointIdentification: "A003"
    },
    {
        identification: "A003",
        text: "He was absolute rules of the world until his own death. During his live there was no one who can stand against his will.",
        answers: undefined,
        speakerIdentification:Speakers.StoryTeller,
        continuousStoryPointIdentification: "A004"
    },
    {
        identification: "A004",
        text: "Now you probably asking why i telling all of that to you and answer is as simple as terrified.",
        answers: undefined,
        speakerIdentification:Speakers.StoryTeller,
        continuousStoryPointIdentification: "A005"
    },
    {
        identification: "A005",
        text: "The Alpha is back...",
        answers: undefined,
        speakerIdentification:Speakers.StoryTeller,
        continuousStoryPointIdentification: "A006"
    },
    {
        identification: "A006",
        text: "The priests of D`Kheltan found his body, sacrifice many innocent lives and call him back from underworld",
        answers: undefined,
        speakerIdentification:Speakers.StoryTeller,
        continuousStoryPointIdentification: "A007"
    },
    {
        identification: "A007",
        text: "Dark times coming. The darkest ancient in our history is before our gates and trying get in. The Alpha is awaken, but it will take some time until he gains back his full power. There is still a hope.",
        answers: undefined,
        speakerIdentification:Speakers.StoryTeller,
        continuousStoryPointIdentification: "A008"
    },
    {
        identification: "A008",
        text: "You are the hope...",
        speakerIdentification:Speakers.StoryTeller,
        answers: undefined,
        continuousStoryPointIdentification: "A009"
    },
    {
        identification: "A009",
        text: "Uhh that was a weird dream...",
        answers: undefined,
        speakerIdentification:Speakers.Hero,
        continuousStoryPointIdentification: "A010"
    },
    {
        identification: "A010",
        text: "*You wake up and look around. Everything looks as always, but the weird feel is still in your heart. Maybe it was more, than a dream? Maybe that cruel, creepy monster is real? You still see his eyes*",
        answers: undefined,
        speakerIdentification:Speakers.Hero,
        continuousStoryPointIdentification: "A011"
    },
    {
        identification: "A011",
        text: "Shit! My head is really hurts... What now?",
        answers: [
            {
                text: "*Go outside to find some herbs*",
                relationRequired: 0,
                connectedStoryPointIdentification: undefined
            },
            {
                text: "*Focus more on that weird dream*",
                relationRequired: 0,
                connectedStoryPointIdentification: "A012"
            }
        ],
        speakerIdentification:Speakers.Hero,
        continuousStoryPointIdentification: undefined
    },
    {
        identification: "A012",
        text: "*You trying focus as much as you can. You swimming deep into you head and try to wake up lost memories. And then you see it!",
        speakerIdentification: Speakers.Hero,
        answers: undefined,
        continuousStoryPointIdentification: "A013"
    },
    {
        identification: "A013",
        text: "*You stand in middle of nothing. Everywhere around you is nothing more than a absolutely empty darkness. Nothing darker than anything. Ground starts shaking and place before you cracks.",
        speakerIdentification: Speakers.Hero,
        answers: undefined,
        continuousStoryPointIdentification: "A014"
    },
    {
        identification: "A014",
        text: "*Now you are looking into IT`s eyes. They are as deep as deepest ocean and as hungry as most perverse demon. You see nothing than endless suffering and pain*",
        speakerIdentification: Speakers.Hero,
        answers: undefined,
        continuousStoryPointIdentification: undefined,
    }
]