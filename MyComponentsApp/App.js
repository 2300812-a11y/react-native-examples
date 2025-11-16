// App.js
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Linking,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
  Vibration,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';

// Correct import for Slider
import Slider from '@react-native-community/slider';

export default function App() {
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  const sampleData = [
    { id: '1', title: 'First Item' },
    { id: '2', title: 'Second Item' },
    { id: '3', title: 'Third Item' },
  ];

  const sectionData = [
    { title: 'Fruits', data: ['Apple', 'Orange', 'Banana'] },
    { title: 'Vegetables', data: ['Carrot', 'Broccoli', 'Spinach'] },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        
        {/* View & Text */}
        <View style={styles.section}>
          <Text style={styles.heading}>View & Text</Text>
          <View style={styles.box}>
            <Text>This is a Text inside a View!</Text>
          </View>
        </View>

        {/* ActivityIndicator */}
        <View style={styles.section}>
          <Text style={styles.heading}>ActivityIndicator</Text>
          <ActivityIndicator size="large" color="#007bff" />
        </View>

        {/* Image */}
        <View style={styles.section}>
          <Text style={styles.heading}>Image</Text>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={{ width: 80, height: 80 }}
          />
        </View>

        {/* Button */}
        <View style={styles.section}>
          <Text style={styles.heading}>Button</Text>
          <Button title="Press Me" onPress={() => Alert.alert('Button pressed')} />
        </View>

        {/* TextInput */}
        <View style={styles.section}>
          <Text style={styles.heading}>TextInput</Text>
          <TextInput
            style={styles.input}
            placeholder="Type something..."
            value={text}
            onChangeText={setText}
          />
          <Text>You typed: {text}</Text>
        </View>

        {/* Switch */}
        <View style={styles.section}>
          <Text style={styles.heading}>Switch</Text>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
          <Text>{isEnabled ? 'Enabled' : 'Disabled'}</Text>
        </View>

        {/* TouchableOpacity */}
        <View style={styles.section}>
          <Text style={styles.heading}>TouchableOpacity</Text>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => Alert.alert('TouchableOpacity pressed')}
          >
            <Text style={{ color: 'white' }}>Press Me</Text>
          </TouchableOpacity>
        </View>

        {/* TouchableHighlight */}
        <View style={styles.section}>
          <Text style={styles.heading}>TouchableHighlight</Text>
          <TouchableHighlight
            style={styles.touchableHighlight}
            onPress={() => Alert.alert('TouchableHighlight pressed')}
          >
            <Text>Press Me</Text>
          </TouchableHighlight>
        </View>

        {/* TouchableWithoutFeedback */}
        <View style={styles.section}>
          <Text style={styles.heading}>TouchableWithoutFeedback</Text>
          <TouchableWithoutFeedback onPress={() => Alert.alert('Touched!')}>
            <View style={styles.box}>
              <Text>Tap anywhere in this box</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* FlatList */}
        <View style={styles.section}>
          <Text style={styles.heading}>FlatList</Text>
          <FlatList
            data={sampleData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Text style={styles.listItem}>{item.title}</Text>}
          />
        </View>

        {/* SectionList */}
        <View style={styles.section}>
          <Text style={styles.heading}>SectionList</Text>
          <SectionList
            sections={sectionData}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
          />
        </View>

        {/* Modal */}
        <View style={styles.section}>
          <Text style={styles.heading}>Modal</Text>
          <Button title="Show Modal" onPress={() => setModalVisible(true)} />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalView}>
              <Text>This is a modal!</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </Modal>
        </View>

        {/* KeyboardAvoidingView */}
        <KeyboardAvoidingView behavior="padding" style={styles.section}>
          <Text style={styles.heading}>KeyboardAvoidingView</Text>
          <TextInput
            style={styles.input}
            placeholder="Keyboard avoids overlay"
          />
        </KeyboardAvoidingView>

        {/* Linking */}
        <View style={styles.section}>
          <Text style={styles.heading}>Linking</Text>
          <Button
            title="Open React Native Docs"
            onPress={() => Linking.openURL('https://reactnative.dev/')}
          />
        </View>

        {/* Vibration */}
        <View style={styles.section}>
          <Text style={styles.heading}>Vibration</Text>
          <Button title="Vibrate" onPress={() => Vibration.vibrate()} />
        </View>

        {/* Dimensions & Platform */}
        <View style={styles.section}>
          <Text style={styles.heading}>Dimensions & Platform</Text>
          <Text>Screen width: {Dimensions.get('window').width}</Text>
          <Text>Screen height: {Dimensions.get('window').height}</Text>
          <Text>Platform: {Platform.OS}</Text>
        </View>

        {/* Slider */}
        <View style={styles.section}>
          <Text style={styles.heading}>Slider</Text>
          <Text>Value: {sliderValue.toFixed(0)}</Text>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={0}
            maximumValue={100}
            value={sliderValue}
            onValueChange={setSliderValue}
            minimumTrackTintColor="#007bff"
            maximumTrackTintColor="#000000"
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  section: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  box: {
    padding: 10,
    backgroundColor: '#ddeeff',
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  touchable: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  touchableHighlight: {
    backgroundColor: '#ffdd00',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  listItem: {
    padding: 10,
    backgroundColor: '#eee',
    marginBottom: 5,
    borderRadius: 5,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#ddd',
    padding: 5,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'white',
    padding: 35,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
