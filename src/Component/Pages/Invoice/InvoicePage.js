import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { useNavigate } from 'react-router-dom';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('1', 159, "reaceive", 24, 4.0),
    createData('1', 237, "reaceive", 37, 4.3),
    createData('1', 262, "reaceive", 24, 6.0),
    createData('1', 305, "reaceive", 67, 4.3),
    createData('1', 356, "reaceive", 49, 3.9),
];


export default function InvoicePage() {

    const navigate = useNavigate();



    return (
        <>
            <div className="container px-4">
                <div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <div><h5 style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Invoices</h5></div>
                        <div>
                            <button type="button" className="btn btn-primary" onClick={()=> navigate("/create-invoice")}>Create Invoice</button>
                        </div> 
                    </div>
                </div>
                <div>

                    <Card className='cardone mt-2'>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='left'>ID</TableCell>
                                    <TableCell align="left">Invoice No.</TableCell>
                                    <TableCell align="left">Recipient</TableCell>
                                    <TableCell align="left">Amount</TableCell>
                                    <TableCell align="left">Create Data</TableCell>
                                    <TableCell align="left">During Date</TableCell>
                                    <TableCell align="left">Actions</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left">{row.calories}</TableCell>
                                        <TableCell align="left">{row.fat}</TableCell>
                                        <TableCell align="left">{row.carbs}</TableCell>
                                        <TableCell align="left">{row.protein}</TableCell>
                                        <TableCell align="left">{row.carbs}</TableCell>
                                        <TableCell align="left"> <span ><RemoveRedEyeIcon /></span>
                                            <span><DeleteIcon/></span>
                                            <span><SimCardDownloadIcon/></span></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Card>
                </div>

            </div>
        </>
    )
}