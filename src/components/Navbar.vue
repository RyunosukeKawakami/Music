<template>
    <div>
        <b-navbar type="dark" variant="dark" id="navbar">
        <b-navbar-brand tag="h1" id="brand" class="px-4">Vue Music</b-navbar-brand>
        <b-navbar-nav>
          <!--検索-->
          <Search id="search"></Search>
        </b-navbar-nav>
      </b-navbar>
  </div>
</template>

<script>
import Search from '@/components/Search.vue'

export default {
  name: 'Navbar',
  components:{
    Search
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

#navbar{
  background: linear-gradient(to bottom, #212529 95%, #6c757d);
}

#brand {
  color: #01ffc3;
}

#search{
  margin-left:auto;
}
</style>
