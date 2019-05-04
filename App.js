import React from 'react';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import {ExploreScreen, InboxScreen, ProfileScreen, SavedScreen, TripsScreen} from './screens';

export default createAppContainer(createBottomTabNavigator({
  Explore: ExploreScreen,
  Saved: SavedScreen,
  Trips: TripsScreen,
  Inbox: InboxScreen,
  Profile: ProfileScreen,

}, {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: {width: 5, height: 3},
      shadowColor: 'grey',
      shadowOpacity: '0.7',
      elevation: 5,
    }
  }
}));
