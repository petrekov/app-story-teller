import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useDispatch } from "react-redux";
import { FinishDrawingText } from "../../state/actions/game-actions";
import { Speaker } from "../../state/types";

const StoryComponent: React.FC<{ storyText: string; textIsShowed(): void }> = ({
  storyText,
  textIsShowed: textIsShowed,
}) => {
  console.log("----------- new render ----------");

  const dispatch = useDispatch();

  const [currentText, setCurrentText] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [wasRespond, setWasRespond] = useState(true);

  //const [isCompleted,setIsCompleted] = useState(false);

  /*useEffect(()=>{
    if(storyText !== originalText){
      console.log("setting original text from: ",originalText, " into: ", storyText);
      setCurrentText("");
      setOriginalText(storyText);
      setWasRespond(false);
    }
  });*/

  /*    if(storyText !== originalText){
        setCurrentText("");
        setOriginalText(storyText);
        setWasRespond(false);
    }*/

  const updateCurrentText = () => {
    let numberOfCharactersToDraw =
      currentText.length + 5 > originalText.length
        ? originalText.length - currentText.length
        : 5;

    let newShowedText =
      currentText +
      originalText.slice(
        currentText.length,
        currentText.length + numberOfCharactersToDraw
      );

    let isThereRemainingText = !(currentText.length === originalText.length);

    if (isThereRemainingText) {
      console.log("Add new text");
      setCurrentText(newShowedText);
    } else {
      console.log("No new text");
    }
  };

  if (storyText !== originalText) {
    console.log(
      "setting original text from: ",
      originalText,
      " into: ",
      storyText,
      " (pre)"
    );
    setCurrentText("");
    console.log("setting original text (mid1)");
    setOriginalText(storyText);
    console.log("setting original text (mid2)");
    setWasRespond(false);
    console.log("setting original text (post)");
  }
  else if (originalText.length !== currentText.length) {
    console.log("Prepare timeout anim (pre)");
    setCurrentText(originalText);
    console.log("Prepare timeout anim (post)");
    /*console.log("Prepare timeout anim");
    setTimeout(() => {
      console.log("Timeout add text");
      updateCurrentText();
    }, 100);*/
  } else if (!wasRespond) {
    console.log("Respond! (pre)");
    setWasRespond(true);
    console.log("Respond! (mid)");
    textIsShowed();
    console.log("Respond! (post)");
  }

  useEffect(()=>{
    console.log("ST changed");
  },[storyText])

  return <Text>{currentText}</Text>;
};

export default StoryComponent;
/*
const styles = StyleSheet.create({
    speakerBox: {
        height: '15%',
        padding: 10,
    }
});*/
