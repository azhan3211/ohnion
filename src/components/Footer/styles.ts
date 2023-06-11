import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    padding: 50px 0 !important;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors['brand-ohnion']}
`

export const FooterChildContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
`

export const FooterDetailContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const FooterTitle = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: white;
`

export const FooterValue = styled.p`
    font-size: 14px;
    color: white;
    margin-bottom: 20px;
`

export const EmailContainer = styled.div`
    border-radius: 10px;
    height: 60px;
    width: 100%
    display: flex;
    margin-top: 10px;

    .input {
        width: 80%;
        height: 100%;
        background-color: none;
        border-radius: 40px 0 0 40px;
        border-top: 1px ${({ theme }) => theme.colors['brand-yellow']} solid;
        border-bottom: 1px ${({ theme }) => theme.colors['brand-yellow']} solid;
        border-left: 1px ${({ theme }) => theme.colors['brand-yellow']} solid;
        border-right: none;
        padding: 0px 16px;
    }

    .button {
        background-color: ${({ theme }) => theme.colors['brand-green']};
        border: none;
        width: 20%;
        height: 100%;
        border-radius: 0 40px 40px 0;
        color: white;
        font-weight: bold;
    }
`

export const FooterEmailLabel = styled.p`
    font-size: 18px;
    color: white;
    font-weight: 500;
`

export const FooterSocmedContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    .title {
        font-size: 18px;
        color: white;
        font-weight: 500;
    }

    .socmed-container {
        margin-top: 20px;
        display: grid;
        width: 100%;
        gap: 10px;
        grid-template-columns: repeat(2, 1fr);
    }

    .socmed-icon {
        width: 40px;
        height: 40px;
        color: white;
        position: absolute;
        left: 16px;
    }

    .socmed-text {
        font-size: 18px;
        font-weight: bold;
        color: white;
        margin-left: 10px
    }
`

interface SocmedColor {
    color?: 'brand-whatsapp' | 'brand-shopee' | 'brand-tokopedia' | 'brand-instagram'
}

export const FooterButton = styled.button<SocmedColor>`
    display: flex;
    border-radius: 40px;
    width: 100%;
    height: 60px;
    justify-content:center;
    align-items: center;
    border: none;
    position: relative;
    background-color: ${({ theme, color }) => color && theme.colors[color] || theme.colors['brand-green']};
    ${({color}) => 
        color === 'brand-instagram' &&
        "background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);"
    }
    
`