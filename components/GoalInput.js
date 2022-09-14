import { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
 
function GoalInput(props) { 
    const [enteredTextInput, setEnteredTextInput] = useState('');

    function handleInput(textInput) { 
        setEnteredTextInput(textInput)
    };

    function addGoalItem() {
        props.onAddGoal(enteredTextInput);
        setEnteredTextInput('');
    }

    return (
        <View style={styles.formContainer}>
            <TextInput value={enteredTextInput} style={styles.textInput} onChangeText={handleInput} placeholder='add goal' />
            <Button onPress={addGoalItem} title="add goal" />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8
        },
})
