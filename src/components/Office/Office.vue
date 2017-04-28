<template>
  <div class="panel panel-success">
    <div class="panel-heading">
      <h3 class="panel-title">City: {{ office.city }}, {{ office.st }}</h3>
    </div>
    <div class="panel-body">
      <h3>
        {{ office.address1 }}, {{ office.zip }}
        {{ office.phone }}
      </h3>
      <router-link
        :to="{ name: 'Office',
              params: {
                id: office.id }}"
                class="btn btn-primary" @click.native="officeSelected" tag="li">
        Office Id: {{ office.id }}
      </router-link>
    </div>

  </div>
</template>


<script>
  import store from './../../store/store';
  import { state, mutations, getters, } from './../../store/modules/offices';

  export default {
    props: ['office', 'officeDetails'],
    data: function(){
      return {
        officeId: null
      }
    },
    // created: {
    //   console.log('this');
    // },
    methods: {
      officeSelected() {
        this.$store.state.office = this.office;
        console.log(this.office);
        }
    },
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
