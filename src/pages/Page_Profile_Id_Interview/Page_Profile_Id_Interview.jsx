import React, { useState } from 'react';
import HistoryList from '../../components/Profile/ProfileId';
export default function Page_Profile_Id_Interview(){
    const eventsData = [
        {
          id: 1,
          name: 'Interview 1',
          status: 'Chưa phỏng vấn',
        },
        {
          id: 2,
          name: 'Interview 2',
          status: 'Chưa phỏng vấn',
        },
        {
          id: 3,
          name: 'Interview 3',
          status: 'Chưa phỏng vấn',
        },
        {
          id: 4,
          name: 'Interview 4',
          status: 'Chưa phỏng vấn',
        },
        {
          id: 5,
          name: 'Interview 5',
          status: 'Chưa phỏng vấn',
        },
        {
          id: 6,
          name: 'Interview 6',
          status: 'Đã phỏng vấn',
        },
        {
          id: 7,
          name: 'Interview 7',
          status: 'Đã phỏng vấn',
        },
        {
          id: 8,
          name: 'Interview 8',
          status: 'Đã phỏng vấn',
        },
        {
          id: 9,
          name: 'Interview 9',
          status: 'Đã phỏng vấn',
        },
        {
          id: 10,
          name: 'Interview 10',
          status: 'Đã phỏng vấn',
        },
        {
          id: 11,
          name: 'Interview 11',
          status: 'Đã phỏng vấn',
        },
        // Thêm các dữ liệu cho các event khác
      ];
      const time = '12/07/2023 10:00';
     
      const itemsPerPage = 10;
      const pathnavigate = '/interview/1';
      const NameList = 'Interview List';
      const NamePage = 'Interview';
      return(
        <HistoryList events={eventsData} time={time}  itemsPerPage={itemsPerPage} pathnavigate={pathnavigate} NameList={NameList} namePage={NamePage}/>
      )
      
}



