import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import FolderIcon from "@mui/icons-material/Folder";

import { fetchNodes } from "../../../redux/slices/nodeSlice";
import Loader from "../../components/Loader";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import { pageSize } from "../../utils/helper";
import { nodesColumns } from "./DashboardUIHelper";
import { fetchDir } from "../../../redux/slices/dirSlice";
import Item from "../../components/Item";
import config from "../../../config";

function DashboardNodes() {
  const dispatch = useDispatch();
  const { loading, list, currentDir } = useSelector((state) => state.dir);

  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = (selectedDir = null) => {
    let newCurrentDir = "";
    const currentDirArray = currentDir.split("/");
    // console.log(
    //   "selectedDir",
    //   selectedDir,
    //   selectedDir && selectedDir.length,
    //   currentDirArray
    // );

    if (selectedDir === ".." && currentDirArray.length) {
      currentDirArray.pop();
      newCurrentDir = currentDirArray.join("/");
    } else if (selectedDir) newCurrentDir = `${currentDir}/${selectedDir}`;
    // else newCurrentDir = initialState.currentDir;

    const query = `dir=${newCurrentDir}`;
    dispatch(fetchDir(query));
  };

  // const handleItemClick = (dir) => {
  //   fetchData(dir);
  //   setPageNumber(page);
  // };

  useEffect(() => fetchData(), []);
  return (
    <Container maxWidth="xl">
      <Loader loading={loading} />
      <Box sx={{ mt: 3 }}>
        {list.map(({ name, type }) => (
          <Item
            name={name}
            type={type}
            onItemClick={() => {
              if (type === "dir") fetchData(name);
              else
                window.open(
                  `${config.apiEndpoint}${currentDir}/${name}`,
                  "_blank"
                );
            }}
          />
        ))}
      </Box>
    </Container>
  );
}

export default DashboardNodes;
