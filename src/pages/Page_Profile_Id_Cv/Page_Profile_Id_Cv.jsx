import React, { useState } from 'react';
import ProfileIdOneCv from './ProfileCvChild/ProfileIdOneCv';
export default function Page_Profile_Id_Cv(){
    const eventsData = [
        {
          id: 1,
          name: 'Event 1',
          backgroundImage: 'url("https://th.bing.com/th/id/R.f23b061588efd9625611f3ed364e0eb7?rik=1BCEJ6pynmr%2bjQ&pid=ImgRaw&r=0")',
          jobTitle: 'Front-end Developer',
          experience: '2 years',
        },
        {
          id: 2,
          name: 'Event 2',
          backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
          jobTitle: 'UI/UX Designer',
          experience: '3 years',
        },
        {
            id: 3,
            name: 'Event 3',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'UI/UX Designer',
            experience: '3 years',
          },
          {
            id: 4,
            name: 'Event 4',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'UI/UX Designer',
            experience: '3 years',
          },
          {
            id: 5,
            name: 'Event 5',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'UI/UX Designer',
            experience: '3 years',
          },
        // Thêm các dữ liệu cho các event khác
      ];
      
      return(
        <ProfileIdOneCv events={eventsData} />
      )
      
}



