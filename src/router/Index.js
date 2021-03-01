import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/Index'
import Addusers from '../pages/Addusers/Index'

import cekIn from '../pages/Absen/Cekin/cekIn';
import cekOut from '../pages/Absen/Cekout/cekOut';
import Ijin from '../pages/Absen/Ijin/Ijin'
import historyAbsen from '../pages/Absen/History/historyAbsen';
import Login from '../pages/Login/Login';
import register from '../pages/Login/register';
import Log_Out from '../pages/Absen/Log_Out/Log_Out'

const Stack =  createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={Login} options={{title: 'Login'} ,{headerLeft: null},{justifyContent: 'center'}}/>
            <Stack.Screen name="register" component={register} options={{ title: 'Register Login' },{headerLeft: null}} />      */}
            <Stack.Screen name="Home" component={Home} options={{headerLeft: null}}  />
            <Stack.Screen name="cekIn" component={cekIn}  options={{title :'Absensi Masuk'}}/>
            <Stack.Screen name="cekOut" component={cekOut}  options={{title :'Absensi Pulang'}}/>
            <Stack.Screen name="Ijin" component={Ijin}  options={{title :'Form Ijin Tidak Masuk'}}/>
            <Stack.Screen name="historyAbsen" component={historyAbsen}  options={{title :'History Absensi'}}/>
            <Stack.Screen name="Log_Out" component={Log_Out}  options={{title :'Log Out'}}/>
            
            
        </Stack.Navigator>
    )
}

export default Router
