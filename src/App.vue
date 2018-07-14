<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>

