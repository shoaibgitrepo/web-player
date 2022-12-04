import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchNodeDetails } from "../../../redux/slices/nodeSlice";
import Loader from "../../components/Loader";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";
import { pageSize } from "../../utils/helper";
import { nodeDetailsColumns } from "./DashboardUIHelper";

function DashboardDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, nodeDetails, count } = useSelector((state) => state.node);

  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = (pageNumber) => {
    const query = `ID=${id}&pageNumber=${pageNumber}&pageSize=${pageSize}`;
    dispatch(fetchNodeDetails(query));
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
        <Typography
          variant="h6"
          noWrap
          sx={{
            display: { xs: "none", md: "flex" },
            color: "inherit",
          }}
        >
          Node ID: {id}
        </Typography>
        <Pagination
          pageNumber={pageNumber}
          pageSize={pageSize}
          count={count}
          onPageChange={handlePageChange}
        />
      </Box>
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Table columns={nodeDetailsColumns} data={nodeDetails} />
      </Box>
    </Container>
  );
}

export default DashboardDetails;
