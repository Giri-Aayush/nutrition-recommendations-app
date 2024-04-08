import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './theme/global.css'
import { NoSsr } from '@mui/material'
const MOUNT_NODE = document.getElementById('root')

ReactDOM.createRoot(MOUNT_NODE).render(
  <NoSsr>
    <App />
  </NoSsr>,
)
