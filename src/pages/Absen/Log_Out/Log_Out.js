import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import Firebase from '../../../config/Firebase/Index'

export default class Log_Out extends Component {

    constructor() {
        super();
        this.state = { 
          uid: ''
        }
      }

      signOut = () => {
        Firebase.auth().signOut().then(() => {
          this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
      }  

    render() {

        this.state = { 
            displayName: Firebase.auth().currentUser.displayName,
            uid: Firebase.auth().currentUser.uid
          } 

        return (
            <View style={styles.container}>
            <Text style = {styles.textStyle}>
              Anda Akan Logout ? {this.state.displayName}
            </Text>
    
            <Button style = {styles.button} title="Logout"
              onPress={() => this.signOut()}
            />
          </View>
        );
      }
    }

const styles = StyleSheet.create({

    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        backgroundColor: '#fff'
      },
      textStyle: {
        fontSize: 15,
        marginBottom: 20
      },
      button: {
        color:"#3740FE",
        borderRadius: 30,
      }

})
