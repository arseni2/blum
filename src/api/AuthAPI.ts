import {instance} from "../config/axios";
import {LoginResponseType} from "./type";

class AuthAPI {
    async login(queryId: string): Promise<LoginResponseType> {
        const res = await instance.post<LoginResponseType>(`https://user-domain.blum.codes/api/v1/auth/provider/PROVIDER_TELEGRAM_MINI_APP`, {
            query: queryId
        })
        return res.data
    }
}

export default new AuthAPI()