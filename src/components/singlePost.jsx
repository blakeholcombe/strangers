import { useEffect, useState } from "react"

const APIURL='https://strangers-things.herokuapp.com/api/2309-FTB-ET-WEB-FT/'

function SinglePost() {
    
    useEffect(() => {
        async function showPost() {
            try {

                let post= ''
                const response = await fetch(`${APIURL}`)
                const data = await response.json()


            }catch(err){
                console.log('error rendering post')
            }
        } 
    }) }
export default SinglePost