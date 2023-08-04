import { useContext, useState } from "react"
import Comments from "../Comments/Comments";
import { GlobalContext } from "../../App";
import "./List.scss";

export default function List({ data }) {
    const [list, setList] = useState(data);
    const [editingComments, setEditingComments] = useState();
    const { user } = useContext(GlobalContext)

    const remove = (index) => {
        const copyList = [...list];
        copyList.splice(index, 1)
        setList(copyList)
    }

    const addOredit = (index) => {
        const copyList = [...list];
        const name = prompt("Escribe un nombre")
        const qty = prompt("Escribe una cantidad")

        if (name && name !== "" && qty && qty !== "") {
            copyList[index] = { name, qty, comments: [] };
            setList(copyList)
        } else {
            alert("Mete argo pisha")
        }
    }

    const showComments = (index) => {
        setEditingComments({ comments: list[index].comments, index })
    }

    const addComment = (comment, index) => {
        const copyList = [...list];
        copyList[index].comments.push({ text: comment, user })
        setList(copyList)
    }

    return <div className="c-list">
        <div className="c-list__products">
            {list.map((item, index) => <div key={item.name} className="c-list__product">
                <h2>{item.name}</h2>
                <h2>cantidad: {item.qty}</h2>
                {user === "admin" && <button onClick={() => addOredit(index)}>Editar</button>}
                {user === "admin" && <button onClick={() => remove(index)}>X</button>}
                <button onClick={() => showComments(index)}>Mostar comentarios ({item.comments.filter(comment => comment.user === user).length})</button>
            </div>)}
        </div>
        {user === "admin" && <button onClick={() => addOredit(list.length)}>Añadir nuevo</button>}

        {editingComments && <div>
            <Comments data={editingComments} onComment={addComment} />
            <button onClick={() => setEditingComments()}>Ocultar comentarios</button>
        </div>}
    </div>
}