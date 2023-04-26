// libs
import { FC } from "react";

// types
import { RoverDetail, RoverDetailFetchType } from "../types/rover";

// components
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography
} from "@mui/material";

interface Props {
  data: RoverDetailFetchType | undefined;
  isLoading: boolean;
  isError: boolean;
}

const RoverPhotosList: FC<Props> = ({ data, isError, isLoading }) => {
  if (isLoading) {
    return (
      <Box
        display={"flex"}
        height={"400px"}
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
        height={"400px"}
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

  if (data && data.photos.length === 0) {
    return (
      <Box
        display={"flex"}
        height={"400px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="h6"
          component="h6"
          textAlign="center"
          fontWeight={600}
        >
          No photos to show for this date
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {data &&
        data.photos.map((item: RoverDetail, index: number) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={item.img_src}
                alt={item.camera.full_name}
              />
              <CardContent
                sx={{ p: 1, pb: 1 }}
                style={{ paddingBottom: "8px !important" }}
              >
                <Typography
                  sx={{ mb: 0 }}
                  gutterBottom
                  variant="body1"
                  component="div"
                >
                  {item.camera.full_name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default RoverPhotosList;
