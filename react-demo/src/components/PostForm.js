import { useEffect, useState } from "react"

export const PostForm = () => {
const[userId,setuserId] = useState('')
const[title,settitle] = useState('')
const[body,setbody] = useState('')

const submitHandler = (event) => {
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
    userId: userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

useEffect(() => {
  

})
return (
   <form onSubmit={submitHandler}>
    <div>
        <input
        type="text"
        placeholder="user ID"
        value={userId}
        onChange={(e) => setuserId(e.target.value)}
        />
    </div>

    <div>
        <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        />
    </div>

    <div>
        <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setbody(e.target.value)}
        />
    </div>

    <button type="submit">Submit</button>
   </form>

)
}