import { Link, useParams } from "react-router-dom";

const CardEdit = ({ token, username }) => {
  const { cardId } = useParams();

  console.log(cardId);

  return (
    <section className="section">
      <h2>Edit</h2>
    </section>
  );
};

export default CardEdit;
