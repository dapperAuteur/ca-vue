<template>
  <div class="col-xs-12 col-sm-6">
    <h1>Offices Header</h1>
    <button v-if="!officeIdSort"
      class="btn btn-info"
      @click="idSort">
      Sort Offices By Id
    </button>
    <button
      v-else
      class="btn btn-success"
      @click="companyIdSort">
      Sort Offices By Company Id
    </button>
    <router-link
      :to="{
        name: 'createOffice'}"
        class="btn btn-primary">
      Create A Office
    </router-link>
    <ul class="list-group">
      <app-office
        v-for="office in offices"
        :key="office.id"
        :office="office">
      </app-office>
    </ul>
  </div>
</template>

<script>
  import Office from './Office';
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        officeIdSort: false
      }
    },
    components: {
      appOffice: Office,
    },
    computed: {
      offices() {
        return this.$store.getters.offices;
      }
    },
    methods: {
      ...mapActions({
        sortOfficeById: 'sortOfficeById',
        sortOfficeByCompanyId: 'sortOfficeByCompanyId'
      }),
      idSort(){
        this.sortOfficeById();
        this.officeIdSort = !this.officeIdSort;
      },
      companyIdSort(){
        this.sortOfficeByCompanyId();
        this.officeIdSort = !this.officeIdSort;
      }
    }
  }
</script>
