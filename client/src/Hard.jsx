import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Hard = () => {

    const [open, setOpen] = useState(false);

    const [data, setData] = useState([]);

    const handleOpen = () => {

        setOpen(true);
    }

    const handleClose = () => {

        setOpen(false);

    }

    const [formdata, setFormData] = useState({

        name: "",
        lastname: "",
    })


    const handlechange = (e) => {

        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        debugger;

        e.preventDefault();

        try {

            const res = await axios.post("http://localhost:5000/api/hard/add", formdata);
            alert("Data Saved...");
            console.log(res.data);
            handleClear();

        }

        catch (err) {
            console.log(err);

        }


    }

    const handleDelete = async () => {


        try {
            await axios.delete("http://localhost:5000/api/hard/1");
            alert(" Data  Deleted .... ")
        }
        catch (err) {
            console.log(err);

        }
    }

    const handleUpdated = async () => {

        try {
            await axios.put("http://localhost:5000/api/hard/1", formdata);
            alert("Updated Data ")
        }
        catch (err) {
            console.log(err);

        }

    }


    const handleSearch = async () => {
        debugger;

        try {

            const res = await axios.get("http://localhost:5000/api/hard/all");
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
            lastname: "",


        })

    }

    const handleClickData = (item) => {
        setFormData({
            name: item.name,
            lastname: item.lastname
        });
        handleClose();

    }

    return (

        <>

            <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>

                        <TextField
                            label="Name"
                            name='name'
                            fullWidth
                            value={formdata.name}
                            required
                            onChange={handlechange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField

                            label="lastname"
                            name='lastname'
                            value={formdata.lastname}
                            required
                            onChange={handlechange}
                            fullWidth
                        />

                    </Grid>
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
                                    <TableCell>LastName</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {data.map((item, index) => (
                                    <TableRow key={index}

                                        onClick={() => handleClickData(item)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.lastname}</TableCell>

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


                        <Button variant="contained" onClick={handleSubmit} > Submit </Button>
                        <Button variant="contained" color="warning" onClick={handleUpdated}> Updated </Button>
                        <Button variant="contained" color="error" onClick={handleDelete} > Delete </Button>
                        <Button variant="contained" color="info" onClick={handleSearch}> Search  </Button>
                        <Button variant="contained" color="secondary" onClick={handleClear} > Clear </Button>
                    </Box>

                </Grid>

            </Box>


        </>
    )
}

export default Hard 