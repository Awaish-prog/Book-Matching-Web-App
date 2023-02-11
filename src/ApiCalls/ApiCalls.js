const apiUrl = "http://localhost:4000/"

export async function sendUserData(genres, books){
    const response = await fetch(`${apiUrl}api/saveUserData`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            genres, books 
        })
    })
}