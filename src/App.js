import './App.css';
import React , {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => 
{
  const [progress,setProgress] = useState(0);
  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar
      height={3}
      color="#f11946"
      progress={progress}
      />
      <Routes>
        <Route
          path="/"
          // using key makes them different instances of News component
          element={<News setProgress={setProgress} key="general" pageSize={8} country="us" category="general" color="dark"/>}
        />
        <Route
          path="/business"
          element={<News setProgress={setProgress} key="business" pageSize={8} country="us" category="business" color="info"/>}
        />
        <Route
          path="/entertainment"
          element={<News setProgress={setProgress} key="entertainment" pageSize={8} country="us" category="entertainment" 
          color="warning"/>}
        />
        <Route
          path="/health"
          element={<News setProgress={setProgress} key="health" pageSize={8} country="us" category="health" color="primary"/>}
        />
        <Route
          path="/science"
          element={<News setProgress={setProgress} key="science" pageSize={8} country="us" category="science" color="secondary"/>}
        />
        <Route
          path="/sports"
          element={<News setProgress={setProgress} key="sports" pageSize={8} country="us" category="sports"color="danger"/>}
        />
        <Route
          path="/technology"
          element={<News setProgress={setProgress} key="technology" pageSize={8} country="us" category="technology" color="success"/>}
        />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
