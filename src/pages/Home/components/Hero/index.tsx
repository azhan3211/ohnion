import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  BenefitsContainer,
  HeroSubTitle,
} from './styles'

import heroImage from '../../../../assets/hero-image.png'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { Package, ThumbsUp, CookingPot, FirstAid } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Hero() {
  const { colors } = useTheme()

  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">
              Ohnion
            </HeroTitle>
            <HeroSubTitle size="l" as="h3">
              Apa aja sih keunggulan kue bawang Ohnion?
            </HeroSubTitle>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconColor={colors['brand-yellow-dark']}
              icon={<CookingPot weight="fill" />}
              text="Kue bawang diproduksi ketika pemesanan masuk dan dikirim dalam keadaan fresh."
            />
            <InfoWithIcon
              iconColor={colors['base-text']}
              icon={<Package weight="fill" />}
              text="kue bawang dikemas menggunakan toples yang disegel aluminium foil dan segel plastik untuk menjaga kualitas produk pada saat pengiriman."
            />
            <InfoWithIcon
              iconColor={colors['brand-yellow']}
              icon={<FirstAid weight="fill" />}
              text="Kue bawang dibuat dengan bahan-bahan alami tanpa bahan pengawet."
            />
            <InfoWithIcon
              iconColor={colors['brand-purple']}
              icon={<ThumbsUp weight="fill" />}
              text="Rasa yang enak, gurih, dan renyah dengan cita rasa dan aroma bawang yang khas membuat ketagihan."
            />
          </BenefitsContainer>
        </div>

        <div className="imageContainer">
          <img src={heroImage} alt="" />
        </div>
      </HeroContent>
    </HeroContainer>
  )
}
