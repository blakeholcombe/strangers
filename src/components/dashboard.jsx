import { useState, useEffect } from 'react'

const APIURL = "https://strangers-things.herokuapp.com/api/2309-FTB-ET-WEB-FT/";


function Dashboard ({ token }) {
    const [ message, setMessage ] = useState('')
    const [ user, setUser ] = useState({})


    useEffect(() => {
        async function fetchUser() {
            let response = await fetch(`${APIURL}/api/auth/me`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  },
            })

            let result = await response.json()

            console.log(result)
            setMessage(result.message)
            setUser(result.user)
        }


        if (token.length !== 0) {
            fetchUser() 
        }
    }, [token])

    console.log('Token:', token)

    return <div>
        <h1>{message}</h1>
        <h3>User</h3>
        <ul>
            <li>Username: {user.username}</li>
            <li>Password: {user.password}</li>
        </ul>
    </div>
}

export default Dashboard