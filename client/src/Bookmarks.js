import React from "react";
import styled from "styled-components";


const Bookmarks = () => {
    return (
        <BookmarksWrapper>
            <p>Bookmarks</p>
        </BookmarksWrapper>
    )
};

const BookmarksWrapper = styled.div`
    display:flex;
    justify-content:center;
    color:black;
`;

export default Bookmarks;