import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';
class ExploreScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ExploreScreen</Text>
            </View>
        );
    }
}
ExploreScreen = createStackNavigator({
   main: ExploreScreen
    },
  {
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
  });
export default ExploreScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});