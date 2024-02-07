

const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
        <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => {setTodo(e.target.value)}}
          placeholder="Create a new todo"
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>
    );
};

export default TodoInput;