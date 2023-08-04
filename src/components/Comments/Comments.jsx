import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../App";
import "./Comments.scss"
export default function Comments({ data, onComment }) {
    const { handleSubmit, register } = useForm()
    const { user } = useContext(GlobalContext)
    
    const doSubmit = ({comment}) => {
        onComment(comment, data.index)
    }

    return <div className="c-comments">
        {data.comments.length === 0 && <p>Si comentarios</p>}
        <ul>
            {data.comments.map((comment, index) => comment.user === user ? <li key={index}>{comment.text}</li>: null)}
        </ul>

        <form onSubmit={handleSubmit(doSubmit)}>
            <input type="text" {...register("comment")}/>
            <button>Añadir comentario</button>
        </form>
    </div>
}