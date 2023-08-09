import React, { useEffect } from 'react';
import HistoryListApp from '../../components/Profile/ProfileIdAppli';
import { useDispatch, useSelector } from "react-redux";
import cleanStore from '../../utils/cleanStore';
export default function Page_Profile_Id_Application(){
      const dispatch = useDispatch();
      const user = useSelector(state => state.user)
      useEffect( () => {
        dispatch(
          {
            type:"saga/getAllApplicationCandidate",
            payload:{
              token: `Bearer ${user.token}`,
            }
          }
        );

        return () => {
          cleanStore(dispatch);
        }
      }, [])
      const rows_draft = useSelector((state => state.applicationCandidate));
      const rows = rows_draft ? rows_draft : [];
      console.log("rowsApp:",rows);
      const NameList = 'Application List';
      const NamePage = 'Application';
      return(
        <HistoryListApp events={rows} NameList={NameList} namePage={NamePage} />
      )
      
}



