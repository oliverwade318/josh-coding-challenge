// libs
import { useQuery } from "react-query";

// api
import { getRovers } from "../api/rovers";

// components
import {
  CircularProgress,
  Container,
  Grid,
  Typography,
  Box
} from "@mui/material";

// types
import { Rover, RoverFetchType } from "../types/rover";
import Card from "../components/Card";

const Homepage = () => {
  // query to get rovers
  const { data, isLoading, isError } = useQuery<RoverFetchType>(
    "rovers",
    getRovers,
    {
      staleTime: Infinity
    }
  );

  if (isLoading) {
    return (
      <Box
        display={"flex"}
        height={"100vh"}
        width={"100vw"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        display={"flex"}
        height={"100vh"}
        width={"100vw"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="h6"
          component="h6"
          textAlign="center"
          fontWeight={600}
        >
          An error has occured. Please try again
        </Typography>
      </Box>
    );
  }

  return (
    <Container sx={{ py: "80px" }}>
      <Typography
        variant="h4"
        component="h4"
        textAlign="center"
        marginBottom="40px"
        fontWeight={600}
      >
        NASA Rovers
      </Typography>
      <Grid container spacing={2}>
        {data &&
          data.rovers.map((item: Rover, index: number) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card item={item} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Homepage;
