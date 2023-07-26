import { useState, useEffect } from "react"
import axios from "axios"

const quesarray = [
    {
        "questionId": "00000000-0000-0000-0000-000000000001",
        "questionString": "Em an com chua",
        "categoryQuestionId": "00000000-0000-0000-0000-000000000001"
    },
    {
        "questionId": "00000000-0000-0000-0000-000000000002",
        "questionString": "redux-sage Là gì?",
        "categoryQuestionId": "00000000-0000-0000-0000-000000000002"
    },
    {
        "questionId": "00000000-0000-0000-0000-000000000003",
        "questionString": "Tại sao lại dùng SPA",
        "categoryQuestionId": "00000000-0000-0000-0000-000000000001"
    },
    {
        "questionId": "4bf63ee0-a2cd-40c4-8d02-03edb10455bf",
        "questionString": "How does garbage collection work in .NET, and what are its benefits?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "9652c47c-c3c7-4be5-a95f-074b4f9224bf",
        "questionString": "日本の伝統的な舞踊は何と呼ばれますか？",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "06128e57-9389-4e5f-bb1c-14b1ecd382b1",
        "questionString": "Explain the concept of assemblies in .NET and their role in the application deployment.",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "b5798c13-ae26-4f68-ac50-15b81be17761",
        "questionString": "Discuss the differences between formal and informal language, and provide examples of each.",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "c82f5b0e-991f-46a8-a9fb-173baaf3f18e",
        "questionString": "Describe a situation where you had to work collaboratively in a team to achieve a common goal.",
        "categoryQuestionId": "a6489a50-2563-4cbf-aa5e-273656030a9b"
    },
    {
        "questionId": "dc8de54a-7255-44e8-be6d-19db55c8fc9a",
        "questionString": "Explain the differences between abstract classes and interfaces in Java.",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "31773a91-3de6-4903-bfe2-1a8aea3f6a5a",
        "questionString": "How do you differentiate between similes and metaphors in poetry?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "2001cdca-43ee-49af-b4c9-1be75fd8abd2",
        "questionString": "Explain how you maintain a positive and motivated attitude even when facing setbacks or obstacles.",
        "categoryQuestionId": "a6489a50-2563-4cbf-aa5e-273656030a9b"
    },
    {
        "questionId": "252b95da-6fb2-43cb-8dee-1c34042d2088",
        "questionString": "Explain the role of the \"shouldComponentUpdate\" method in React.How can you optimize rendering using this lifecycle method ?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "f82a34fe-bac4-452a-9732-21579f41942b",
        "questionString": "What is the purpose of the Global Assembly Cache (GAC) in .NET?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "4a4a2251-31ae-4ccd-b74a-28f0fc36977e",
        "questionString": "「すみません」は英語で何と言いますか？",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "bb8381dd-8e3e-402c-befc-2a15029cbafc",
        "questionString": "Can you identify the subject and predicate in the following sentence: 'The cat is sleeping.'?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "e532297e-604b-4b1b-a5d0-2b9ce6c10f69",
        "questionString": "What are the differences between ArrayList and LinkedList in Java? In which scenarios would you use each one?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "7a9837d4-023a-4322-9a85-30031810c61b",
        "questionString": "Explain the difference between .NET Framework, .NET Core, and .NET 5+.",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "8fa651e5-2eac-4a45-b1f6-3395825698a6",
        "questionString": "Comment dit-on 'au revoir' en espagnol ?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "4c400fc4-6e50-47c8-96cd-3a2ae1e03a21",
        "questionString": "How does React differ from other JavaScript frameworks like Angular and Vue ?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "bbcb63c9-f258-4c2f-81b5-3e01969ac8c3",
        "questionString": "What is React, and what problem does it solve in web development?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "f66161f0-8e7f-487a-b81d-3f5334551eca",
        "questionString": "What is the Common Language Runtime (CLR) in .NET, and what role does it play?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "753dffcb-4ce6-4e62-b9af-42abf9313465",
        "questionString": "How does Java enable platform independence? Why is it considered a portable language?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "d8ea48ae-6b8f-40a8-ad1e-4efafc0838cc",
        "questionString": "日本語で「こんにちは」と言うと、英語で何と言いますか？",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "473ae91e-fb3e-49d3-804f-502df4319591",
        "questionString": "How do you handle forms in React ? Describe the common practices to validate form input.",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "67de051a-4541-4a80-b995-504bb2ce3f1c",
        "questionString": "Comment dit-on 'merci' en japonais ?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "993c18af-4208-4b59-a83d-51fb3dba2b43",
        "questionString": "Quelle est la langue officielle du Canada ?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "03833435-803f-4e09-95a2-5527ec8bda2e",
        "questionString": "What are C# and VB.NET, and how do they relate to the .NET ecosystem?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "15c891b5-23ef-4af4-b385-56b3bcac9f29",
        "questionString": "How do you handle constructive criticism from colleagues or supervisors?",
        "categoryQuestionId": "a6489a50-2563-4cbf-aa5e-273656030a9b"
    },
    {
        "questionId": "76d821f4-1401-4860-bbdc-5b983a13c008",
        "questionString": "Quelle est la capitale de la France ?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "93edd264-08bb-4c56-92c7-5cc7e5378e25",
        "questionString": "How do you handle exceptions in Java? Provide examples of checked and unchecked exceptions.",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "a7483ebb-3508-4377-8349-5e32f8edfdba",
        "questionString": "Explain the concept of Virtual DOM in React and how it improves performance.",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "96e9f76b-c4e3-4482-9c80-629aff69e97f",
        "questionString": "日本の伝統的な書道の筆記用具は何と呼ばれますか？",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "a18cbee8-ad19-4bb7-bd10-64a37e7e3da4",
        "questionString": "Où se trouve la Tour Eiffel ?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "50c2402e-2ae2-47fa-ba3e-681b299f2a84",
        "questionString": "Qu'est-ce que c'est la 'Bastille' à Paris ?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "76a2139c-f9fc-4be9-899e-68855c07d051",
        "questionString": "Explain a situation where you had to adapt to a sudden change in project requirements or priorities.",
        "categoryQuestionId": "a6489a50-2563-4cbf-aa5e-273656030a9b"
    },
    {
        "questionId": "3dedc4a8-3f7f-4837-af91-6a324cabc846",
        "questionString": "What are the basic rules for forming plural nouns in English?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "605d6089-3016-444f-b288-6d44da91b103",
        "questionString": "How can you pass data from a parent component to a child component in React ?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "2009b9cd-dae4-44d5-b807-6eaa45ef32f7",
        "questionString": "What are the differences between controlled and uncontrolled components in React ?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "907fe97d-5e88-4cd1-afdf-71ece8fd1720",
        "questionString": "How does Java support multithreading, and what are the advantages of using it?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "083a8abd-c1f8-47c8-b10b-72c0b87cce54",
        "questionString": "Explain the difference between 'its' and 'it's' and provide examples of correct usage.",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "385267c5-6e05-41dc-a99e-72e5f1b179eb",
        "questionString": "How do you prioritize tasks and manage your time effectively in a fast-paced work environment?",
        "categoryQuestionId": "a6489a50-2563-4cbf-aa5e-273656030a9b"
    },
    {
        "questionId": "33564946-146f-47c2-bfd8-7a86415dbe2e",
        "questionString": "Qu'est-ce que signifie le mot 'Bonjour' en anglais ?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "2288f345-08b1-4d1f-9eed-820472026696",
        "questionString": "日本の伝統的なお茶道は何と呼ばれますか？",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "c3581fdc-fe77-4001-9cb8-866f47ce5edb",
        "questionString": "What is Java Virtual Machine (JVM) and why is it important?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "853a83ae-f069-4990-96b2-8a29c5599c7b",
        "questionString": "What are React hooks ? Provide examples of built -in hooks and explain their purposes.",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "f0cc0727-b238-41ad-a47d-9268435e79be",
        "questionString": "What is the significance of keys in React lists, and how can they impact performance ?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "2233792f-2ee0-4020-ab15-9671ba484243",
        "questionString": "How do you handle stressful situations or tight deadlines without compromising the quality of your work?",
        "categoryQuestionId": "a6489a50-2563-4cbf-aa5e-273656030a9b"
    },
    {
        "questionId": "766308fb-0eaa-4234-a580-96913ae1eb29",
        "questionString": "What are the advantages of using Entity Framework in .NET for database access?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "4ac31eb9-7f26-45ac-bc0d-99f1da4e0095",
        "questionString": "What is .NET and what is its primary purpose in software development?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "64bda86e-5359-40cf-babb-9e341389721f",
        "questionString": "What are the access modifiers 'public', 'private', 'protected', and 'default' in Java? How do they differ?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "623a7a01-8735-415c-9da6-a3ce0ceb4b8f",
        "questionString": "日本で一番高い山は何ですか？",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "d9f48e78-1c13-4974-a21f-a6ba554d85fd",
        "questionString": "Explain the difference between '==' and '.equals()' when comparing objects in Java.",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "ea1861f5-e5b7-4898-99d5-ab0b8a3c4e7c",
        "questionString": "Discuss the concept of method overloading and provide an example in Java.",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "9de7e151-a435-488e-96cd-aea3bd7c5ab1",
        "questionString": "Quel est le plat traditionnel français le plus célèbre ?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "f32be667-303c-40f0-b05c-af01e9f22a59",
        "questionString": "What are React Fragments, and why would you use them in your application ?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "5bb98e45-df8d-4a51-bb8a-b1421d36aee8",
        "questionString": "「おいしい」という英語は何ですか？",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "bad2ac16-e6a6-45c5-a46e-bdd9e7108627",
        "questionString": "Describe a challenging situation at work that tested your problem-solving skills. How did you handle it?",
        "categoryQuestionId": "a6489a50-2563-4cbf-aa5e-273656030a9b"
    },
    {
        "questionId": "dcf1b7f3-1ed2-47ff-9344-c1c506e78477",
        "questionString": "What is the definition of 'onomatopoeia'?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "22c1fef9-16fa-430c-b81c-c417fdb49e03",
        "questionString": "What is the Oxford comma, and why is it important in writing?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "917778eb-f72c-431e-bf59-c4a35020e9b4",
        "questionString": "Qui a écrit 'Les Misérables' ?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "128b9bb3-c997-4cb0-95f9-c7546577bcdf",
        "questionString": "Explain the role of 'static' keyword in Java and its impact on variables and methods.",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "91262d06-8763-41f8-b266-cab5c6aca72b",
        "questionString": "What are the five main types of literary devices, and provide an example of each?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "588e5a45-bbea-44cb-a6c6-cc8010b4888c",
        "questionString": "How do you handle errors and exceptions in .NET applications?",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    },
    {
        "questionId": "383643a7-670c-4f74-b9d5-cf787913156c",
        "questionString": "Combien de saisons y a-t-il dans une année ?",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "93c02b05-e913-4f12-a57c-dd228bccffdd",
        "questionString": "Explain the proper use of semicolons in writing.",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "42682541-37bf-4f4b-86c6-e8ae72671d52",
        "questionString": "Tell me about a time when you took the initiative to improve a process or implement an innovative idea at work.",
        "categoryQuestionId": "a6489a50-2563-4cbf-aa5e-273656030a9b"
    },
    {
        "questionId": "f038f04d-f37e-4182-bdcf-ece05e6bb2bb",
        "questionString": "日本の伝統的な和服は何と呼ばれますか？",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "845508c6-339b-4720-b94d-ed129fa4906d",
        "questionString": "「ありがとう」の意味は何ですか？",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "236afb71-9c44-4a0e-9e69-ed60cf47586b",
        "questionString": "日本の首都はどこですか？",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "732e2f2b-6b00-4421-8df7-f9227b094ef3",
        "questionString": "How do you approach giving feedback to your teammates or subordinates?",
        "categoryQuestionId": "a6489a50-2563-4cbf-aa5e-273656030a9b"
    },
    {
        "questionId": "be940fcb-7869-4e44-8ca5-fbca81c1f1d0",
        "questionString": "Identify the adverb in the sentence: 'She quickly finished her assignment.'",
        "categoryQuestionId": "17c03656-3bea-4bd3-a1ba-b409c54f383c"
    },
    {
        "questionId": "46e3ec1b-1bca-4448-a6fb-fc86dcd6f5a0",
        "questionString": "Tell me about a time when you had to resolve a conflict with a coworker or team member.",
        "categoryQuestionId": "a6489a50-2563-4cbf-aa5e-273656030a9b"
    },
    {
        "questionId": "384f7dce-7a47-4c20-b6fc-ffd62faa3f88",
        "questionString": "Discuss the differences between .NET Web Forms and ASP.NET MVC for web application development.",
        "categoryQuestionId": "b7925743-37b2-44c9-b85d-f3e982edbdd1"
    }
]





const App = () => {
    const [pass, setPass] = useState("")
    const [loading, setLoading] = useState(false)
    async function handleAdd() {
        if (pass == "add") {
            setLoading(true)
            for (let ques of quesarray) {
                // const newQues = {
                //     questionId: "3fa85f64-5717-4562-b3fc-2c963f66afa1",
                //     questionString: content,
                //     categoryQuestionId: "b7925743-37b2-44c9-b85d-f3e982edbdd1"
                // }
                // await axios.post("http://leetun2k2-001-site1.gtempurl.com/api/Question", newQues)
                if (ques.categoryQuestionId == "17c03656-3bea-4bd3-a1ba-b409c54f383c") {
                    try {
                        await axios.delete(`http://leetun2k2-001-site1.gtempurl.com/api/Question/${ques.questionId}`)
                    }
                    catch (error) {
                        console.log("error: ", error)
                    }
                }

            }
        }
        setPass("")
        setLoading(false)
    }
    return (
        <>
            <input type="text" onChange={(e) => { setPass(e.target.value) }} value={pass} />
            <br />
            <button onClick={() => { handleAdd() }}>add</button>
            {loading ? <p>loading...</p> : null}
        </>
    )
}

export default App