import React from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'

//Components
import { Form, Input, Button, Layout } from 'antd'

const { Content } = Layout

export default () => {

    const history = useHistory()

    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 14,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 6,
            span: 16,
        },
    };

    async function SignIn({username,password}) {
        try {
            const user = await Auth.signIn(username, password);
            console.log(user)
            history.push('/')
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    const onFinish = (values) => {
        SignIn(values)
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

