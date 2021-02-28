import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Firebase from '../../config/Firebase/Index'

export default class DetailKontak extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             kontak :{},
        }
    }

    componentDidMount() {
        Firebase.database()
            .ref('Kontak/' + this.props.route.params.id)
            .once('value', (querySnapShot) => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let userItem = { ...data };

                this.setState({
                    kontak: userItem,
                    
                })
            })
    }
    
    render() {
        const {kontak} = this.state
        return (
            <View style ={styles.pages}>
                <Text>Nama : </Text>
                <Text style= {styles.text}>{kontak.nama}</Text>

                <Text>Umur : </Text>
                <Text style= {styles.text}>{kontak.umur}</Text>

                <Text>Keterangan : </Text>
                <Text style= {styles.text}>{kontak.keterangan}</Text>

                <Text>Koordinat : </Text>
                <Text style= {styles.text}>{kontak.Latitude}</Text>
                <Text style= {styles.text}>{kontak.Longitude}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    pages : {
        margin: 30,
        padding: 20,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    text : {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    }
})
