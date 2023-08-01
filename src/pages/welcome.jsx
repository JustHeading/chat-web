import Square from "../view/sqare";

function Welcome() {
  return (
    <>
      <div>
        <div className="flex">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
        <div className="flex">
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}
export default Welcome;
