import dayjs from 'dayjs';

export const certificateList = [
  { name: "IELTS" },
  { name: "TOEIC" },
  { name: "python" },
  { name: "javaScript" },
];

const recruitInfo = {
  name: "sadasd",
  description: "dasdad",
  salary: "10000",
  maxHiring: "100",
  hired: "",
  startDate: dayjs('2022-04-17'),
  endDate: dayjs('2023-06-11'),
  departmentId: 1,
  language: [
    { id: 0, languageId: 0, languageName: "English" },
    { id: 1, languageId: 1, languageName: "Japanese" },
  ],
  recruiterId: null,
  status: "",
  requirement: [
    {
      id: 0,
      skillid: 1,
      skillname: "css",
      experience: 2,
      note: "cái gì đó",
    },
    {
      id: 1,
      skillid: 0,
      skillname: "html",
      experience: 4,
      note: "cái gì đó 2",
    },
    {
      id: 2,
      skillid: 0,
      skillname: "html",
      experience: 4,
      note: "cái gì đó 2",
    },
  ],
};
export const skill = [
  { id: 0, name: "html" },
  { id: 1, name: "css" },
  { id: 2, name: "reactjs" },
  { id: 3, name: "mongodb" },
];

export const language = [
  { id: 0, name: "English" },
  { id: 1, name: "Japanese" },
  { id: 2, name: "Chinese" },
  { id: 3, name: "VietNamese" },
];
export const department = [
  {
    id: 0,
    name: "Recruite",
    address: "F Town 1",
    email: "recruite@fpt.com",
    phone: "0123456789",
    website: "https://fpt.recruit.com",
  },
  {
    id: 1,
    name: "FrontEnd",
    address: "F Town 2",
    email: "frontend@fpt.com",
    phone: "0123456789",
    website: "https://fpt.frontend.com",
  },
  {
    id: 2,
    name: "BackEnd",
    address: "F Town 3",
    email: "backend@fpt.com",
    phone: "0123456789",
    website: "https://fpt.Backend.com",
  },
];
export default recruitInfo;
