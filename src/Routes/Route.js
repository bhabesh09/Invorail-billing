import HomePage from "../Component/Pages/Dashboard/HomePage";
import InvoicePage from "../Component/Pages/Invoice/InvoicePage";
import ClientPage from "../Component/Pages/Client/ClientPage";
import LayoutDesign from "../Component/Layout/LayoutDesign";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Component/Navbar";
import BalancePage from "../Component/Pages/Balance/BalancePage";
import CreateClient from "../Component/Pages/Client/CreateClient";
import ProductPage from "../Component/Pages/ProductServices/Product-Services";
import CreateInvoice from "../Component/Pages/Invoice/CreateInvoicePage";
import RecuringInvoices from "../Component/Pages/Invoice/Recurring Invoices";

export default function InvorailROute() {


    return (

        <>
            <BrowserRouter>
                 
                <div className="d-flex">  
                    <LayoutDesign />
                    <div  style={{width:"100%"}}>
                        <Header />
                        <Routes>
                            <Route path="dashboard" element={<HomePage />} />
                            <Route path="invoice" element={<InvoicePage />} />
                            <Route path="create-invoice"  element={<CreateInvoice/>}/>
                            <Route path="recurring-invoices" element={<RecuringInvoices/>}/>
                            <Route path="client" element={<ClientPage />} />
                            <Route path="add-client" element={<CreateClient/>}/>
                            <Route path="products-services" element={<ProductPage />} />
                            <Route path="balance" element={<BalancePage />} />
                            
                        </Routes>
                    </div>
                </div>


            </BrowserRouter>

        </>
    )
}