import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import { Route, Routes } from 'react-router-dom';
import UniversityLists from './components/UniversityLists';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/user' element={ <Users/> }/>
        <Route path='/universities' element={ <UniversityLists/> }/>
      </Routes>
    </div>
  );
}

export default App;
// List of universities http://universities.hipolabs.com/search?country=India