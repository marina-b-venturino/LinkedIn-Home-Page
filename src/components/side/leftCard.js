import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import mia from '../../assets/Mia-Goth.jpg';
import johnny from '../../assets/Johnny_Depp.jpg';
import jared from '../../assets/jared-leto.webp';
import '../../assets/style.css';
import { FiPlus } from "react-icons/fi";

function LeftCards() {
  return (
    <div>
    <Card className="mt-3" style={{ width: '18rem' }}>
    <Card.Title className='mt-3'>Add to your feed</Card.Title>
    <Card.Body>
      <div className='add-profiles'>
        <img className="profile-img-comments ml-0" src={mia} alt="mia" ></img>
        <div>
        <h6>Mia Goth</h6>
        <p>Actress, Model</p>
        <p>Southwark, London, England</p>
        <p>Hollywood</p>
        <Button className='btn-follow'><FiPlus /> Follow</Button>
        </div>
      </div>
      <div className='add-profiles'>
        <img className="profile-img-comments ml-0" src={johnny} alt="johnny" ></img>
        <div>
        <h6>Johnny Deep</h6>
        <p>Actor</p>
        <p>Owensboro, Kentucky, United States</p>
        <p>Hollywood</p>
        <Button className='btn-follow'><FiPlus /> Follow</Button>
        </div>
      </div>
      <div className='add-profiles'>
        <img className="profile-img-comments ml-0" src={jared} alt="jared" ></img>
        <div>
        <h6>Jared Leto</h6>
        <p>Singer, Actor and Model</p>
        <p>Los Angeles, California, USA</p>
        <p>Hollywood</p>
        <Button className='btn-follow'><FiPlus /> Follow</Button>
        </div>
      </div>
      
      </Card.Body>
    </Card>
    </div>
  );
}

export default LeftCards;