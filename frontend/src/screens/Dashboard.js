import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Dashboard = ({ history }) => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo, loading, error } = userLogin

    if (userInfo) {
        return (
            <div>
                <Row>
                    <h4 className='align-self-left'>Welcome {userInfo.name}</h4>
                </Row>

            </div>
        )
    }

    return (<>
        Not Authorized
    </>)
}

export default Dashboard
