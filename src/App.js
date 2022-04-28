import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import FormInput from './component/formInput';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<FormInput/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
