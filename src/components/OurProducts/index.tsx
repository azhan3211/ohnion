import { ProductCard } from '../ProductCard'
import { TitleText } from '../Typography'
import { OurProductList, OurProductContainer } from './styles'

import { products } from '../../mock/product'

export function OurProducts() {
  return (
    <OurProductContainer className="container">
      <TitleText size="l" color="subtitle">
        Produk Kami
      </TitleText>

      <OurProductList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </OurProductList>
    </OurProductContainer>
  )
}
