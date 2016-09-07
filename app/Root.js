/**
 * Created by Ray on 16/9/7.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Dimensions
} from 'react-native';

import Button from './component/Button';

class Root extends Component {

    render() {

        var Dimensions = require('Dimensions');
        var {height, width} = Dimensions.get('window');

        return (
            <View style={styles.container}>
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                       style={{width: width, height: 200, marginTop: 20}} />

                <TextInput
                    placeholder="手机/邮箱/用户名"
                    style={{
                        width: width - 40,
                        height: 38,
                        marginTop: 20,
                        marginLeft: 20,
                        paddingLeft: 2,
                        paddingRight: 2,
                        borderWidth: 1,
                        borderColor: '#aaa',
                        fontSize: 12,
                        borderRadius: 2,
                        letterSpacing: 0.5
                    }}
                    /*onFocus={(event) => {
                        alert('onChange Text:' + event.nativeEvent.text);
                    }}
                    onBlur={(event) => {
                        alert('onBlur Text:' + event.nativeEvent.text);
                    }}
                    onChange={(event) => {
                        alert('onChange Text:' + event.nativeEvent.text);
                    }}
                    onEndEditing={(event) => {
                        alert('onEndEdition text:' + event.nativeEvent.text);
                    }}
                    onSubmitEditing={(event) => {
                        alert('onSubmitEditing Text:' + event.nativeEvent.text);
                    }}
                    onSelectionChange={(event) => {
                        alert('onSelectionChange Text:' + event.nativeEvent.text);
                    }}
                    onKeyPress={(event) => {
                        alert('onKeyPress Text:' + event.nativeEvent.text);
                    }}*/
                    />

                <TextInput
                    placeholder="密码"
                    style={{
                        width: width - 40,
                        height: 38,
                        marginTop: 20,
                        marginLeft: 20,
                        paddingLeft: 2,
                        paddingRight: 2,
                        borderWidth: 1,
                        borderColor: '#aaa',
                        fontSize: 12,
                        borderRadius: 2,
                        letterSpacing: 0.5
                    }}
                />

                <View style={{
                    flexDirection: 'row',
                    marginTop: 10
                }}>
                    <View style={{flex: 1}}>
                        <Text style={{
                            textAlign: 'left',
                            marginLeft: 20,
                            color: '#428bca'
                        }}
                        onPress={() => {
                            alert('没有帐户');
                        }}>
                            没有帐户?
                        </Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{
                            textAlign: 'right',
                            marginRight: 20,
                            color: '#428bca'
                        }}
                        onPress={() => {
                            alert('没有帐户');
                        }}>
                            忘记密码?
                        </Text>
                    </View>
                </View>
                <Button text="登录系统" style={{marginTop: 10, width: width - 50}}/>



                <View style={{
                    flexDirection: 'row',
                    marginTop: 20
                }}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Image
                            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                            style={{width: 40, height: 40, marginTop: 10}}
                        />
                        <Text style={{textAlign: 'center', marginTop: 10}}>微信登录</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Image
                            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                            style={{width: 40, height: 40, marginTop: 10}}
                        />
                        <Text style={{textAlign: 'center', marginTop: 10}}>QQ登录</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Image
                            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                            style={{width: 40, height: 40, marginTop: 10}}
                        />
                        <Text style={{textAlign: 'center', marginTop: 10}}>微博登录</Text>
                    </View>
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*justifyContent: 'center',*/
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default Root;