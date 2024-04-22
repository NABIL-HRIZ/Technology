import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppProvider } from './components/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<AppProvider>
<React.StrictMode>
    <App />
  </React.StrictMode>,

</AppProvider>

  
)
