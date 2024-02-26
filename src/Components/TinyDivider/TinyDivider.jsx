import "./tinyDivider.css";

export const TinyDivider = ({ children }) => {
  return (
    <>
      <div className="container text-center headerContainer  mt-5">
        <p className="header h5">{children}</p>
      </div>
      <div className="tiny-divider"></div>
      <p></p>
    </>
  );
};

