import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 215px 1fr;
    gap: 25px;

    .Container__Section.first{
        background: var(--Dark-blue);
        border-radius: 15px;
    }

    .Container__Section-header{
        background: var(--Background-Blue);
        
        border-radius: 15px;
        padding: 35px 30px 45px;
    }

    .Container__Section-header-img{
        height: 70px;
        width: 70px;
        border-radius: 50%;
        border: 3px solid var(--Text-active-color);

        margin-bottom: 35px;
    }

    .Container__Section-header-p{
        font-weight: 300;
        font-size: 13px;
        color: var(--Pale-Blue);
        
        margin-bottom: 5px;
    }

    .Container__Section-header-h1{
        font-weight: 300;
        font-size: 32px;
        color: var(--Text-active-color);
    }

    .Container__Section-options{
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        padding: 30px;
        
        > a{
            font-weight: 400;
            font-size: 16px;
            color: var(--Text-active-color);
        }
    }

    .Container__Section.second {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
`;