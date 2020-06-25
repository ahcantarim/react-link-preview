import styled from 'styled-components';

export const HeaderRoot = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    z-index: 32;
    padding: 16px;
    font-size: 14px;
    color: #fff;
    background-color: #24292e;

    position: fixed;
    top: 0;
    width: 100%;
`;

export const HeaderItem = styled.div`
    margin-right: 16px;
    align-self: stretch;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
`;

export const HeaderItemFull = styled.div`
    flex:auto;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
`;