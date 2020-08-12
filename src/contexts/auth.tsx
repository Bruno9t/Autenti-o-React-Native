import React,{createContext, useState, useEffect} from 'react'
import * as auth from '../services/auth'
import AsyncStorage from '@react-native-community/async-storage'

interface AuthContextShape {
    signed:boolean
    user:object | null
    signIn():Promise<void>,
    logout():void
}

const AuthContext = createContext<AuthContextShape>({} as AuthContextShape)

const AuthProvider:React.FC = ({children}) => {
    const [user,setUser] = useState<object | null>(null)
    
    useEffect(()=>{
        async function loadStorageData(){
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
            const storagedToken = await AsyncStorage.getItem('@RNAuth:user')


            if(storagedUser && storagedToken){

              setUser(JSON.parse(storagedUser))  

            }
        }

        loadStorageData()
    },[])

    async function signIn(){
        const {token,user:userData} = await auth.signIn()

        
        setUser(userData)

        await AsyncStorage.setItem('@RNAuth:user',JSON.stringify(userData))
        await AsyncStorage.setItem('@RNAuth:user',JSON.stringify(token))

    }

    function logout(){
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            signed:!!user,
            user,
            signIn,
            logout
          }}>
              {children}
          </AuthContext.Provider>
    )
}


export{
    AuthContext,
    AuthProvider
}