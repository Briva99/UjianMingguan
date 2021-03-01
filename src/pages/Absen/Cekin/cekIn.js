import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../style'

let camera = null;
const cekIn =()=> {
  const [date,setDate]=useState("")
  const [gambar,setGambar] = useState('https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/p844030/ChelseaIslan.jpg')
  const renderOption = (title) => (

    <SelectItem key={title} title={title} />
);

      useEffect(()=> {
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
      },[])
    
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
        firestore()
       .collection('Users')
       .add({
        
         gps: gps,
         gambar: downloadData,
       })
       .then(() => {
        console.log('User added!');
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

                <Text> Anda Absensi Cek In pada : </Text>
                <Text>{this.state.date}</Text>

                <RNCamera
                    ref={ref => {
                        camera = ref;
                    }}
                    style={{flexDirection: 'row', justifyContent: 'center', height:100 , width:100 }}
                    type={RNCamera.Constants.Type.front}
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



