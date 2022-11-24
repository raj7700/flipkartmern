import { Box, Menu, Typography, MenuItem,styled } from "@mui/material";
import { useState } from "react";
const Component = styled(Menu)`
margin-top:5px;`
const Profile = ({ account }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box  onClick={handleClick}>
        <Typography>{account}</Typography>
      </Box>
      <Component
        anchorEl={Boolean(open)}
        open={open}
        onClose={handleClose}
        keepMounted={false}
  
      >
        <MenuItem onClick={handleClose}><Typography>Hey</Typography></MenuItem>
      </Component>
    </>
  );
};

export default Profile;
