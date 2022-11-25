import useSWR from 'swr';
import axios from 'axios';
//const baseURL = "http://localhost:3000/";
const baseURL = "https://api.dobuyme.com/en/";
//const baseURL = "http://localhost/dobuyme/api-new/en/";

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjRmMWcyM2ExMmFhIn0.eyJpc3MiOiJodHRwczpcL1wvYXBpLmRvYnV5bWUuY29tIiwiYXVkIjoiaHR0cHM6XC9cL2FwaS5kb2J1eW1lLmNvbSIsImp0aSI6IjRmMWcyM2ExMmFhIiwiaWF0IjoxNjY4MTYzNTY3LCJ1aWQiOjk3MH0.d0Ool7wk - w8DO3Nud9re9618C6yxvev6G4ssEIwKJb0";


export default function fetcher(endpoint) {

    const response = (url, token) =>
        axios
            .get(url, { headers: { Authorization: "Bearer " + token } })
            .then((res) => res.data);

    const { data, error } = useSWR(
        [`${baseURL}${endpoint}`, token],
        response
    );

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}