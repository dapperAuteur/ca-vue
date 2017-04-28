<template>
  <div>
    <div class="col-xs-12 col-sm-6">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">
            <span>
              {{ officeDetails.city }}, {{ officeDetails.st }}
            </span>
            <span>
              Company Id-Office Id:-{{ officeDetails.id }}
            </span>
          </h3>
        </div>
        <div class="panel-body">
          <h1>
            Office Details
          </h1>
          <h4>
            {{ officeDetails.address1 }}
            {{ officeDetails.city }}, {{ officeDetails.st }} {{ officeDetails.zip }}
          </h4>
          <h5>
            {{ officeDetails.phone }}
          </h5>
          <button class="btn btn-warning"
            @click="openEditData">
            Edit Office
            {{ officeDetails.id }}
          </button>
          <button class="btn btn-danger"
            @click="deleteOffice">
            Delete Office
            {{ officeDetails.id }}
          </button>
          <button class="btn btn-primary"
            @click="showEmployees">
            Show Employees
          </button>
          <button class="btn btn-info"
            @click="addEmployee">
            Add Employee
          </button>
        </div>
      </div>
    </div>
    <div v-if="editing" class="col-xs-12 col-sm-6">
      <div class="panel panel-success">
        <div  class="panel-heading">
          <h3 class="panel-title">
            <span>Edit Office Details</span>
          </h3>
        </div>
        <input v-if="editing"
        v-model="officeDetails.id"
        class="form-control" />
        <input v-if="editing"
        v-model="officeDetails.city"
        class="form-control" />
        <input v-if="editing"
          v-model="officeDetails.st"
          class="form-control" />
        <button class="btn btn-info"
          @click="saveData">
          Save Office

        </button>
        <button class="btn btn-danger"
          @click="deleteOffice">
          Delete Office

        </button>
      </div>

    </div>

  </div>
</template>

<script>
  import Office from './Office';
  import { state, mutations, getters, } from './../../store/modules/offices';
  import { mapActions } from 'vuex';

  export default {
    data(){
      return {
        officeDetails: {
          id: this.$store.state.office.id,
          // company_id: this.$store.office.company_id,
          city: this.$store.state.office.city,
          st: this.$store.state.office.st
        },
        editing: false
      }
    },
    computed: {
      officeDetails() {
        return this.$store.state.office;
      }
    },
    methods: {
      ...mapActions({
        deleteData: 'deleteOffice'
      }),
      // logOffice() {
      //   console.log(this.officeDetails.city);
      // },
      saveData(){
        console.log('saveData');
        console.log(this.officeDetails);
        this.$http.put('' + this.officeDetails.id + '?', this.officeDetails)
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
          console.log(this.officeDetails.city);
        },
      editData(){
        this.$http.put('' + this.officeDetails.id)
          .then(response => {
            console.log(response)
          }, error => {
            console.log(error);
          });
        },
        deleteOffice(user){
          this.$http.delete('')
            .then(response => {
              console.log(response);
            }, error => {
              console.log(error);
            });
          console.log(this.officeDetails.url);
        },
        showEmployees(){
          console.log('show employees');
        },
        addEmployee(){
          console.log('add employee');
        }
    }
  }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
