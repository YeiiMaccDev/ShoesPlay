import { Link } from "react-router-dom"

import './Banner.css'

export const Banner = ({
    image: { urlImage = '/images/logo.png', imageOnLeft = true } = {},
    textInfo: { title = 'Title', primaryTitle = true, descriptions = ['description'] } = {}
}) => {


    const BannerImage = ({ urlImage }) => (
        <div className="banner-home__image">
            <img src={urlImage} width="500" height="500" alt="Banner" />
        </div>
    );

    const BannerTitle = () => (
        (primaryTitle)
            ? <h1 className="banner-title" > {title} </h1>
            : <h2 className="banner-title" > {title} </h2>
    );

    return (
        <section className="banner-home section-100vh">
            <div className="banner-home__container widthContainer">

                {imageOnLeft ? <BannerImage urlImage={urlImage} /> : null}

                <div className="banner-content">

                    <BannerTitle />

                    {
                        descriptions.map((description, index) => (
                            <p className="banner-description" key={index}>{description}</p>
                        ))
                    }

                    <Link to="/products">
                        <button className="btn banner__btn-primary-color banner__btn">Ver Productos</button>
                    </Link>
                </div>

                {!imageOnLeft ? <BannerImage urlImage={urlImage} /> : null}

            </div>
        </section>
    )
}
