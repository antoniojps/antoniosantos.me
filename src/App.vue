<template>
  <div id="app">
    <!-- $route.fullPath tells Vue that if the
    fullPath changes even if the component
    is the same you should render it from scratch -->
    <router-view :key="$route.fullPath" />
  </div>
</template>

