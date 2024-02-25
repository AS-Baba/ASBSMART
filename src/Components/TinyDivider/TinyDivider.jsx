import "./tinyDivider.css";

export const TinyDivider = ({ children }) => {
  return (
    <>
      <div class="container text-center headerContainer  mt-5">
        <p class="header h5">{children}</p>
      </div>
      <div class="tiny-divider"></div>
      <p></p>
    </>
  );
};

