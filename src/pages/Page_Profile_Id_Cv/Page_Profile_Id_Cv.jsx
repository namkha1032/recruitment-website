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
      console.log("test CV:", rows_draft);
      const rows = rows_draft ? rows_draft : [];

      const img =  "https://th.bing.com/th/id/R.639fde3d458d9202a53e90645dcb1fa9?rik=jTiM1x47cHsctg&pid=ImgRaw&r=0";
      return(
        
        <ProfileIdOneCv events={rows} img={img}/>
      )
      
}



