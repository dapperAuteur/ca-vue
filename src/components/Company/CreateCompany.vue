<template>
  <div>
    <div class="col-xs-12 col-sm-6">
      <h1>Create A New Company</h1>
      <input
        v-model="companyDetails.name"
        class="form-control" />
      <input
        v-model="companyDetails.website"
        class="form-control" />
      <button
        @click="saveCompany">
        Save Company

      </button>
    </div>
    <div
      v-if="company"
      class="col-xs-12 col-sm-6">
      <h3>{{ company.id }}</h3>
      <h3>{{ company.name }}</h3>
      <h3>{{ company.website }}</h3>
    </div>
  </div>
</template>

<script>
  import { state, mutations, getters } from './../../store/modules/companies';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        companyDetails: {
          name: 'New Company Name',
          website: 'New Company Web Address'
        },
        company: {
          name: '',
          website: ''
        }
      }
    },
    methods: {
      ...mapActions({
        savaData: 'saveCompany'
      }),
      saveCompany(){
        console.log(this.companyDetails);
        this.$http.post('', this.companyDetails)
          .then(response => {
            console.log(response);
            console.log(response.data);
            this.company.id = response.data.id;
            this.company.name = response.data.name;
            this.company.website = response.data.website;
          }, error => {
            console.log(error);
          });
      }
    }
  }


</script>

<style>

</style>
