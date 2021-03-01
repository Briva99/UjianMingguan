import {  faCalendar, faHistory,  faSignInAlt, faSignOutAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Alert } from 'react-native'
import styles from './style'




export default class Home extends Component {
    
    render() {
      
        return (
            <View style={styles.page}>
                
            <View style={styles.header1}>
                <View style={styles.wrapperButton}>
                    <TouchableOpacity style={styles.btnCekOt} onPress={() => this.props.navigation.navigate('cekIn')}>
                        <FontAwesomeIcon icon={faSignInAlt} size={40} color={'white'} />   
                    </TouchableOpacity>
                    <Text style={styles.Text}>     In</Text> 
                </View>
            </View>
                <View style={styles.header2}>
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity style={styles.btnCekOt} onPress={() => this.props.navigation.navigate('cekOut')}>
                            <FontAwesomeIcon icon={faSignOutAlt} size={40} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.Text}>   Out</Text>
                    </View>
                </View>
                <View style={styles.header3}>
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity style={styles.btnCekOt} onPress={() => this.props.navigation.navigate('Ijin')}>
                            <FontAwesomeIcon icon={faCalendar} size={40} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.Text}>    Ijin</Text>
                    </View>
                </View>
                <View style={styles.header4}>
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity style={styles.btnCekOt} onPress={() => this.props.navigation.navigate('historyAbsen')}>
                            <FontAwesomeIcon icon={faHistory} size={40} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.Text}>Histori</Text>
                    </View>
                </View>

                <View style={styles.header5}>
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity style={styles.btnCekOt} onPress={() => this.props.navigation.navigate('Log_Out')}>
                            <FontAwesomeIcon icon={faTimesCircle} size={40} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.Text}>Log Out</Text>
                    </View>
                </View>

        </View>
        )
    }
}

