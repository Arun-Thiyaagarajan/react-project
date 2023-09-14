import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const CollegeDetailsPage = () => {
  const colleges = ["Acharya Institute of Graduate Studies,", "BGS college of Engineering & Technology", "Bangalore North University"];
  const weeks = ["Week 1", "Week 2", "Week 3"];

  const [selectedWeek, setSelectedWeek] = useState("Week 1");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [studentsData, setStudentsData] = useState([
    {
      name: "John Doe",
      branch: "Computer Science",
      year: "3rd Year",
      companyAssigned: "Company A",
      projectAssigned: "Project X",
      status: "In Progress",
      documentLink: "https://docs.google.com/spreadsheets/d/1ZKzVzlQdsuSDAvUizxVV3b3M7R9vWWSfJ7TyeOqmbuU/edit#gid=0",
    },
    {
      name: "Jane Smith",
      branch: "Electrical Engineering",
      year: "4th Year",
      companyAssigned: "Company B",
      projectAssigned: "Project Y",
      status: "Completed",
      documentLink: "https://docs.google.com/spreadsheets/d/1ZKzVzlQdsuSDAvUizxVV3b3M7R9vWWSfJ7TyeOqmbuU/edit#gid=0",
    },
  ]);

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <>
      <h1 className='detailsPageTitle'>Details Page</h1>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="College Name"
              select
              variant="outlined"
            >
              {colleges.map((college) => (
                <MenuItem key={college} value={college}>
                  {college}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Start Date"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              value={startDate}
              onChange={handleStartDateChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="End Date"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              value={endDate}
              onChange={handleEndDateChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="No of students Enrolled" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Present week Status" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Previous week Status"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Select Week"
              select
              variant="outlined"
              value={selectedWeek}
              onChange={handleWeekChange}
            >
              {weeks.map((week) => (
                <MenuItem key={week} value={week}>
                  {week}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              View Status
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h5" align="center" mt={4}>
          {selectedWeek} Task Details
        </Typography>
        <TableContainer component={Paper} sx={{ border: '1px solid #333' }}>
          <Table sx={{ border: '1px solid #333' }}>
            <TableHead>
              <TableRow>
                <TableCell style={{ borderBottom: "2px solid #333", color: "#0000FF" }}><b>Name</b></TableCell>
                <TableCell style={{ borderBottom: "2px solid #333", color: "#0000FF" }}><b>Branch</b></TableCell>
                <TableCell style={{ borderBottom: "2px solid #333", color: "#0000FF" }}><b>Year</b></TableCell>
                <TableCell style={{ borderBottom: "2px solid #333", color: "#0000FF" }}><b>Company Assigned</b></TableCell>
                <TableCell style={{ borderBottom: "2px solid #333", color: "#0000FF" }}><b>Project Assigned</b></TableCell>
                <TableCell style={{ borderBottom: "2px solid #333", color: "#0000FF" }}><b>Status</b></TableCell>
                <TableCell style={{ borderBottom: "2px solid #333", color: "#0000FF" }}><b>Document Link</b></TableCell>
              </TableRow>
              <TableRow>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsData.map((student, index) => (
                <TableRow key={index}>
                  <TableCell style={{ borderBottom: "2px solid #333" }}>{student.name}</TableCell>
                  <TableCell style={{ borderBottom: "2px solid #333" }}> {student.branch}</TableCell>
                  <TableCell style={{ borderBottom: "2px solid #333" }}> {student.year}</TableCell>
                  <TableCell style={{ borderBottom: "2px solid #333" }}> {student.companyAssigned}</TableCell>
                  <TableCell style={{ borderBottom: "2px solid #333" }}>{student.projectAssigned}</TableCell>
                  <TableCell style={{ borderBottom: "2px solid #333" }}>{student.status}</TableCell>
                  <TableCell style={{ borderBottom: "2px solid #333" }}>
                    <a href={student.documentLink} target="_blank" rel="noopener noreferrer">
                      View Document
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default CollegeDetailsPage;
