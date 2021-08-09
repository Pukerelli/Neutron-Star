import axios, {AxiosInstance} from "axios";
import { IResponse } from "../common/interfaces/index.interface";

class API {
    protected serviceUrl: string
    protected instance: () => AxiosInstance

    constructor(serviceUrl: string) {
        this.serviceUrl = serviceUrl
        this.instance = () => axios.create({
            baseURL: 'http://localhost:5000/api',
            headers: {authorization: `Bearer ${localStorage.getItem('token')}`}
        })
    }
}

///// TYPE DECLARATION
// D - RESPONSE, R - REQUEST

export class Requests extends API {
    public get<D, R = undefined>(url: string, req?: R) {
        return this.instance().get<IResponse<D>>(`/${this.serviceUrl}/get/${url}` + (req ? '/' + req : ''))
            .then(response => response.data)
    }

    public post<D, R>(url: string, req: R) {
        return this.instance().post<IResponse<D>>(`/${this.serviceUrl}/post/${url}`, {...req})
            .then(response => response.data)
    }

    public put<D, R>(url: string, req: R) {
        return this.instance().put<IResponse<D>>(`/${this.serviceUrl}/put/${url}`, {...req})
            .then(response => response.data)
    }

    public delete<D, R = undefined>(url: string, req?: R) {
        return this.instance().delete<IResponse<D>>(`/${this.serviceUrl}/delete/${url}` + (req ? '/' + req : ''))
            .then(response => response.data)
    }
}

