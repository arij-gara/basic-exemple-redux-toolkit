import Home from './pages/Home/home'
import Login from './pages/Login/login'
import {
  BrowserRouter ,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {Provider} from  'react-redux'
import {store} from './Store'
function App() {
  return (
    <div className="App">
     <Provider  store={store}>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path='/login' element={<Login />} />
        </Routes>
       </BrowserRouter>
       </Provider>
    </div>
  );
}

export default App;
