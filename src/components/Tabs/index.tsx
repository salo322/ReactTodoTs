import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import { Tabs, Tab, Checkbox } from "@mui/material";
import { TodoItem } from "context";

interface TabsComponentProps {
  allList: TodoItem[];
  checkedList: TodoItem[];
}

const TabsComponent = (props: TabsComponentProps) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeCheckbox = (e: any) => {
    if (e.target.checked) {
      props.allList.forEach((item) => {
        if (item.value === e.target.value) {
          item.checked = !item.checked;
        }
      });
    }
  };
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab sx={{ color: "#fff" }} label="All Todo" />
        <Tab sx={{ color: "#fff" }} label="Finished" />
      </Tabs>
      {value === 0 ? (
        <Box>
          {props.allList.map((todo: any) => (
            <Box
              key={Math.floor(Math.random() * 990) + 10}
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.1)",
                margin: "10px 0 10px 0",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Box key={Math.floor(Math.random() * 990) + 10} component="span">
                <Checkbox onChange={handleChangeCheckbox} value={todo.value} />
                <Box component="span">{todo.value}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box>
          {props.checkedList.map((todo: any) => (
            <Box
              key={Math.floor(Math.random() * 990) + 10}
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.1)",
                margin: "10px 0 10px 0",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Box key={Math.floor(Math.random() * 990) + 10} component="span">
                <Checkbox onChange={handleChangeCheckbox} value={todo.value} />
                <Box component="span">{todo.value}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TabsComponent;
