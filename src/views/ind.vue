<template>
  <div>
    <Header @child-checkbox="active"></Header>
    <Content :id_active="id_active"></Content>
    <UpperFooter :id_active="id_active"></UpperFooter>
    <BottomFooter></BottomFooter>
  </div>
</template>

<script>
import Header from "../components/header/Header-indo";
import Content from "../components/content/main-content";
import UpperFooter from "../components/footer/UpperFooter-indo";
import BottomFooter from "../components/footer/BottomFooter";

export default {
  name: "App",
  components: {
    Header,
    Content,
    UpperFooter,
    BottomFooter,
  },
  data() {
    return {
      id_active: null,
    };
  },
  methods: {
    active(e) {
      this.id_active = e;
    },
  },
};
</script>