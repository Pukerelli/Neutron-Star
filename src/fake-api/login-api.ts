import {getUsers} from "../fake-server/Server";




export const authMe = (username: string, password: string) => {
    const users = getUsers()
    const authUser = users.find((user) => user.username == username && user.password == password)
    if(!authUser)
        return undefined
    return authUser
}