import React, { useEffect, useState } from 'react';
import HistoryList from '../../components/Profile/ProfileId';
import { useDispatch, useSelector } from "react-redux";
import cleanStore from '../../utils/cleanStore';
export default function Page_Profile_Id_Interview(){
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch({type:"saga/getAllInterviewCandidate"});
        return () => {
          cleanStore(dispatch);
        };

      }, [])
      
      const rows_draft = useSelector((state) => state.interviewCandidate);
      const rows = rows_draft ? rows_draft : []
      console.log(rows);
     
      const itemsPerPage = 10;
      const pathnavigate = '/interview';
      const NameList = 'Interview List';
      const NamePage = 'Interview';
      return(
        <HistoryList events={rows}   itemsPerPage={itemsPerPage} pathnavigate={pathnavigate} NameList={NameList} namePage={NamePage}/>
      )
      
}



