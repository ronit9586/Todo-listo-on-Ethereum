import { DatePicker, LocalizationProvider } from '@mui/lab';
import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, Grid, Modal, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Desktop, Mobile } from '../components/Media';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    boxShadow: 24,
    p: 4,
    bgcolor: 'white',
    borderRadius: '25px',
};
const responisve = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    boxShadow: 24,
    p: 4,
    bgcolor: 'white',
    borderRadius: '25px',
};
const connect = {
    fontSize: '15px',
    marginTop: '10px'
};
export default function TodoModal(props) {

    const handleClose = () => props.setOpen(false);
    const [value, setValue] = React.useState(null);

    return (
        <>
            <Desktop>
                <Container maxWidth="lg">
                    <Modal
                        open={props.open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography sx={{ borderBottom: 1, pb: 3 }} id="modal-modal-title" variant="h6" component="h2">
                                Add Task
                                <Box sx={connect}>
                                    Connectd to : 0xF5e8b2...e17c6
                                </Box>
                            </Typography>

                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                label="Date"
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}

                                                renderInput={(params) => <TextField sx={{ mt: 3 }} {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <TextField
                                            sx={{ mt: 3 }}
                                            label="Title"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            style={{ width: '100%' }}
                                            label="Description"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="1"
                                                name="radio-buttons-group"
                                                sx={{ display: 'block ruby' }}
                                            >
                                                <FormControlLabel value="1" disabled control={<Radio />} label="Complete" />
                                                <FormControlLabel value="2" disabled control={<Radio />} label="Not-Complete" />
                                            </RadioGroup>
                                        </FormControl>

                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Priority</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="1"
                                                name="radio-buttons-group"
                                                sx={{ display: 'block ruby' }}
                                            >
                                                <FormControlLabel value="1" control={<Radio />} label="Low" />
                                                <FormControlLabel value="2" control={<Radio />} label="Medium" />
                                                <FormControlLabel value="2" control={<Radio />} label="High" />
                                            </RadioGroup>
                                        </FormControl>

                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Button onClick={handleClose} style={{ color: '#352f2f' }} sx={{ me: 3 }} variant="text">Cancel</Button>
                                <Button style={{ float: 'right' }} color="success" variant="contained">Submit</Button>
                            </Box>

                        </Box>
                    </Modal>
                </Container>
            </Desktop>
            <Mobile>
                <Container maxWidth="lg">
                    <Modal
                        open={props.open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={responisve}>
                            <Typography sx={{ borderBottom: 1, pb: 3 }} id="modal-modal-title" variant="h6" component="h2">
                                Add Task
                                <Box sx={connect}>
                                    Connectd to : 0xF5e8b2...e17c6
                                </Box>
                            </Typography>

                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DatePicker
                                                label="Date"
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}

                                                renderInput={(params) => <TextField sx={{ mt: 3 }} {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <TextField
                                            sx={{ mt: 3 }}
                                            label="Title"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            style={{ width: '100%' }}
                                            label="Description"
                                            multiline
                                            rows={4}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="1"
                                                name="radio-buttons-group"
                                                sx={{ display: 'block ruby' }}
                                            >
                                                <FormControlLabel value="1" disabled control={<Radio />} label="Complete" />
                                                <FormControlLabel value="2" disabled control={<Radio />} label="Not-Complete" />
                                            </RadioGroup>
                                        </FormControl>

                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">Priority</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="1"
                                                name="radio-buttons-group"
                                                sx={{ display: 'block ruby' }}
                                            >
                                                <FormControlLabel value="1" control={<Radio />} label="Low" />
                                                <FormControlLabel value="2" control={<Radio />} label="Medium" />
                                                <FormControlLabel value="2" control={<Radio />} label="High" />
                                            </RadioGroup>
                                        </FormControl>

                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Button onClick={handleClose} style={{ color: '#352f2f' }} sx={{ me: 3 }} variant="text">Cancel</Button>
                                <Button style={{ float: 'right' }} color="success" variant="contained">Submit</Button>
                            </Box>

                        </Box>
                    </Modal>
                </Container>
            </Mobile>
        </>

    )
}
