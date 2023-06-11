import { HeaderButton, HeaderButtonsContainer, HeaderContainer, Image, LogoContainer, LogoText } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.jpeg'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <LogoContainer>
            <Image src={logo} alt="" />
            <LogoText>Ohnion</LogoText>
          </LogoContainer>
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Kab. Bandung, Jawa Barat
          </HeaderButton>
          <NavLink to="/completeOrder">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
