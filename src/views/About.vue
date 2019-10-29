<template>
  <div class="about">
    <!-- header -->
    <div class="about__header">
      <h1>Yes, the router is working!</h1>
      <span>Visit project's repository on GitHub:</span>
      <a class="link" href="https://github.com/adele-angel/Vue-Image-Gallery"
        >https://github.com/adele-angel/Vue-Image-Gallery</a
      >
    </div>

    <!-- partition -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="50"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      class="partition"
    >
      <path d="M0 0 50 100 50 100 100 0 Z" />
    </svg>

    <div class="about__content">
      <span>This project was built using:</span>
      <ul>
        <li>Vue.js framework</li>
        <li>TypeScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
      </ul>

      <span>Prerequisites:</span>
      <ul>
        <li>
          Results displayed as tiles which load gradually using infinite scroll
        </li>
        <li>Switches to slider mode when tile is clicked</li>
        <li>Clicked image is displayed enlarged</li>
        <li>Next and previous images are displayed as clickable thumbnails</li>
      </ul>
    </div>
  </div>
</template>
