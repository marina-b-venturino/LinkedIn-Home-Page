import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SideCards() {
  return (
    <aside>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
    </aside>
  );
}

export default SideCards;