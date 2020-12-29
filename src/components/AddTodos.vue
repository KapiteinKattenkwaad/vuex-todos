<template>
  <div >
    <h3>
      Add Todos
    </h3>

    <div class="add">
      <form action="">
        <input type="text" v-model="titleIng" placeholder="Add todo">
        <input type="submit" value="Submit">
      </form>
    </div>

  </div>
</template>

<script>

export default {
  name: 'AddTodos',
}
</script>


<style scoped>

  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
  }
  input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
  }

</style>
