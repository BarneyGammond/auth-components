import React, {useState, useEffect} from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'

//components
import { Button } from 'antd'

export default () => {

    const history = useHistory()

    const [userData,setUserData] = useState('Not Signed In')

    const getUserData = async () => {
        const user = await Auth.currentUserInfo();
        setUserData(user.username)
    }

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const logout = () => {
        signOut();
        history.push('/signin')
    }

    useEffect(() => {
        getUserData()
        // eslint-disable-next-line
    },[])

    return (
        <>
            <p>{userData}</p>
            <Button 
                onClick={logout}
            >
                Logout
            </Button>
        </>
    )

}