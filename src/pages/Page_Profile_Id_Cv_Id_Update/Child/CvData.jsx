import dayjs from "dayjs";
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
      link: "dadadadadadasd",
    },
  ],
  skills: [{ id: 0, name: "html", skillExperienc:2 }],
  language: [
    { id: 0, languageId: 0, languageName: "English" },
    { id: 1, languageId: 1, languageName: "Japanese" },
  ],
  education: "ada",
  experience: "dasdad",
};
// export const certificateList = [
//   { name: "IELTS" },
//   { name: "TOEIC" },
//   { name: "python" },
//   { name: "javaScript" },
// ];
export const steps = ["Cv Infor", "Yout Experience", "Yout Certificate"];
export default cvinfo;
