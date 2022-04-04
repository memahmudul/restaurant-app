import React from 'react'
import {Route,Routes} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {Header} from "./components"
import {MainContainer,CreateContainer} from './components';

function App() {
  return (
    <AnimatePresence> {/* used to enable framer motion */}
        <Header/>
        <Routes>
            <Route path='/' element={<MainContainer/>}/>
            <Route path='/create' element={<CreateContainer/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default App