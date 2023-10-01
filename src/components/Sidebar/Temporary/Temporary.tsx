import { Drawer, Button } from "@mui/material";
import { ReactNode, useContext } from "react";
import { SidebarContext } from "../../../context/ToggleDrawer/ToggleDrawer";

interface TemporaryProps {
  children: ReactNode;
}

const Temporary = ({ children }: TemporaryProps) => {
  const { open, toggleDrawer } = useContext(SidebarContext);
  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={toggleDrawer}
      sx={{
        display: {
          md: "none",
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export default Temporary;
