import Card from 'react-bootstrap/Card';
import pexels from '../../assets/pexels.jpg';
import ladygaga from '../../assets/lady-gaga.webp';
import square from '../../assets/square.png'
import '../../assets/style.css';
import { IoBookmarkSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";

function SideCards() {
  return (
    <aside>
    <Card className="mt-3" style={{ width: '17rem' }}>
      <Card.Img className="profile-banner" variant="top" src={pexels} />
      <img className="profile-img" src={ladygaga} alt="ladygaga" ></img>
      <Card.Body className='mt-3 text-banner'>
        <h4>Lady Gaga</h4>
        <p className='ocupation'>Singer, Actress</p>
        <p className='other-text'>New York, United States</p>
        <p>Universal Music</p>
      </Card.Body>
    </Card>
    <Card className="mt-3" style={{ width: '17rem' }}>
      <Card.Body>
      <div className='flex'><p className='me-2'>Visualizaciones del perfil</p><p className='num-color'>2597</p></div>
      <div className='flex'><p className='me-2'>Impresiones de la publicacion</p><p className='num-color'>5864</p></div>
      
      <div className="divider"></div>
      <p className='mt-3'><img className='me-2' src={square} alt="square"></img>Tus funcionalidades premium</p>
      </Card.Body>
    </Card>
    <Card className="mt-3" style={{ width: '17rem' }}>
      <Card.Body className="side-links">
        <a className="side-text" href="#action"><IoBookmarkSharp/> Bookmarks</a>
        <a className="side-text" href="#action2"><HiUserGroup/> Groups</a>
        <a className="side-text" href="#action3"><FaRegNewspaper/> Newsletters</a>
        <a className="side-text" href="#action4"><MdEventNote/> Events</a>
      </Card.Body>
    </Card>
    </aside>
  );
}

export default SideCards;