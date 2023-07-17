import React, { useState } from 'react';
import HistoryList from '../../components/Profile/ProfileId';
export default function Page_Profile_Id_Interview(){
    const eventsData = [
        {
          id: 1,
          name: 'Event 1',
        },
        {
          id: 2,
          name: 'Event 2',
        },
        {
          id: 3,
          name: 'Event 3',
        },
        {
          id: 4,
          name: 'Event 4',
        },
        {
          id: 5,
          name: 'Event 5',
        },
        {
          id: 6,
          name: 'Event 6',
        },
        {
          id: 7,
          name: 'Event 7',
        },
        {
          id: 8,
          name: 'Event 8',
        },
        {
          id: 9,
          name: 'Event 9',
        },
        {
          id: 10,
          name: 'Event 10',
        },
        {
          id: 11,
          name: 'Event 11',
        },
        // Thêm các dữ liệu cho các event khác
      ];
      const time = '12/07/2023 10:00';
      const status = 'Đã đăng ký';
      const itemsPerPage = 10;
      return(
        <HistoryList events={eventsData} time={time}  status={status} itemsPerPage={itemsPerPage} />
      )
      
}



