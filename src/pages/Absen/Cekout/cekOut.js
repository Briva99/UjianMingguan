import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


export default class cekOut extends Component {

    constructor(props) {
        super(props);
        this.state = {
          date: '',
        }
      }

      componentDidMount() {
        var that = this;
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        that.setState({
          //Setting the value of the date time
          date:
            date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        });
      }
    
    render() {
        return (
            <View>
                <Text> Cek Out berhasil : </Text>
                <Text>{this.state.date}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
