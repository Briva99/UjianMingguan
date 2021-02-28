import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../style'


export default class cekIn extends Component {


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
            <View style={styles.pages}>
                <Text> Anda Absensi Cek In pada : </Text>
                <Text>{this.state.date}</Text>
            </View>
        )
    }
}


