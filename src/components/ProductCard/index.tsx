import { QuantityInput } from '../QuantityInput'
import { RegularText, TitleText } from '../Typography'
import {
  ProductCardContainer,
  Tags,
  Name,
  Description,
  CardFooter,
  ProductImage,
  ButtonDetail,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export interface Product {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface ProductProps {
  product: Product
}

export function ProductCard({ product }: ProductProps) {
  const { addProductToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const productToAdd = {
      ...product,
      quantity,
    }

    addProductToCart(productToAdd)

    setQuantity(1)
  }

  const formattedPrice = product.price.toLocaleString('id-ID', {
    minimumFractionDigits: 0,
  })

  return (
    <ProductCardContainer>
      <ProductImage src={`src/assets/products/${product.photo}`} alt="" />

      <Tags>
        {product.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Name>{product.name}</Name>
      <Description>{product.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">Rp</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <NavLink style={{width: '100%'}} to="/productDetail">
          <ButtonDetail onClick={handleAddToCart}>
            Detail
          </ButtonDetail>
        </NavLink>
      </CardFooter>
    </ProductCardContainer>
  )
}
