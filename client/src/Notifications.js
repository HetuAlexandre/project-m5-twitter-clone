import React from "react";
import styled from "styled-components";


const Notifications = () => {
    return (
        <NotificationWrapper>
            <p>Notifications</p>
        </NotificationWrapper>
    )
};

const NotificationWrapper = styled.div`
    display:flex;
    justify-content:center;
    color:black;
`;

export default Notifications;