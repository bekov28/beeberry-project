import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import beekeeper from "../assets/AboutUsAssets/beekeeper.jpg";
import { Video_ConTainer } from "../styles/style";
import playbtn from "../assets/HomePageAssets/playbtn.svg";

const AboutModal = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const modals = [
    {
      title: "Beekeeper work",
      videoSrc: "https://www.youtube.com/embed/FejwYVA4lCw?si=Z3gNgm0lr20diSVb",
      imageSrc: beekeeper,
    },
  ];

  const handleOpen = (index: number) => setOpenModalIndex(index);
  const handleClose = () => setOpenModalIndex(null);

  return (
    <>
      <Video_ConTainer>
        <div className="VideoCon">
          {modals.map((modal, index) => (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  key={index}
                  src={modal.imageSrc}
                  alt={`Video ${index + 1}`}
                  onClick={() => handleOpen(index)}
                  style={{
                    cursor: "pointer",
                    // margin: "10px",
                    width: "1100px",
                    height: "400px",
                    // borderRadius: "20px",
                    border: "5px solid #FFF",
                    marginRight: "40px",
                    marginTop: "70px",
                    zIndex: "0",
                  }}
                />
                <div
                  key={index}
                  onClick={() => handleOpen(index)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={playbtn}
                    alt="play-img"
                    style={{
                      zIndex: "4",
                      display: "flex",
                      height: "50px",
                      width: "50px",
                      marginLeft: "-1050px",
                      marginTop: "50px",
                    }}
                  />
                </div>
              </div>
            </>
          ))}

          {modals.map((modal, index) => (
            <Modal
              key={index}
              open={openModalIndex === index}
              onClose={handleClose}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  border: "none",
                  width: "100vw",
                  maxWidth: "600px",
                  height: "470px",
                  borderRadius: "20px",
                  bgcolor: "background.paper",
                  boxShadow: 1,
                  p: 4,
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {modal.title}
                  <h4 onClick={handleClose} style={{ cursor: "pointer" }}>
                    x
                  </h4>
                </Typography>
                <Box
                  sx={{
                    mt: 1.5,
                    position: "relative",
                    paddingBottom: "0%",
                    height: 0,
                    border: "none",
                  }}
                >
                  <iframe
                    src={modal.videoSrc}
                    title={modal.title}
                    frameBorder="0"
                    allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      borderRadius: "20px",
                      width: "100%",
                      maxWidth: "790px",
                      height: "360px",
                    }}
                  />
                </Box>
              </Box>
            </Modal>
          ))}
        </div>
      </Video_ConTainer>
    </>
  );
};

export default AboutModal;
