import { useSafeParam } from "../hooks/useSafeParam";
import { getSafeItem } from "../utils/getSafeItem";
import { DataType } from "../types/dataType";

type DetailPropsType = {
  data: DataType[];
};

const Detail = (props: DetailPropsType) => {
  const { data } = props;
  const id = useSafeParam("id");
  const intId = Number(id);
  const item = getSafeItem(data, intId);

  if (!item) {
    return <div>존재하지않는아이템</div>;
  }

  return (
    <div className="detail-container">
      <img
        src={`https://codingapple1.github.io/shop/shoes${intId + 1}.jpg`}
        width="80%"
      />

      <div className="detail-contents">
        <h4 className="detail-title">{data?.[intId].title}</h4>
        <p className="detail-p">{data[intId].content}</p>
        <p className="detail-p">{data[intId].price}</p>
        <button className="btn btn-danger">주문하기</button>
      </div>
    </div>
  );
};

export default Detail;
