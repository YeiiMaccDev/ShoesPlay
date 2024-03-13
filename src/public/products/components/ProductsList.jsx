
export const ProductsList = () => {
  return (
    <section class="ofertas section-100vh" id="ofertas">
      <div class="ofertas_container container">
        <h2>Ofertas</h2>
        <div class="ofertas_lista">

          <div class="producto">
            <div class="producto_image">
              <img src="/assets/images/producto-1.jpg" alt="" />
            </div>
            <div class="producto_content">
              <h3 class="producto_title">Zapato tacón / Flores silvestres</h3>
              <hr />
              <div class="producto_description">
                <p><strong>Mujer</strong></p>
                <div class="producto_precio">
                  <p class="producto_precio_antes">$150.000</p>
                  <p class="producto_precio_ahora"><strong>$110.000</strong></p>
                </div>
              </div>
            </div>
          </div>



        </div>
        <a href="#ofertas" class="ver_mas">Ver todas las ofertas ...</a>
      </div>
    </section>
  )
}
