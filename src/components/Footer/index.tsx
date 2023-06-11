import { 
    EmailContainer, 
    FooterButton, 
    FooterChildContainer, 
    FooterContainer, 
    FooterDetailContainer, 
    FooterEmailLabel, 
    FooterSocmedContainer, 
    FooterTitle, 
    FooterValue 
} from "./styles";
import { WhatsappLogo, InstagramLogo } from "phosphor-react"
import { padding } from "polished";

export function Footer() {

    function openSite(url: string) {
        window.open(url)
    }

    return (
        <FooterContainer>
            <FooterChildContainer className="container">
                <FooterDetailContainer>
                    <FooterTitle>Alamat</FooterTitle>
                    <FooterValue>JL. Cicarita Tower No. 48, Kab. Bandung, Jawa Barat, Indonesia</FooterValue>

                    <FooterTitle>Tentang Kami</FooterTitle>
                    <FooterValue>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</FooterValue>
                </FooterDetailContainer>

                <FooterDetailContainer>
                    <FooterEmailLabel>Dapatkan info terbaru dari produk kami</FooterEmailLabel>
                    <EmailContainer>
                        <input className="input" placeholder="Ketik email mu disini..."/>
                        <button className="button">SUBMIT</button>
                    </EmailContainer>
                    <FooterSocmedContainer>
                        <p className="title">Kontak Kami</p>
                        <div className="socmed-container">
                            <FooterButton 
                                color="brand-whatsapp" 
                                onClick={() => openSite("https://wa.me/message/WNIQWKWVKKV5F1")}
                            >
                                <WhatsappLogo className="socmed-icon"/>
                                <p className="socmed-text">Whatsapp</p>
                            </FooterButton>
                            <FooterButton 
                                color="brand-instagram" 
                                onClick={() => openSite("https://www.instagram.com/ohnion_chips/")}
                            >
                                <InstagramLogo className="socmed-icon"/>
                                <p className="socmed-text">Instagram</p>
                            </FooterButton>
                            <FooterButton 
                                color="brand-shopee" 
                                onClick={() => openSite("https://shopee.co.id/ohnion_official_store?categoryId=100629&entryPoint=ShopByPDP&itemId=16597405637&upstream=search")}
                            >
                                <img 
                                    className="socmed-icon" 
                                    style={{padding: '3px'}} 
                                    src="src/assets/logo-shopee.png"
                                />
                                <p className="socmed-text">Shopee</p>
                            </FooterButton>
                            <FooterButton 
                                color="brand-tokopedia" 
                                onClick={() => openSite("https://www.tokopedia.com/ohnion-official")}
                            >
                                <img 
                                    className="socmed-icon" 
                                    style={{filter: "invert(100%)", padding: "3px"}} 
                                    src="src/assets/logo-tokopedia.png"
                                />
                                <p className="socmed-text">Tokopedia</p>
                            </FooterButton>
                        </div>
                    </FooterSocmedContainer>
                </FooterDetailContainer>
            </FooterChildContainer>

        </FooterContainer>
    )
}