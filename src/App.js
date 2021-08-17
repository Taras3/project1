import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Header/Nav/Home/Home';
import List from './components/Header/Nav/List/List';


const App = (props) => {
  
  return (
    <BrowserRouter>
       <div className="container">
           <Header />
           
           <Route path="/list" render={ () => <List prList={props.state.dataBlock} addList={props.addList} dataList={props.state.dataList}/>} />
           <Route path="/home" component={Home}/>
       </div>
    </BrowserRouter>
  )
}

export default App;
