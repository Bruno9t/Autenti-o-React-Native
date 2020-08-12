
interface AuthProps {
    token:string
    user:{
        name:string
        email:string
    }
}

export function signIn():Promise<AuthProps>{
    return new Promise(resolve=>{
       setTimeout(()=>{
        resolve({
            token:'sr6a5sr6a87asdfsddsd.fdfsswf.2323',
            user:{
                name:"Bruno",
                email:"bruno@gmail.com"
            }
        })
       },2000) 
    })
}