import { useState } from "react"

export const TodoInput = ({ getData }) => {

    const [text, setText] = useState("")

    return <div>
        <input onChange={(e) => {

            // console.log(e.target.value)
            setText(e.target.value)

        }} type="text" placeholder="Write Somethings" />

        <button onClick={() => {
            getData(text)
        }}>
            + </button>
        
    </div>

}
