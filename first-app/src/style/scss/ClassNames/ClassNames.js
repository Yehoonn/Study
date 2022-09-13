import classNames from "classnames";

classNames("one", "two");
classNames("one", { two: true });
classNames("one", { two: false });
classNames("one", ["two", "three"]);

const myClass = "hello";

classNames("one", myClass, { myCondition: true });

const ClassNames = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export default ClassNames;
