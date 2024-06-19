import { Carousel } from '.';
import { biografias, guerra, historia } from '@/@helpers/videos';

export default function Root() {
  return (
    <section className=" -mt-44">
      <Carousel.Category data={guerra} tittle='Guerra'></Carousel.Category>
      <Carousel.Category data={historia} tittle='História'></Carousel.Category>
      <Carousel.Category data={biografias} tittle='Biografias'></Carousel.Category>
    </section>
  )
}
