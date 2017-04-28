<template>
  <div class="panel panel-success">
    <div class="panel-heading">
      <h3 class="panel-title">Name: {{ company.name }}</h3>
    </div>
    <div class="panel-body">
      <h3>
        {{ company.website }}
      </h3>
      <router-link
        :to="{ name: 'Company',
              params: {
                id: company.id }}"
                class="btn btn-primary" @click.native="companySelected" tag="li">
        Company Id: {{ company.id }}
      </router-link>
      <h3>Offices</h3>
      <p>
        Put Offices Component Here
      </p>
      <!-- <app-office
        v-for="office in offices"
        :key="office.id"
        :office="office">
      </app-office> -->
    </div>
    <h3>Company Offices</h3>
  </div>
</template>

<script>
  import store from './../../store/store';
  // import Office from './../Office/Office';
  import { state, mutations, getters, } from './../../store/modules/companies';
  import { mapActions } from 'vuex';

  export default {
    props: ['company', 'companyDetails'],
    data: function(){
      return {
        companyId: null
      }
    },
    // components: {
    //   appOffice: Office
    // },
    // computed: {
    //   offices() {
    //     return this.$store.getters.offices;
    //   }
    // },
    methods: {
      companySelected() {
        this.$store.state.company = this.company;
        }
    },
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
