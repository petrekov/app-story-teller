import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Speaker } from "../../state/types";

const SpeakerComponent: React.FC<{speaker:Speaker}> = ({speaker}) => {
    return (
            <View style={{ flexDirection: 'row', backgroundColor: '#bdc7bf', padding: 5 }}>
                <View style={{ flexDirection: 'column', marginRight: 20 }}>
                    <Image style={{ height: 70, width: 70 }} source={{ uri: speaker.image }} />
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 25, fontStyle: 'italic', marginTop: '5%' }}>{speaker.name}</Text>
                </View>
            </View>
    )
}

export default SpeakerComponent;
