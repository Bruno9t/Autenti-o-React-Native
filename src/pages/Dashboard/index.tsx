import React, { useContext } from 'react'
import { View,Button } from 'react-native'

import {AuthContext} from '../../contexts/auth'

import styles from './styles'

const Dashboard = () => {
    const {logout} = useContext(AuthContext)


    function handleLogout(){
        return logout()
    }

    return (
        <View
        style={styles.container}
        >

            <Button title="Logout" onPress={handleLogout} />
        </View>
    )
}

export default Dashboard

