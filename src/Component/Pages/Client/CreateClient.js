import React from 'react'

const CreateClient = () => {
    return (
        <>
            <div className="container px-4">
                <div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <div><h5 style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Clients</h5></div>

                        <div >
                            <span>
                                <button type="button" className="btn border border-primary"
                                >Preview</button>
                            </span>


                            <span style={{ marginLeft: "30px" }}>
                                <button type="button" className="btn btn-primary ml-2"> Add Clients</button>
                            </span>
                        </div>
                    </div> 


                    <div className='row mt-4'>

                        <div className='col-md-6'>

                            <div className='form-group'>
                                <label for="clientName1" className="form-label ">Client Name</label>
                                <input type="text" className="form-control border border-primary" id="clientName1 "  style={{background:"#D0F0FF"}}/>
                            </div>

                            <div className='form-group mt-2'>
                                <label for="clientName2" className="form-label">Client Name</label>
                                <input type="text" className="form-control  border border-primary" id="clientName2"  style={{background:"#D0F0FF"}}/>
                            </div>

                            <div className='form-group  mt-2'>
                                <label for="clientName3" className="form-label">Client Name</label>
                                <input type="text" className="form-control  border border-primary" id="clientName3"  style={{background:"#D0F0FF"}} />
                            </div>

                        </div>

                        <div className='col-md-6'>

                            <div className='form-group'>
                                <label for="type1" className="form-label">Type</label>
                                <input type="text" className="form-control  border border-primary" id="type1"  style={{background:"#D0F0FF"}}/>
                            </div>

                            <div className='form-group mt-2'>
                                <label for="type2" className="form-label">Type</label>
                                <input type="text" className="form-control  border border-primary" id="type2"  style={{background:"#D0F0FF"}}/>
                            </div>

                            <div className='form-group mt-2'>
                                <label for="type3" className="form-label">Type</label>
                                <input type="text" className="form-control  border border-primary" id="type3"  style={{background:"#D0F0FF"}}/>
                            </div>

                        </div>

                        <div className='col-md-12 mt-2' >
                            <div class="form-group ">
                                <label for="exampleFormControlTextarea1">Address</label>
                                <textarea className="form-control mt-2  border border-primary"  style={{background:"#D0F0FF"}} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div  className='d-flex justify-content-end mt-4'>
                                <span>
                                    <button type="button" className="btn border border-primary"
                                    >Discard</button>
                                </span>


                                <span style={{ marginLeft: "30px" }}>
                                    <button type="button" className="btn  ml-2 text-white" style={{background:"#009AF0"}} >Save</button>
                                </span>
                            </div>
                        </div>



                    </div>


                </div>







            </div>



        </>
    )
}

export default CreateClient