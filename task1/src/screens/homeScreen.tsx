// import { Button } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { AddItems } from "./Components/AddItems/addItems";
import { TableItems } from "./Components/tableItems";

const baseURL = import.meta.env.VITE_BASE_URL;
export const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  console.log({ baseURL });
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={toggleOpen}
          sx={{ width: 20, alignItems: "center" }}
        >
          Add
        </Button>
        <TableItems />
      </div>
      {open && <AddItems open={open} toggleOpen={toggleOpen} />}
    </>
  );
};
