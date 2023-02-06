import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiOutlineInfoCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Card className="border-0 m-auto home-card">
        <Card.Img
          style={{ filter: "brightness(70%)" }}
          variant="top"
          src="https://wallpaperaccess.com/full/2018178.jpg"
        />
        <div className="contents">
          <h4>MovieFlix presents</h4>
          <h3>The Stranger Things</h3> <br />
          <span>
            <Button
              onClick={() => navigate("/player")}
              style={{ marginRight: "20px" }}
              variant="outline-success"
            >
              <AiOutlinePlayCircle size={24} /> Play Now
            </Button>
            <Button variant="outline-success">
              <AiOutlineInfoCircle size={24} /> more info
            </Button>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Home;
