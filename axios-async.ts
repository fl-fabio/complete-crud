import axios from "axios";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const fetchData = async() => {
    const todos: Todo[] = [];
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        response.data.map((item: Todo) => todos.push(item));
        return todos;
    } catch(error){
        return console.log('error: ', error);
    }
};

(async() => {
    try {
        const result = await fetchData();
        console.log(result);
    }
    catch(error) {
        console.log('error:', error);
    }
})();