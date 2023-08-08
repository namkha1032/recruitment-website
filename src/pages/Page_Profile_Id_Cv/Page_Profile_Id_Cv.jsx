import React, { useEffect, useState } from 'react';
import ProfileIdOneCv from './ProfileCvChild/ProfileIdOneCv';
import { useDispatch, useSelector } from "react-redux";
import cleanStore from '../../utils/cleanStore';
export default function Page_Profile_Id_Cv(){
      const dispatch = useDispatch();
      useEffect( () => {
        dispatch({type:"saga/getAllCvCandidate"});
        return () => {
          cleanStore(dispatch);
        }
      }, [])
      const rows_draft = useSelector((state => state.cvCandidate));
     
      const rows = rows_draft ? rows_draft : [];
      const img =  "https://www.topcv.vn/images/cv/screenshots/vi/mau-cv-ambitious.png?v=1.0.1";
      return(
        
        <ProfileIdOneCv events={rows} img={img}/>
      )
      
}



