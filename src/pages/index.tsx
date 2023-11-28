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
          <Banner.Content>
            <Banner.Title title="Leonardo Da Vinci" />
            <Banner.TextContent
              text="De máquinas voadoras à Última Ceia, de estudos de anatomia à Mona Lisa... Conheça a vida de Leonardo da Vinci, o homem que inventou o futuro."
            />
          </Banner.Content>
        </Banner.Container>
        <Banner.VideoContainer videoImage="banner" link={'https://www.youtube.com/embed/3iGPclknn_8?si=D7E4WR9-McRYZLZB'} />
      </Banner.Root>

      <Carousel.Root/>

      <Footer.Root>
        <Footer.Logo></Footer.Logo>
      </Footer.Root>
    </main>
  );
}
