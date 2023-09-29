import { useState } from "react"
import { data } from './data'

function Card(){
    const[index,setIndex] = useState(0)
    const[ques,setQuestion] = useState(data[index].question)

    function handleOnclick(){
        if (ques === data[index].question){
            setQuestion(data[index].answer)
        }
        else{
            setQuestion(data[index].question)
        }
        
    }
    function handleNextClick(){
        if (index + 1 < data.length) {
            setIndex(index+1)
            setQuestion(data[index + 1].question);
          } else {
            // Handle the case when there are no more questions
            // You can reset the index or show a message
            setQuestion("No more questions");
          }
    }

    function handlePreviousClick(){
        if (index - 1 > -1) {
            setIndex(index-1)
            setQuestion(data[index - 1].question);
          } else {
            // Handle the case when there are no more questions
            // You can reset the index or show a message
            setQuestion("No previous questions");
          }
    }

    function checkColor(ques){
        if (ques === data[index].question){
            return "black"
        }
        else{
            return "green"
        }
    }

    // const[ques,setQuestion] = useState(curr_arr.question)
    return(
        <div>
            <div className="main_content" onClick={handleOnclick}>
                <h4>Showing {index + 1} of {data.length}</h4>
                <h3 style={{ color: `${checkColor(ques)}` }}>{ques}</h3>
            </div>
            <button className = "previous_button" onClick = {handlePreviousClick}>
                ←
            </button>

            <button className = "next_button" onClick = {handleNextClick}>
                →
            </button>
        </div>
    )
    
}

export default Card ; 