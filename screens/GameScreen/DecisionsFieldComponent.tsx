import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import RNGestureHandlerButton from "react-native-gesture-handler/lib/typescript/components/GestureHandlerButton";
import { useDispatch, useSelector } from "react-redux";
import {
  ChooseAnswer,
  DrawRemainingText,
  GoOnInitialStoryPoint,
  GoOnPreviousStoryPoint,
} from "../../state/actions/game-actions";
import { GameSelectors } from "../../state/selectors/game-selector";
import SpeakerComponent from "./SpeakerComponent";
import StoryComponent from "./StoryComponent";
import ToolsPanelComponent from "./ToolsPanelComponent";

const DecisionFieldComponent: React.FC<{
  decisionDisabled: boolean;
  actionIsCalled(): void;
}> = ({ decisionDisabled, actionIsCalled }) => {
  //const [isShowingText, setIsShowingText] = useState(false);

  // Selectors
  const actualStoryPointAnswers = useSelector(
    GameSelectors.getActualStoryPointAnswers
  );
  const actualStoryPointContinuousStoryPointIdent = useSelector(
    GameSelectors.getActualStoryPointContinuousStoryPointIdent
  );

  const dispatch = useDispatch();

  /** If user click on answer, screen go on next story point */
  const clickAnswerButton = (index: number) => {
    if (actualStoryPointAnswers === undefined) {
      throw new Error("todo");
      //TODO: set undefined state
    }
    if (actualStoryPointAnswers[index] === undefined) {
      throw new Error("todo");
      //TODO: set undefined state
    }
    if (
      actualStoryPointAnswers[index].connectedStoryPointIdentification ===
      undefined
    ) {
      throw new Error("todo");
      //TODO: set undefined state
    }

    dispatch(
      ChooseAnswer(
        actualStoryPointAnswers[index].connectedStoryPointIdentification
      )
    );
    actionIsCalled();
  };

  /** If user click on continue, screen go on next story point */
  const clickContinueButton = () => {
    dispatch(ChooseAnswer(actualStoryPointContinuousStoryPointIdent));
    actionIsCalled();
  };

  /** Render ansewrs, continue button or information demends on actual story point */
  const renderActionField = (): any[] => {
    var answersOrContinuesButton: any[] = [];

    if (actualStoryPointAnswers !== undefined) {
      answersOrContinuesButton = actualStoryPointAnswers.map((item, index) => {
        if (item.connectedStoryPointIdentification === undefined) {
          return (
            <View style={styles.answerButton} key={index}>
              <Button
                onPress={() => {
                  clickAnswerButton(index);
                }}
                title={item.text + " (uncomplete)"}
                key={index}
                disabled
              />
            </View>
          );
        } else {
          return (
            <View style={styles.answerButton} key={index}>
              <Button
                onPress={() => {
                  clickAnswerButton(index);
                }}
                title={item.text}
                key={index}
                disabled={decisionDisabled}
              />
            </View>
          );
        }
      });
    } else if (actualStoryPointContinuousStoryPointIdent !== undefined) {
      answersOrContinuesButton = [
        <View style={styles.answerButton}>
          <Button
            onPress={clickContinueButton}
            title="Continue"
            disabled={decisionDisabled}
            key="O"
          />
        </View>,
      ];
    } else {
      // If there is not a next step
      answersOrContinuesButton = [
        <View style={styles.answerButton}>
          <Text
            style={{
              fontStyle: "italic",
              color: "#807e7c",
              textAlign: "center",
            }}
          >
            You are on the current end of this story line. We hope next parts
            will be there really soon or you can try tell another way of this
            story
          </Text>
        </View>,
      ];
    }
    return answersOrContinuesButton;
  };

  let actionField = renderActionField();

  return <View>{actionField}</View>;
};

export default DecisionFieldComponent;

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
