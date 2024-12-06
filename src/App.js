import './App.css';
import './assets/style.css';
import Header from './components/header/header';
import SideCards from './components/side/sideCard';
import Comments from './components/cards/comments';
import LeftCards from './components/side/leftCard';
import { Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <div className='container'>
        <Row>
        <Col xs={3}><SideCards></SideCards></Col>
        <Col xs={5}><Comments></Comments></Col>
        <Col xs={3}><LeftCards></LeftCards></Col> 
        </Row>
       </div>
    </div>
  );
}

export default App;
