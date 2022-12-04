import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

import { fetchNodes } from "../../../redux/slices/nodeSlice";
import Loader from "../../components/Loader";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import { pageSize } from "../../utils/helper";
import { nodesColumns } from "./DashboardUIHelper";

function DashboardNodes() {
  const dispatch = useDispatch();
  const { loading, nodes, count } = useSelector((state) => state.node);

  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = (pageNumber) => {
    const query = `searchText=${searchText}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    dispatch(fetchNodes(query));
  };

  const handlePageChange = (page) => {
    fetchData(page);
    setPageNumber(page);
  };

  useEffect(() => fetchData(pageNumber), []);
  return (
    <Container maxWidth="xl">
      <Loader loading={loading} />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        <Box>
          <TextField
            size="small"
            id="outlined-basic"
            placeholder="Search on Textual Data"
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            size="medium"
            variant="contained"
            sx={{ height: 40 }}
            onClick={() => handlePageChange(1)}
          >
            Search
          </Button>
        </Box>
        <Box>
          <Pagination
            pageNumber={pageNumber}
            pageSize={pageSize}
            count={count}
            onPageChange={handlePageChange}
          />
        </Box>
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Table columns={nodesColumns} data={nodes} />
      </Box>
    </Container>
  );
}

export default DashboardNodes;
