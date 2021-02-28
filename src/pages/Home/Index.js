import { faAd, faCalendar, faHistory, faMonument,  faSignInAlt, faSignOutAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { Component } from 'react'
import { Text, View, TouchableOpacity,Alert } from 'react-native'
import styles from './style'
import Firebase from '../../config/Firebase/Index'
import CardKontak from '../../component/cardUser/Index'



export default class Home extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         users: {},
    //         usersKey: [],
    //     };
    // }

    // componentDidMount() {
    //    this.updateData();
    // }

    // updateData=()=> {
    //     Firebase.database()
    //     .ref('Kontak')
    //     .once('value', (querySnapShot) => {
    //         let data = querySnapShot.val() ? querySnapShot.val() : {};
    //         let userItem = { ...data };

    //         this.setState({
    //             users: userItem,
    //             usersKey: Object.keys(userItem),
    //         })
    //     })
    // }

    // removeData = (id)=>{
    //     Alert.alert(
    //         "Warning",
    //         "Apakah AndA Yakin Data Dihapus ?",
    //         [
    //           {
    //             text: "Cancel",
    //             onPress: () => console.log("Cancel Pressed"),
    //             style: "cancel"
    //           },
    //           { text: "OK", onPress: () => {
    //               Firebase.database()
    //               .ref('Kontak/'+id)
    //               .remove();
    //               this.updateData();
    //               Alert.alert('Hapus', 'Data Berhasil Di Hapus')
    //           } }
    //         ],
    //         { cancelable: false }
    //       );
    // }
   
    render() {
        // const { users, usersKey } = this.state
        return (
            <View style={styles.page}>
                {/* <View style={styles.header}>
                    <Text style={styles.title}>Daftar Laporan</Text>
                    <View style={styles.garis} />
                </View> */}

                {/* <View style={styles.listUser}>
                    {usersKey.length > 0 ? (
                        usersKey.map((key) => (
                            <CardKontak key={key} userItem={users[key]} id={key} {...this.props}
                            removeData={this.removeData} />

                        ))
                    ) : (
                            <Text>Daftar Kosong</Text>
                        )}

                </View> */}

            <View style={styles.header1}>
                <View style={styles.wrapperButton}>
                    <TouchableOpacity style={styles.btnCekOt} onPress={() => this.props.navigation.navigate('cekIn')}>
                        <FontAwesomeIcon icon={faSignInAlt} size={40} color={'white'} />   
                    </TouchableOpacity>
                    <Text style={styles.Text}>Cek In</Text> 
                </View>
            </View>
                <View style={styles.header2}>
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity style={styles.btnCekOt} onPress={() => this.props.navigation.navigate('cekOut')}>
                            <FontAwesomeIcon icon={faSignOutAlt} size={40} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.Text}>Out</Text>
                    </View>
                </View>
                <View style={styles.header3}>
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity style={styles.btnCekOt} onPress={() => this.props.navigation.navigate('Ijin')}>
                            <FontAwesomeIcon icon={faCalendar} size={40} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.Text}>Ijin</Text>
                    </View>
                </View>
                <View style={styles.header4}>
                    <View style={styles.wrapperButton}>
                        <TouchableOpacity style={styles.btnCekOt} onPress={() => this.props.navigation.navigate('historyAbsen')}>
                            <FontAwesomeIcon icon={faHistory} size={40} color={'white'} />
                        </TouchableOpacity>
                        <Text style={styles.Text}>History</Text>
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

