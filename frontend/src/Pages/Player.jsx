import React from "react";
import Button from "react-bootstrap/esm/Button";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import file from "../assets/file.mp4";

const Player = () => {
  const navigate = useNavigate();

  return (
    <div className="player">
      <Button onClick={() => navigate(-1)} variant="outline-success">
        {" "}
        <IoArrowBackCircleOutline size={21} /> Back
      </Button>
      <br />
      <video
        style={{ height: "90%", width: "100%" }}
        src={file}
        autoPlay
        loop
        controls
        muted
      ></video>
    </div>
  );
};

export default Player;
