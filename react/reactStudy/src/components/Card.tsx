import { DataType } from "../types/dataType";

type CardProps = {
  dataList: DataType[];
};
const Card = (props: CardProps) => {
  const { dataList } = props;
  console.log("props", dataList);
  return (
    <div className="card-container">
      {dataList.map((list) => (
        <div key={list.id} className="products">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              Number(list.id) + 1
            }.jpg`}
            alt={list.title}
          />
          <h4>{list.title}</h4>
          <p>{list.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
