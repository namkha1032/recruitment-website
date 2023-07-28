import { useState } from "react"
import { Button, Grid, Box, paginationItemClasses, ButtonGroup } from "@mui/material"
import { Typography } from "@mui/material"
import Info_view from "../../components/View_recruitment/Info_view"
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import "./Page_Company_Recruitment_Id.css"
//// update final

const Page_Company_Recruitment_Id = () => {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate('/company/recruitment/:recruitmentid/update');
    }

    const tabs = 2
    return (
        <div className="page_company_recruitment_id">
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    {/* tabs = {tabs} */}
                    <Info_view tabs={tabs} />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", marginTop: "16px" }}>

                    <Button sx={{
                        color: "black",
                        border: "1px solid black",
                        textTransform: "none",

                        ":hover": {
                            backgroundColor: "black",
                            color: "white"
                        }
                    }} variant='outlined' onClick={handleEdit}>
                        <EditIcon></EditIcon> EDIT
                    </Button>

                </Grid>
            </Grid>

        </div>
    )
}

export default Page_Company_Recruitment_Id