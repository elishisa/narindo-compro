<template>
  <div class="div">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <img
          alt="logo-app"
          @click="homepage('homepage')"
          src="../../assets/ic_logo_.png"
        />
        <div class="nav-item dropdown coba">
          <img
            style="left: -20px; top: 10px; width: 25px; height: 25px"
            src="../../assets/ic_flag_england@2x.png"
          />
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="dropdown08"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >EN</a
          >
          <div class="dropdown-menu" aria-labelledby="dropdown08">
            <a class="dropdown-item">
              <router-link class="link-text" to="/ind">
                <img class="flag" src="../../assets/ic_flag_indonesia.png" />
                <div style="margin-left: 20px">Indonesia</div>
                <img class="check" src="../../assets/ic_check.png" />
              </router-link>
            </a>
            <a class="dropdown-item">
              <router-link class="link-text" to="/">
                <img class="flag-1" src="../../assets/ic_flag_england@2x.png" />
                <div style="margin-left: 20px">English</div>
              </router-link>
            </a>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style="margin-left: auto"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                @click="homeBtn('home')"
                :class="{ active2: homeActive }"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click="aboutBtn('about')"
                :class="{ active2: aboutActive }"
                >About</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click="productBtn('product')"
                :class="{ active2: productActive }"
                >Product</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click="technologyBtn('technology')"
                :class="{ active2: technologyActive }"
                >Technology</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                @click="clientBtn('client')"
                :class="{ active2: clientActive }"
                >Client</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active2: contactActive }"
                @click="contactBtn('contact')"
                >Contact</a
              >
            </li>
            <li class="nav-item dropdown translate">
              <img
                class="flag-1-indo"
                style="left: -20px; top: 10px; width: 25px; height: 25px"
                src="../../assets/ic_flag_england@2x.png"
              />
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown08"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >EN</a
              >
              <div class="dropdown-menu" aria-labelledby="dropdown08">
                <a class="dropdown-item">
                  <router-link class="link-text" to="/ind">
                    <img
                      class="flag"
                      src="../../assets/ic_flag_indonesia.png"
                    />
                    <div style="margin-left: 20px">Indonesia</div>
                  </router-link>
                </a>
                <a class="dropdown-item">
                  <router-link class="link-text" to="/">
                    <img
                      class="flag-1"
                      src="../../assets/ic_flag_england@2x.png"
                    />
                    <div style="margin-left: 20px">English</div>
                    <img class="check" src="../../assets/ic_check.png" />
                  </router-link>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {
      homeActive: false,
      aboutActive: false,
      productActive: false,
      technologyActive: false,
      clientActive: false,
      contactActive: false,
      scrollPosition: null,
    };
  },
  mounted() {
    this.homeActive = true;
    this.aboutActive = false;
    this.productActive = false;
    this.technologyActive = false;
    this.clientActive = false;
    this.contactActive = false;
  },
  methods: {
    homepage(e) {
      this.homeActive = true;
      this.aboutActive = false;
      this.productActive = false;
      this.technologyActive = false;
      this.clientActive = false;
      this.contactActive = false;
      this.scrollPosition = e;
      this.$emit("child-checkbox", this.scrollPosition);
    },
    homeBtn(e) {
      this.homeActive = true;
      this.aboutActive = false;
      this.productActive = false;
      this.technologyActive = false;
      this.clientActive = false;
      this.contactActive = false;
      this.scrollPosition = e;
      this.$emit("child-checkbox", this.scrollPosition);
    },
    aboutBtn(e) {
      this.homeActive = false;
      this.aboutActive = true;
      this.productActive = false;
      this.technologyActive = false;
      this.clientActive = false;
      this.contactActive = false;
      this.scrollPosition = e;
      this.$emit("child-checkbox", this.scrollPosition);
    },
    productBtn(e) {
      this.homeActive = false;
      this.aboutActive = false;
      this.productActive = true;
      this.technologyActive = false;
      this.clientActive = false;
      this.contactActive = false;
      this.scrollPosition = e;
      this.$emit("child-checkbox", this.scrollPosition);
    },
    technologyBtn(e) {
      this.homeActive = false;
      this.aboutActive = false;
      this.productActive = false;
      this.technologyActive = true;
      this.clientActive = false;
      this.contactActive = false;
      this.scrollPosition = e;
      this.$emit("child-checkbox", this.scrollPosition);
    },
    clientBtn(e) {
      this.homeActive = false;
      this.aboutActive = false;
      this.productActive = false;
      this.technologyActive = false;
      this.clientActive = true;
      this.contactActive = false;
      this.scrollPosition = e;
      this.$emit("child-checkbox", this.scrollPosition);
    },
    contactBtn(e) {
      this.homeActive = false;
      this.aboutActive = false;
      this.productActive = false;
      this.technologyActive = false;
      this.clientActive = false;
      this.contactActive = true;
      this.scrollPosition = e;
      this.$emit("child-checkbox", this.scrollPosition);
    },
  },
};
</script>
<style scoped>
nav {
  background: #f5f5f5;
  opacity: 0.8;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 999;
  cursor: pointer;
}

.navbar-nav {
  flex-direction: row;
}
.nav-link {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;
}

a.nav-link:hover {
  color: #a12c1b;
}

/* Fixes dropdown menus placed on the right side */
.ml-auto .dropdown-menu {
  left: auto !important;
  right: 0px;
}
img {
  position: absolute;
  width: 185px;
  height: 40.28px;
  left: 86px;
  top: 9px;
}

img.flag {
  left: 10px;
  top: 9px;
  width: 25px;
  height: 25px;
}

img.flag-1 {
  left: 10px;
  top: 50px;
  width: 25px;
  height: 25px;
}
img.check {
  left: 130px;
  top: 50px;
  width: 20px;
  height: 20px;
}

.menubar {
  left: 86px;
}
</style>