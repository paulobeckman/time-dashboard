import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 215px 1fr;

    .Container__Section-header-img{
        height: 70px;
        width: 70px;
        border-radius: 50%;
        border: 3px solid var(--Text-active-color);
    }

    .Container__Section-header-p{
        font-weight: 300;
        font-size: 13px;
        color: var(--Pale-Blue);
    }

    .Container__Section-header-h1{
        font-weight: 300;
        font-size: 32px;
        color: var(--Text-active-color);
    }
`;