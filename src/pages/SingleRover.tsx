// libs
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useParams } from "react-router";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useQuery } from "react-query";

// components
import { Box, Container } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Typography } from "@mui/material";

// types
import { RoverDetailFetchType } from "../types/rover";
import { getSingleRover } from "../api/rovers";
import RoverPhotosList from "../components/RoverPhotosList";

const SingleRover = () => {
  // states
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  // params
  let { rover } = useParams();

  // query to get rovers
  const { data, isLoading, isError } = useQuery<RoverDetailFetchType>(
    ["reoverDetail", rover, value],
    () => getSingleRover(rover, value?.format("YYYY-MM-DD")),
    {
      staleTime: Infinity
    }
  );

  return (
    <Container sx={{ py: "80px" }}>
      <Typography
        variant="h4"
        component="h4"
        textAlign="center"
        marginBottom="40px"
        fontWeight={600}
        textTransform={"capitalize"}
      >
        {rover}
      </Typography>
      <Box display={"flex"} justifyContent={"center"} mb={"40px"}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </Box>

      <RoverPhotosList data={data} isError={isError} isLoading={isLoading} />
    </Container>
  );
};

export default SingleRover;
