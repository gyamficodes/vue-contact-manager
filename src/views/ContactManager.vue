<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
  <div class="contacts">
    <div class="container">
      <div class="row">
        <div class="col">
          <div id="page">
            <p class="h3 mt-3 text-success fw-bold">Contact Manager</p>
            <router-link to="/add">
              <button type="button" class="btn btn-success btn-sm mt-3">
                <i class="fa-solid fa-plus circle"></i> New
              </button>
            </router-link>
          </div>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, modi? Similique,
            provident? Vel sunt quo doloribus dolore assumenda ad excepturi. Quo magnam nostrum
            nobis sequi eaque, quam tempora inventore expedita?
          </p>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Search Name" />
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark inp" placeholder="submit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row ">
        <div class="col-md-6">
          <div class="card my-2 cd shadow-lg">
            <div class="card-body">
              <div class="row align-items-center">
                <!-- image -->
                <div class="col-sm-4">
                  <img class="Contact-image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CRKPij6o2waFROp-89BCE8lEf96jLsndRQ&usqp=CAU"
                    alt="">
                </div>
                <!-- items -->
                <div class="col-sm-7">
                <ul class="list-group">
                <li class="list-group-item">Name: <span class="fw-bold ">Name</span></li>
                <li class="list-group-item"> Email: <span class="fw-bold ">Email</span></li>
                <li class="list-group-item">Contact: <span class="fw-bold ">Contact</span></li>

                </ul>
                </div>
                <!-- route -->
                <div class="col-sm-1 box-f">
                  <router-link to="/view" class="btn btn-warning my-1"><i class="fa-solid fa-eye"></i></router-link>
                  <router-link to="/edit" class="btn btn-primary my-1"><i class="fa-solid fa-pen"></i></router-link>
                  <button type="button" class="btn btn-danger my-1"><i class="fa-solid fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="css"></style>
