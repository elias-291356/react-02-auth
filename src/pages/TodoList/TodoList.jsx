import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";

const TodoList = () => {
  const isLogin = useSelector(selectLoggedIn);
  return (
    <div>
      <h1>Todo List</h1>
      {isLogin && (
        <button className=" p-4 bg-amber-200 border-2 rounded-2xl cursor-pointer">
          <span> loading</span>
        </button>
      )}
    </div>
  );
};

export default TodoList;
