import { useContext } from "react"
import { GlobalContext } from "../../App"

export default function UserManager() {
    const { user, setUser } = useContext(GlobalContext)

    const changeUser = () => {
        if (user === "admin") {
            setUser("user")
        } else {
            setUser("admin")
        }
    }

    return <div>
        <button onClick={changeUser}>Cambiar de usuario</button>
    </div>
}