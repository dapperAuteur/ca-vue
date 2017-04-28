<template>
  <div>
    <div class="col-xs-12 col-sm-6">
      <h1>Create A New Office</h1>
      <input
        v-model="officeDetails.city"
        class="form-control" /> -->
      <input
        v-model="officeDetails.st"
        class="form-control" />
      <button
        @click="saveOffice">
        Save Office

      </button>
    </div>
    <div
      v-if="office"
      class="col-xs-12 col-sm-6">
      <h3>{{ office.id }}</h3>
      <h3>{{ office.city }}, {{ office.st }}</h3>
    </div>
  </div>
</template>

<script>
  import { state, mutations, getters } from './../../store/modules/offices';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        officeDetails: {
          name: 'New Office Name',
          url: 'New Office Web Address'
        },
        office: {
          name: '',
          url: ''
        }
      }
    },
    methods: {
      ...mapActions({
        savaData: 'saveOffice'
      }),
      saveOffice(){
        console.log(this.officeDetails);
        this.$http.post('', this.officeDetails)
          .then(response => {
            console.log(response);
            console.log(response.data);
            this.office.id = response.data.id;
            this.office.city = response.data.city;
            this.office.st = response.data.st;
          }, error => {
            console.log(error);
          });
      }
    }
  }


</script>

<style>

</style>
