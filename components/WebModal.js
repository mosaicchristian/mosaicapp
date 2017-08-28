import React from 'react';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    WebView,
    Modal,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    button: {
        padding: 5,
    },
    modal: {
        flex: 1,
    },
});

export default class WebModal extends React.Component {
    render() {
        return (
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.visible}>
            <View style={styles.modal}>
              <TouchableHighlight onPress={this.props.closeModal} underlayColor="gray" style={styles.button}>
                <FontAwesome name="times" size={32} color="black" />
              </TouchableHighlight>
              <WebView source={{uri: this.props.url}} />
            </View>
          </Modal>
        );
    }
}
