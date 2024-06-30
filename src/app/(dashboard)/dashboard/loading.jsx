import style from "./dashboard.module.css";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-white">
      <span className={`${style.loader}`}></span>
    </div>
  );
};

export default Loading;
