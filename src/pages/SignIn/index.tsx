import React, { useContext } from 'react'
import { View,Button, StyleSheet } from 'react-native'

import {AuthContext} from '../../contexts/auth'

import styles from './styles'


const SignIn = () => {
    const {signed,user,signIn} = useContext(AuthContext)
    console.log(signed,user)

    function handleSignIn(){
        console.log(signed,user)
        signIn()
    }


    return (
        <View
        style={styles.container}
        >

            <Button title="Sign In" onPress={handleSignIn} />
        </View>
    )
}


export default SignIn