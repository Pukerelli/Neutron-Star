import {IError, IUser } from "../common/interfaces/common-interfaces/index.interface";
import {getUsers} from "../fake-server/Server";
export const fetchUser = (id: number) => {
    const users = getUsers()
    const user = users.find((user) => user.id == id)
    if(!user){
        return 'error'
    }
    return user
}