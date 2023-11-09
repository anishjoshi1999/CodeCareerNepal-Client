import "../App.css";

const Loader = () => {
  return (
    <div className="center-space">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
