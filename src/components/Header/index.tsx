import * as React from "react";
import { useContext, useState } from "react";
import { TodoContext } from "context";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Header = () => {
  const [value, setValue] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const { addTodo } = useContext(TodoContext);

  return (
    <>
      <Box
        sx={{
          width: "auto",
          height: "auto",
          display: "flex",
          marginBottom: "20px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            padding: "30px 0 30px 0",
            color: "#fff",
            fontSize: "20px",
          }}
        >
          TODO
        </Box>
        <TextField
          id="filled-basic"
          label="Add Todo"
          variant="filled"
          sx={{
            input: { color: "#fff" },
            label: { color: "#fff" },
            "& label.Mui-focused": { color: "#fff" },
          }}
          placeholder="Add todo"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <Button
          sx={{
            marginTop: "20px",
          }}
          onClick={() => addTodo({ checked, value })}
          variant="contained"
        >
          ADD
        </Button>
      </Box>
    </>
  );
};

export default Header;
