import React, { useState , useEffect} from 'react';
import EventList from '../../components/Profile/ProfileIdEvent';
import { useDispatch, useSelector } from "react-redux";
import cleanStore from '../../utils/cleanStore';
export default function Page_Profile_Id_Event(){

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  useEffect( () => {
    dispatch({type:"saga/getAllEventCandidate",
    payload:{
      token: `Bearer ${user.token}`,
    }
  }
    );
    return () => {
      cleanStore(dispatch);
    }
  }, [])
  const rows_draft = useSelector((state => state.eventCandidate));
  const rows = rows_draft ? rows_draft : [];
      return(
        <EventList events={rows} />
      )
      
}



