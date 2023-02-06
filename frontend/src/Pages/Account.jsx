import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";
import { getUser, logoutUser } from "../redux/action/action";

function Account() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return user && user.name ? (
    <Card style={{ height: "84vh" }} className="text-center">
      <Card.Header className="text-muted">
        {`${user.name.split(" ")[0]}'s`} Profile
      </Card.Header>
      <Card.Body>
        <div className="flex justify-content-center h-100 flex-column">
          <img
            style={{ height: "22vh" }}
            className="rounded-circle"
            src="https://t4.ftcdn.net/jpg/02/73/46/99/360_F_273469972_ESU9Rq3eIpSrK3xddlIEyDh7vrslbiGg.jpg"
            alt="avatar"
          />{" "}
          <br />
          <div>
            <h6>{user.name}</h6>
            <h6>{user.email}</h6>
          </div>
          <br />
          <div>
            <Button
              onClick={() => navigate("/liked")}
              className="mx-3"
              variant="outline-success"
            >
              My Favorites
            </Button>

            <Button
              disabled={loading}
              onClick={handleLogout}
              variant="outline-danger"
            >
              Log Out
            </Button>
          </div>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        since {user.createdAt.split("T")[0]}
      </Card.Footer>
    </Card>
  ) : (
    <Loader />
  );
}

export default Account;
