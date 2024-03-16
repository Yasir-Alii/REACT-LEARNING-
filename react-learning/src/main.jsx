import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './assets/Components/Header.jsx'

// function MyApp() {
//   return(
//     <div>
//       <h3>THIS IS JUST <FUNCTION></FUNCTION></h3>
//     </div>
//   )
// }
//


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Header/>
  
    

  </React.StrictMode>,
)
