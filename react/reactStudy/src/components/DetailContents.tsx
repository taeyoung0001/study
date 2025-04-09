import { useState } from "react";
import { Nav } from "react-bootstrap";

const DetailContents = () => {
  const [탭, 탭변경] = useState(0);

  const btns = ["버튼0", "버튼1", "버튼2"];
  const contetns = ["0q번", "1번", "2번"];
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="link0">
        {btns.map((content, i) => (
          <Nav.Item key={i}>
            <Nav.Link
              onClick={() => {
                탭변경(i);
              }}
              eventKey={`link${i}`}
            >
              {content}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div>{contetns[탭]}</div>
    </div>
  );
};

export default DetailContents;
