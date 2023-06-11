import styled from "styled-components";

export const ImageSliderContainer = styled.div`
    overflow-x: scroll;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    margin-bottom: 10px;
`

export const ImageSliderLeft = styled.div`
    
`

export const ImageSliderRight = styled.div`
    
`

interface IImageSliderItemContainer {
    isSelected: boolean
}

export const ImageSliderItem = styled.img<IImageSliderItemContainer>`
    object-fit: contain;
    padding: 10px;
    aspect-ratio: 1/1;
    height: 150px;
    border-radius: 10px;
    border: ${({ theme, isSelected }) => 
        isSelected && "4px solid " + theme.colors['brand-green'] || "none"
    };
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
`