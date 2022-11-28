<template>
  <div
    class="flex flex-wrap items-center justify-around md:justify-center my-8"
  >
    <router-link
      :to="{ name: 'Home' }"
      class="border border-blue-600 block mr-0 md:mr-4 px-3 py-2 rounded-md text-base font-medium"
      :class="
        $route.name == 'Home'
          ? 'bg-blue-600 text-white b'
          : 'bg-blue-100 text-blue-800 '
      "
      aria-current="page"
      >Bridge to Destination Chain</router-link
    >

    <router-link
      :to="{ name: 'Destination' }"
      class="border border-teal-600 block px-3 py-2 rounded-md text-base font-medium"
      :class="
        $route.name == 'Destination'
          ? 'bg-teal-600 text-white'
          : 'bg-teal-100 text-teal-800'
      "
      aria-current="page"
      >Send token back to Original Chain</router-link
    >
  </div>
</template>
