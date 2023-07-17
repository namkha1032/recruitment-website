export const certificateList = [
  { name: "IELTS" },
  { name: "TOEIC" },
  { name: "python" },
  { name: "javaScript" },
];

const recruitInfo = {
  name: "",
  description: "",
  salary: "",
  maxHiring: "",
  hired: "",
  startDate: null,
  endDate: null,
  departmentId: null,
  language: [],
  recruiterId: null,
  status: "",
  requirement: [],
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
