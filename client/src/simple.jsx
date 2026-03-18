import React, { useState } from "react";
import {
    Container,
    Paper,
    Grid,
    TextField,
    Typography,
    Button,
    Box,
    DialogTitle,
    DialogContent,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    DialogActions,
    Dialog
} from "@mui/material";

import axios from "axios";

const Simple = () => {

    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        motherName: "",
        city: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await axios.post("http://localhost:5000/api/simple/add", formData);
            alert("Data Saved");
            console.log(res.data);
            handleClear();
        }
        catch (err) {
            console.log(err);
        }
    };

    const handleUpdated = async () => {

        try {

            await axios.put("http://localhost:5000/api/simple/1", formData);
            alert("Updated Data");

        }
        catch (err) {

            console.log(err);

        }

    }

    const handleDelete = async () => {

        try {
            await axios.delete("http://localhost:5000/api/simple/1");
            alert("deleted");
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleSearch = async () => {

        try {

            const res = await axios.get("http://localhost:5000/api/simple/all");
            setData(res.data);
            handleOpen();


        }
        catch (err) {
            console.log(err)
        }
    }
    const handleClear = () => {
        setFormData({
            name: "",
            fatherName: "",
            motherName: "",
            city: "",
            address: ""
        });
    }

    return (
        <Container maxWidth="sm">
            <Paper elevation={5} sx={{ padding: 4, marginTop: 5 }}>

                <Typography variant="h4" align="center" gutterBottom>
                    Simpel Fpr
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                name="name"
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Father Name"
                                name="fatherName"
                                fullWidth
                                value={formData.fatherName}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Mother Name"
                                name="motherName"
                                fullWidth
                                value={formData.motherName}
                                onChange={handleChange}
                                required
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="City"
                                name="city"
                                fullWidth
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Address"
                                name="address"
                                fullWidth
                                multiline
                                rows={3}
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </Grid>

                        <br />
                        <br />
                        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
    <DialogTitle>Search Data</DialogTitle>

    <DialogContent>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Father Name</TableCell>
                    <TableCell>Mother Name</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Address</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.fatherName}</TableCell>
                        <TableCell>{item.motherName}</TableCell>
                        <TableCell>{item.city}</TableCell>
                        <TableCell>{item.address}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </DialogContent>

    <DialogActions>
        <Button onClick={handleClose} color="error">
            Close
        </Button>
    </DialogActions>
</Dialog>

                        <Grid item xs={12}>
                            <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">

                                <Button variant="contained" onClick={handleSubmit}>Submit</Button>

                                <Button variant="contained" color="warning" onClick={handleUpdated}>
                                    Update
                                </Button>

                                <Button variant="contained" color="error" onClick={handleDelete}>
                                    Delete
                                </Button>

                                <Button variant="contained" color="info" onClick={handleSearch}>
                                    Search
                                </Button>

                                <Button variant="outlined" color="secondary" onClick={handleClear}>
                                    Clear
                                </Button>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>

            </Paper>
        </Container>
    );
};

export default Simple;