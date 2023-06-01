<!-- eslint-disable max-len -->
<template>
  <div class="view">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <h3 class="text-success">View Contact</h3>
          <p class="fontstyle-italic">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eos error cum, nihil
            repudiandae officia sit, amet voluptatibus vero deserunt soluta ut repellat ea dolorem
            eveniet animi esse ab dignissimos.
          </p>
        </div>
      </div>
    </div>
        <!-- losding -->
        <div v-if="Loading">
      <div class="row">
        <div class="col">
          <SpinNer />
        </div>
      </div>
    </div>
    <!-- error message -->
    <div v-if="Loading && errorMessage">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="h3 fw-bold text-danger">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-3" v-if="!Loading && isDone()">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img
            class="contact-image"
            :src="contact.photo"
            alt=""
          />
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item">Name: <span class="fw-bold">{{ contact.name }}</span></li>
            <li class="list-group-item">Email: <span class="fw-bold">{{ contact.email }}</span></li>
            <li class="list-group-item">Contact: <span class="fw-bold">{{ contact.mobile }}</span></li>
            <li class="list-group-item">Company: <span class="fw-bold">{{  contact.Company}}</span></li>
            <li class="list-group-item">Title: <span class="fw-bold">{{ contact.title }}</span></li>
            <li class="list-group-item">Group: <span class="fw-bold">{{ group.name }}</span></li>
          </ul>
        </div>
      </div>
      <div class="row mt-3">
      <div class="col">
        <router-link to="/contacts" class="btn btn-success"
          ><i class="fa-solid fa-arrow-left fa-beat-fade" style="margin-right: 5px;"></i>Back</router-link
        >
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { ContactServices } from '@/Services/ContactServices';
import SpinNer from '@/components/SpinNer.vue';

export default {
  name: 'ViewContact',
  components: {
    SpinNer,
  },
  data() {
    return {
      contactId: this.$route.params.id,
      Loading: false,
      contact: {},
      group: {},
      errorMessage: null,
    };
  },
  mounted() {},
  methods: {
    isDone() {
      return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
    },
  },
  async created() {
    try {
      this.Loading = true;
      const response = ContactServices.getContact(this.contactId);
      this.contact = (await response).data;
      const groupResponse = await ContactServices.getGroup((await response).data);
      this.group = groupResponse.data;
      // console.log(this.contact);
      this.Loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.Loading = false;
    }
  },
};
</script>
<style lang="css"></style>
