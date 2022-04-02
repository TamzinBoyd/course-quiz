import React from "react";

const Question = (props) => {
  const { question } = props;
  // const [userFavourites, setUserFavourites] = useState([]);

  console.log(question);
  return (
    <div>
      <p>{question}</p>
    </div>
  );
};

export default Question;
