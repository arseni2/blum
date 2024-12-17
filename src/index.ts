import {logger} from "./config/winston";
import AuthService from "./service/AuthService";
import { createServer } from 'node:http';
import {instance} from "./config/axios";

logger.log({
    level: 'info',
    message: 'What time is the testing at?'
});

let data = {
    query: "query_id=",
}



//

const server = createServer(async (req, res) => {
    try {
        const resposne = await AuthService.login(data.query, res)
    } catch (err) {
        res.end(err.response.data)
    }

});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});






