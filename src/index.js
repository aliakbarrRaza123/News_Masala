import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Mount -> Unmount -> Mount again (component behaviour testing by mounting again)
  // isi wajah se constructor render(),useEffect() development mein multiple times chal sakte 
  
    <App />
);

// If you want to start measuring performance in your app, pass a function
// (for example: reportWebVitals(console.log))
reportWebVitals();
