<template>
  <section class="section-padding-general" style="background-color: #f5f5f5">
    <div id="contact" class="container">
      <div class="row">
        <div class="col-sm-12">
          <p class="title-header">Contact Us</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <h4
            class="font-weight-bold mb-4"
            style="
              font-family: Poppins;
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: 59px;
              letter-spacing: -0.015em;
              text-align: left;
            "
          >
            PT Narindo Solusi Telekomunikasi
          </h4>
          <p
            style="
              //styleName: Large Screen/Paragraph 2 - 18 pt Poppins Medium;
              font-family: Poppins;
              font-size: 18px;
              font-style: normal;
              font-weight: 700;
              line-height: 27px;
              letter-spacing: 0em;
              text-align: left;
              margin-bottom: 60px;
            "
          >
            Graha Boulevard, Jl. Boulevard Raya, RW.1, Klp. Gading Tim., Kec.
            Klp. Gading, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14240
          </p>
          <div class="mb-4">
            <p
              @click="linktowa()"
              style="
                font-family: Poppins;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: 27px;
                letter-spacing: 0em;
                text-align: left;
                margin-bottom: 0px;
                cursor: pointer;
              "
            >
              <img src="../../assets/ic_handphone_black.png" />&nbsp;&nbsp;
              +6281806500100
            </p>
            <p
              style="
                font-family: Poppins;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: 27px;
                letter-spacing: 0em;
                text-align: left;
                margin-bottom: 0px;
              "
            >
              <img src="../../assets/ic_telpon_black.png" />&nbsp;&nbsp;
              (+62)2129450989
            </p>
            <p
              @click="linktoemail()"
              style="
                font-family: Poppins;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: 27px;
                letter-spacing: 0em;
                text-align: left;
                margin-top: 0px;
                cursor: pointer;
              "
            >
              <img
                src="../../assets/ic_email_black.png"
              />&nbsp;&nbsp;info@narindo.com
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 maps">
          <div class="col-sm-12">
            <gmap-map
              :center="marker"
              :options="{
                mapTypeControl: false,
                streetViewControl: false,
              }"
              :zoom="15"
            >
              <gmap-marker :position="marker" />
            </gmap-map>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      id: null,
      marker: { lat: -6.174447, lng: 106.89623 },
      markers: [],
      places: [],
      currentPlace: null,
    };
  },
  props: ["id_active"],
  watch: {
    id_active: function (newVal) {
      // watch it
      this.id = newVal;
      // if (this.id === "home") {
      //   window.scrollTo({ top: 0, behavior: "smooth" });
      // } else if (this.id === "about") {
      //   window.scrollTo({ top: 800, behavior: "smooth" });
      // } else if (this.id === "product") {
      //   window.scrollTo({ top: 1700, behavior: "smooth" });
      // } else if (this.id === "technology") {
      //   window.scrollTo({ top: 2100, behavior: "smooth" });
      // } else if (this.id === "client") {
      //   window.scrollTo({ top: 2700, behavior: "smooth" });
      // } else if (this.id === "contact") {
      //   window.scrollTo({ top: 3300, behavior: "smooth" });
      // }
    },
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    linktowa() {
      window.open(
        " https://api.whatsapp.com/send?phone=6281806500100",
        "_blank"
      );
    },
    linktoemail() {
      window.open("mailto:info@narindo.com");
    },
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>
<style scoped>
.maps {
  height: 300px;
  margin-bottom: 40px;
}
.title-header {
  margin-top: 30px;
  width: 1108px;
  height: 103px;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #000000;
}
.vue-map-container {
  height: 370px;
  width: 100%;
}
</style>