import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function handleModalOpen() {
    setIsOpen(true)
  }

  function handleModalClose() {
    setIsOpen(false)
  }

  function handleSubmit(enteredTextInput) { 
    setCourseGoals((currentCourses) => [...currentCourses, { text: enteredTextInput, id: Math.random().toString() }])
    setIsOpen(false)
  };

  function reomveGoalItem(id) {
    setCourseGoals(currentCourses => {
      return currentCourses.filter(goalItem => goalItem.id !== id)
    })
  }

  return (

    <View style={styles.containerApp}>
      <Button title="Add new goal" color="red" onPress={handleModalOpen} />
      <GoalInput modalVisible={isOpen}  onAddGoal={handleSubmit} onCancel={handleModalClose} />
      <View style={styles.textContainer}>
        <FlatList data={courseGoals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text} onRemoveItemGoal={reomveGoalItem} id={itemData.item.id} />
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
        alwaysBounceVertical={false}
        />  
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

  containerApp: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
    
  },
  textContainer: {
    flex: 6,
    marginTop: 20
  }

});
/**
 * onChange => onChangeText
 * onClick => onPress
 */

/**
 * FlastList Component
 * data => list of array
 * renderItem={cbFN(itemData)}
 * keyExtractor={cbFN(item, index)}
 */