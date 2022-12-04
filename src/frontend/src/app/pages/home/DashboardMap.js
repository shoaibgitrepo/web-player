import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { useDispatch, useSelector } from "react-redux";

import Marker from "./Marker";
import { fetchNodes } from "../../../redux/slices/nodeSlice";
import { decodeDate, pageSize } from "../../utils/helper";
import Loader from "../../components/Loader";

const columns = [
  { id: "key", label: "Key" },
  { id: "value", label: "Value" },
];

export default function DashboardMap() {
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
          display: "flex",
          flexGrow: 1,
          height: "70vh",
          mt: 1,
        }}
      >
        {nodes.length > 0 && (
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAG1WWLzeYXrDeT1TzULT2nycXqgTquYAI",
              language: "en",
              region: "IN",
            }}
            defaultCenter={{
              // lat: Number(nodes[0].latitude),
              // lng: Number(nodes[0].longitude),
              lat: 20.5937, // Center of Map of India
              lng: 78.9629,
            }}
            defaultZoom={5}
          >
            {nodes.map((node, index) => {
              const nodeData = JSON.parse(JSON.stringify(node));

              nodeData.timestamp = decodeDate(nodeData.timestamp);
              nodeData.date_created = decodeDate(nodeData.date_created);

              const data = Object.keys(nodeData).map((key) => ({
                key: key.toUpperCase().replace("_", " "),
                value: nodeData[key],
              }));

              if (
                Number(nodeData.latitude) < 90 &&
                Number(nodeData.longitude) < 90
              )
                return (
                  <Marker
                    key={index}
                    id={nodeData.ID}
                    lat={Number(nodeData.latitude)}
                    lng={Number(nodeData.longitude)}
                    columns={columns}
                    data={data}
                  />
                );
            })}
          </GoogleMapReact>
        )}
      </Box>
    </Container>
  );
}
