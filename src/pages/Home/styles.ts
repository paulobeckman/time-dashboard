import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 215px 722px;
    gap: 25px;

    @media (max-width: 1023px) {
        display: block;
    }
`;

export const ProfileSection = styled.section`
    background: var(--Dark-blue);
    border-radius: 15px;
`;

export const Header = styled.div`
    background: var(--Background-Blue);
    
    border-radius: 15px;
    padding: 35px 30px 45px;

    img {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        border: 3px solid var(--Text-active-color);

        margin-bottom: 35px;
    }

    p {
        font-weight: 300;
        font-size: 13px;
        color: var(--Pale-Blue);
        
        margin-bottom: 5px;
    }

    h1 {
        font-weight: 300;
        font-size: 32px;
        color: var(--Text-active-color);
    }

    @media (max-width: 1023px) {
        display: flex;
        gap: 35px;
        justify-content: center;

        padding: 35px 30px;

        img {
            height: 100px;
            width: 100px;
            margin-bottom: 0;
        }

        p {
            font-size: 18px;
        }

        h1 {
            font-size: 45px;
        }
    }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    padding: 30px;

    @media (max-width: 1023px) {
        flex-direction: row;
        justify-content: space-around;

        a {
            font-size: 22px;
        }
    }
`;

export const CardsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;

    width: 100%;

    @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        margin-top: 25px;
    }
`;