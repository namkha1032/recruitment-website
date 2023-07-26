import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
const PageTest = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const newPost = {
            title: "post ban hang online",
            author: "namkha",
            comments: [
                {
                    body: "lol cmt 1"
                },
                {
                    body: "lol cmt 2"
                },
                {
                    body: "lol cmt 3"
                }
            ]
        }
        dispatch({ type: "saga/getStuff", payload: newPost })
    }, [])
    return (
        <>
        </>
    )
}

export default PageTest