import { Banner } from "../components/Banner"
import { PublicLayout } from "../layout/PublicLayout"

export const HomePage = () => {
  return (
    <>
      <Banner
        image={{
          urlImage: "/images/banner1.jpg",
          imageOnLeft: false
        }}
        textInfo={{
          title: "La mejor linea de zapatos nacionales en Colombia",
          primaryTitle: true,
          descriptions: ["Descubre estilo y comodidad en cada paso con nuestra exclusiva colección de calzado nacional. Encuentra la fusión perfecta de elegancia y calidad para resaltar tu estilo unico.",],
        }}
      />


      <Banner image={{
        urlImage: "/images/banner2.jpg",
        imageOnLeft: true
      }}
        textInfo={{
          title: "Elegancia en Cada Paso",
          primaryTitle: false,
          descriptions: ["Descubre nuestros exclusivos diseños, la calidad inigualable y la increible comodidad.",],
        }}
      />

    </>
  )
}
