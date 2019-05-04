import React from 'react';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import {ExploreScreen, InboxScreen, ProfileScreen, SavedScreen, TripsScreen} from './screens';

export default createAppContainer(createBottomTabNavigator({
  Explore:  ExploreScreen,
  Saved: SavedScreen,
  Trips: TripsScreen,
  Inbox: InboxScreen,
  Profile: ProfileScreen,
}));
