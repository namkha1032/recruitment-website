import { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";

const shiftArray = [
    {
        "shiftTimeStart": 8,
        "shiftTimeEnd": 9
    },
    {
        "shiftTimeStart": 9,
        "shiftTimeEnd": 10
    },
    {
        "shiftTimeStart": 10,
        "shiftTimeEnd": 11
    },
    {
        "shiftTimeStart": 11,
        "shiftTimeEnd": 12
    },
    {
        "shiftTimeStart": 13,
        "shiftTimeEnd": 14
    },
    {
        "shiftTimeStart": 14,
        "shiftTimeEnd": 15
    },
    {
        "shiftTimeStart": 15,
        "shiftTimeEnd": 16
    },
    {
        "shiftTimeStart": 16,
        "shiftTimeEnd": 17
    }
];

const languageArray = [
    {
        languageName: "English"
    },
    {
        languageName: "French"
    },
    {
        languageName: "Japanese"
    },
    {
        languageName: "Russian"
    },
    {
        languageName: "Chinese"
    },
    {
        languageName: "Korean"
    },
    {
        languageName: "Spanish"
    },
    {
        languageName: "Portuguese"
    },
    {
        languageName: "German"
    },
    {
        languageName: "Italian"
    }
]

const skillArray = [
    {
        skillName: "React",
        description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
        isDeleted: false
    },
    {
        skillName: "C#",
        description: "C# is a general-purpose high-level programming language supporting multiple paradigms.",
        isDeleted: false
    },
    {
        skillName: "Java",
        description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        isDeleted: false
    },
    {
        skillName: "Kotlin",
        description: "Kotlin is a cross-platform, statically typed, general-purpose high-level programming language with type inference.",
        isDeleted: false
    },
    {
        skillName: "Nextjs",
        description: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.",
        isDeleted: false
    },
    {
        skillName: "C++",
        description: "C++ is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.",
        isDeleted: false
    },
    {
        skillName: "Python",
        description: "Python is a high-level, general-purpose programming language.",
        isDeleted: false
    },
    {
        skillName: "OpenCV",
        description: "OpenCV is a library of programming functions mainly for real-time computer vision.",
        isDeleted: false
    },
    {
        skillName: "Git",
        description: "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
        isDeleted: false
    },
    {
        skillName: "TensorFlow",
        description: "TensorFlow is a free and open-source software library for machine learning and artificial intelligence.",
        isDeleted: false
    }
]

const softSkillQuestions = [
    "Tell me about a time when you had to work collaboratively with a difficult team member. How did you handle the situation?",
    "Describe a situation where you had to deal with a challenging customer or client. How did you ensure their satisfaction?",
    "How do you prioritize your tasks and manage your time effectively in a fast-paced work environment?",
    "Can you share an example of a time when you demonstrated effective communication skills to resolve a misunderstanding?",
    "Describe a situation where you had to take the initiative to solve a problem without being asked. What was the outcome?",
    "Tell me about a time when you had to adapt to a major change at work. How did you cope with the transition?",
    "How do you handle constructive criticism and feedback from colleagues or supervisors?",
    "Describe a situation where you had to lead a team or take charge of a project. How did you motivate and guide others?",
    "Tell me about a time when you had to work under pressure to meet a tight deadline. How did you manage the stress?",
    "How do you approach conflicts or disagreements with coworkers? Can you share an example of a positive resolution?"
];

const languageQuestions = [
    "$eng$What is the capital of Australia?",
    "$eng$In which year did World War II end?",
    "$eng$What are the five main tastes that the human tongue can detect?",
    "$eng$Who wrote the play 'Romeo and Juliet'?",
    "$eng$What is the tallest mountain in the world?",
    "$eng$What is the chemical symbol for water?",
    "$eng$Which planet is known as the 'Red Planet'?",
    "$eng$What is the process by which green plants make their own food using sunlight?",
    "$eng$What is the full form of DNA?",
    "$eng$Who is the author of the 'Harry Potter' book series?",

    "$fre$Quelle est la capitale de la France ?",
    "$fre$En quelle année la Première Guerre mondiale a-t-elle pris fin ?",
    "$fre$Quels sont les quatre points cardinaux ?",
    "$fre$Qui a écrit le roman 'Les Misérables' ?",
    "$fre$Quel est le plus long fleuve de France ?",
    "$fre$Comment dit-on 'merci' en français ?",
    "$fre$Quel est le principal monument de Paris, connu dans le monde entier ?",
    "$fre$Quel est le symbole chimique du fer ?",
    "$fre$Comment appelle-t-on un médecin spécialiste du cœur ?",
    "$fre$Qui est l'auteur de 'L'Étranger' ?",

    "$chi$中国的首都是哪里？",
    "$chi$世界上最长的河流是哪条？",
    "$chi$你知道什么是中文的拼音吗？",
    "$chi$《西游记》是谁写的？",
    "$chi$你知道世界上最高的山峰是哪座吗？",
    "$chi$什么颜色在中国文化中象征幸福和好运？",
    "$chi$你知道中国的国花是什么吗？",
    "$chi$以下哪个城市是中国的四大古都之一？北京、上海、南京、广州",
    "$chi$你知道中国的传统节日春节是农历的哪一天吗？",
    "$chi$以下哪个名胜古迹是中国的世界文化遗产？长城、埃菲尔铁塔、大本钟、帕特农神庙",

    "$spa$¿Cuál es la capital de España?",
    "$spa$¿En qué año llegó Cristóbal Colón a América?",
    "$spa$¿Cuántos continentes hay en el mundo?",
    "$spa$¿Quién pintó 'La Mona Lisa'?",
    "$spa$¿Cuál es el río más largo del mundo?",
    "$spa$¿Qué significa 'hola' en inglés?",
    "$spa$¿Cuál es el edificio más alto del mundo?",
    "$spa$¿Cuál es el símbolo químico del oro?",
    "$spa$¿Qué científico formuló la teoría de la relatividad?",
    "$spa$¿Quién escribió 'Cien años de soledad'?",

    "$rus$Какая столица России?",
    "$rus$В каком году произошла Октябрьская революция?",
    "$rus$Сколько планет в солнечной системе?",
    "$rus$Кто написал роман 'Война и мир'?",
    "$rus$Какая самая длинная река в России?",
    "$rus$Как на русском языке переводится слово 'спасибо'?",
    "$rus$Какое здание является самым высоким в мире?",
    "$rus$Какой химический элемент обозначается символом 'Fe'?",
    "$rus$Как зовут ученого, сформулировавшего теорию относительности?",
    "$rus$Кто является автором 'Преступления и наказания'?",

    "$jap$日本の首都は何ですか？",
    "$jap$日本で一番高い山は何ですか？",
    "$jap$あなたは日本語を話せますか？",
    "$jap$『こころ』を書いた作家は誰ですか？",
    "$jap$日本の国花は何ですか？",
    "$jap$日本で一番有名なお祭りは何ですか？",
    "$jap$漢字で『愛』は何と書きますか？",
    "$jap$日本の通貨は何ですか？",
    "$jap$日本の国旗は何色ですか？",
    "$jap$日本で最も有名な寺院は何ですか？",

    "$kor$한국의 수도는 어디인가요?",
    "$kor$대한민국의 국화는 무엇인가요?",
    "$kor$한국에서 가장 높은 산은 무엇인가요?",
    "$kor$한국어로 '안녕하세요'는 어떻게 말하나요?",
    "$kor$한국의 전통 음식으로 유명한 요리는 무엇인가요?",
    "$kor$한국의 돈 단위는 무엇인가요?",
    "$kor$한국의 대표적인 불교 사찰은 무엇인가요?",
    "$kor$한국에서 가장 유명한 축제는 무엇인가요?",
    "$kor$한국의 전통 의상인 한복은 언제 차려입나요?",
    "$kor$대한민국의 건국일은 언제인가요?",

    "$ger$Was ist die Hauptstadt von Deutschland?",
    "$ger$Wann fand die Wiedervereinigung Deutschlands statt?",
    "$ger$Wie viele Bundesländer hat Deutschland?",
    "$ger$Wer schrieb das Buch 'Faust'?",
    "$ger$Welcher Fluss fließt durch Berlin?",
    "$ger$Wie sagt man 'Danke' auf Deutsch?",
    "$ger$Welches Gebäude ist das Wahrzeichen von Köln?",
    "$ger$Wie lautet die chemische Formel für Wasser?",
    "$ger$Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?",
    "$ger$Welche Farben hat die deutsche Flagge?",

    "$ita$Qual è la capitale dell'Italia?",
    "$ita$Chi è l'autore del famoso dipinto 'La Gioconda'?",
    "$ita$Quante regioni ci sono in Italia?",
    "$ita$Come si dice 'buongiorno' in inglese?",
    "$ita$Qual è il piatto di pasta italiano più famoso al mondo?",
    "$ita$Qual è il simbolo chimico del ferro?",
    "$ita$Chi è l'autore del romanzo 'Divina Commedia'?",
    "$ita$Come si dice 'grazie' in francese?",
    "$ita$Quale città italiana è famosa per la torre pendente?",
    "$ita$Chi è stato il primo presidente della Repubblica Italiana?",

    "$por$Qual é a capital de Portugal?",
    "$por$Em que país se fala português?",
    "$por$Quantos estados existem no Brasil?",
    "$por$Quem é o autor de 'Os Lusíadas'?",
    "$por$Qual é o maior rio de Portugal?",
    "$por$O que significa 'obrigado' em inglês?",
    "$por$Qual é a moeda oficial do Brasil?",
    "$por$Quem é o pintor renascentista conhecido por 'O Último Jantar'?",
    "$por$Qual é o dia da independência do Brasil?",
    "$por$Quantos países fazem parte dos países lusófonos?"
];

const roomList = [
    { roomName: "New York City" },
    { roomName: "Tokyo" },
    { roomName: "London" },
    { roomName: "Paris" },
    { roomName: "Sydney" },
    { roomName: "Los Angeles" },
    { roomName: "Berlin" },
    { roomName: "Mumbai" },
    { roomName: "Seoul" },
    { roomName: "Rio de Janeiro" },
    { roomName: "Istanbul" },
    { roomName: "Cairo" },
    { roomName: "Moscow" },
    { roomName: "Toronto" },
    { roomName: "Bangkok" },
    { roomName: "Cape Town" },
    { roomName: "Dubai" },
    { roomName: "Rome" },
    { roomName: "Singapore" },
    { roomName: "Beijing" },
];

const technologyQuestion = [
    {
        skillName: "React",
        questions: [
            "What is React and what problem does it solve?",
            "What are components in React?",
            "How do you create a functional component in React?",
            "What is the difference between state and props in React?",
            "What is JSX in React?",
            "Explain the component lifecycle methods in React.",
            "How do you handle forms in React?",
            "What is React Router and how do you use it?",
            "What is the virtual DOM in React?",
            "How do you manage state in React?"
        ]
    },
    {
        skillName: "C#",
        questions: [
            "What is C# and what is it commonly used for?",
            "How do you declare and initialize variables in C#?",
            "Explain the difference between value types and reference types in C#.",
            "What are access modifiers in C#? Provide examples.",
            "How do you create a class in C#?",
            "What is inheritance in C# and how is it implemented?",
            "Explain the 'using' statement in C#.",
            "How do you handle exceptions in C#?",
            "What is a delegate in C# and what is its purpose?",
            "How do you implement asynchronous programming in C#?"
        ]
    },
    {
        skillName: "Java",
        questions: [
            "What is Java and why is it popular for programming?",
            "How do you declare and initialize variables in Java?",
            "What are the differences between Java primitive data types and reference types?",
            "Explain the Java class inheritance and how it works.",
            "How do you create an object in Java?",
            "What is the significance of the 'static' keyword in Java?",
            "Explain the 'try-catch' block for exception handling in Java.",
            "How do you work with arrays in Java?",
            "What are Java interfaces and how do you use them?",
            "How does multithreading work in Java?"
        ]
    },
    {
        skillName: "Kotlin",
        questions: [
            "What is Kotlin and why was it created?",
            "How do you declare and initialize variables in Kotlin?",
            "Explain the difference between val and var in Kotlin.",
            "What are nullable types in Kotlin?",
            "How do you create a function in Kotlin?",
            "What is the 'when' expression used for in Kotlin?",
            "Explain the concept of extension functions in Kotlin.",
            "How do you handle null safety in Kotlin?",
            "What are data classes in Kotlin and how do you create one?",
            "How does Kotlin support coroutines for asynchronous programming?"
        ]
    },
    {
        skillName: "Nextjs",
        questions: [
            "What is Next.js and what problem does it solve?",
            "How do you create a new Next.js project?",
            "Explain the file-based routing system in Next.js.",
            "What are server-side rendering (SSR) and static site generation (SSG) in Next.js?",
            "How do you use dynamic routing in Next.js?",
            "What is API Routes in Next.js and how do you create one?",
            "Explain the concept of 'getInitialProps' in Next.js.",
            "How do you work with CSS and styles in Next.js?",
            "What are the major differences between Next.js and Create React App?",
            "How do you deploy a Next.js application?"
        ]
    },
    {
        skillName: "Python",
        questions: [
            "What is Python and why is it popular for programming?",
            "How do you declare and initialize variables in Python?",
            "Explain the difference between Python lists and tuples.",
            "How do you create a function in Python?",
            "What are Python dictionaries and how do you use them?",
            "Explain the 'if-else' statement for conditional execution in Python.",
            "How do you handle exceptions in Python?",
            "What are Python modules and how do you import them?",
            "Explain the concept of list comprehension in Python.",
            "How does Python support object-oriented programming?"
        ]
    },
    {
        skillName: "C++",
        questions: [
            "What is C++ and why is it widely used?",
            "How do you declare and initialize variables in C++?",
            "Explain the difference between C++ arrays and vectors.",
            "How do you create a function in C++?",
            "What are C++ classes and how do you use them?",
            "Explain the 'if-else' statement for conditional execution in C++.",
            "How do you handle exceptions in C++?",
            "What is the difference between pass by value and pass by reference in C++?",
            "Explain the concept of operator overloading in C++.",
            "How does C++ support object-oriented programming?"
        ]
    },
    {
        skillName: "OpenCV",
        questions: [
            "What is computer vision and how is it used in various applications?",
            "How does OpenCV help in image processing and computer vision tasks?",
            "What are some common computer vision techniques used in OpenCV?",
            "Explain the concept of image filtering and its applications in OpenCV.",
            "How do you perform edge detection using OpenCV?",
            "What are keypoints and descriptors in OpenCV?",
            "Explain the process of feature matching in computer vision.",
            "How do you perform object detection using OpenCV?",
            "What is optical flow and how is it used in motion analysis?",
            "Explain the concept of camera calibration and its importance in computer vision."
        ]
    },
    {
        skillName: "Git",
        questions: [
            "What is Git and why is it widely used in version control?",
            "How do you initialize a Git repository in a project?",
            "What are the differences between 'git pull' and 'git fetch'?",
            "How do you create and switch between branches in Git?",
            "Explain the 'git add' and 'git commit' commands in Git.",
            "What is the purpose of 'git merge' and 'git rebase'?",
            "How do you resolve merge conflicts in Git?",
            "What is 'git stash' used for?",
            "How do you work with remote repositories in Git?",
            "Explain the concept of 'gitignore' and how it is used in Git."
        ]
    },
    {
        skillName: "TensorFlow",
        questions: [
            "What is TensorFlow and why is it popular for machine learning?",
            "How do you install TensorFlow in a Python environment?",
            "Explain the concept of tensors in TensorFlow.",
            "What are the main components of TensorFlow's high-level API, Keras?",
            "How do you create and train a neural network model using TensorFlow and Keras?",
            "What are TensorFlow placeholders and how are they used?",
            "Explain the purpose of TensorFlow's optimizers and loss functions.",
            "How do you save and load models in TensorFlow?",
            "What are TensorFlow graphs and sessions?",
            "How does TensorFlow support GPU acceleration for faster computation?"
        ]
    }
]

const xoa = []

console.log("length: ", xoa.length)
const App = () => {
    const [pass, setPass] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    let token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4xIiwianRpIjoiMzg5MjI4YmUtZGM4OC00ODdhLThhNDAtOTljNWJhODIzOTJhIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2OTExMjczNjUsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjcwMjkifQ.O8UA3FLyMfnYDhJEAGardEtsA4wDo0vfNe7aR1bynlk`
    const config = {
        headers: { Authorization: token },
    }
    let password = "namkha"
    async function handleDeleteQuestionSkill() {
        if (pass == password) {
            setLoading(true)
            const responseQS = await axios.get(`https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill`, config)
            for (let QS of responseQS.data) {
                await axios.delete(`https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill/${QS.questionSkillsId}`, config)
            }
        }
        setPass("")
        setLoading(false)
    }
    async function handleDeleteQuestion() {
        if (pass == password) {
            setLoading(true)
            const responseQuestionList = await axios.get(`https://leetun2k2-001-site1.gtempurl.com/api/Question`, config)
            for (let ques of responseQuestionList.data) {
                if (ques.questionId != "00000000-0000-0000-0000-000000000001"
                    && ques.questionId != "00000000-0000-0000-0000-000000000002"
                    && ques.questionId != "00000000-0000-0000-0000-000000000003") {
                    await axios.delete(`https://leetun2k2-001-site1.gtempurl.com/api/Question/${ques.questionId}`, config)
                }
            }
        }
        setPass("")
        setLoading(false)
    }
    async function handleAddSoftSkill() {
        if (pass == password) {
            setLoading(true)
            for (let content of softSkillQuestions) {
                const newQues = {
                    questionString: content,
                    categoryQuestionId: "5f9c75be-4407-4079-a7a8-616e5dad476d"
                }
                await axios.post(`https://leetun2k2-001-site1.gtempurl.com/api/Question`, newQues, config)
            }
        }
        setPass("")
        setLoading(false)
    }
    async function handleAddLanguage() {
        if (pass == password) {
            setLoading(true)
            for (let content of languageQuestions) {
                const newQues = {
                    questionString: content,
                    categoryQuestionId: "0b8d0a30-f34d-49ba-a0b4-10ce23d0bd7e"
                }
                await axios.post(`https://leetun2k2-001-site1.gtempurl.com/api/Question`, newQues, config)
            }
        }
        setPass("")
        setLoading(false)
    }
    async function handleAddTechnology() {
        if (pass == password) {
            setLoading(true)
            for (let skill of technologyQuestion) {
                console.log("skill name: ", skill.skillName)
                const responseSkillList = await axios.get(`https://leetun2k2-001-site1.gtempurl.com/api/Skill`, config)
                const responseSkill = responseSkillList.data.find((item) => {
                    return item.skillName == skill.skillName
                })
                for (let ques of skill.questions) {
                    const newQuesObj = {
                        questionString: ques,
                        categoryQuestionId: "b8d71eed-a7a5-474c-89c6-890c535b4c34"
                    }
                    await axios.post(`https://leetun2k2-001-site1.gtempurl.com/api/Question`, newQuesObj, config)
                    const responseQuestionList = await axios.get(`https://leetun2k2-001-site1.gtempurl.com/api/Question`, config)
                    const quesToFind = responseQuestionList.data.find((item) => {
                        return item.questionString == ques
                    })
                    const newQSObj = {
                        questionId: quesToFind.questionId,
                        skillId: responseSkill.skillId
                    }
                    await axios.post(`https://leetun2k2-001-site1.gtempurl.com/api/QuestionSkill`, newQSObj, config)
                }
            }
        }
        setPass("")
        setLoading(false)
    }
    async function handleAddShift() {
        if (pass == password) {
            setLoading(true)
            for (let shift of shiftArray) {
                await axios.post("https://leetun2k2-001-site1.gtempurl.com/api/Shift", shift, config)
            }
        }
        setLoading(false)
        setPass("")
    }
    async function updateQues() {
        if (pass == password) {
            setLoading(true)
            dispatch({ type: "saga/getStuff" })
        }
        setLoading(false)
        setPass("")
    }
    async function addLanguage() {
        if (pass == password) {
            setLoading(true)
            for (let lang of languageArray) {
                await axios.post(`https://leetun2k2-001-site1.gtempurl.com/api/Language`, lang, config)
            }
        }
        setLoading(false)
        setPass("")
    }
    async function addSkill() {
        if (pass == password) {
            setLoading(true)
            for (let skill of skillArray) {
                await axios.post(`https://leetun2k2-001-site1.gtempurl.com/api/Skill`, skill, config)
            }
        }
        setLoading(false)
        setPass("")
    }
    async function addRoom() {
        if (pass == password) {
            setLoading(true)
            for (let room of roomList) {
                await axios.post(`https://leetun2k2-001-site1.gtempurl.com/api/Room`, room, config)
            }
        }
        setLoading(false)
        setPass("")
    }
    return (
        <>
            <input type="text" placeholder="password" onChange={(e) => { setPass(e.target.value) }} value={pass} />
            {loading ? <span>loading...</span> : null}
            <br />
            <button onClick={() => { handleDeleteQuestionSkill() }}>delete question skill</button>
            <br />
            <button onClick={() => { handleDeleteQuestion() }}>delete question</button>
            <br />
            <button onClick={() => { handleAddSoftSkill() }}>add soft skill Ques</button>
            <br />
            <button onClick={() => { handleAddLanguage() }}>add language Ques</button>
            <br />
            <button onClick={() => { handleAddTechnology() }}>add technology Ques</button>
            <br />
            <button onClick={() => { handleAddShift() }}>add shift</button>
            <br />
            <button onClick={() => { updateQues() }}>update ques</button>
            <br />
            <button onClick={() => { addLanguage() }}>add language</button>
            <br />
            <button onClick={() => { addSkill() }}>add skill</button>
            <br />
            <button onClick={() => { addRoom() }}>add room</button>
        </>
    )
}

export default App