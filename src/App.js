import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router,
Routes,
Route,
Link} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove(`bg-light`)
    document.body.classList.remove(`bg-dark`)
    document.body.classList.remove(`bg-primary`)
    document.body.classList.remove(`bg-danger`)
  }
 /* const toggleMode2=()=>{
    if(mode==='light'){
      setMode('green')
      document.body.style.backgroundColor='green'
      showAlert("Green mode enabled!!","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled!!","success")
    }
  }*/
    const toggleMode=(cls)=>{
      
      removeBodyClasses()
      if(cls==='primary' || cls==='danger')
       document.body.classList.add(`bg-`+cls);
      else
      if(mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor='#042743'
       // document.title="TextUtils - Dark Mode"
        showAlert("Dark mode enabled!!","success")
        //below line gives a bad user exprience.. just for learning!!
        // setInterval(
        //   ()=>{
        //     document.title="Title 1";
        //   },1500
        // )
        // setInterval(
        //   ()=>{
        //     document.title="Title 2";
        //   },2000
        // )
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Light mode enabled!!","success")
       // document.title="TextUtils - Light Mode"
      }
   
  }
  return (<>
  <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /* toggleMode2={toggleMode2}*/ />
    <Alert alert={alert}/>
    <div className='container my=3'>
   
    <Routes>
    <Route exact path="/" element={<TextForm heading="Enter your text to analyze" alert={showAlert} mode={mode}/>}/>
    
    <Route exact path="/about" element={<About mode={mode} />}/>
      
   
  </Routes>
      {
       // <About />
      }
      
    </div>
    </Router>
  </>)
}

export default App;
