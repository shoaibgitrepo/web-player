import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

import Table from "../../components/Table";
import config from "../../../config";

const Marker = ({ id, columns, data }) => {
  const TooltipComponent = () => (
    <Table columns={columns} data={data} maxHeight={300} showHeader={false} />
  );

  return (
    <Tooltip placement="left" title={<TooltipComponent />}>
      <Link to={`${config.homepage}/dashboard/details/${id}`}>
        <PlaceIcon color="error" sx={{ fontSize: 32 }} />
      </Link>
    </Tooltip>
  );
};

export default Marker;
