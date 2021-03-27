import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useDispatch } from "react-redux";
import { GoOnInitialStoryPoint, GoOnPreviousStoryPoint } from "../../state/actions/game-actions";
import { Speaker } from "../../state/types";

const ToolsPanelComponent: React.FC = () => {
    
    const dispatch = useDispatch();
    
    /** Game begins from initial state */
    const ReserGame = () => {
        dispatch(GoOnInitialStoryPoint());
    }

    /** Game goes on previous story point */
    const GoBack = () => {
        dispatch(GoOnPreviousStoryPoint());
    }

    return (
        <View style={{ flexDirection: 'row' }}>
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
    )
}

export default ToolsPanelComponent;


