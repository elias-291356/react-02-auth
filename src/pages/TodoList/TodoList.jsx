import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";

const TodoList = () => {
  const isLogin = useSelector(selectLoggedIn);
  return (
    <div>
      <h1>Todo Page</h1>
      {isLogin && (
        <div className=" p-4 bg-amber-200 border-2 rounded-2xl cursor-pointer">
          <span>
            Wenn Sie das sehen, bedeutet das, dass Sie eingeloggt sind und
            Inhalte sehen können, die nur für registrierte Benutzer erlaubt sind
          </span>
        </div>
      )}
    </div>
  );
};

export default TodoList;
