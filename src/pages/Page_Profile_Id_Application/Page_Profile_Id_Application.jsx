import React, { useState } from 'react';
import HistoryList from '../../components/Profile/ProfileId';
export default function Page_Profile_Id_Application(){
    const eventsData = [
        {
          id: 1,
          name: 'Application 1',
          status: 'Kết thúc',
        },
        {
          id: 2,
          name: 'Application 2',
          status: 'Sắp diễn ra',
        },
        {
          id: 3,
          name: 'Application 3',
          status: 'Sắp diễn ra',
        },
        {
          id: 4,
          name: 'Application 4',
          status: 'Sắp diễn ra',
        },
        {
          id: 5,
          name: 'Application 5',
          status: 'Kết thúc',
        },
        {
          id: 6,
          name: 'Application 6',
          status: 'Kết thúc',
        },
        {
          id: 7,
          name: 'Application 7',
          status: 'Kết thúc',
        },
        {
          id: 8,
          name: 'Application 8',
          status: 'Kết thúc',
        },
        {
          id: 9,
          name: 'Application 9',
          status: 'Kết thúc',
        },
        {
          id: 10,
          name: 'Application 10',
          status: 'Kết thúc',
        },
        {
          id: 11,
          name: 'Application 11',
          status: 'Kết thúc',
        },
        // Thêm các dữ liệu cho các event khác
      ];
      const time = '12/07/2023 10:00';
      const status = 'Đã đăng ký';
      const itemsPerPage = 10;
      const pathnavigate = '/recruitment/:recruitmentid/application/1';
      const namePage = 'Position name';
      return(
        <HistoryList events={eventsData} time={time} itemsPerPage={itemsPerPage} pathnavigate={pathnavigate} namePage={namePage} />
      )
      
}



