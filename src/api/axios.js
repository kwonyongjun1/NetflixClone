import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params: {
        api_key: "092322728ab919d149a78a198c035fd9",
        language: "ko-KR"
    }
});

export default instance