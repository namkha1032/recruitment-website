import { useState, useEffect } from "react"
import { Button, Grid, Box, paginationItemClasses, ButtonGroup } from "@mui/material"
import { Typography } from "@mui/material"
import Info_view from "../../components/View_recruitment/Info_view"
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import "./Page_Company_Recruitment_Id.css"
import cleanStore from "../../utils/cleanStore";
import { useDispatch } from "react-redux";

const Page_Company_Recruitment_Id = () => {
    const {recruitmentid} = useParams();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleEdit = () => {
        cleanStore(dispatch)
        navigate(`/company/recruitment/${recruitmentid}/update`);
    }
    useEffect(() => {
        return () => {
            cleanStore(dispatch)
        }
    }, [])
    console.log("clean", dispatch);
    const tabs = 2
    return (
        <div className="page_company_recruitment_id">
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    <Info_view tabs={tabs} />
                </Grid>
            </Grid>

        </div>
    )
}

export default Page_Company_Recruitment_Id