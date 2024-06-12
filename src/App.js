// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {Routes,Route} from 'react-router-dom'


function App() {
  const [mode,setMode]= useState('light');



  const [alert, setAlert] = useState(null);


  // const router = createBrowserRouter([
  //   {
  //     path: "/About",
  //     element:<><About/></>,
  //   },
  // ]);

  const showAlert =(message,type)=>
    {
      setAlert(
        {
          msg : message,
          type : type
        }
      )
    } 
 

  const toggleMode  = ()=>
    {
      if(mode ==='dark')
        {
          setMode('light');
          showAlert("Dark Mode disable","alert");
          document.body.classList.add('bg-light','text-dark');
          document.body.classList.remove('bg-dark','text-light');
          
          }
          else
          {
            setMode('dark');
            showAlert("Dark Mode disable","danger");
          document.body.classList.add('bg-dark','text-light');
          document.body.classList.remove('bg-light','text-dark');
        }
    }
  
  return (
    <>
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
       <Alert alert={alert}/>
      <TextForm heading ="Enter The Text" /> 
        {/* <Routes>       */}
          {/* <Route path='/' element={<><Alert alert={alert}/> <TextForm heading ="Enter The Text" /> </>} /> */}
      {/* <RouterProvider router={router} /> */}
        {/* <Route exact path='/About.js' element={<About/>}/> */}
      {/* </Routes> */}

      </div>
    </>

  );
}

export default App;
