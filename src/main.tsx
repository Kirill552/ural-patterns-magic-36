import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './dark-theme-fixes.css'

createRoot(document.getElementById("root")!).render(<App />);