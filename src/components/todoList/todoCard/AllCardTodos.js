import CardItem from "../cardItem";

let AllCardTodos = ({ data, setScreen }) => {
  return (
    <>
      {setScreen === false
        ? data.map((val, index) =>
            val.isCompleted === false ? (
              <CardItem key={index} value={val} />
            ) : null
          )
        : data.map((val, index) =>
            val.isCompleted === true ? (
              <CardItem key={index} value={val} />
            ) : null
          )}
    </>
  );
};
export default AllCardTodos;
