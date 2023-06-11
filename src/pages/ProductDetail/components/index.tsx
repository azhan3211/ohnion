import { useState } from "react"
import { SectionBaseStyle } from "../../CompleteOrder/styles"
import { ImageSliderContainer, ImageSliderItem } from "./styles"

export function ImageSlider() {

    const [selected, setSelected] = useState(0)

    const images = [
        "src/assets/products/original_toples.png",
        "src/assets/products/sweet_spicy_toples.png",
        "src/assets/products/original_stik_2.png",
        "src/assets/products/sweet_spicy_2.png",
        "src/assets/products/original_toples.png"
    ]

    return (
        <ImageSliderContainer>
            {
                images.map((image, index) => (
                    <ImageSliderItem 
                        src={image} 
                        isSelected={index === selected}
                        onClick={() => setSelected(index)}
                    />
                ))
            }
        </ImageSliderContainer>
    )
}