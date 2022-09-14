import { View, Text, StyleSheet, Pressable} from 'react-native';

 function GoalItem(props) {
     return (

         <View style={styles.itemList}>
            <Pressable
            android_ripple={{ color: '#555555' }}
            onPress={() => props.onRemoveItemGoal(props.id)}
            style={({pressed}) => pressed && styles.pressedItem}
        >
                    <Text style={styles.textList}> {props.text}  </Text>
                </Pressable>
            </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    itemList: {
        backgroundColor: '#ccc',
        margin: 8,
        padding: 8,
        borderRadius: 8,
    },
    textList: {
        color: 'red'
    },
    pressedItem: {
        opacity: 0.5,
        backgroundColor: '#000'
    }
})