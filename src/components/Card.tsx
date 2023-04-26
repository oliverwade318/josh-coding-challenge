// libs
import { FC, useState } from "react";

// components
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Popover } from "@mui/material";

// types
import { Rover } from "../types/rover";
import { useNavigate } from "react-router";

interface Props {
  item: Rover;
}

const Card: FC<Props> = ({ item }) => {
  // states
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // navigate
  const navigate = useNavigate();

  // open popover
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  // close popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  // toggle state for popover
  const open = Boolean(anchorEl);

  // id for popover
  const id = open ? "simple-popover" : undefined;

  return (
    <MuiCard>
      <CardContent>
        <Typography
          sx={{ fontSize: 14, textTransform: "capitalize" }}
          color="text.secondary"
          gutterBottom
        >
          {item.status}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/rovers/${item.name.toLowerCase()}`)}
          style={{ textDecoration: "underline" }}
        >
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Launch Date: {item.launch_date}
        </Typography>
        <Typography sx={{ mb: 1 }} variant="body2">
          Landing Date: {item.landing_date}
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
          Photos: {item.total_photos}
        </Typography>
        <Typography
          style={{ textDecoration: "underline" }}
          aria-describedby={id}
          variant="body2"
          sx={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          Cameras
        </Typography>
        <Popover
          id={id}
          open={open}
          style={{ maxHeight: "400px" }}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
        >
          {item.cameras.map((camera, index) => (
            <Typography key={index} variant="subtitle2" sx={{ p: 1 }}>
              {camera.full_name}
            </Typography>
          ))}
        </Popover>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
