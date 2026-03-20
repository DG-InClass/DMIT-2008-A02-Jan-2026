import { BASE_URL } from './base.js'

const getAgencies = () => {
    const url = `${BASE_URL}/agencies?featured=true&key=super_secret`;
    console.log(url);
    return fetch(url)
        .then((response)=> {
            return response.json()
        }).then((data)=>{
            return data
        })
}

const getAgency = (id) => {
    return fetch(`${BASE_URL}/agencies/${id}/`)
        .then((response)=> {
            return response.json()
        }).then((data)=>{
            return data
        })
}

export { getAgencies, getAgency }