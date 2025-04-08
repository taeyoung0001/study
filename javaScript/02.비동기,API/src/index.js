const GET_USER_URL = "https://jsonplaceholder.typicode.com/users";

const fetchData = async () => {
  try {
    const res = await fetch(GET_USER_URL);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
