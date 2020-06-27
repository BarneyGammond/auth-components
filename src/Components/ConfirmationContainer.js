import React from 'react'

//Components
import { Form, Input, Button, Layout } from 'antd'

const { Content } = Layout

export default () => {
    return (
        <Layout>
            <Content style={{padding: '40px'}}>
                <Form>
                    <Form.Item
                        name='confirmationCode'
                        label='Confirmation Code'
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Content>
        </Layout>
    )
}