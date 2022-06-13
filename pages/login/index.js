import React, { useState } from "react";

import { Box, Button, Divider, Grid, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserLock,
  faEnvelope,
  faKey,
  faLock,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import Title from "../../components/Header/Title";
import logincss from '../../styles/Login.module.css'

const Login = () => {
  const handlelogin = () => {
    console.log("hellow");
  };

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <>
      <Title>User Login</Title>
      <Box
        sx={{
          backgroundImage: "url('/images/svg/loginbg.svg')",
          height: "130vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid xs={2} sm={3} md={5} lg={4}></Grid>
            <Grid xs={8} sm={9} md={4} lg={4}>
              <Paper
                elevation={3}
                sx={{
                  height: "480px",
                  top: "50px",
                  position: "absolute",
                  width: "400px",
                  backgroundImage:
                    "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
                }}

                className={logincss.login_responsive}
              >
                {/* header of login pages  */}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginY: "40px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faUserLock}
                    style={{ fontSize: "23px" }}
                  />
                  <h3 style={{ margin: "0px 0px 0px 8px", fontSize: "23px" }}>
                    Login
                  </h3>
                </Box>

                {/* email input form  */}

                <form onSubmit={handlelogin} style={{ padding: "0px 25px" }}>
                  <Box>
                    <label htmlFor="email">
                      <FontAwesomeIcon icon={faEnvelope} /> Email/CIN
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      style={{
                        width: "100%",
                        padding: "10px 0px",
                        marginTop: "10px",
                        border: "0px",
                        borderRadius: "5px",
                      }}
                    />
                    <br />
                    <br />
                    <br />
                    {/* for password section  */}
                    <label htmlFor="password">
                      <FontAwesomeIcon icon={faKey} /> Password
                    </label>{" "}
                    <br />
                    <div className="pwd-container">
                      <input
                        name="pwd"
                        type={isRevealPwd ? "text" : "password"}
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "10px 0px",
                          marginTop: "10px",
                          border: "0px",
                          borderRadius: "5px",
                        }}
                      />

                      <Image
                        src={
                          isRevealPwd
                            ? "/hide-password.svg"
                            : "/show-password.svg"
                        }
                        onClick={() =>
                          setIsRevealPwd((prevState) => !prevState)
                        }
                        height={15}
                        width={15}
                      />
                    </div>
                    {/* input field for checkbox  */}
                    <div
                      className={logincss.checkbox_input}
                    
                    >
                      <div className={logincss.remember}>
                        <input type="checkbox" />
                        <label style={{marginLeft:'4px'}}>Remember Me</label>
                      </div>

                      <div className={logincss.password_forgot}>
                        <Link href="/forgot-password">Forget Password</Link>
                      </div>
                    </div>
                    {/* <div className="recapcha">

      <ReCAPTCHA
            sitekey="6Lc1WqgeAAAAAHfqNe3_MIzt04wQiuGjdmQYNHVC"
            onChange={onChange}
      />
      </div> */}
                    <button
                      type="submit"
                      style={{
                        padding: "10px 20px",
                        borderRadius: "25px",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "#fff",
                        fontSize: "16px",
                        border: "none",
                        margin: "30px auto",
                        display: "block",
                      }}

                      // className="buttonhover"
                    >
                      <FontAwesomeIcon
                        icon={faLock}
                        style={{ marginRight: "5px" }}
                      />
                      LOGIN
                    </button>
                  </Box>
                </form>

                <Divider sx={{ m: "20px 0px 10px 0px" }} />

                <Box sx={{ fontSize: "13px", textAlign: "center" }}>
                  <p>
                    Don't have an account yet ?{" "}
                    <Link href="/register">
                      <a>
                        <strong>Resister</strong>
                      </a>
                    </Link>
                  </p>

                  <Link href="/">
                    <a>
                      <FontAwesomeIcon icon={faHome} /> Go Home
                    </a>
                  </Link>
                </Box>
              </Paper>
            </Grid>

            <Grid xs={2} md={3} sm={4} lg={4}></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Login;

Login.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
