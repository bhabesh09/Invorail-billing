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
import { HiFilter } from "react-icons/hi";


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


export default function ClientPage() {

    const navigate = useNavigate()

    return (
        <>
            <div className="container px-4">
                <div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <div><h5 style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Clients</h5></div>
                        <div>
                            <button type="button" className="btn btn-primary" onClick={() => navigate(`/add-client`)}
                            > Add Clients</button>
                        </div>




                    </div>
                </div>
                <div>

                    <Card className='mt-4' style={{ border: "2px solid #01ACFF" }}>
                        <div className="align-items-center mt-4" style={{display:"flex",marginLeft:"69%",gap:"30px"}}>
                                <button type="button" className="btn fs-bold text-white" style={{background:" #85C1DE"}}>Paid</button>
                                <button type="button" className="btn fw-bold ml-2" style={{ marginLeft: "30px",color:" #01ACFF" }}>Unpaid</button>
                                <HiFilter />
                        </div>

                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='left' style={{ fontWeight: "600", fontStyle: "normal" }}>ID</TableCell>
                                    <TableCell align="left" style={{ fontWeight: "600", fontStyle: "normal" }}>Invoice No.</TableCell>
                                    <TableCell align="left" style={{ fontWeight: "600", fontStyle: "normal" }}>Recipient</TableCell>
                                    <TableCell align="left" style={{ fontWeight: "600", fontStyle: "normal" }}>Amount</TableCell>
                                    <TableCell align="left" style={{ fontWeight: "600", fontStyle: "normal" }}>Create Data</TableCell>
                                    <TableCell align="left" style={{ fontWeight: "600", fontStyle: "normal" }}>During Date</TableCell>
                                    <TableCell align="left" style={{ fontWeight: "600", fontStyle: "normal" }}>Actions</TableCell>

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
                                            <span><DeleteIcon /></span>
                                            <span><SimCardDownloadIcon /></span></TableCell>

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