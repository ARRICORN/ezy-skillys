import style from "./loading.module.css";

const LoadingButton = () => {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <span className={style.loader}></span>
      <span>Processing...</span>
    </div>
  );
};

export default LoadingButton;
