import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { DrawRemainingText } from "../../state/actions/game-actions";
import { GameSelectors } from "../../state/selectors/game-selector";
import DecisionFieldComponent from "./DecisionsFieldComponent";
import SpeakerComponent from "./SpeakerComponent";
import StoryComponent from "./StoryComponent";
import ToolsPanelComponent from "./ToolsPanelComponent";

const GameScreen: React.FC = ({ navigation }) => {
  console.log("-------- GAMESCREEN render --------");
  const [isShowingText, setIsShowingText] = useState(true);

  // Selectors
  const actualStoryPointText = useSelector(GameSelectors.getActualStoryPointText);
  const actualSpeaker = useSelector(GameSelectors.getActualSpeaker);

  const dispatch = useDispatch();

  /** Draw is skipped and text showed */
  const skipTextLoading = () => {
    dispatch(DrawRemainingText());
  };

  const textIsShowed = () => {
    console.log("TextIsShowed called");
    setIsShowingText(false);
    //dispatch(FinishDrawingText());
  };

  const actionIsCalled = () => {
    console.log("Action is called");
    setIsShowingText(true);
    //dispatch(FinishDrawingText());
  };

  return (
    <View>
      <View style={styles.speakerBox}>
        <SpeakerComponent speaker={actualSpeaker} />
      </View>

      <View style={styles.storyTextBox} onTouchEnd={skipTextLoading}>
        <StoryComponent storyText={actualStoryPointText} textIsShowed={textIsShowed} />
      </View>

      <View style={styles.answersBox}>
        <DecisionFieldComponent decisionDisabled={isShowingText} actionIsCalled={actionIsCalled} />
      </View>

      <View style={styles.bottomMenuBox}>
        <ToolsPanelComponent />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  speakerBox: {
    height: "15%",
    padding: 10,
  },
  storyTextBox: {
    height: "40%",
    padding: "5%",
    backgroundColor: "#fff",
  },
  answersBox: {
    height: "35%",
    padding: "10%",
  },
  answerButton: {
    marginBottom: 10,
  },
  bottomMenuBox: {
    height: "10%",
  },
});
