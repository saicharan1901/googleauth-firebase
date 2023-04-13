import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { auth } from './firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react'
import { createUser } from './database'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const results = await signInWithPopup(auth, googleAuth);
    const { user } = results;
    const userInfo = {
      name: user.displayName,
      email: user.email
    }
    createUser(userInfo);
  }
  useEffect(() => {
    console.log(user);
  }, [user])


  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-blue-900'>
        <h1 className="font-bold text-4xl text-white mb-12">Welcome to our App!</h1>
        <button onClick={login} className='px-6 py-3 bg-blue-700 hover:bg-blue-500 text-white rounded-lg shadow-lg'>Login with Google</button>
        {user && <p className="text-white mt-8">Welcome, <span className="font-bold">{user.displayName}</span>!</p>}
        {user && <button onClick={() => auth.signOut()} className='px-6 py-3 bg-red-700 hover:bg-red-500 text-white rounded-lg mt-8 shadow-lg'>Sign Out</button>}
      </div>

    </>
  )
}
