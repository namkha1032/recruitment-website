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
  intro: "sdasdasd",
  certificates: [
    {
      id: 0,
      name: "IELTS",
      organize: "British Council",
      startDate: dayjs("2022-04-17"),
      endDate:null,
      detail:"dasdasdasd",
      link:"dadadadada"
    },
  ],
  skills: [{id:0,name:"html"}],
  education: "ada",
  experience: "dasdad",
};
export default cvinfo;