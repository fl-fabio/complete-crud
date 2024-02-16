import axios from "axios";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchData = () => {
  const todos: Todo[] = [];
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      response.data.map((item: Todo) => todos.push(item));
      return todos;
    })
    .catch((error) => {
      console.log(`There is an error: ${error}`);
    });
};


fetchData().then((result) => 
  console.log(result)
).catch((error) => console.log(error))
