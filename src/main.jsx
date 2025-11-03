import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <GoogleReCaptchaProvider reCaptchaKey="6LccNwAsAAAAALkQ3X83tnDTLXm-Z_xfLWbGfbbc">
    <App />
  </GoogleReCaptchaProvider>
  </BrowserRouter>
)
