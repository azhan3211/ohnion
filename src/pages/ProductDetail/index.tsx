import { useState } from "react";
import { OurProducts } from "../../components/OurProducts";
import { ImageSlider } from "./components";
import { DetailContainer, Photo, PhotoContainer, PhotoSectionContainer, ProductButtonContainer, ProductDescription, ProductDetailContainer, ProductDetailInfoContainer, ProductFlavour, ProductName, ProductPrice, ProductProgress, ProductProgressContainer, ProductStock } from "./styles";

export function ProductDetail() {

   const [progress, setProgress] = useState(10)
   const totalStok = 20

   return (
      <ProductDetailContainer>
         <ProductDetailInfoContainer className="container">
            <PhotoSectionContainer>
               <PhotoContainer>
                  <Photo src="src/assets/products/original_toples.png"/>
               </PhotoContainer>
               <ImageSlider/>
            </PhotoSectionContainer>

            <DetailContainer>
               <ProductName>Product Name</ProductName>
               <ProductFlavour>Flavour</ProductFlavour>
               <ProductPrice>Rp25.0000</ProductPrice>
               <ProductStock>{ 'stok tinggal ' + progress + ' dari ' + totalStok }</ProductStock>
               <ProductProgressContainer>
                  <ProductProgress progress={(progress / totalStok) * 100}></ProductProgress>
               </ProductProgressContainer>
               <ProductDescription>
                  <p className="title">Deskripsi</p>
                  <p className="description">
                     Kue Bawang Ohnion.
                     <br/>
                     <br/>
                     Detail produk:
                     <br/>
                     •	Berat bersih: 225gr.
                     <br/>
                     •	Kemasan: Toples plastik.
                     <br/>
                     •	Halal dan tanpa bahan pengawet.
                     <br/>
                     <br/>
                     Keunggulan Kue Bawang Ohnion:
                     <br/>
                     1. Kue bawang diproduksi Ketika pemesanan masuk dan dikirim dalam keadaan fresh.
                     <br/>
                     2. Kue bawang dikemas menggunakan menggunakan toples yang disegel aluminium foil dan segel plastic untuk menjaga kualitas produk pada saat pengiriman.
                     <br/>
                     3.	Kue bawang dibuat dengan bahan-bahan alami tanpa bahan pengawet.
                     <br/>
                     4.	Rasa yang enak, gurih dan renyah dengan cita rasa dan aroma bawang yang khas membuat ketagihan.
                     <br/>
                     <br/>
                     Jika anda puas dengan produk dan pelayanan kami, boleh berikan review dibawah ini👇😊
                  </p>
               </ProductDescription>
               <ProductButtonContainer buttonColor1="brand-shopee" buttonColor2="brand-tokopedia">
                  <button className="button1">Shopee</button>
                  <button className="button2">Tokopedia</button>
               </ProductButtonContainer>
            </DetailContainer>
         </ProductDetailInfoContainer>
         <OurProducts/>
      </ProductDetailContainer>
   )

}