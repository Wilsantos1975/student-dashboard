import { useState } from "react";

function OneOnOne({notes}) {
  const [comments, setComments] = useState({ comment2: "", commenter2: "" });
//   const [notes, newNotes]  = useState("")



  function handleComments(e) {
    setComments({ ...comments, [e.target.name]: e.target.value }); //name is for the input name
    console.log(comments);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }



  return (
    <div className="oneonone">
      <h3>1 on 1 notes</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commenter2">Commenter name</label>
        <input type="text" name="commenter2" onChange={handleComments} />
        <label htmlFor="comment">Comment</label>
        <input type="text" name="comment2" onChange={handleComments} />
        <button type="submit">Add note</button>
      </form>
      <p>
        {/* {notes.map((note) => {
            return <p>{note.commenter} says {note.comment}</p> 
        })} */}
        {/* {notes[0].commenter} says {notes[0].comment} */}
      </p>
      <p>{comments.commenter2} says {comments.comment2} </p>
    </div>
  );
}

export default OneOnOne;
