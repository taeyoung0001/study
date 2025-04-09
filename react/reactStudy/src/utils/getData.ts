import axios from "axios";

export const getData = async (URL: string) => {
  try {
    const response = await axios.get(URL);

    if (response.status != 200) {
      console.log("데이터가 없습니다.");
    }

    const data = response.data;

    return data;

    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};
