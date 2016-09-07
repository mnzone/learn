/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Button extends Component {

    constructor (props){
        super(props);
        this.state = {
            Text: this.props.text,
            Enable: true,
            LoadingText: '加载中...',
            BgColor: 'green',
            Content: this.props.text
        };
    }

    onClick = () => {
        //this.setEnable(!this.state.Enable);
        this.toggle();

        this.timer = setTimeout(() => {
          //  this.setEnable(!this.state.Enable);
            this.toggle();
        }, 3000);

    };

    toggle = () => {
        this.setEnable( ! this.state.Enable);
    }

    setEnable = (value) =>{
        if(value != true && value != false)
            return;

        this.setState({
            Enable: value,
            Text: this.state.Enable ? this.state.LoadingText : this.state.Content,
            LoadingText: this.state.LoadingText,
            BgColor: this.state.BgColor
        });
    };

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <TouchableOpacity
                disabled={!this.state.Enable}
                style={[styles.touchable, this.props.style, !this.state.Enable && styles.btnDisable]}
                onPress={this.props.onClick}>
                <Text style={styles.touchableText}>{this.state.Text}</Text>
            </TouchableOpacity>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    touchable: {
        height: 40,
        width: 100,
        borderRadius: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    btnDisable: {
        backgroundColor: 'gray',
    },
    touchableText: {
        textAlign: 'center',
        color: '#fff'
    },
});
