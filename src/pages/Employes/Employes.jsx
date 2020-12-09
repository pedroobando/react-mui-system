import React from "react";

import PageHeader from "../../components/PageHeader";
import EmployeForm from "./EmployeForm";

import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department" },
  { id: "actions", label: "Actions", disableSorting: true },
];

const Employes = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleAltOutlinedIcon fontSize="large" />}
      />
      <EmployeForm />
    </React.Fragment>
  );
};

export default Employes;
