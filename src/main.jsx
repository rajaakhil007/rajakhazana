import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider} from '@clerk/clerk-react';


// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  console.log("No key");
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById('root')).render(

    <ClerkProvider publishableKey ={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>

)

// function left(){
//   console.log("left");
// }

// function right(){
//   console.log("right");
// }   

// left() || right()
