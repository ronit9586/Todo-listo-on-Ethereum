import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container } from '@mui/material';
import TodoModal from '../modal/TodoModal';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    // const action = (params) => {
    //     return (
    //         <strong>
    //             <Button
    //                 variant="contained"
    //                 color="primary"
    //                 size="small"
    //                 style={{ marginLeft: 16 }}
    //             >
    //                 More Info
    //             </Button>
    //         </strong>
    //     )
    // }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'title', headerName: 'Title', width: 130 },
        {
            field: 'description',
            headerName: 'Description',
            width: 350,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,

        },
        {
            field: 'priority',
            headerName: 'Priority',
            width: 100,

        },
        {
            field: "Action",
            renderCell: () => {
                return (
                    <>
                        <IconButton aria-label="edit" size="small">
                            <EditIcon fontSize="inherit" onClick={handleOpen} />
                        </IconButton>
                        <IconButton aria-label="delete" size="small">
                            <DeleteIcon fontSize="inherit" />
                        </IconButton>
                    </>
                );
            }
        }

    ];
    const rows = [
        { id: 1, title: 'Create design', date: '03/02/2022', description: 'To do task for details', status: 'Complete', priority: 'High' },
        { id: 2, title: 'Lannister', date: '03/02/2022', description: 'To do task for details', status: 'Complete', priority: 'High' },
        { id: 3, title: 'Lannister', date: '03/02/2022', description: 'To do task for details', status: 'Complete', priority: 'High' },
        { id: 4, title: 'Stark', date: 'Arya', description: 'To do task for details', status: 'Complete', priority: 'High' },
        { id: 5, title: 'Targaryen', date: '03/02/2022', description: 'To do task for details', status: 'Complete', priority: 'High' },
        { id: 6, title: 'Melisandre', date: null, description: 'To do task for details', status: 'Complete', priority: 'High' },
        { id: 7, title: 'Clifford', date: '03/02/2022', description: 'To do task for details', status: 'Complete', priority: 'High' },
        { id: 8, title: 'Frances', date: '03/02/2022', description: 'To do task for details', status: 'Complete', priority: 'High' },
        { id: 9, title: 'Roxie', date: '03/02/2022', description: 'To do task for details', status: 'Complete', priority: 'High' },
    ];
    return (
        <>
            <Container maxWidth="lg">
                <Button variant="outlined" onClick={handleOpen} sx={{ m: 3 }}>Add</Button>
                <div style={{ height: 500, width: '100%' }} sx={{ p: 3 }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                    // pageSize={5}
                    // rowsPerPageOptions={[5]}
                    />
                </div>
                <TodoModal open={open} setOpen={setOpen}></TodoModal>
            </Container>
        </>
    )
}
