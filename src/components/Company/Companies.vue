<template>
  <div class="col-xs-12 col-sm-6">
    <h1>Company Header</h1>
      <button v-if="!companyIdSort"
        class="btn btn-info"
        @click="idSort">
        Sort Companies By Id
      </button>
      <button v-else
        class="btn btn-success"
        @click="nameSort">
        Sort Companies By Name
      </button>

    <router-link
      :to="{ name: 'createCompany'}"
              class="btn btn-primary">
      Create A Company
    </router-link>
    <ul class="list-group">
      <app-company
        v-for="company in companies"
        :key="company.id"
        :company="company">
      </app-company>
    </ul>
  </div>
</template>

<script>
  import Company from './Company';
  import OfficeDetails from './../Office/OfficeDetails';
  import { mapActions } from 'vuex';

  export default {
    data(){
      return {
        companyIdSort: false
      }
    },
    components: {
      appCompany: Company
    },
    computed: {
      companies() {
        return this.$store.getters.companies;
      }
    },
    methods: {
      ...mapActions({
        sortCompanyById: 'sortCompanyById',
        sortCompanyByName: 'sortCompanyByName'
      }),
      idSort(){
        this.sortCompanyById();
        this.companyIdSort = !this.companyIdSort;
    },
      nameSort(){
        this.sortCompanyByName();
        this.companyIdSort = !this.companyIdSort;
      }
    }
  }
</script>
