import "./History.css"
import { useState, useEffect } from "react"

const url ='http://localhost:3030/history';

const History = () => {
    const [words, setWord] = useState([])

    useEffect(() => {
        async function fetchData(){
            const res = await fetch(url)

        const data = await res.json()

        setWord(data)
        }
        fetchData();
    },[]);
    console.log(words)
  return (
    <div className="History">
        <table>
            <ul>{words.map((word)=>(
                <li key={word.id}>{word.word}</li>
                ))}
            </ul>
        </table>
    </div>
  )
}

export default History