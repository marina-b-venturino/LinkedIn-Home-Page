import Card from 'react-bootstrap/Card';
import ladygaga from '../../assets/lady-gaga.webp';
import { BsPostcard } from "react-icons/bs";
import { MdOutlineInsertPhoto } from "react-icons/md";

function Comments() {
  return (
    <Card className="mt-3" style={{ width: '32rem' }}>
      <Card.Body>
      <img className="profile-img-comments me-3" src={ladygaga} alt="ladygaga" ></img>
      <input className='input-comments' type="text" placeholder="Create post" aria-label="Create post"></input>
      <div className='mt-2'>
      <Card.Link className='side-text' href="#"><BsPostcard className='orange me-2'/>Write article</Card.Link>
        <Card.Link className='side-text' href="#"><MdOutlineInsertPhoto className='blue me-2'/>Photo</Card.Link>
      </div>
      </Card.Body>
    </Card>
  );
}

export default Comments;