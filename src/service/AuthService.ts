import AuthAPI from "../api/AuthAPI";
import {ServerResponse} from "node:http";
import {instance} from "../config/axios";
import {logger} from "../config/winston";

class AuthService {
    async login(queryId: string, res: ServerResponse): Promise<string> {
        try {
            const data = await AuthAPI.login(queryId)
            instance.defaults.headers.Authorization = "Bearer " + data.token.access;
            logger.log({level: "info", message: `Login successfully ${data.token.user.username}`});

            return data.token.access
        } catch (e) {
            res.end(e.response.data)
        }

        return ""
    }
}

export default new AuthService();