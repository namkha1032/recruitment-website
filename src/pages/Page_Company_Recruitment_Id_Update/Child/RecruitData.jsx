import dayjs from 'dayjs';

const recruitInfo = {
  name: "sadasd",
  description: "dasdad",
  salary: "10000",
  maxHiring: "100",
  hired: "",
  startDate: dayjs('2022-04-17'),
  endDate: dayjs('2023-06-11'),
  departmentId: 2,
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
export default recruitInfo;
