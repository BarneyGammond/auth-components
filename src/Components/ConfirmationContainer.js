import React from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'

//Components
import { Form, Input, Button, Layout } from 'antd'

const { Content } = Layout

export default ({username}) => {

    const history = useHistory

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

    async function confirmSignUp({code}) {
        try {
          await Auth.confirmSignUp(username, code);
          console.log(Auth.currentUserInfo)
          history.push('/signin')
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    return (
        <Layout>
            <Content style={{padding: '40px'}}>
                <Form
                    {...layout}
                    name='Confirmation'
                    onFinish={confirmSignUp}
                >
                    <Form.Item
                        name='code'
                        label='Confirmation Code'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type='primary' htmlType='submit'>Submit</Button>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}