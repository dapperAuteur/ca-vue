<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Cooper Aerial</router-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link to="/Companies" activeClass="active" tag="li"><a>Companies</a></router-link>
            <router-link to="/Offices" activeClass="active" tag="li"><a>Offices</a></router-link>
            <router-link to="/Persons" activeClass="active" tag="li"><a>Persons</a></router-link>
            <router-link to="/Portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          </ul>
          <strong class="navbar-text navbar-right">Funds: {{ funds }}</strong>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#" @click="endDay">End Day</a>
            </li>
            <li class="dropdown"
                :class="{open: isDropdownOpen}"
                @click="isDropdownOpen = !isDropdownOpen">
              <a href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">Save & Load <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="#"
                      @click="saveData">Save Data</a>
                  </li>
                  <li>
                    <a href="#"
                      @click="loadData">Load Data</a>
                  </li>
                  <li>
                    <a href="#">Something Else Here</a>
                  </li>
                  <li role="separator" class="divider">

                  </li>
                  <li>
                    <a href="#">Separated Link</a>
                  </li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions({
          randomizeCompanies: 'randomizeCompanies',
          fetchData: 'loadData'
      }),
      endDay() {
        this.randomizeCompanies();
      },
      saveData() {
        const data = {
          offices: this.$store.getters.offices,
          companies: this.$store.getters.companies
        };
        this.$http.put('data.json', data);
      },
      loadData() {
        this.fetchData();
      }
    }
  }
</script>
