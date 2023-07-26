import React, { useState , useEffect} from 'react';
import EventList from '../../components/Profile/ProfileIdEvent';
import { useDispatch, useSelector } from "react-redux";
import cleanStore from '../../utils/cleanStore';
export default function Page_Profile_Id_Event(){
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch({type:"saga/getAllEventCandidate"});
    return () => {
      cleanStore(dispatch);
    }
  }, [])
  const rows_draft = useSelector((state => state.eventCandidate));
  const rows = rows_draft ? rows_draft : [];
  console.log("Huy");
  console.log(rows);
      return(
        <EventList events={rows} totalPositions={0} />
      )
      
}



