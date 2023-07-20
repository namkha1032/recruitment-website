import React, { useState } from 'react';
import HistoryList from '../../components/Profile/ProfileId';
export default function Page_Profile_Id_Interview(){
    const eventsData = [
        {
          id: 1,
          name: 'Interview 1',
          status: 'Kết thúc',
        },
        {
          id: 2,
          name: 'Interview 2',
          status: 'Kết thúc',
        },
        {
          id: 3,
          name: 'Interview 3',
          status: 'Kết thúc',
        },
        {
          id: 4,
          name: 'Interview 4',
          status: 'Kết thúc',
        },
        {
          id: 5,
          name: 'Interview 5',
          status: 'Kết thúc',
        },
        {
          id: 6,
          name: 'Interview 6',
          status: 'Kết thúc',
        },
        {
          id: 7,
          name: 'Interview 7',
          status: 'Kết thúc',
        },
        {
          id: 8,
          name: 'Interview 8',
          status: 'Kết thúc',
        },
        {
          id: 9,
          name: 'Interview 9',
          status: 'Đang diễn ra',
        },
        {
          id: 10,
          name: 'Interview 10',
          status: 'Chưa bắt đầu',
        },
        {
          id: 11,
          name: 'Interview 11',
          status: 'Chưa bắt đầu',
        },
        // Thêm các dữ liệu cho các event khác
      ];
      const time = '12/07/2023 10:00';
     
      const itemsPerPage = 10;
      const pathnavigate = '/interview/1';
      const name = 'Interview Name'
      return(
        <HistoryList events={eventsData} time={time}  itemsPerPage={itemsPerPage} pathnavigate={pathnavigate} namePage={name}/>
      )
      
}



