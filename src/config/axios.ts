import axios from "axios";

export const instance = axios.create({
    // withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*",
        "Sec-Fetch-Site": "same-site",
        "Accept-Language": "vi-VN,vi;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Sec-Fetch-Mode": "cors",
        // Host: "tgapp-api.matchain.io",
        Origin: "https://telegram.blum.codes",
        "User-Agent": "Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0",
        Referer: "https://telegram.blum.codes/",
        Connection: "keep-alive",
        "Sec-Fetch-Dest": "empty",
        Cookie: "__cf_bm:jjEiNFDYiBbWrjW5LhVQ4QtwLmAV9qxlpU_1i0nD_IM-1734427768-1.0.1.1-58h3Vx7DffMkOyVOIk36yO2HqguGc1rIO7oUsWKy2.rDfnZEJ4wk5Y.S7mr_0YEiMKS0F9oh.I9nKbmasj59lA; "
    },
    maxBodyLength: Infinity,
})
//https://user-domain.blum.codes/api/v1/auth/provider/PROVIDER_TELEGRAM_MINI_APP POST
//{query: "..."}

//https://game-domain.blum.codes/api/v1/daily-reward?offset=-180 GET

//https://game-domain.blum.codes/api/v1/farming/claim POST
//{}

//https://game-domain.blum.codes/api/v1/farming/start POST
//{}

//https://earn-domain.blum.codes/api/v1/tasks GET
//{}

//https://earn-domain.blum.codes/api/v1/tasks/01948b93-3680-4ac1-a498-204a5675f168/start POST
//{}


//https://earn-domain.blum.codes/api/v1/tasks/15b51a11-a19c-420f-b0ac-c4e9be2f5e07/claim POST
//{}