<template>
  <div>
    <div class="col-xs-12 col-sm-6">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">
            <span>
              {{ companyDetails.name }}
            </span>
            <span>
              {{ companyDetails.id }}
            </span>
          </h3>
        </div>
        <div class="panel-body">
          <h1>
            Company Details
          </h1>
          <button class="btn btn-warning"
            @click="openEditData">
            Edit Company
            {{ companyDetails.id }}
          </button>
          <button class="btn btn-danger"
            @click="deleteCompany">
            Delete Company
            {{ companyDetails.id }}
          </button>
          <button class="btn btn-primary"
            @click="showOffices">
            Show Offices
          </button>
          <button class="btn btn-info"
            @click="addOffices">
            Add Offices
          </button>
        </div>
      </div>
    </div>
    <div v-if="editing" class="col-xs-12 col-sm-6">
      <div class="panel panel-success">
        <div  class="panel-heading">
          <h3 class="panel-title">
            <span>Edit Company Details</span>
          </h3>
        </div>
        <input v-if="editing"
        v-model="companyDetails.id"
        class="form-control" />
        <input v-if="editing"
        v-model="companyDetails.name"
        class="form-control" />
        <input v-if="editing"
        v-model="companyDetails.website"
        class="form-control" />
        <button class="btn btn-info"
          @click="saveData">
          Save Company

        </button>
        <button class="btn btn-danger"
          @click="deleteCompany">
          Delete Company

        </button>
      </div>

    </div>

  </div>
</template>

<script>
  import Company from './Company';
  import EditCompany from './EditCompany';
  import { state, mutations, getters, } from './../../store/modules/companies';
  import { mapActions } from 'vuex';

  export default {
    data(){
      return {
        companyDetails: {
          id: this.$store.state.company.id,
          name: this.$store.state.company.name,
          website: this.$store.state.company.website
        },
        editing: false
      }
    },
    components: {
      appEditCompany: EditCompany
    },
    computed: {
      companyDetails() {
        return this.$store.state.company;
      }
    },
    methods: {
      ...mapActions({
        deleteData: 'deleteCompany'
      }),
      logCompany() {
        console.log(this.companyDetails.name);
      },
      saveData(){
        console.log('saveData');
        console.log(this.companyDetails);
        this.$http.put('' + this.companyDetails.id + '?', this.companyDetails)
            .then(response => {
              console.log(response);
            }, error => {
              console.log(error);
            });
        this.editing = false;
      },
      openEditData(){
          this.editing = !this.editing;
          console.log('open edit options');
          console.log(this.companyDetails.name);
        },
      editData(){
        this.$http.put('' + this.companyDetails.id)
          .then(response => {
            console.log(response)
          }, error => {
            console.log(error);
          });
        },
        deleteCompany(user){
          this.$http.delete('')
            .then(response => {
              console.log(response);
            }, error => {
              console.log(error);
            });
          console.log(this.companyDetails.website);
        },
        showOffices(){
          console.log('show offices');
        },
        addOffices(){
          console.log('add offices');
        }
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
