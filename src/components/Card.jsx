import { Link, useParams } from "react-dom";
import CardFeed from "./CardFeed";

const Card = (card) => {
  const { cardId } = useParams();
  <div>
    <h2>
        {/* SHOULD THIS BE A NAVLINK? */}
      <Link to="/newcard" class Name="button">
        Create New Card
      </Link>
      <Link to="/cardfeed" class Name="button">
        Card Feed
      </Link>
    </h2>
  </div>;

  return (
    <section className="card-container">
      <h1>{cardId}</h1>
      <ul className="card" key={card.id}>
        <div className="img">📷</div>
        <h1>{card.headline}</h1>
        <p>{card.front_text}</p>
        <p>{card.back_text}</p>
        <p>Created by: {card.sent_by_user}</p>
        <p>Sent to: {card.sent_to_user}</p>
      </ul>
    </section>
  );
};

export default Card;
