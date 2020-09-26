<template>
  <section>
    <section id="Home" class="section-general">
      <div class="container">
        <div class="title">Agregator Pembayaran Tagihan Pertama Indonesia</div>
      </div>
      <Lottie
        :options="defaultOptions"
        :height="36"
        :width="36"
        style="margin-left: 6em"
      />
      <div class="row contact">
        <div
          class="our-partner col-sm-5"
          @click="linktoemail()"
          style="cursor: pointer"
        >
          <p class="text-our-partner">Jadilah Mitra Kami!</p>
          <p class="info-narindo">
            <img src="../../assets/ic_email_black.png" />
            Info@narindo.com
          </p>
        </div>
        <div
          class="need-help col-sm-5"
          @click="linktowa()"
          style="cursor: pointer"
        >
          <p class="text-need-help">Butuh Bantuan?</p>
          <p class="info-need-help">
            <img src="../../assets/ic_headphones.png" />
            +6281806500100
          </p>
        </div>
      </div>
    </section>
    <section class="section-padding-generals" style="background-color: #ab121c">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-3">
            <div class="row mt-5">
              <div class="col-lg-4 col-12"></div>
              <div class="col-lg-8 col-12">
                <p class="header">350+</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-3">
            <div class="row mt-5">
              <div class="col-lg-4 col-12"></div>
              <div class="col-lg-8 col-12">
                <p class="header">55M+</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-3">
            <div class="row mt-5">
              <div class="col-lg-4 col-12"></div>
              <div class="col-lg-8 col-12">
                <p class="header">ALL</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-3">
            <div class="row mt-5">
              <div class="col-lg-4 col-12"></div>
              <div class="col-lg-8 col-12">
                <p class="header">99.99%</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-3">
            <div class="row mb-4">
              <div class="col-lg-4 col-12"></div>
              <div class="col-lg-8 col-12">
                <p class="sub-header">Mitra</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-3">
            <div class="row mb-4">
              <div class="col-lg-4 col-12"></div>
              <div class="col-lg-8 col-12">
                <p class="sub-header">Transaksi</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-3">
            <div class="row">
              <div class="col-lg-4 col-12"></div>
              <div class="col-lg-8 col-12">
                <p class="sub-header">Operator Seluler</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-3">
            <div class="row">
              <div class="col-lg-4 col-12"></div>
              <div class="col-lg-8 col-12">
                <p class="sub-header">SLA Penanganan kesalahan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="About"
      class="section-padding-general"
      style="background-color: #f5f5f5"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <p class="title-header">
              Agregator Multi Provider dan Layanan Pembayaran Digital Modern
            </p>
          </div>
        </div>

        <img class="logo" src="../../assets/logo_info_narindo_indonesia.png" />
        <div class="row">
          <div class="col-sm-12">
            <p class="article-header">
              Sebagai aggregator, kami menjembatani mitra dan provider dengan
              solusi cerdas dan terkini yang dapat meningkatkan pelayanan
              terhadap pelanggan anda.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="Product" style="padding: 50px 0 50px 0">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <p class="partner-header">
              Kami menyediakan Isi Ulang Pulsa & Paket Data, Pembayaran
              Multibiller, Isi Ulang E-money, E-voucher, Gift Card.
            </p>
          </div>
          <div class="col-lg-5">
            <div v-if="hover" id="menu-2" class="menu-1">
              <div class="row">
                <div class="col-sm-4 mb-4">
                  <img
                    src="../../assets/--BPJS_2.png"
                    style="width: 50px; height: 50px"
                  />
                </div>
                <div class="col-sm-4">
                  <img
                    src="../../assets/--listrik_2.png"
                    style="width: 50px; height: 50px"
                  />
                </div>
                <div class="col-sm-4">
                  <img
                    src="../../assets/--PDAM_2.png"
                    style="width: 50px; height: 50px"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <img
                    src="../../assets/--pulsa_2.png"
                    style="width: 50px; height: 50px"
                  />
                </div>
                <div class="col-sm-4">
                  <img
                    src="../../assets/--Paket Data_2.png"
                    style="width: 50px; height: 50px"
                  />
                </div>
                <div class="col-sm-4">
                  <img
                    src="../../assets/--TV_kable 2.png"
                    style="width: 50px; height: 50px"
                  />
                </div>
              </div>
            </div>
            <div v-if="hover1" id="menu-2" class="menu-2">
              <div class="row">
                <div class="col-sm-4">
                  <img src="../../assets/logo_xl.png" />
                </div>
                <div class="col-sm-4">
                  <img src="../../assets/logo telkomsel 1 1.png" />
                </div>
                <div class="col-sm-4">
                  <img src="../../assets/logo_indosat.png" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <img src="../../assets/logo_axis.png" />
                </div>
                <div class="col-sm-4">
                  <img src="../../assets/logo_black.png" />
                </div>
                <div class="col-sm-4">
                  <img src="../../assets/logo_smartfren_black.png" />
                </div>
              </div>
            </div>
            <div v-if="hover2" class="menu-3">
              <div class="row">
                <div class="col-sm-4">
                  <img src="../../assets/__logo_dana.png" />
                </div>
                <div class="col-sm-4">
                  <img src="../../assets/--logo_ovo.png" />
                </div>
                <div class="col-sm-4">
                  <img src="../../assets/logo-gopay (2).png" />
                </div>
              </div>
            </div>
            <div v-if="hover3" class="menu-4">
              <div class="row">
                <div class="col-sm-4">
                  <img src="../../assets/__google_play.png" />
                </div>
                <div class="col-sm-4">
                  <img
                    src="../../assets/logo-grab.png"
                    style="width: 110px; height: 40px"
                  />
                </div>
              </div>
            </div>
            <div v-if="hover4" class="menu-5">
              <div class="row">
                <div class="col-sm-4">
                  <img src="../../assets/__logo_grab_gift.png" />
                </div>
                <div class="col-sm-4">
                  <img src="../../assets/--logo_tokopedia.png" />
                </div>
                <div class="col-sm-4">
                  <img src="../../assets/logo_traveloka.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <ul class="nav">
            <li
              id="menu-product"
              class="menu-product"
              @mouseover="hover = true"
              @mouseleave="hover = false"
            >
              <a class="mobile">
                <div class="col-lg-12">
                  <h3 class="number">01</h3>
                </div>
                <div class="col-lg-12">
                  <div class="underline-space"></div>
                </div>
                <div class="col-lg-12">
                  <h3 class="title-card">Pulsa & Paket Data</h3>
                </div>
                <div class="col-lg-12">
                  <p>
                    Layanan isi ulang pulsa dan paket data secara instan dari
                    Seluruh Operator Indonesia dengan nominal beragam.
                  </p>
                </div>
              </a>
            </li>
            <li
              class="menu-product"
              @mouseover="hover1 = true"
              @mouseleave="hover1 = false"
            >
              <a class="multibiller">
                <div class="col-lg-12">
                  <h3 class="number">02</h3>
                </div>
                <div class="col-lg-12">
                  <div class="underline-space"></div>
                </div>
                <div class="col-lg-12">
                  <h3 class="title-card">Pembayaran Multibiller</h3>
                </div>
                <div class="col-lg-12">
                  <p>
                    Sistem pembayaran tagihan untuk PLN, PDAM, BPJS, TELKOM, dan
                    mendukung bisnis anda dalam mempersingkat proses pembayaran
                    pelanggan.
                  </p>
                </div>
              </a>
            </li>
            <li
              class="menu-product"
              @mouseover="hover2 = true"
              @mouseleave="hover2 = false"
            >
              <a class="emoney">
                <div class="col-lg-12">
                  <h3 class="number">03</h3>
                </div>
                <div class="col-lg-12">
                  <div class="underline-space"></div>
                </div>
                <div class="col-lg-12">
                  <h3 class="title-card">E-money</h3>
                </div>
                <div class="col-lg-12">
                  <p>
                    Penyedia isi ulang multi e-money kapan saja, di mana saja
                    dan proses yang singkat langsung sampai ke nomor tujuan.
                  </p>
                </div>
              </a>
            </li>
            <li
              class="menu-product"
              @mouseover="hover3 = true"
              @mouseleave="hover3 = false"
            >
              <a class="evoucher">
                <div class="col-lg-12">
                  <h3 class="number">04</h3>
                </div>
                <div class="col-lg-12">
                  <div class="underline-space"></div>
                </div>
                <div class="col-lg-12">
                  <h3 class="title-card">E-Vouchers</h3>
                </div>
                <div class="col-lg-12">
                  <p>
                    Layanan penyedia voucher elektronik yang dapat digenerate
                    sesuai permintaan dan dapat digunakan pelanggan anda untuk
                    mendapatkan diskon spesial.
                  </p>
                </div>
              </a>
            </li>
            <li
              class="menu-product"
              @mouseover="hover4 = true"
              @mouseleave="hover4 = false"
            >
              <a class="gift-card">
                <div class="col-lg-12">
                  <h3 class="number">05</h3>
                </div>
                <div class="col-lg-12">
                  <div class="underline-space"></div>
                </div>
                <div class="col-lg-12">
                  <h3 class="title-card">Gift Card</h3>
                </div>
                <div class="col-lg-12">
                  <p>
                    Layanan gift card yang dapat digunakan pelanggan anda dalam
                    berbagai transaksi di e-commerce tersedia.
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section
      id="Technology"
      class="section-padding-general"
      style="background-color: #f5f5f5"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <p class="title-header">
              Kami menawarkan berbagai solusi pembayaran digital sesuai
              kebutuhan bisnis Anda yang didukung teknologi termutakhir.
            </p>
          </div>
        </div>
        <div class="row-slider" style="margin-top: 40px">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-interval="false"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="col-sm-12">
                  <ul class="nav nav-pills">
                    <li
                      class="menu-technology hover"
                      style="width: 300px; margin-left: 100px"
                    >
                      <a data-toggle="pill" href="#home">
                        <div class="col-lg-12">
                          <img
                            class="d-block img-product"
                            src="../../assets/comp_illustration_API.png"
                            alt="First slide"
                            style="margin-left: -10px; height: 135px"
                          />
                        </div>

                        <div class="col-lg-12">
                          <h3 class="title-card">API Integration</h3>
                        </div>

                        <div class="col-lg-12">
                          <p style="width: 300px">
                            Layanan isi ulang pulsa dan paket data secara instan
                            dari Seluruh Operator Indonesia dengan nominal
                            beragam.
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="menu-technology" style="width: 300px">
                      <a data-toggle="pill" href="#menu1">
                        <div class="col-lg-12">
                          <img
                            class="d-block img-product"
                            src="../../assets/comp_illustration_web_transaction.png"
                            alt="Second slide"
                            style="
                              width: 200px;
                              height: 136px;
                              padding-left: 30px;
                              margin-left: -25px;
                            "
                          />
                        </div>

                        <div class="col-lg-12">
                          <h3 class="title-card">Web Transaction</h3>
                        </div>
                        <div class="col-lg-12">
                          <p>
                            Sistem pembayaran tagihan untuk PLN, PDAM, BPJS,
                            TELKOM, dan mendukung bisnis anda dalam
                            mempersingkat proses pembayaran pelanggan.
                          </p>
                        </div>
                      </a>
                    </li>
                    <li
                      class="menu-technology"
                      style="width: 300px; margin-left: 0px"
                    >
                      <a data-toggle="pill" href="#menu2">
                        <img
                          class="d-block img-product"
                          src="../../assets/comp_illustration_nabila_apps.png"
                          alt="Third slide"
                          style="
                            padding-left: 30px;
                            margin-left: -25px;
                            width: 200px;
                            height: 136px;
                          "
                        />

                        <div class="col-lg-12">
                          <h3 class="title-card">Nabila</h3>
                        </div>
                        <div class="col-lg-12">
                          <p>
                            Penyedia isi ulang multi e-money kapan saja, di mana
                            saja dan proses yang singkat langsung sampai ke
                            nomor tujuan.
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="carousel-item">
                <div class="col-sm-12">
                  <ul class="nav nav-pills">
                    <li
                      class="menu-technology hover"
                      style="width: 300px; margin-left: 100px"
                    >
                      <a data-toggle="pill" href="#home">
                        <div class="col-lg-12">
                          <img
                            class="d-block img-product"
                            src="../../assets/comp_illustration_microsite.png"
                            alt="Third slide"
                            style="
                              padding-left: 30px;
                              margin-left: -25px;
                              width: 200px;
                              height: 136px;
                            "
                          />
                        </div>

                        <div class="col-lg-12">
                          <h3 class="title-card">Microsite</h3>
                        </div>
                        <div class="col-lg-12">
                          <p style="width: 300px">
                            Layanan isi ulang pulsa dan paket data secara instan
                            dari Seluruh Operator Indonesia dengan nominal
                            beragam.
                          </p>
                        </div>
                      </a>
                    </li>
                    <li class="menu-technology" style="width: 300px">
                      <a data-toggle="pill" href="#menu1">
                        <div class="col-lg-12">
                          <img
                            class="d-block img-product"
                            src="../../assets/comp_illustration_officialstore.png"
                            alt="Third slide"
                            style="
                              padding-left: 30px;
                              margin-left: -25px;
                              width: 200px;
                              height: 136px;
                            "
                          />
                        </div>

                        <div class="col-lg-12">
                          <h3 class="title-card">Official Store</h3>
                        </div>
                        <div class="col-lg-12">
                          <p style="width: 300px">
                            Sistem pembayaran tagihan untuk PLN, PDAM, BPJS,
                            TELKOM, dan mendukung bisnis anda dalam
                            mempersingkat proses pembayaran pelanggan.
                          </p>
                        </div>
                      </a>
                    </li>
                    <li
                      class="menu-technology"
                      style="width: 300px; margin-left: 0px"
                    >
                      <a data-toggle="pill" href="#menu2">
                        <div class="col-lg-12">
                          <img
                            class="d-block img-product"
                            src="../../assets/comp_illustration_e-cluster.png"
                            alt="Third slide"
                            style="
                              padding-left: 30px;
                              margin-left: -25px;
                              width: 200px;
                              height: 136px;
                            "
                          />
                        </div>

                        <div class="col-lg-12">
                          <h3 class="title-card">E-Cluster</h3>
                        </div>
                        <div class="col-lg-12">
                          <p p style="width: 300px">
                            Penyedia isi ulang multi e-money kapan saja, di mana
                            saja dan proses yang singkat langsung sampai ke
                            nomor tujuan.
                          </p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section></section>
    <section
      id="Client"
      style="padding: 50px 0 50px 0"
      class="text-center-gada"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p class="partner-header">
              Kami bekerja sama dengan Mitra dan Provider yang luar biasa.
            </p>
            <button class="work-with-us" @click="linktoemail()">
              Mari Bermitra
            </button>
          </div>
          <div class="col-lg-6">
            <p class="text-partner">Mitra</p>
            <div class="row-slider">
              <div
                id="carouselExampleIndicators2"
                class="carousel slide"
                data-interval="false"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators2"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators2"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators2"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators2"
                    data-slide-to="3"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators2"
                    data-slide-to="4"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators2"
                    data-slide-to="5"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
                      <div class="row" style="margin-left: 2px">
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/--logo_tokopedia.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img class="providers" src="../../assets/Gojek.png" />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/__logo_dana.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/--logo_ovo.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img class="providers" src="../../assets/Kudo.png" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/shoppee.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/logo_traveloka.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Blibli.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/akulaku.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img class="providers" src="../../assets/jd.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div class="row">
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/BluePay.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/mobilepulsa.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/toppulsa.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img class="providers" src="../../assets/BNI.png" />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/ottopay.png"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Selamat.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img class="providers" src="../../assets/pos.png" />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/point2000.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Paytren.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/PayFazz.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div class="row">
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/logo_yuk.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/TokoPDA.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Telering.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/teknojek.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Sodexo.png"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-2">
                          <img class="providers" src="../../assets/Story.png" />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/sobatku.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Sentraponsel.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Selulershop.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/BankMega.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div class="row">
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/BankMayora.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/BankAG.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Ayopop.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/AwanTunai.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/apollo.png"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/alfacart.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img class="providers" src="../../assets/Adira.png" />
                        </div>
                        <div class="col-sm-2">
                          <img class="providers" src="../../assets/ACC.png" />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Cermati.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img class="providers" src="../../assets/GoPay.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div class="row">
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/PayFast.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Pawoon.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img class="providers" src="../../assets/kimo.png" />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/okeshop.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Nusapay.png"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Felixindo.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/easypay.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/dekape.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/kaskus.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Infinite.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row">
                      <div class="row">
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Netzme.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/MobileGaleri.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/KreditPlus.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/kioson.png"
                          />
                        </div>
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Global.png"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-2">
                          <img
                            class="providers"
                            src="../../assets/Bluemart.png"
                          />
                        </div>
                        <div class="col-sm-3">
                          <img
                            class="providers"
                            src="../../assets/Garena.png"
                          />
                        </div>
                        <div class="col-sm-3">
                          <img
                            class="providers"
                            src="../../assets/FIFGroup.png"
                          />
                        </div>
                        <div class="col-sm-3">
                          <img
                            class="providers"
                            src="../../assets/bhineka.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="prev"
                  style="margin-left: -60px"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="next"
                  style="margin-left: 70px"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6" style="margin-top: 50px">
            <img class="banner" src="../../assets/banner_map_dot_merah.png" />
          </div>
          <div class="col-lg-6">
            <div class="text-partner col-lg-12">Provider</div>
            <div class="row">
              <div class="col-sm-2">
                <img class="providers" src="../../assets/logo_telkomsel.png" />
              </div>
              <div class="col-sm-2">
                <img class="providers" src="../../assets/logo_xl.png" />
              </div>
              <div class="col-sm-2">
                <img class="providers" src="../../assets/logo_indosat.png" />
              </div>
              <div class="col-sm-2">
                <img class="providers" src="../../assets/logo_black.png" />
              </div>
              <div class="col-sm-2">
                <img
                  class="providers"
                  src="../../assets/logo_smartfren_black.png"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-2">
                <img class="providers" src="../../assets/logo_axis.png" />
              </div>
              <div class="col-sm-2">
                <img class="providers" src="../../assets/BNI.png" />
              </div>
              <div class="col-sm-2">
                <img class="providers" src="../../assets/pos.png" />
              </div>
              <div class="col-sm-2">
                <img class="providers" src="../../assets/logo-bukopin.png" />
              </div>
              <div class="col-sm-2">
                <img class="providers" src="../../assets/logo-cimb.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import * as animationData from "../../assets/scroll-icon.json";
import Lottie from "vue-lottie/src/lottie.vue";

export default {
  components: {
    Lottie,
  },
  data() {
    return {
      hover: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      id: null,
      defaultOptions: {
        animationData: animationData.default,
      },
    };
  },
  props: ["id_active"],
  watch: {
    id_active: function (newVal) {
      // watch it

      this.id = newVal;

      if (this.id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (this.id === "about") {
        window.scrollTo({ top: 800, behavior: "smooth" });
      } else if (this.id === "product") {
        window.scrollTo({ top: 1700, behavior: "smooth" });
      } else if (this.id === "technology") {
        window.scrollTo({ top: 2100, behavior: "smooth" });
      } else if (this.id === "client") {
        window.scrollTo({ top: 2700, behavior: "smooth" });
      } else if (this.id === "contact") {
        window.scrollTo({ top: 3300, behavior: "smooth" });
      } else if (this.id === "homepage") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
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
    nextSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
    },
    prevSlide() {
      this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
    },
  },
};
</script>

<style scoped>
.text-partner {
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.015em;
  text-align: left;
}
.text-partner-sub {
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.015em;
  text-align: left;
}
.providers {
  width: 95px;
  height: 80px;
}
.title {
  font-size: 75px;
}
.title-card {
  margin-top: 0px;
  margin-bottom: 30px;
}
p.text-our-partner {
  margin-bottom: 0px;
  margin-left: 70px;
  margin-top: 50px;
}
p.info-narindo {
  color: #000;
  margin-left: 70px;
}
p.text-need-help {
  color: #fff;
  margin-bottom: 0px;
  margin-left: 100px;
  margin-top: 50px;
}
.carousel-control-next-icon {
  background: url("../../assets/button_arrow_red.png") center right/cover;
  width: 30px;
  height: 30px;
}
.carousel-control-prev-icon {
  background: url("../../assets/button_arrow_red_left.png") center right/cover;
  width: 30px;
  height: 30px;
}
ol.carousel-indicators {
  margin-top: 130px;
}
.carousel-indicators li {
  margin-top: 30px;
  border-radius: 100%;
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 10px;
  height: 10px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #e6e6e6;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  transition: opacity 0.6s ease;
}
.carousel-indicators li.active {
  background-color: #ab121c;
}
p.info-need-help {
  color: #fff;
  margin-left: 100px;
}
a {
  margin: 10px;
  color: #000000;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
}
a:hover {
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-decoration: none;
}
a:active {
  color: #fff;
  border-bottom: none;
  text-decoration: none;
}
.underline-space {
  border-bottom: 1px solid #ab121c;
  padding-bottom: 10px;
  margin-bottom: 20px;
  margin-left: 0;
  margin-right: 0;
}
.menu-product {
  width: 18%;
  margin-right: 10px;
  background: #ffffff;
  border-radius: 14px;
  height: 369px;
  width: 200px;
  left: 0px;
  top: 0px;
  border-radius: 14px;
}

.menu-technology {
  margin-right: 10px;
  background: #f5f5f5;
  border-radius: 14px;
  height: 369px;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 14px;
}

.menu-technology > a:hover {
  color: #000;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-decoration: none;
}

.menu-product:active {
  background: #ab121c;
  color: #fff;
}
.menu-product:hover {
  width: 18%;
  margin-right: 10px;
  background: #ab121c;
  color: #fff;
  height: 369px;
  width: 200px;
  left: 0px;
  top: 0px;
  border-radius: 14px;
}
.contact {
  margin-top: 9px;
  margin-right: -236px;
  margin-left: 500px;
}
.our-partner {
  width: 1026px;
  height: 161px;
  background: #f5f5f5;
  border-radius: 85px 0px 0px 85px;
  margin-right: -70px;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.015em;
  color: #ab121c;
}

.need-help {
  width: 100%;
  height: 161px;
  background: #990e17;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.015em;
  border-radius: 85px 0px 0px 85px;
}
.title-header {
  margin-top: 70px;
  width: 1108px;
  height: 163px;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #000000;
}
.header {
  font-weight: bold;
  font-size: 48px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #ffffff;
}
.sub-header {
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #ffffff;
}
.partner-header {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 58px;
  letter-spacing: -0.015em;
  color: #000000;
}
.article-header {
  margin-top: 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.015em;
}

img.logo {
  width: 634.65px;
  height: 420px;
  display: block;
  margin: auto;
}

img.banner {
  width: 550.65px;
  height: 150px;
  display: block;
  margin: auto;
}

button.work-with-us {
  background: #ab121c;
  border-radius: 6px;
  color: #ffffff;
  width: 192px;
  height: 52px;
  left: 86px;
  top: 4426px;
  border: none;
}
</style>
