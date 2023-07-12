import { Button } from '@/components/Button';
import { Header } from '../components/header';
import { Footer } from '@/components/footer';
import { Banner } from '@/components/home/Banner';
import { Carousel } from '@/components/home/Carousel';

import videoImage from '../assets/videoImage.svg';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header.Root>
        <Header.Logo />
        <Button.Home text="Novo vídeo" />
      </Header.Root>
      <Banner.Root>
        <Banner.Container>
          <Banner.Category title="Front End" />
          <Banner.Content>
            <Banner.Title title="SEO com React" />
            <Banner.TextContent
              text="Esse desafio é uma forma de aprendizado. É um mecanismo onde você pode se
                engajar na resolução de um problema para poder aplicar todo o conhecimento
                adquirido na Formação React."
            />
          </Banner.Content>
        </Banner.Container>
        <Banner.VideoContainer videoImage="banner" img={videoImage} />
      </Banner.Root>

      <Carousel.Root>
        <Carousel.FrontEnd></Carousel.FrontEnd>
        <Carousel.DataScience></Carousel.DataScience>
        <Carousel.Mobile></Carousel.Mobile>
      </Carousel.Root>

      <Footer.Root>
        <Footer.Logo></Footer.Logo>
      </Footer.Root>
    </main>
  );
}
