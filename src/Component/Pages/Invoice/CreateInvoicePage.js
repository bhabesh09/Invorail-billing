import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import { Padding } from '@mui/icons-material';


const CustomDatePicker = styled(DatePicker)({
    '& .MuiInputBase-root': {
        height: '40px', // Resetting height
        background: "#D0F0FF",
        border: "1px solid #06F",
        width: "240px"
    },
});

export default function RecuringInvoices() {
    return (
        <div className="container px-4">
            <div className="d-flex justify-content-between align-items-center mt-4">
                <h5 style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Create Invoices</h5>
                <div>
                    <button type="button" className="btn border border-primary">Preview</button>
                    <button type="button" className="btn btn-primary ml-2" style={{ marginLeft: "30px" }}>Download Invoice</button>
                </div>
            </div>

            <div className="row mt-4">

                <div className="d-flex flex-wrap justify-content-between">
                    <div className="d-flex flex-wrap gap-4   mb-3">
                        <div>
                            <label>Invoice ID</label>
                            <div>

                                <TextField
                                    size="small"
                                    style={{ background: "#D0F0FF", width: "240px", border: "1px solid #06F", }}
                                />
                            </div>
                        </div>
                        <div>
                            <label>Invoice Currency</label>
                            <div>
                                <TextField
                                    select
                                    size="small"
                                    style={{ background: "#D0F0FF", width: "240px", border: "1px solid #06F", }}
                                >
                                    <MenuItem value="inr">INR</MenuItem>
                                    <MenuItem value="usd">USD</MenuItem>
                                    <MenuItem value="usdt">USDT</MenuItem>
                                </TextField>

                            </div>

                        </div>
                    </div>
                    <div className="d-flex flex-wrap gap-4 mb-3 ">
                        <div>
                            <label>Invoice Date</label>
                            <div>

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <CustomDatePicker
                                        // label="Select Date"
                                        inputVariant="outlined"
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div>
                            <label>Due Date</label>
                            <div>

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <CustomDatePicker
                                        // label="Select Date"
                                        inputVariant="outlined"
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-wrap justify-content-between  align-items-center '>

                    <div>
                        <label>Invoice Recipient</label>
                        <div>

                            <TextField
                                size="small"
                                style={{ background: "#D0F0FF", width: "500px", border: "1px solid #06F", }}
                                placeholder='select client'
                            />
                        </div>
                    </div>

                    <div>
                        <label for="type2" className="form-label">Invoice Recipient</label>
                        <div>

                            <TextField
                                size="small"
                                style={{ background: "#D0F0FF", width: "500px", border: "1px solid #06F", }}
                                placeholder='select client'

                            />
                        </div>
                    </div>

                </div>


            </div>


            <Card className='mt-4 p-2' style={{border: "1px solid #01ACFF"}}>
                <div className='maintable'>

                    <table style={{ width: "100%" }}>
                        <thead>
                            <p className='fw-bold fs-4 ml-2'>Items</p>
                            <tr>
                                <th>Arriange</th>
                                <th>ID</th>
                                <th>Item Name</th>
                                <th>Quantity</th>
                                <th>Rate</th>
                                <th>Discount</th>
                                <th>Tax</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="8"><hr style={{ background: "black", width: "100%", margin: "0" }} /></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>012</td>
                                <td>1234564564578521522212222</td>
                                <td  className='text-center'>2</td>
                                <td  className='text-center'>29</td>
                                <td  className='text-center'>10%</td>
                                <td  className='text-center'>10%</td>
                                <td  className='text-center'>No</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>012</td>
                                <td>1234564564578521522212222</td>
                                <td className='text-center'>2</td>
                                <td className='text-center'>29</td>
                                <td className='text-center'>10%</td>
                                <td className='text-center'>10%</td>
                                <td className='text-center'>No</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <button type="button" className="btn border border-primary mt-4" style={{ width: "98%",marginBottom:"20px" }}>+Add New</button>


            </Card>

            <div className=' mt-4' style={{ marginBottom: "40px" }}>
                <div className='row'>
                    <div className='col-lg-7 col-md-12 mb-4'>
                        <Card style={{ border: "1px solid #01ACFF", padding: "20px" }}>
                            <label className='fw-bold'>Invoice Summary</label>
                            <div className='mt-3'>
                                <label>Invoice Note</label>  
                                <div>
                                    <TextField
                                        size="small"
                                        style={{ background: "#D0F0FF", width: "500px" }}
                                        placeholder='select client'
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label>Terms</label>
                                <div>
                                    <TextField
                                        size="small"
                                        style={{ background: "#D0F0FF", width: "500px" }}
                                        placeholder='select client'
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className='col-lg-5 col-md-12'>
                        <Card style={{ border: "1px solid #01ACFF", padding: "20px" }}>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <div><label>Sub Total</label></div>
                                    <div><label>Total Tax</label></div>
                                </div>
                                <div>
                                    <div><label>$ 12.00</label></div>
                                    <div><label>10%</label></div>
                                </div>
                            </div>
                            <hr className='subtotal-last' />
                            <div className='d-flex justify-content-between'>
                                <div><label>Total Amount</label></div>
                                <div><label>$ 12.00</label></div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
}
