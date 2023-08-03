import React, { useEffect, useState } from 'react';
import HistoryList from '../../components/Profile/ProfileId';
import { useDispatch, useSelector } from "react-redux";
import cleanStore from '../../utils/cleanStore';
import { useParams } from 'react-router-dom';
import {NoRowsOverlay,NoResultsOverlay} from '../../components/DataRick/DataRick'
export default function Page_Profile_Id_Interview(){
      const {profileid} = useParams();
      const dispatch = useDispatch();
      useEffect(() => {
        dispatch({type:"saga/getAllInterviewCandidate",payload :profileid});
        return () => {
          cleanStore(dispatch);
        };

      }, [])
      
      const rows_draft = useSelector((state) => state.interviewListCandidate);
      const rows = rows_draft ? rows_draft : []
      console.log(rows);
    
      const pathnavigate = '/interview';
      const NameList = 'Interview List';
      const NamePage = 'Interview';
      return(
        <HistoryList events={rows}    pathnavigate={pathnavigate} NameList={NameList} namePage={NamePage}/>
      )
      
}



