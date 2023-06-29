import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const FollowUser = ({ token }) => {
  const { userId } = useParams();
  const baseURL = "https://cards-q6a8.onrender.com/";

  useEffect(() => {
    axios
      .get(`${baseURL}api/profile/${userId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setProfileInfo(res.data);
        setUserCards(res.data.cards_sent);
        console.log("axios request");
      });
  }, [token]);

  const handleFollowUser = () => {
    axios.post(
      `${baseURL}api/profile/${userId}`,
      {},
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
  };
  return (
    <section className="section">
      <h2>404</h2>
      <p>page not found</p>
      <Link to="/cardfeed">Card Feed</Link>
    </section>
  );
};

export default FollowUser;
