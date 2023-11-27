import axios from "axios";

export async function getExchangeRate () {
    const authkey = "9NIQpTa23qxxlYsKcOsfB2IF2zNngokx";
    const searchdate = getToday();
    const data = "AP01";
    const baseURL = `/api/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=${searchdate}&data=${data}`;
    let result;
    await axios.get(baseURL).then(res => {
        result = res.data
    })
    return result;
}

function getToday(){
    let date = new Date();
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);

    return year + month + day;
}