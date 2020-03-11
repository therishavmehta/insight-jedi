import React from 'react';

function Dashboard(props) {
    const {email, logout} = props;
    return(
            <div style={{color: 'black', height: '100%', width: '100%'}}>
                <div style={{cursor: 'pointer', color: 'blue'}} onClick={() => logout()}>{`Logout ${email}`}</div>
                In Dashboard
            </div>
    )
}
export default Dashboard;
