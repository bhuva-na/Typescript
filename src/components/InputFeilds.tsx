interface props {
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
  handletodo: (e: React.FormEvent) => void;
}
const InputFeilds: React.FC<props> = ({ todo, settodo, handletodo }) => {
  console.log(todo);

  return (
    <div>
      <form onSubmit={handletodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        ></input>
        <button type="submit">GO</button>
      </form>
    </div>
  );
};

export default InputFeilds;
