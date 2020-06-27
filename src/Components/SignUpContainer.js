import React from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'

//Components
import { Form, Input, Button, Layout } from 'antd'

const { Content } = Layout; 

export default ({setUsername}) => {

    let history = useHistory();

    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 6,
            span: 16,
        },
    };

    async function signUp({username,password,email}) {
        try {
            const user = await Auth.signUp({
                username,
                password,
                attributes: {
                    email, // optional
                     // other custom attributes 
                }
            });
            console.log(user);
            setUsername(user.user.username)
            history.push('/confirmation')
        } catch (error) {
            console.log('error signing up:', error);
        }
    }


    const onFinish = values => {
        signUp(values)
    }

    return (
        <Layout>
            <Content style={{padding: '40px'}}>
                <Form
                    {...layout}
                    name='SignUp'
                    onFinish={onFinish}
                >
                    <Form.Item
                        label='Username'
                        name='username'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Email Address'
                        name='email'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Password'
                        name='password'>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type='primary' htmlType='submit'>Submit</Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}