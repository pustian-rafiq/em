import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

// mui components
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// icons
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CachedIcon from "@mui/icons-material/Cached";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MaleIcon from "@mui/icons-material/Male";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMarsAndVenus,
  faPersonPraying,
} from "@fortawesome/free-solid-svg-icons";

// our components
import Title from "../../components/Header/Title";

// apollo client
import useConsumerRegisterMutation from "../../apolloClient/mutation/auth/consumer/registerMutation";

// css

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [relegion, setRelegion] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const { consumerRegisterMutationHandler, loading, error, data } =
    useConsumerRegisterMutation();

  console.log("loading, error, data :", loading, error, data);

  // consumer register handler
  const consumerRegisterHandler = (data) => {
    console.log("register form data ::", data);

    const formData = new FormData();

    // for (let i in data) {
    //   if (i === "photo") {
    //     if (imagePreview !== null) {
    //       formData.append(i, imagePreview, imagePreview.name);
    //     } else {
    //       formData.append(i, "");
    //     }
    //   } else {
    //     formData.append(i, data[i]);
    //   }
    // }

    // for (let key of formData.keys()) {
    //   console.log("register form data keys :: ", formData.get(key));
    // }

    consumerRegisterMutationHandler({
      variables: {
        first_name: datafirst_name,
        last_name: data.last_name,
        country_code: data.country_code,
        photo: data.photo[0],
        mobile_no: data.mobile_no,
        gender: data.gender,
        reffered_by: data.remember_me,
      },
    });
  };

  return (
    <>
      <Title>User Registration</Title>

      <Box
        sx={{
          backgroundImage: "url(/images/svg/loginbg.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "80px",
        }}
      >
        <Container>
          <Box
            sx={{
              width: "50%",
              color: "var(--white)",
              margin: "auto",
              textAlign: "center",
            }}
            p={2}
          >
            <Typography variant="h4">Ehsan Marketing</Typography>
          </Box>

          <Paper
            sx={{
              width: "50%",
              backgroundImage:
                "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
              margin: "auto",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography component="div">
                <AssignmentTurnedInIcon />{" "}
              </Typography>

              <Typography sx={{ marginLeft: "5px" }} component="div">
                Register Page
              </Typography>
            </Box>

            <Typography textAlign="center">
              Please Fill This Form To Create Account
            </Typography>

            <Typography textAlign="center" mt={1}>
              Already Member ?{" "}
              <Link href="login" underline="hover">
                Login In{" "}
              </Link>{" "}
            </Typography>

            {/* form  */}
            <form onSubmit={handleSubmit(consumerRegisterHandler)}>
              <Grid container mt={3} columnSpacing={2}>
                {/* first name  */}
                <Grid item sm={6} mt={2}>
                  <InputLabel shrink htmlFor="first_name ">
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography component="div">
                        <PersonIcon />
                      </Typography>

                      <Typography sx={{ marginLeft: "5px" }} component="div">
                        First Name
                      </Typography>
                    </Box>
                  </InputLabel>

                  <OutlinedInput
                    id="first_name"
                    sx={{ backgroundColor: "white", borderRadius: "10px" }}
                    fullWidth
                    size="small"
                    {...register("first_name")}
                    placeholder="First Name"
                  />
                </Grid>

                {/* last name  */}
                <Grid item sm={6} mt={2}>
                  <InputLabel shrink htmlFor="last_name">
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography component="div">
                        <PersonIcon />
                      </Typography>

                      <Typography sx={{ marginLeft: "5px" }} component="div">
                        Last Name
                      </Typography>
                    </Box>
                  </InputLabel>

                  <OutlinedInput
                    sx={{ backgroundColor: "white", borderRadius: "10px" }}
                    fullWidth
                    size="small"
                    {...register("last_name")}
                    placeholder="Last Name"
                  />
                </Grid>

                {/* address line 1  */}
                {/* <Grid item sm={6} mt={2}>
                <InputLabel shrink htmlFor="Address1">
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography component="div">
                      <LocationOnIcon />
                    </Typography>

                    <Typography sx={{ marginLeft: "5px" }} component="div">
                      Address Line 1
                    </Typography>
                  </Box>
                </InputLabel>

                <OutlinedInput
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
                  fullWidth
                  size="small"
                  placeholder="Address Line 1"
                />
              </Grid> */}

                {/* address line 2  */}
                {/* <Grid item sm={6} mt={2}>
                <InputLabel shrink htmlFor="Address2">
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Typography component="div">
                      <LocationOnIcon />
                    </Typography>

                    <Typography sx={{ marginLeft: "5px" }} component="div">
                      Address Line 2
                    </Typography>
                  </Box>
                </InputLabel>

                <OutlinedInput
                  id="Address2"
                  sx={{ backgroundColor: "white", borderRadius: "10px" }}
                  fullWidth
                  size="small"
                  placeholder="Please enter text"
                />
              </Grid> */}

                {/* select country  */}
                <Grid item sm={6} mt={2}>
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    shrink
                    htmlFor="country_code"
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography component="div">
                        <ClosedCaptionIcon />
                      </Typography>

                      <Typography sx={{ marginLeft: "5px" }} component="div">
                        Select Country Code
                      </Typography>
                    </Box>
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="countryCode"
                    value={country}
                    displayEmpty
                    renderValue={(value) =>
                      value !== "" ? (
                        value
                      ) : (
                        <Typography
                          sx={{
                            color: "#a1a1a1",
                          }}
                        >
                          Select country code
                        </Typography>
                      )
                    }
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                    fullWidth
                    size="small"
                    {...register("country_code")}
                    onChange={(e) => setCountry(e.target.value)}
                    variant="outlined"
                  >
                    <MenuItem value={"BD"}>Bangladesh</MenuItem>
                    <MenuItem value={"RUSS"}>Russia</MenuItem>
                    <MenuItem value={"UKN"}>Ukrain</MenuItem>
                  </Select>
                </Grid>

                {/* mobile no  */}
                <Grid item sm={6} mt={2}>
                  <InputLabel shrink htmlFor="mobileNo">
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography component="div">
                        <PhoneIphoneIcon />
                      </Typography>

                      <Typography sx={{ marginLeft: "5px" }} component="div">
                        Mobile No.
                      </Typography>
                    </Box>
                  </InputLabel>

                  <OutlinedInput
                    id="mobileNo"
                    sx={{ backgroundColor: "white", borderRadius: "10px" }}
                    fullWidth
                    size="small"
                    {...register("mobile_no")}
                    placeholder="Please enter mobile number"
                  />
                </Grid>

                {/* gender  */}
                <Grid item sm={6} mt={2}>
                  <InputLabel shrink htmlFor="gender">
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography component="div">
                        <FontAwesomeIcon
                          icon={faMarsAndVenus}
                          style={{ fontSize: "20px" }}
                        />
                      </Typography>

                      <Typography sx={{ marginLeft: "5px" }} component="div">
                        Gender
                      </Typography>
                    </Box>
                  </InputLabel>
                  <Select
                    id="gender"
                    value={gender}
                    displayEmpty
                    renderValue={(value) =>
                      value !== "" ? (
                        value
                      ) : (
                        <Typography
                          sx={{
                            color: "#a1a1a1",
                          }}
                        >
                          Select Gender
                        </Typography>
                      )
                    }
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                    fullWidth
                    size="small"
                    {...register("gender")}
                    variant="outlined"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Others"}>Others</MenuItem>
                  </Select>
                </Grid>

                {/* relegion  */}
                <Grid item sm={6} mt={2}>
                  <InputLabel shrink htmlFor="religion">
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography component="div">
                        <FontAwesomeIcon
                          icon={faPersonPraying}
                          style={{ fontSize: "20px" }}
                        />
                      </Typography>

                      <Typography sx={{ marginLeft: "5px" }} component="div">
                        Religion
                      </Typography>
                    </Box>
                  </InputLabel>

                  <Select
                    id="religion"
                    value={relegion}
                    displayEmpty
                    renderValue={(value) =>
                      value !== "" ? (
                        value
                      ) : (
                        <Typography
                          sx={{
                            color: "#a1a1a1",
                          }}
                        >
                          Select relegion Go
                        </Typography>
                      )
                    }
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                    }}
                    fullWidth
                    size="small"
                    {...register("relegion")}
                    variant="outlined"
                    onChange={(e) => setRelegion(e.target.value)}
                  >
                    <MenuItem value={"Islam"}>Islam</MenuItem>
                    <MenuItem value={"Hindu"}>Hindu</MenuItem>
                    <MenuItem value={"Cristan"}>Cristian</MenuItem>
                  </Select>
                </Grid>

                {/* refered by  */}
                <Grid item mt={2} sm={12}>
                  <InputLabel shrink htmlFor="bootstrap-input">
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Typography component="div">
                        <Image
                          src="/images/svg/refericon.svg"
                          height={20}
                          width={20}
                        />
                      </Typography>

                      <Typography sx={{ marginLeft: "5px" }} component="div">
                        Reffered By
                      </Typography>
                    </Box>
                  </InputLabel>
                  <OutlinedInput
                    id="RefferedBy"
                    sx={{ backgroundColor: "white", borderRadius: "10px" }}
                    fullWidth
                    size="small"
                    {...register("reffered_by")}
                    variant="outlined"
                    placeholder="Refered By"
                  />
                </Grid>

                {/* photo and recapcha  */}
                <Grid item container spacing={2} mt={2} sm={12}>
                  {/* photo  */}
                  <Grid item sm={4}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "100px",
                        borderRadius: "5px",
                        textAlign: "center",
                        backgroundColor: "var(--white)",
                      }}
                    >
                      <img
                        src={
                          imagePreview === null
                            ? "/images/svg/refericon.svg"
                            : URL.createObjectURL(imagePreview)
                        }
                        height={100}
                        width={100}
                      />
                    </Box>

                    <Box
                      sx={{
                        width: "100%",
                        marginTop: "15px",
                        color: "white",
                      }}
                    >
                      <InputLabel
                        htmlFor="photo"
                        sx={{
                          backgroundColor: "#6c757d",
                          fontSize: "15px",
                          padding: "5px",
                          color: "white",
                          borderRadius: "5px",
                          textAlign: "center",
                          "&:hover": {
                            backgroundColor: "var(--primary)",
                          },
                        }}
                      >
                        Choose Photo
                      </InputLabel>

                      <input
                        type="file"
                        id="photo"
                        {...register("photo")}
                        hidden
                        onChange={(e) => setImagePreview(e.target.files[0])}
                      />
                    </Box>
                  </Grid>

                  {/* recapcha  */}
                  <Grid
                    item
                    sm={8}
                    sx={{
                      width: "100%",
                      height: "100px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "60px",
                        borderRadius: "5px",
                        textAlign: "center",
                        backgroundColor: "var(--secondary)",
                      }}
                    >
                      Recapcha
                    </Box>

                    <OutlinedInput
                      id="Address1"
                      sx={{
                        backgroundColor: "white",
                        marginTop: "10px",
                        borderRadius: "10px",
                      }}
                      size="small"
                      fullWidth
                      placeholder="Enter Above Text"
                    />
                    <Button
                      variant="contained"
                      startIcon={<CachedIcon />}
                      size="small"
                      sx={{
                        marginTop: "5px",
                        backgroundColor: "#6c757d",
                        color: "white",
                        fontSize: "10px",
                        "&:hover": {
                          backgroundColor: "var(--primary)",
                        },
                      }}
                    >
                      Recapcha
                    </Button>
                  </Grid>
                </Grid>

                {/* remember me  */}
                <Grid item mt={2} sm={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ color: "white" }}
                        {...register("remember_me")}
                      />
                    }
                    label="Remember Me"
                    sx={{ color: "white", fontSize: "10px" }}
                  />
                </Grid>

                {/* submit button  */}
                <Grid item mt={2} sm={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#6c757d",
                      color: "white",
                      fontSize: "13px",
                      "&:hover": {
                        backgroundColor: "var(--primary)",
                      },
                    }}
                  >
                    <Icon
                      fontSize="small"
                      sx={{
                        marginRight: "10px",
                      }}
                    >
                      check_circle_icon
                    </Icon>{" "}
                    Create Account
                  </Button>
                </Grid>
              </Grid>
            </form>

            <Box mt={2} sm={12}>
              <Divider sx={{ border: "1px dashed rgba(0,0,0,0.1)" }} />
            </Box>

            {/* extra section  */}
            <Box mt={2} sm={12}>
              <Typography textAlign="center" mt={1}>
                Already Member ?{" "}
                <Link href="login" underline="hover">
                  Login
                </Link>{" "}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography component="div">
                  <Icon fontSize="small">home</Icon>
                </Typography>

                <Typography sx={{ marginLeft: "5px" }} component="div">
                  <Link href="/" underline="hover">
                    Go Home
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Register;

Register.getLayout = function pageLayout(page) {
  return <>{page}</>;
};
