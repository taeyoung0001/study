import { Card, Nav } from "react-bootstrap";

export default function NaviBar() {
  const navArr = ["Home", "detail", "about", "Cart"];
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          {navArr.map((list) => (
            <Nav.Item key={list}>
              <Nav.Link href={`/${list}`}>{list}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Card.Header>
    </Card>
  );
}
