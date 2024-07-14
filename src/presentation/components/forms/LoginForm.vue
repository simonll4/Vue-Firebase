<template>
  <div>
    <h1 class="text-3xl">Login Form</h1>
  </div>

  <form>
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Email</span>
        <span class="label-text-alt">Top Right label</span>
      </div>
      <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </label>
    <label class="form-control w-full">
      <div class="label">
        <span class="label-text">Password</span>
        <span class="label-text-alt">Top Right label</span>
      </div>
      <input type="password " placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </label>
    <button class="btn btn-block mt-5 btn-acent">Login</button>
    <button class="btn btn-block mt-5 btn-error">Google</button>

  </form>
</template>

<script setup lang="ts">

</script>