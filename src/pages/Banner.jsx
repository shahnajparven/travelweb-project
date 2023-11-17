/* eslint-disable react/jsx-key */
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";
import img1 from "../assets/img3.jpg";
import img3 from "../assets/product3.jpg";
import "../index.css";
import { useForm, Controller, FormProvider } from "react-hook-form";

const schema = yup.object({
  name: yup.string(),
  email: yup.string(),
  password: yup.string(),
  // passage2: yup.string(),
});

const Banner = () => {
  const form = useForm({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Box
          className="banner"
          height={{ lg: "90vh", sm: "90vh", xs: "110vh" }}
        >
          <Box
            className={"container"}
            pt={10}
            gap={5}
            display={"flex"}
            lineHeight={2}
          >
            <Box
              width={"40%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              mb={15}
            >
              <Box color={"white"} className="dynamic-txt">
                <Box
                  variant="h5"
                  className="font"
                  fontStyle={"2rem"}
                  fontSize={25}
                  color="#F39B0B"
                >
                  Explore The
                </Box>
                {/* <Typography variant="h3" fontSize={40} fontWeight={600} className="dynamic-txt">
                  Travel &
                </Typography> */}
                <b>Travel & Adventures</b>
                <Box>Awesome hotel,tour,car and activities in London</Box>
              </Box>
            </Box>
            <Box
              zIndex={2}
              width={"20%"}
              height={270}
              display={{ lg: "flex", sm: "none", xs: "none" }}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              <img
                src={img1}
                alt=""
                width="100%"
                height="100%"
                overflow="hidden"
              />
            </Box>
            <Box
              zIndex={2}
              width={"30%"}
              height={450}
              display={{ lg: "flex", sm: "none", xs: "none" }}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
            >
              {" "}
              <img
                src={img3}
                alt=""
                width="100%"
                height="100%"
                overflow="hidden"
              />
            </Box>
          </Box>
          <Box
          zIndex={3}
            p={2}
            borderRadius={2}
            backgroundColor="#ffffff"
            position={"absolute"}
            top={{ lg: "73%", sm: "50%", xs: "45vh" }}
            width={{ lg: "75%", sm: "80%", xs: "90%" }}
            minHeight={"7rem"}
            ml={{ lg: "7%", sm: "7%", xs: "5%" }}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
              gap={2}
              sx={{
                "& .MuiTextField-root": {
                  width: "20ch",
                },
              }}
            >
              <Box>
                <Box className="font" fontWeight={"bold"}>
                  Destination
                </Box>
                <Box>
                  <Controller
                    name="destination"
                    control={control}
                    render={({ field }) => (
                      <Box minWidth={150}>
                        <TextField
                          inputProps={{
                            style: { fontSize: 13 },
                          }}
                          InputLabelProps={{
                            style: { fontSize: 13 },
                          }}
                          size="small"
                          {...field}
                          error={errors?.hotelName}
                          id="hotel-name"
                          placeholder="Where to go?"
                          helperText={errors?.hotelName?.message}
                        />
                      </Box>
                    )}
                  />
                </Box>
              </Box>
              <Box>
                <Box className="font" fontWeight={"bold"}>
                  Type
                </Box>
                <Box>
                  <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                      <Box minWidth={150}>
                        <TextField
                          inputProps={{
                            style: { fontSize: 13 },
                          }}
                          InputLabelProps={{
                            style: { fontSize: 13 },
                          }}
                          size="small"
                          {...field}
                          error={errors?.hotelName}
                          id="hotel-name"
                          placeholder="Activity"
                          helperText={errors?.hotelName?.message}
                        />
                      </Box>
                    )}
                  />
                </Box>
              </Box>
              <Box>
                <Box className="font" fontWeight={"bold"}>
                  When
                </Box>
                <Box>
                  <Controller
                    name="when"
                    control={control}
                    render={({ field }) => (
                      <Box minWidth={150}>
                        <TextField
                          inputProps={{
                            style: { fontSize: 13 },
                          }}
                          InputLabelProps={{
                            style: { fontSize: 13 },
                          }}
                          size="small"
                          {...field}
                          error={errors?.hotelName}
                          id="hotel-name"
                          placeholder="Date"
                          type="date"
                          helperText={errors?.hotelName?.message}
                        />
                      </Box>
                    )}
                  />
                </Box>
              </Box>
              <Box>
                <Box className="font" fontWeight={"bold"}>
                  Guest
                </Box>
                <Box>
                  <Controller
                    name="guest"
                    control={control}
                    render={({ field }) => (
                      <Box minWidth={150}>
                        <TextField
                          inputProps={{
                            style: { fontSize: 13 },
                          }}
                          InputLabelProps={{
                            style: { fontSize: 13 },
                          }}
                          size="small"
                          {...field}
                          error={errors?.hotelName}
                          id="hotel-name"
                          placeholder="0"
                          helperText={errors?.hotelName?.message}
                        />
                      </Box>
                    )}
                  />
                </Box>
              </Box>
              <Box mt={2.8} width={{ xs: "50%", lg: "8%", sm: 0 }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    background: "#FD8D14",
                    color: "white",
                    textTransform: "none",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#F6F4EB",
                      borderColor: "none",
                      boxShadow: "none",
                      color: "#FD8D14",
                    },
                    "&:focus": {
                      boxShadow: "#F6F4EB",
                    },
                  }}
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
};
export default Banner;
