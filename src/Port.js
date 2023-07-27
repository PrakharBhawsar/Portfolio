import React from "react";
import Photo from "./prakharphoto.jpeg";
import { Paper, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

export default function Port() {
  return (
    <>
      <Paper elevation={10} sx={{ display: "flex", alignItems: "row" }}>
        <img
          src={Photo}
          alt="myphoto"
          style={{ height: "400px", marginTop: 50, marginLeft: 150 }}
        />
        <div>
          <Typography
            sx={{
              mt: "130px",
              ml: "150px",
              fontSize: "3rem",
              fontFamily: "Bahnschrift SemiBold",
            }}
          >
            <span style={{ color: "red" }}>Hi There!</span>
            <br />I am Prakhar Bhawsar
            <br />
            <a href="https://www.linkedin.com/in/prakharbhawsar/">
              <LinkedInIcon sx={{ height: "30px", mr: "10px" }}></LinkedInIcon>
            </a>
            <a href="https://github.com/PrakharBhawsar">
              <GitHubIcon sx={{ height: "30px", mr: "10px" }}></GitHubIcon>
            </a>
            <a href="mailto:prakharbhawsar51@gmail.com">
              <MailIcon sx={{ height: "30px", mr: "10px" }}></MailIcon>
            </a>
          </Typography>
        </div>
      </Paper>
      <div>
        <Typography
          sx={{
            mt: "50px",
            ml: "50px",
            fontSize: "1.3rem",
            fontFamily: "Bahnschrift SemiBold",
            fontWeight: "bold",
            color:'#02fa93'
          }}
        >
          Career Objective:{" "}
        </Typography>
        <Typography
          sx={{ mt: "10px", ml: "50px", fontFamily: "Bahnschrift SemiBold" }}
        >
          To obtain a challenging position in an IT Company where I can utilize
          my skills and knowledge to contribute to the success of the company
          while also achieving personal and professional growth.
        </Typography>
        <Typography
          sx={{
            mt: "50px",
            ml: "50px",
            fontSize: "1.3rem",
            fontFamily: "Bahnschrift SemiBold",
            fontWeight: "bold",
            color:'#02fa93'
          }}
        >
          Education:{" "}
        </Typography>
        <Typography
          sx={{ mt: "10px", ml: "50px", fontFamily: "Bahnschrift SemiBold" }}
        >
          <ul>
            <li>
              B.Tech. (CSE), Acropolis Institute of Technology and Research —
              Current CGPA - 8.36
            </li>
            <li>XII ( C.B.S.E ), Indore Public School — Passed with 70.8%</li>
            <li>X ( C.B.S.E ), Agrawal Public School — Passed with 82.6%</li>
          </ul>
        </Typography>
        <Typography
          sx={{
            mt: "50px",
            ml: "50px",
            fontSize: "1.3rem",
            fontFamily: "Bahnschrift SemiBold",
            fontWeight: "bold",
            color:'#02fa93'
          }}
        >
          Skills:{" "}
        </Typography>
        <Typography
          sx={{ mt: "10px", ml: "50px", fontFamily: "Bahnschrift SemiBold" }}
        >
          Languages: C, C++, HTML, CSS, Javascript, SQL.
          <br />
          Technology: ReactJs, Bootstrap, Material UI.
          <br />
          Technical Skills: DSA, OOPs, DBMS, Operating System, Computer
          Networks.
        </Typography>
        <Typography
          sx={{
            mt: "50px",
            ml: "50px",
            fontSize: "1.3rem",
            fontFamily: "Bahnschrift SemiBold",
            fontWeight: "bold",
            color:'#02fa93'
          }}
        >
          Experience:{" "}
        </Typography>
        <Typography
          sx={{ mt: "10px", ml: "50px", fontFamily: "Bahnschrift SemiBold" }}
        >
          NoQs Digital (May 2023 - July 2023)
          <br />
          SDE (Software Developer Engineer Intern)
          <br />
          <ul>
            <li>
              Developed and maintained front-end features using technologies
              like React.js, Bootstrap, Material UI.
            </li>
            <li>
              Successfully implemented API integration to fetch and display
              real-time data in the application using Axios and RESTful APIs.
            </li>
          </ul>
        </Typography>
        <Typography
          sx={{
            mt: "50px",
            ml: "50px",
            fontSize: "1.3rem",
            fontFamily: "Bahnschrift SemiBold",
            fontWeight: "bold",
            color:'#02fa93'
          }}
        >
          Projects:{" "}
        </Typography>
        <Typography
          sx={{ mt: "10px", ml: "50px",mb:'70px', fontFamily: "Bahnschrift SemiBold" }}
        >
          <span style={{ textDecoration: "underline" }}>
            Restaurant Finder:
          </span>{" "}
          Developed a full-stack web application using the MERN stack to enable
          users to find nearby restaurants based on preferences and locations.
          Led frontend development, creating a user-friendly interface with
          React.js, HTML, and CSS, while integrating a restaurant data API for
          real-time details and menus. Implemented user authentication and
          authorization for personalized experiences.
          <br />
          <br />
          <span style={{ textDecoration: "underline" }}>
            <span style={{ textDecoration: "underline" }}>
            E-Commerce Website:
            </span>
            
          </span>{" "}
          Developed an e-commerce web application as a frontend developer,
          utilizing the MERN stack. Integrated APIs to manage product listings,
          shopping cart functionality, and secure payment processing. Ensured
          responsive design for optimal user experience.
          <br />
          <br />
          <span style={{ textDecoration: "underline" }}>
            <span style={{ textDecoration: "underline" }}>
            Movie Recommendation System:
            </span>
            
          </span>{" "}
          Created a movie recommendation system with React.js for frontend
          development and PHP for backend functionalities. Designed and
          implemented the user interface using React.js, while utilizing PHP for
          data processing and recommendation algorithms in the backend.
        </Typography>
      </div>
    </>
  );
}
