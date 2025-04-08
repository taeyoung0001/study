import { Card, Nav } from "react-bootstrap";

export default function NaviBar() {
  const navArr = ["Home", "Active", "Link", "Cart"];
  return (
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          {navArr.map((list) => (
            <Nav.Item key={list}>
              <Nav.Link href="/">{list}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Card.Header>
    </Card>
  );
}
