import { TextField, Button, Box } from '@mui/material';
import "../../Style/Invorail.css"



export default function ProductPage() {

    return (
        <>

            <div className="container px-4">
                <div>
                    <div className="mt-4">
                        <h5 className="heading">Invoice Tracking</h5>
                        <div>
                            <p>Tracking Id</p>
                            <Box className="d-flex justify-content-between align-items-center">
                                <input className="form-control" style={{ background: "#B2D1FF", color: "white",width:"90%" }} id="exampleInputEmail1" />

                                <button type="submit" className="btn btn-primary margin-left-10">Track</button>

                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </>






    )
}