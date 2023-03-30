import React, { Children } from "react";
import CardContent from "@mui/material/CardContent";
const CardBody = ({ Children }) => {
  return <CardContent>{Children}</CardContent>;
};

export default CardBody;
