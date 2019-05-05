import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Category extends Component {
  render() {
    return (
      <View style={{height: 140, width: 160, marginLeft: 20, borderWidth: 1, borderColor: '#ddd'}}>
        <View style={{flex: 3}}>
          <Image source={this.props.image}
                 style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}/>
        </View>
        <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
          <Text>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default Category;