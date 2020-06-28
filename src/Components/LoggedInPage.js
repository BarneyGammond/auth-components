import React, {useState, useEffect} from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'

//components
import { Typography, Layout, Button } from 'antd'

export default () => {

    const { Content } = Layout

    const { Title } = Typography

    const history = useHistory()

    const [userData,setUserData] = useState('Not Signed In')

    const getUserData = async () => {
        const user = await Auth.currentUserInfo();
        if (user) {
            setUserData(user.username)
        }
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
        <Layout >
            <Content style={{padding: '40px'}}>
                <Title level={2}>{userData}</Title>
                <Button 
                    onClick={logout}
                >
                    Logout
                </Button>
            </Content>
        </Layout>
    )

}