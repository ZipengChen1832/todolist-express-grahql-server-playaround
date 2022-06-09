let DummyTodoData = [
  {
    id: "1",
    properties: {
      createAt: "Monday",
      writer: "Mark",
      mood: "happy",
      content: "Get grocery",
    },
  },
  {
    id: "2",
    properties: {
      createAt: "Tuesday",
      writer: "Graham",
      mood: "sad",
      content: "Finish jira tickets",
    },
  },
  {
    id: "3",
    properties: {
      createAt: "Wednesday",
      writer: "Jake",
      mood: "normal",
      content: "Do some workout",
    },
  },
  {
    id: "4",
    properties: {
      createAt: "Friday",
      writer: "David",
      mood: "depressed",
      content: "Cook",
    },
  },
];

const addTodo = (newTodo) => {
  DummyTodoData.push(newTodo);
};

const removeTodo = (id) => {
  const temp = [...DummyTodoData];
  DummyTodoData = temp.filter((todo) => todo.id !== id);
};

function editTodo(id, newTodo) {
  const temp = [...DummyTodoData];
  DummyTodoData = temp.map((todo) => (todo.id === id ? newTodo : todo));
}

const print = () => {
  console.log(DummyTodoData);
};

const clear = () => {
  DummyTodoData.splice(0, DummyTodoData.length);
};

module.exports = { DummyTodoData, clear, print, addTodo, removeTodo, editTodo };
