<script setup>
import ContactInfo from '../components/ContactInfo.vue';
import HotMenu from '../components/HotMenu.vue';
import HotHours from '../components/HotHours.vue';
import InstagramFeed from '../components/InstagramFeed.vue';
import SocialMediaIcons from '../components/SocialMediaIcons.vue';</script>

<template>
  <footer class="footer-area pd-top-100">
    <div class="footer-inner padding-top-100 padding-bottom-65">
      <div class="container">
        <div class="row">
          <ContactInfo />
          <HotMenu />
          <HotHours />
          <InstagramFeed/>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-md-start text-center">
            <div class="copyright-area">
              <p>© 2021 Foodka. All Rights Reserved by Themefie</p>
            </div>
          </div>
          <div class="col-md-6">
            <SocialMediaIcons/>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
</style>
