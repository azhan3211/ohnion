import styled from 'styled-components'
import { TitleText, RegularText } from '../Typography'

export const ProductCardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0;
  text-align: center;
  margin-top: 3rem;
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 3rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors['brand-yellow-light']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    font-size: ${({ theme }) => theme.textSizes['components-tag']};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`

export const Name = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
  weight: '700',
})`
  margin-bottom: 0.5rem;
`

export const Description = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  height: 100%;
  margin-bottom: 20px;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      line-height: 0.75rem;
    }
  }
`

export const ProductImage = styled.img`
  aspect-ratio: 1/1.5;
  height: 100px;
  margin-top: -4rem;
  object-fit: contain;
  position: absolute;

  :hover {
    height: 200px;
    transition: height 0.5s;
  }
`

export const ButtonDetail = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['brand-purple']};
  border-radius: 8px;
  height: 30px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
  border: none;
`