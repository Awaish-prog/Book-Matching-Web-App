const apiUrl = "http://44.205.20.25:4001/"

export async function sendUserData(name, genres, books, token){
    const response = await fetch(`${apiUrl}api/saveUserData`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
        body: JSON.stringify({
            name, genres, books 
        })
    })
    const resJson = await response.json()
    return resJson.status
}

export async function createUser(name){
    const response = await fetch(`${apiUrl}api/createUser`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name
        })
    })
    const resJson = await response.json()
    return [resJson.status, resJson.token]
}

export async function getBookMatchingData(name, token){
    const response = await fetch(`${apiUrl}api/getBookMatchingData`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'token': token
        },
        body: JSON.stringify({
            name
        })
    })
    const resJson = await response.json()
    return resJson
}

