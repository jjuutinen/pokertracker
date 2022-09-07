import styled from '@emotion/styled';

export const HeaderElement = styled.div`
    display: flex;
    height: 3.75rem;
    //border: 3px red solid;
    background-color: #393342;
    box-shadow: 0 1px 2px rgba(255, 255, 255, 0.05);
`;

export const HeaderLogo = styled.div`
    flex: 0 0 7%;
    padding: 8px;
    height: initial;
    text-align: center;

    &:hover {
        background: linear-gradient(#393342, #292332);
    }

    img {
        padding: 8px;
        width: 30px;
    }
`;

export const NavigationElement = styled.div`
    display: flex;
    flex: 1 1 auto;  

    a {
        width: 100%;
    }
`;

export const NavigationItem = styled.div`
    flex: 0 0 33%;
    height: 100%;
    border: 1px solid #292332;
    color: #ddd;
    line-height: 3.75rem;
    font-weight: bold;
    text-align: center;

    &:hover {
        background: linear-gradient(#393342, #292332);
        color: white;
    }
`;

export const LoggedElement = styled.div`
    flex: 15% 0 0;
    border-left: 1px solid #444;
    color: #ccc;
    height: 100%;
    text-align: center;
    line-height: 3.75rem;
`;