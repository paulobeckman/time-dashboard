import styled from 'styled-components';

export const ContainerCard = styled.div`
    background: var(--Limegreen);
    border-radius: 15px;

    display: flex;
    align-items: stretch;
    flex-direction: column;
    position: relative;

    > svg {
        align-self: flex-end;
        position: absolute;
        margin-right: 20px;
    }
`;

export const Content = styled.div`
    background: var(--Dark-blue);

    width: 100%;
    height: 80%;
    margin-top: auto;
    padding: 30px 25px;

    border-radius: 15px;
    z-index: 1;

    > h1 {
        color: var(--Text-active-color);
        font-size: 42px;
        font-weight: 300;
        margin-top: 20px;
    }

    > p {
        color: var(--Pale-Blue);
        font-size: 13px;
        margin-top: 5px;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > p {
        color: var(--Text-active-color);
        font-weight: 500;
        font-size: 16px;
    }
`;