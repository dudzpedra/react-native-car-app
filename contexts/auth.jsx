import { createContext, useContext, useState } from 'react'
import * as auth from '../services/auth'

const AuthContext = createContext({ signed: false })

export const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState(null)

    const signIn = async (newUser) => {
        const response = await auth.signIn(newUser)
        setUser(response)
        console.log('user signed', response)
    }

    const signOut = () => setUser(null)
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)