<template>
<div class="aboutpage">
  <img class="abouthead" src="../assets/graphics-header.svg" alt="header">
  <NavigationButton class="navigation" />
  <h1 class="abouttitle">Vårt kaffe</h1>
  <h2>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.
  </h2>
  <p>
    Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
  <br>
  <br>
    Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.
  </p>
  <div class="eva">
    <img src="../assets/eva-cortado.jpg" alt="">
    <h1 class="name">Eva Cortado</h1>
    <p class="title">VD &amp; Grundare</p>
  </div>
  <img class="aboutfoot" src="../assets/graphics-footer.svg" alt="">
</div>
</template>

<script>
import NavigationButton from '../components/NavigationButton.vue'

export default {
  components: {
    NavigationButton
  }
}
</script>

<style scoped>
.navigation {
  position: absolute;
  left: 0;
  top: 0;
}

.aboutpage{
  background-color: #F3E4E1;
  height: 1061px;
  position: relative;
  color: #2E2926;
}

.aboutfoot{
  position: absolute;
  bottom: 0;
}

h1.abouttitle{
  font-family: 'PT Serif', serif;
  font-weight: 700;
  margin-top: 27px;
  margin-left: 32px;
}

h2{
  margin-top: 17px;
  width: 311px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 22.4px;
  margin-left: 32px;
  margin-right: 32px;
}

p{
  width: 311px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 19.2px;
  margin-left: 32px;
  margin-right: 32px;
  font-style: normal;
}

.nav{
  margin-left: 16px;
}

.eva{
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.eva img {
  border-radius: 50%;
}

.name{
  font-family: 'PT Serif', serif;
  font-weight: 700;
  size: 22px;
  line-height: 35.2px;
  padding: 0;
  margin-top: 0px;
  margin-bottom: 0px;
}

.title{
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  line-height: 19.2px;
  margin-top: 0px;
  font-style: normal;
}

</style>