import React from 'react'
import Dasboard from '../pages/Dashboard'

import {createStackNavigator} from '@react-navigation/stack'


const {Navigator,Screen} = createStackNavigator()


const AppRoutes = () => (
    <Navigator>
        <Screen name="Dashboard" component={Dasboard} />
    </Navigator>
)

export default AppRoutes