import { useContext, useState } from "react";
import { TodoContext } from "context";
import { Box } from "@mui/system";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import styles from "../List/list.module.css";
import TabsComponent from "components/Tabs";
import { TodoItem } from "components/types";
const checkedList: any = [];
const List = () => {
  const { list, removeTodo } = useContext(TodoContext);

  const removehandler = () => {
    list.forEach((elem) => {
      if (elem.checked !== true) {
        checkedList.push(elem);
        removeTodo(checkedList);
      }
    });
    console.log(checkedList, "new list <<<<");
  };

  return (
    <Box>
      <TabsComponent allList={list} checkedList={checkedList}></TabsComponent>

      <Button onClick={removehandler} variant="contained" size="small">
        Remove
      </Button>
    </Box>
  );
};

export default List;
