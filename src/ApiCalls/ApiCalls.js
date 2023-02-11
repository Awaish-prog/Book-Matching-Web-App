const apiUrl = "http://localhost:4000/"

export async function sendUserData(name, genres, books){
    const response = await fetch(`${apiUrl}api/saveUserData`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
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
    return resJson.status
}