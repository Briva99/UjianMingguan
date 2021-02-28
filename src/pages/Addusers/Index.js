import React, { Component } from 'react'
import { TouchableOpacity, View, Text, PermissionsAndroid, Platform, Alert, ActivityIndicator } from 'react-native'
import InputData from '../../component/Inputdata/Index'
import Geolocation from '@react-native-community/geolocation';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import styles from "./style";
import Firebase from '../../config/Firebase/Index'


export default class Addusers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nama: '',
            umur: '',
            keterangan: '',
            isPermitted: false,
            currentLongitude: '',//Initial Longitude
            currentLatitude: '',//Initial Latitude
        };
    };
    // camera
    onPress() {
        var that = this;
        if (Platform.OS === 'android') {
            async function requestCameraPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: 'CameraExample App Camera Permission',
                            message: 'CameraExample App needs access to your camera ',
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //If CAMERA Permission is granted
                        //Calling the WRITE_EXTERNAL_STORAGE permission function
                        requestExternalWritePermission();
                    } else {
                        alert('CAMERA permission denied');
                    }
                } catch (err) {
                    alert('Camera permission err', err);
                    console.warn(err);
                }
            }
            async function requestExternalWritePermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                        {
                            title: 'CameraExample App External Storage Write Permission',
                            message:
                                'CameraExample App needs access to Storage data in your SD Card ',
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //If WRITE_EXTERNAL_STORAGE Permission is granted
                        //Calling the READ_EXTERNAL_STORAGE permission function
                        requestExternalReadPermission();
                    } else {
                        alert('WRITE_EXTERNAL_STORAGE permission denied');
                    }
                } catch (err) {
                    alert('Write permission err', err);
                    console.warn(err);
                }
            }
            async function requestExternalReadPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                        {
                            title: 'CameraExample App Read Storage Read Permission',
                            message: 'CameraExample App needs access to your SD Card ',
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //If READ_EXTERNAL_STORAGE Permission is granted
                        //changing the state to re-render and open the camera
                        //in place of activity indicator
                        that.setState({ isPermitted: true });
                    } else {
                        alert('READ_EXTERNAL_STORAGE permission denied');
                    }
                } catch (err) {
                    alert('Read permission err', err);
                    console.warn(err);
                }
            }
            //Calling the camera permission function
            requestCameraPermission();
        } else {
            this.setState({ isPermitted: true });
        }
    }
    onBottomButtonPressed(event) {
        const captureImages = JSON.stringify(event.captureImages);
        if (event.type === 'left') {
            this.setState({ isPermitted: false });
        } else {
            Alert.alert(
                event.type,
                captureImages,
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        }
    }
    // camera

    // geolokasi
    componentDidMount = () => {
        var that = this;
        //Checking for the permission just after component loaded
        if (Platform.OS === 'ios') {
            this.callLocation(that);
        } else {
            async function requestLocationPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                        'title': 'Location Access Required',
                        'message': 'This App needs to Access your location'
                    }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        that.callLocation(that);
                    } else {
                        alert("Permission Denied");
                    }
                } catch (err) {
                    alert("err", err);
                    console.warn(err)
                }
            }
            requestLocationPermission();
        }
    }
    callLocation(that) {
        //alert("callLocation Called");
        Geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                //getting the Longitude from the location json
                const currentLatitude = JSON.stringify(position.coords.latitude);
                //getting the Latitude from the location json
                that.setState({ currentLongitude: currentLongitude });
                //Setting state Longitude to re re-render the Longitude Text
                that.setState({ currentLatitude: currentLatitude });
                //Setting state Latitude to re re-render the Longitude Text
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        that.watchID = Geolocation.watchPosition((position) => {
            //Will give you the location on location change
            console.log(position);
            const currentLongitude = JSON.stringify(position.coords.longitude);
            //getting the Longitude from the location json
            const currentLatitude = JSON.stringify(position.coords.latitude);
            //getting the Latitude from the location json
            that.setState({ currentLongitude: currentLongitude });
            //Setting state Longitude to re re-render the Longitude Text
            that.setState({ currentLatitude: currentLatitude });
            //Setting state Latitude to re re-render the Longitude Text
        });
    }
    componentWillUnmount = () => {
        Geolocation.clearWatch(this.watchID);
    }
    // geolokasi


    onInputChangetext = (namaState, value) => {
        this.setState({
            [namaState]: value,
        });
    };
    onSubmit = () => {
        if(this.state.nama && this.state.umur){
            // penyimpanan di realtime database 'Firebase.database()' Firebase.Auth()=> untuk save 
            // di Autenthication
            const tambahUser = Firebase.database().ref('Kontak');
            const kontak ={
                nama : this.state.nama,
                umur : this.state.umur,
                keterangan : this.state.keterangan,
                Longitude: this.state.currentLongitude,
                Latitude: this.state.currentLatitude
            }
                tambahUser
                .push(kontak)
                .then((data)=>{
                    Alert.alert('Sukses', 'Penyimpanan Berhasil');
                    //apabila sukses menyimpan maka akan kembali ke Home
                    this.props.navigation.replace('Home');
                })
                .catch((error)=> {
                    console.log("Error :", error)
                })

        } else {
            Alert.alert('Error', 'Nama dan Umur Harus Diisi')
        }
       
    };


    render() {
        if (this.state.isPermitted) {
            return (
                <CameraKitCameraScreen
                    // Buttons to perform action done and cancel
                    actions={{ liftButtonText: 'Done', rightButtonText: 'Cancel' }}
                    onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
                    flashImages={{
                        // Flash button images
                        on: require('../../../assets/flashON.png'),
                        off: require('../../../assets/Flashoff.png'),
                        auto: require('../../../assets/flashAuto.png'),
                    }}
                    cameraFlipImage={require('../../../assets/rotate.png')}
                    captureButtonImage={require('../../../assets/camera.png')}
                />
            );
        } else {
            return (
                <View style={styles.pages}>
                    <InputData
                        label="Nama"
                        placeholder="Masukkan Nama"
                        onChangeText={this.onInputChangetext}
                        namaState="nama"
                        value={this.state.nama}

                    />
                    <InputData
                        label="Umur"
                        placeholder="Masukkan Umur"
                        keyboardType="number-pad"
                        onChangeText={this.onInputChangetext}
                        namaState="umur"
                        value={this.state.umur}

                    />
                    <InputData
                        label="Keterangan"
                        placeholder="Masukkan keterangan Anda"
                        isTextArea={true}
                        onChangeText={this.onInputChangetext}
                        namaState="keterangan"
                        value={this.state.keterangan}

                    />
                    <Text style={styles.textKoordinat}>Koordinat :</Text>
                    <Text style={styles.Text}>Longitude={this.state.currentLongitude}    Latitude={this.state.currentLatitude} </Text>



                    <TouchableOpacity
                        style={styles.tombol}
                        onPress={this.onPress.bind(this)}>
                        <Text style={styles.textTombol}>Open Camera</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
                        <Text style={styles.textTombol}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}


