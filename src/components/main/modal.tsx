import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import picture1 from "..//assets/ai-generated-8680176_640.png";
import { Video_ConTainer } from "../styles/style";
import play from "../assets/play.svg";

const AppModal = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const modals = [
    {
      title: "Natural honey",
      videoSrc: "https://www.youtube.com/embed/QHcADYEVGyk?si=rHNWDFk-6MZuWcjf",
      imageSrc: picture1,
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
                    margin: "10px",
                    width: "308px",
                    height: "308px",
                    borderRadius: "308px",
                    border: "5px solid #FFF",
                    marginRight: "40px",
                    marginTop: "70px",
                  }}
                />
                <div
                  key={index}
                  onClick={() => handleOpen(index)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // zIndex: "2",
                  }}
                >
                  <img
                    src={play}
                    alt="play-img"
                    style={{
                      zIndex: "4",
                      display: "flex",
                      height: "50px",
                      width: "50px",
                      marginLeft: "-380px",
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

export default AppModal;
