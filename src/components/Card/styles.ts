import styled from 'styled-components';

interface ContainerCardProps {
    background: string;
}

export const ContainerCard = styled.div<ContainerCardProps>`
    background: ${props => props.background};
    border-radius: 15px;

    display: flex;
    align-items: stretch;
    flex-direction: column;
    position: relative;
`;

export const ContainerImage = styled.div`
    height: 40px;
    display: flex;
    flex-direction: column;
    
    > img {
        align-self: flex-end;
        position: absolute;
        margin-right: 20px;
    }
`;

export const Content = styled.div`
    background: var(--Dark-blue);

    margin-top: auto;
    padding: 30px 25px;

    border-radius: 15px;
    z-index: 1;

    span h1 {
        color: var(--Text-active-color);
        font-size: 42px;
        font-weight: 300;
        margin-top: 20px;
    }

    span p {
        color: var(--Pale-Blue);
        font-size: 13px;
        margin-top: 5px;
    }

    @media (max-width: 1023px) {
        span h1 {
            font-size: 37px;
            margin-top: 0;
        }

        span p {
            font-size: 20px;
        }

        span {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
        }
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

    @media (max-width: 1023px) {
        > p {
            font-size: 26px;
        }
    }
`;