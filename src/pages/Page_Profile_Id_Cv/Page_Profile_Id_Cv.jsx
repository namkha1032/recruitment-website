import React, { useState } from 'react';
import ProfileIdOneCv from './ProfileCvChild/ProfileIdOneCv';
export default function Page_Profile_Id_Cv(){
    const eventsData = [
        {
          id: 1,
          name: 'CV 1',
          backgroundImage: 'url("https://th.bing.com/th/id/R.f23b061588efd9625611f3ed364e0eb7?rik=1BCEJ6pynmr%2bjQ&pid=ImgRaw&r=0")',
          jobTitle: 'C++,Reacts',
          experience: '2 years',
        },
        {
          id: 2,
          name: 'CV 2',
          backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
          jobTitle: 'C++,Reacts',
          experience: '3 years',
        },
        {
            id: 3,
            name: 'CV 3',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'C++,Reacts',
            experience: '3 years',
          },
          {
            id: 4,
            name: 'CV 4',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'C++,Reacts',
            experience: '3 years',
          },
          {
            id: 5,
            name: 'CV 5',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'C++,Reacts',
            experience: '3 years',
          },
          {
            id: 6,
            name: 'CV 6',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'C++,Reacts',
            experience: '3 years',
          },
          {
            id: 7,
            name: 'CV 7',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'C++,Reacts',
            experience: '3 years',
          },
          {
            id: 8,
            name: 'CV 8',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'C++,Reacts',
            experience: '3 years',
          },
          {
            id: 9,
            name: 'CV 9',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'C++,Reacts',
            experience: '3 years',
          },
          {
            id: 10,
            name: 'CV 10',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'C++,Reacts',
            experience: '3 years',
          },
          {
            id: 11,
            name: 'CV 11',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'C++,Reacts',
            experience: '3 years',
          },
          {
            id: 12,
            name: 'CV 12',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'C++,Reacts',
            experience: '3 years',
          },
          {
            id: 13,
            name: 'CV 13',
            backgroundImage: 'url("https://th.bing.com/th/id/OIP.B84HLN4wyTH2giBZMHiUHAAAAA?w=182&h=257&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
            jobTitle: 'C++,Reacts',
            experience: '3 years',
          },
        // Thêm các dữ liệu cho các event khác
      ];
      
      return(
        <ProfileIdOneCv events={eventsData} />
      )
      
}



