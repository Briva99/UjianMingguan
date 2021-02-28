import React, { Component } from 'react'
import {  View,TouchableOpacity,Text } from 'react-native'
import InputData from '../../../component/Inputdata/Index'
import styles from '../style'
import DatePicker from 'react-native-date-picker'

export default class Ijin extends Component {
    constructor(props){
        super(props);
        this.state ={
            tanggalIn:'',
            tanggalOut:'',
            perihal:'',
            keterangan:'',
            date: new Date(),
        }
    }
    // onSubmit = () => {
    //     if(this.state.perihal && this.state.keterangan){
    //         // penyimpanan di realtime database 'Firebase.database()' Firebase.Auth()=> untuk save 
    //         // di Autenthication
    //         const tambahUser = Firebase.database().ref('Kontak');
    //         const Absensi ={
    //             tanggalIn : this.state.nama,
    //             tanggalOut : this.state.umur,
    //             perihal: this.state.perihal,
    //             keterangan : this.state.keterangan,
                
    //         }
    //             tambahUser
    //             .push(Absensi)
    //             .then((data)=>{
    //                 Alert.alert('Sukses', 'Penyimpanan Berhasil');
    //                 //apabila sukses menyimpan maka akan kembali ke Home
    //                 this.props.navigation.replace('Home');
    //             })
    //             .catch((error)=> {
    //                 console.log("Error :", error)
    //             })

    //     } else {
    //         Alert.alert('Error', 'Nama dan Umur Harus Diisi')
    //     }
       
    // };
    render() {
        return (
            <View style={styles.pages}>

                <DatePicker
                    date={this.state.date} 
                    mode="date"
                    onDateChange={(date)=>this.setState({date:date})}
                />

                <InputData
                    label="Dari Tanggal"
                    placeholder="Masukkan Tanggal"
                    // onChangeText={this.onInputChangetext}
                    namaState="tanggalIn"
                    value={this.state.tanggalIn}
                />
                <InputData
                    label="Sampai Tanggal"
                    placeholder="Masukkan Tanggal"
                    // onChangeText={this.onInputChangetext}
                    namaState="tanggalOut"
                    value={this.state.tanggalOut}
                />
                <InputData
                    label="Perihal"
                    placeholder="Masukkan inputan"
                    // onChangeText={this.onInputChangetext}
                    namaState="perihal"
                    value={this.state.perihal}
                />
                     <InputData
                        label="Keterangan"
                        placeholder="Masukkan keterangan Anda"
                        isTextArea={true}
                        // onChangeText={this.onInputChangetext}
                        namaState="keterangan"
                        value={this.state.keterangan}

                    />

                <TouchableOpacity style={styles.tombol} >
                    <Text style={styles.textTombol}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


