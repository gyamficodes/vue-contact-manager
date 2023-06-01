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
    <pre>{{ contact }}</pre>
    <div class="container mt-3">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img
            class="contact-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CRKPij6o2waFROp-89BCE8lEf96jLsndRQ&usqp=CAU"
            alt=""
          />
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item">Name: <span class="fw-bold">Name</span></li>
            <li class="list-group-item">Email: <span class="fw-bold">Email</span></li>
            <li class="list-group-item">Contact: <span class="fw-bold">Contact</span></li>
            <li class="list-group-item">Company: <span class="fw-bold">Company</span></li>
            <li class="list-group-item">Title: <span class="fw-bold">Title</span></li>
            <li class="list-group-item">Group: <span class="fw-bold">Group</span></li>
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

export default {
  name: 'ViewContact',
  data() {
    return {
      contactId: this.$route.params.id,
      Loading: false,
      contact: {},
      errorMessage: null,
    };
  },
  mounted() {},
  methods: {},
  async created() {
    try {
      this.Loading = true;
      const response = ContactServices.getContact(this.contactId);
      this.contact = (await response).data;
      // console.log(response);
      this.Loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.Loading = false;
    }
  },
};
</script>
<style lang="css"></style>
