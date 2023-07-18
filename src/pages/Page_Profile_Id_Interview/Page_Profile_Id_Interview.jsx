import React, { useState } from 'react';
import HistoryList from '../../components/Profile/ProfileId';
export default function Page_Profile_Id_Interview(){
    const eventsData = [
        {
          id: 1,
          name: 'Interview 1',
        },
        {
          id: 2,
          name: 'Interview 2',
        },
        {
          id: 3,
          name: 'Interview 3',
        },
        {
          id: 4,
          name: 'Interview 4',
        },
        {
          id: 5,
          name: 'Interview 5',
        },
        {
          id: 6,
          name: 'Interview 6',
        },
        {
          id: 7,
          name: 'Interview 7',
        },
        {
          id: 8,
          name: 'Interview 8',
        },
        {
          id: 9,
          name: 'Interview 9',
        },
        {
          id: 10,
          name: 'Interview 10',
        },
        {
          id: 11,
          name: 'Interview 11',
        },
        // Thêm các dữ liệu cho các event khác
      ];
      const time = '12/07/2023 10:00';
      const status = 'Đã đăng ký';
      const itemsPerPage = 10;
      const pathnavigate = '/interview/1';
      const name = 'Interview Name'
      return(
        <HistoryList events={eventsData} time={time}  status={status} itemsPerPage={itemsPerPage} pathnavigate={pathnavigate} namePage={name}/>
      )
      
}



