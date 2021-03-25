import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import RNGestureHandlerButton from "react-native-gesture-handler/lib/typescript/components/GestureHandlerButton";
import { useDispatch, useSelector } from "react-redux";
import { ChooseAnswer, DrawRemainingText, DrawTextPart, FinishDrawingText, GoOnInitialStoryPoint, GoOnPreviousStoryPoint, SetNextText } from "../state/actions/game-actions";
import { GameSelectors, getActualText } from "../state/selectors/game-selector";



const GameScreen: React.FC = ({ navigation }) => {

    // Selectors
    const actualStoryPoint = useSelector(GameSelectors.getActualStoryPoint);
    const actualShowenText = useSelector(GameSelectors.getActualShowenText);
    const isDrawingText = useSelector(GameSelectors.getIsDrawingText);
    const remainingText = useSelector(GameSelectors.getRemainingText);
    const actualSpeaker = useSelector(GameSelectors.getActualSpeaker);

    const dispatch = useDispatch();

    /** If user click on answer, screen go on next story point */
    const ClickAnswerButton = (index: number) => {
        let choosenAnswer = actualStoryPoint.answers;
        if (choosenAnswer === undefined) {
            //TODO: set undefined state
        }
        dispatch(ChooseAnswer(choosenAnswer[index].connectedStoryPointIdentificator));
    }

    /** If user click on continue, screen go on next story point */
    const ClickContinueButton = () => {
        dispatch(ChooseAnswer(actualStoryPoint.continuousStoryPointIdentificator));
    }

    /** Draw is skipped and text showen */
    const SkipTextLoading = () => {
        dispatch(DrawRemainingText());
    }

    /** Game begins from initial state */
    const ReserGame = () => {
        dispatch(GoOnInitialStoryPoint());
    }

    /** Game goes on previous story point */
    const GoBack = () => {
        dispatch(GoOnPreviousStoryPoint());
    }

    //TODO - Optimize: remove from REDUX
    if (isDrawingText) {
        setTimeout(() => {
            dispatch(DrawTextPart(1));
            if (!remainingText) {
                dispatch(FinishDrawingText());
            }
        }, 20)
    }

    /** Render ansewrs, continue button or information demends on actual story point */
    const RenderActionField = (): any[] => {

        var answersOrContinuesButton: any[] = [];

        if (actualStoryPoint.answers !== undefined) {
            answersOrContinuesButton = actualStoryPoint.answers.map((item, index) => {
                if (item.connectedStoryPointIdentificator === undefined) {
                    return (
                        <View style={styles.answerButton} key={index}>
                            <Button onPress={() => { ClickAnswerButton(index) }} title={item.text + " (uncomplete)"} key={index} disabled />
                        </View>)
                }
                else {
                    return (
                        <View style={styles.answerButton} key={index}>
                            <Button onPress={() => { ClickAnswerButton(index) }} title={item.text} key={index} disabled={isDrawingText} />
                        </View>)
                }
            });
        } else if (actualStoryPoint.continuousStoryPointIdentificator !== undefined) {
            answersOrContinuesButton = [(
                <View style={styles.answerButton}>
                    <Button onPress={ClickContinueButton} title="Continue" disabled={isDrawingText} key='O' />
                </View>
            )];
        } else { // If there is not a next step
            answersOrContinuesButton = [(
                <View style={styles.answerButton}>
                    <Text style={{ fontStyle: 'italic', color: '#807e7c', textAlign: 'center' }}>You are on the current end of this story line. We hope next parts will be there really soon or you can try tell another way of this story</Text>
                </View>
            )];
        }
        return answersOrContinuesButton;
    }

    let actionField = RenderActionField();

    return (
        <View>
            <View style={styles.speakerBox}>
                <View style={{ flexDirection: 'row',backgroundColor: '#bdc7bf', padding: 5 }}>
                    <View style={{ flexDirection: 'column', marginRight: 20 }}>
                        <Image style={{ height: 70, width: 70 }} source={{ uri: actualSpeaker.image }} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 25, fontStyle: 'italic', marginTop:'5%' }}>{actualSpeaker.name}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.storyTextBox} onTouchEnd={SkipTextLoading} >
                <Text>{actualShowenText}</Text>
            </View>
            <View style={styles.answersBox}>
                {actionField}
            </View>
            <View style={[styles.bottomMenuBox, { flexDirection: 'row' }]}>
                <View style={{ flexDirection: 'column', width: '33.3%', padding: 5 }}>
                    <Button onPress={ReserGame} title='RES' />
                </View>
                <View style={{ flexDirection: 'column', width: '33.3%', padding: 5 }}>
                    <Button onPress={GoBack} title='<-' />
                </View>
                <View style={{ flexDirection: 'column', width: '33.3%', padding: 5 }}>
                    <Button onPress={() => { }} title='MEN' disabled />
                </View>
            </View>

        </View>

    )
}

export default GameScreen;

const styles = StyleSheet.create({
    speakerBox: {
        height: '15%',
        padding: 10,   
    },
    storyTextBox: {
        height: '40%',
        padding: '5%',
        backgroundColor: '#fff'
    },
    answersBox: {
        height: '35%',
        padding: '10%',
    },
    answerButton: {
        marginBottom: 10
    },
    bottomMenuBox: {
        height: '10%'
    }
});