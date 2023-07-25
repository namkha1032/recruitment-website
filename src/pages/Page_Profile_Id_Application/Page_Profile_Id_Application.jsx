import React, { useState } from 'react';
import HistoryList from '../../components/Profile/ProfileId';
export default function Page_Profile_Id_Application(){
    const eventsData = [
        {
          id: 1,
          name: 'Application 1',
          status: 'Đang chờ',
        },
        {
          id: 2,
          name: 'Application 2',
          status: 'Đã đậu',
        },
        {
          id: 3,
          name: 'Application 3',
          status: 'Đã đậu',
        },
        {
          id: 4,
          name: 'Application 4',
          status: 'Đang chờ',
        },
        {
          id: 5,
          name: 'Application 5',
          status: 'Đang chờ',
        },
        {
          id: 6,
          name: 'Application 6',
          status: 'Đang chờ',
        },
        {
          id: 7,
          name: 'Application 7',
          status: 'Đang chờ',
        },
        {
          id: 8,
          name: 'Application 8',
          status: 'Đã đậu',
        },
        {
          id: 9,
          name: 'Application 9',
          status: 'Đã đậu',
        },
        {
          id: 10,
          name: 'Application 10',
          status: 'Đã đậu',
        },
        {
          id: 11,
          name: 'Application 11',
          status: 'Đã đậu',
        },
        // Thêm các dữ liệu cho các event khác
      ];
      const time = '12/07/2023 10:00';
     
      const itemsPerPage = 10;
      const pathnavigate = '/recruitment/:recruitmentid/application/1';
      const NameList = 'Application List';
      const NamePage = 'Application';
      return(
        <HistoryList events={eventsData} time={time} itemsPerPage={itemsPerPage} pathnavigate={pathnavigate} NameList={NameList} namePage={NamePage} />
      )
      
}



