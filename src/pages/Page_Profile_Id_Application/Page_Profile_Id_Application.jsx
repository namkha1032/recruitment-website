import React, { useState } from 'react';
import HistoryList from '../../components/Profile/ProfileId';
export default function Page_Profile_Id_Application(){
    const eventsData = [
        {
          id: 1,
          name: 'Application 1',
        },
        {
          id: 2,
          name: 'Application 2',
        },
        {
          id: 3,
          name: 'Application 3',
        },
        {
          id: 4,
          name: 'Application 4',
        },
        {
          id: 5,
          name: 'Application 5',
        },
        {
          id: 6,
          name: 'Application 6',
        },
        {
          id: 7,
          name: 'Application 7',
        },
        {
          id: 8,
          name: 'Application 8',
        },
        {
          id: 9,
          name: 'Application 9',
        },
        {
          id: 10,
          name: 'Application 10',
        },
        {
          id: 11,
          name: 'Application 11',
        },
        // Thêm các dữ liệu cho các event khác
      ];
      const time = '12/07/2023 10:00';
      const status = 'Đã đăng ký';
      const itemsPerPage = 10;
      const pathnavigate = '/recruitment/:recruitmentid/application/1';
      const namePage = 'Position name';
      return(
        <HistoryList events={eventsData} time={time} status={status} itemsPerPage={itemsPerPage} pathnavigate={pathnavigate} namePage={namePage} />
      )
      
}



