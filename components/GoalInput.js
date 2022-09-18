import { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';
 
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
        <Modal visible={props.modalVisible} animationType="slide">
            <View style={styles.formContainer}>
                <TextInput value={enteredTextInput} style={styles.textInput} onChangeText={handleInput} placeholder='add goal' />
                <View style={styles.buttonModal}>
                    <View>
                        <Button onPress={addGoalItem} title="add goal" />
                    </View>
                    <View>
                        <Button title="cancel" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        justifyContent: 'center',
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
    buttonModal: {
        flexDirection: 'row'
    }
})
