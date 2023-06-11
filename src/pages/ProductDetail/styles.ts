import 'styled-components'
import styled from 'styled-components'

export const ProductDetailContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 2rem;
    margin-bottom: 150px;
    flex-direction: column;
`

export const ProductDetailInfoContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 2rem;
    margin-bottom: 4rem;
`

export const PhotoSectionContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const PhotoContainer = styled.div`
    width: 100%;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1.5px 5px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    display: flex;
    padding: 16px;
    justify-content: center;
    height: fit-content;
`

export const Photo = styled.img`
    height: 400px;
`

export const DetailContainer = styled.div`
    width: 50%;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
`

export const ProductName = styled.p`
    font-size: 28px;
    font-weight: bold;
`

export const ProductFlavour = styled.p`
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
    border-radius: 8px;
    width: fit-content;
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    padding: 5px 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: 10px
`

export const ProductPrice = styled.p`
    color: ${({ theme }) => theme.colors['brand-green']};
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
`

export const ProductStock = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors['brand-gray']};
    margin-top: 20px;
`

export const ProductProgressContainer = styled.div`
    width: 100%;
    height: 5px;
    background-color: ${({ theme }) => theme.colors['brand-gray-light']};
    border-radius: 10px;
    margin-top: 5px;
`

interface IProductProgress {
    progress: number
}

export const ProductProgress = styled.div<IProductProgress>`
    width: ${({ progress }) => progress}%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors['brand-green']};
    border-radius: 10px;
    transition: width 1s;
`

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;

    .title {
        font-size: 18px;
        font-weight: bold;
    }

    .description {
        font-size: 16px;
        margin-top: 5px;
        white-space: pre-wrap;
    }
`

interface IProductButtonContainer {
    buttonColor1: 'brand-shopee'
    buttonColor2: 'brand-tokopedia'
}

export const ProductButtonContainer = styled.div<IProductButtonContainer>`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;

    .button1 {
        background-color: ${({ theme, buttonColor1 }) => theme.colors[buttonColor1] };
        color: white;
        border-radius: 8px;
        height: 40px;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .button2 {
        background-color: ${({ theme, buttonColor2 }) => theme.colors[buttonColor2] };
        color: white;
        border-radius: 8px;
        height: 40px;
        border:none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        margin-top: 10px;
    }
`