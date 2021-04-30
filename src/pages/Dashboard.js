import React, {useContext, useEffect, useState} from 'react'
import { firebaseAuth } from "../provider/AuthProvider"

export default function Dashboard( {content} ) {
    // Firebase
    const userToken = useContext(firebaseAuth)
    return (
        <div >
        {/* <MenuContext.Consumer> */}
            {/* {(contex) => sidebar} */}
            <h1>Welcome</h1>
        {/* </MenuContext.Consumer> */}
        </div>
    )
}
