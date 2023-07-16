import dayjs from "dayjs";

export const certificateList = [
  { name: "IELTS" },
  { name: "TOEIC" },
  { name: "python" },
  { name: "javaScript" },
];
export const skillList = [
  { name: "html" },
  { name: "css" },
  { name: "python" },
  { name: "javaScript" },
];

const cvinfo = {
  title: "New Cv",
  intro: "sdasdasd",
  certificates: [
    {
      id: 0,
      name: "IELTS",
      organize: "British Council",
      startDate: dayjs("2022-04-17"),
      endDate: null,
      detail: "dasdasdasd",
      link: "dadadadada",
    },
  ],
  skills: [{ id: 0, name: "html" }],
  language: [
    { id: 0, languageId: 0, languageName: "English" },
    { id: 1, languageId: 1, languageName: "Japanese" },
  ],
  education: "ada",
  experience: "dasdad",
};
export const language = [
  { id: 0, name: "English" },
  { id: 1, name: "Japanese" },
  { id: 2, name: "Chinese" },
  { id: 3, name: "VietNamese" },
];
export default cvinfo;
