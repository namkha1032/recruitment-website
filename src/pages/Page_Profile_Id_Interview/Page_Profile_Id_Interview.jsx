import React, { useEffect } from 'react';
import HistoryList from '../../components/Profile/ProfileId';
import { useDispatch, useSelector } from "react-redux";
import cleanStore from '../../utils/cleanStore';
import { useParams } from 'react-router-dom';
export default function Page_Profile_Id_Interview(){
      const {profileid} = useParams();
      const dispatch = useDispatch();
      const user = useSelector(state => state.user)
      useEffect(() => {
        dispatch({type:"saga/getAllInterviewCandidate",payload :{profileid,
          token: `Bearer ${user.token}`,
        }});
        return () => {
          cleanStore(dispatch);
        };

      }, [])
      
      const rows_draft = useSelector((state) => state.interviewListCandidate);
      const rows = rows_draft ? rows_draft : []
    
      const pathnavigate = '/interview';
      const NameList = 'Interview List';
      const NamePage = 'Interview';
      return(
        <HistoryList events={rows}    pathnavigate={pathnavigate} NameList={NameList} namePage={NamePage}/>
      )
      
}



