import React from 'react'
import { Card } from './Components/Card'
import {Hero}  from "./Components/Hero"
import {AboutUs} from "./Components/AboutUs"
import { Contact } from './Components/Contact'
import { useTitle } from '../hooks/useTitle'
import { ClientReview } from './Components/ClientReview'


export const HomePage = () => {
useTitle("")
  return (
    
    <main className="space-y-8  dark:bg-gray-800"> 
        <Hero  />
        <AboutUs />
        <Card />
        <ClientReview/>
        <Contact/>
        
    </main>
  )
}

