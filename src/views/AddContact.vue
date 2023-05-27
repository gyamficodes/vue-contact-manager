<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<template>
  <div class="add">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <h3 class="text-success">Add Contact</h3>
          <p class="fontstyle-italic">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda eos error cum, nihil
            repudiandae officia sit, amet voluptatibus vero deserunt soluta ut repellat ea dolorem
            eveniet animi esse ab dignissimos.
          </p>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-4">
          <form>
            <div class="mt-3">
              <input type="text" class="form-control" placeholder="name" />
            </div>
            <div class="mt-3">
              <input type="text" class="form-control" placeholder="Photo Url" />
            </div>
            <div class="mt-3">
              <input type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="mt-3">
              <input type="number" class="form-control" placeholder="Mobile" />
            </div>
            <div class="mt-3">
              <input type="text" class="form-control" placeholder="Company" />
            </div>
            <div class="mt-3">
              <input type="text" class="form-control" placeholder="Title" />
            </div>
            <div class="mt-3">
              <select class="form-control" id="">
                <option value="">Select Group</option>
              </select>
            </div>
            <div class="mt-3">
              <input type="submit" class="btn btn-success" value="Create" />
            </div>
          </form>
        </div>
        <div class="col-md-4">
        <img class="contact-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CRKPij6o2waFROp-89BCE8lEf96jLsndRQ&usqp=CAU" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddContact',
};
</script>
<style lang="css"></style>
