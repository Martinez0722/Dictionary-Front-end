import "./History.css"
import { useState, useEffect } from "react"
import {Table, TableContainer, TableBody, TableCell, TableRow} from "@mui/material"
import { useSearch } from "../../hooks/useSearch";

const url ='http://localhost:3030/list';


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
        <TableContainer className="TableContainer">
            <Table>
                {words.map(word=>(
                <TableRow key={word.id}>
                    <TableCell>{word.word}</TableCell>
                </TableRow>
                ))}
            </Table>
        </TableContainer>
    </div>
  )
}

export default History