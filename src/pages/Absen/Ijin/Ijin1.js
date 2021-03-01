import React, { Component } from 'react';
import {  StyleSheet, View,TouchableOpacity,Text,ScrollView } from 'react-native'
import { FormDatePicker,FormPicker,Picker,FormInput,FormTextArea,Icon  } from '@99xt/first-born'


export default class Ijin1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dari: '',
            sampai: '',
            perihal: '',
            keterangan:'',
            
        };
    };

    onInputChangetext = (namaState, value) => {
        this.setState({
            [namaState]: value,
        });
    };

    onSubmit = () => {
        if(this.state.dari && this.state.sampai){
            // penyimpanan di realtime database 'Firebase.database()' Firebase.Auth()=> untuk save 
            // di Autenthication
            const Ijin = Firebase.database().ref('Daftar');
            const kontak ={
                dari : this.state.dari,
                sampai : this.state.sampai,
                perihal : this.state.perihal,
                keterangan: this.state.keterangan,
                
            }
                Ijin
                .push(Daftar)
                .then((data)=>{
                    Alert.alert('Sukses', 'Penyimpanan Berhasil');
                    //apabila sukses menyimpan maka akan kembali ke Home
                    this.props.navigation.replace('Home');
                })
                .catch((error)=> {
                    console.log("Error :", error)
                })

        } else {
            Alert.alert('Error', 'Data harus Diisi Lengkap')
        }
       
    };

    render() {
        return (
            <ScrollView style={styles.pages}>
                <FormPicker label="Kategori">
                    <Picker.Item value="Bencana" label="Ijin Bencana" />
                    <Picker.Item value="Sakit" label="Ijin Sakit" />
                    <Picker.Item value="Anak_Sakit" label="Ijin Anak Sakit" />
                </FormPicker>
                <FormDatePicker label="Dari"
                placeholder="Masukkan Tanggal"
                onChangeText={this.onInputChangetext}
                namaState="dari"
                value={this.state.dari}
                />
                <FormDatePicker label="Sampai"  
                placeholder="Masukkan Tanggal"
                onChangeText={this.onInputChangetext}
                namaState="sampai"
                value={this.state.sampai}
                />
                <FormInput label="Perihal"  
                 placeholder="Masukkan Perihal"
                onChangeText={this.onInputChangetext}
                namaState="perihal"
                value={this.state.perihal}
                 />
                <FormTextArea label="Keterangan"  
                 placeholder="Masukkan Keterangan"
                onChangeText={this.onInputChangetext}
                namaState="keterangan"
                value={this.state.keterangan}
                />
               
                
                <TouchableOpacity style={styles.tombol} >
                     <Text style={styles.textTombol}>SUBMIT</Text>
              </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
   pages: {
        flex: 1,
        padding: 30,
        
   },
   tombol: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10

},
textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
},
})
