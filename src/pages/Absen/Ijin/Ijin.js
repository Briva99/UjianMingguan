import React, { useState, useEffect } from 'react'

import { Layout, Text, Input, IndexPath, Select, SelectItem, Card, Avatar, Button } from '@ui-kitten/components';
import { RNCamera } from 'react-native-camera';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Firebase from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { FormDatePicker } from '@99xt/first-born'

const lstKategori = ["Ijin Bencana", "Ijin Sakit", "Ijin Anak Sakit"]

let camera = null;
const Ijin = () => {
    const [kategori, setKategori] = useState(0)
    const [dari, setDari] = useState("")
    const [sampai, setSampai] = useState("")
    const [perihal, setPerihal] = useState("")
    const [keterangan, setKeterangan] = useState("")
    const [gambar,setGambar] = useState('https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/p844030/ChelseaIslan.jpg')
    
    const renderOption = (title) => (

        <SelectItem key={title} title={title} />
    );
      
   
   const saveImage = () => {
   
    const namefile = ""+new Date();
   
    const reference = storage().ref(namefile);

    const pathToFile = gambar;
    // uploads file
    reference.putFile(pathToFile).then(() => {
         console.log("Uploaded")
         storage()
         .ref(namefile)
         .getDownloadURL().then((downloadData) =>{
            console.log(downloadData)
           saveData(downloadData)
         
         })
    });
   
   }
   
   const saveData = (downloadData) => {
    Firebase()
    .collection('Users')
    .add({
      kategori: lstKategori[kategori.row],
      name: nama,
      Dari :dari,
      Sampai : sampai,
      Perihal: perihal,
      Keterangan : keterangan,
      gambar: downloadData,
    })
    .then(() => {
      console.log('Pengajuan Ijin berhasil');
    });
   
   }

   const takePicture = async () => {
    console.log("test")
        if (camera) {
          const options = { quality: 0.5, base64: true };
          const data = await camera.takePictureAsync(options);
          console.log(JSON.stringify(data));
          setGambar(data.uri)
          console.log(data.uri);
        }
      };

    

    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Layout style={styles.container}>

            <Select style={styles.layout}
                selectedIndex={new IndexPath(kategori)}
                placeholder='Default'
                value={lstKategori[kategori.row]}
                onSelect={index => setKategori(index)}>
                {lstKategori.map(renderOption)}
            </Select>
                    <FormDatePicker label="Dari"
                        placeholder="Masukkan Tanggal"
                        onChangeText={txtdari => setDari(txtdari)}
                        value={dari}
                    />
                    <FormDatePicker label="Sampai"
                        placeholder="Masukkan Tanggal"
                        onChangeText={txtsampai => setSampai(txtsampai)}
                        value={sampai}
                    />
            <Input style={styles.layout}
                placeholder='Masukan perihal'
                value={perihal}
                onChangeText={txtPerihal => setPerihal(txtPerihal)} />
            <Input style={styles.layout}
                placeholder='Masukan Keterangan'
                value={keterangan}
                onChangeText={txtKeterangan => setKeterangan(txtKeterangan)} />
            
            <RNCamera
                    ref={ref => {
                        camera = ref;
                    }}
                    style={{flexDirection: 'row', justifyContent: 'center', height:100 , width:100 }}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}

                />
          
            <Card style={styles.containerPicture}>
                <Avatar style={styles.avatar} size='giant' source={{ uri: gambar }} />
               

                <Button onPress={() => takePicture()}>
                    Ambil Foto
            </Button>

            </Card>
            
            <Card style={styles.containerPicture}>
                <Button onPress={() => { saveImage() }}>
                    Submit
            </Button>
            </Card>
        </Layout>
        </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    
    layout: {
        margin: 15,
        alignItems: 'center',
    },

    containerPicture: {


        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    avatar: {
        alignItems: 'center',
        margin: 8,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },

});

export default Ijin

