import { UnTyper } from 'untyper'
import {useEffect} from "react"


export default ()=>{
    useEffect(()=>{
const text = document.querySelector('#text')
const unTyper = new UnTyper(text, { speed: 100, startDelay: 1000 })
unTyper.type('hi,just give me a second', { delay: 200 }).go()
    },[])

    return (
        <div id="text"></div>
    )
}