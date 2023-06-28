import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

const DeleteCard = ({ token, username }) => {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [card, setCard] = useState([]);
  const URL = `https://cards-q6a8.onrender.com/api/cards/${cardId}/`;

  useEffect(() => {
    axios
      .delete(`${URL}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setCard(res.data);
      });
  }, [token, username, cardId]);

  const handleDelete = () => {
    navigate("/");
  };

  console.log(card);

  return (
    <>
      <div>
        <h1>Delete This Card.</h1>
        <button onClick={() => handleDelete()}>
          Are you sure you want to delete this?
        </button>
      </div>
    </>
  );
};

export default DeleteCard;
