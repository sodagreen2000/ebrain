import { Popover, Button } from 'antd'
import React from 'react'
import { AIcon2 } from '../icons/ablilty'

class AIconWithPopover extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log("running")
    }
    render() {
        console.log("running")
        return (
            <Popover
                title={"Title"}
                content={
                    <p>Description...</p>
                }
                trigger="hover"
            >
                <Button
                    style={{
                        width: '48px',
                        height: '48px',
                        border: 'none',
                        backgroundColor: 'transparent',
                        marginTop: 1
                    }}
                    shape="circle"
                    icon={
                        <AIcon2 style={{
                            width: '48px',
                            height: '48px',
                            color: '#5C5F73'
                        }} />
                    }
                />
            </Popover>
        )
    }
}
export default AIconWithPopover