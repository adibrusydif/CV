<template>
  <v-card class="profile-card">

    <img :src="profilePic">

    <div class="profile-header">
      <div class="md-title info-heading">Adib Rusydi Fikri</div>
      <div class="info-subheading">Software & Web Developer</div>
      <div class="info-old">21 Years old young-charming boy</div>
    </div>

    <div class="infos">
      <ul class="profile-list" v-for="item in profileList">
        <li>
          <a v-if="item.link !== null" :href="item.link">
            <span class="title" v-if="item.fa == null"><v-icon>{{item.icon}}</v-icon></span>
            <span class="title" v-else><i :class="item.icon"></i></span>
            <span class="text">{{item.text}}</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="profile-menu">
      <router-link v-for="item in links" :to="item.path">
        <v-btn dark flat v-tooltip:bottom="{ html: item.text }">
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </router-link>
    </div>

  </v-card>
</template>

<script>
const me = require('@/assets/me.jpg');

export default {
  name: 'profile',
  data () {
    return {
      profilePic: me,
      profileList:[
        {text:'adibrusydif@gmail.com', icon:'mail', link:'mailto:adibrusydif@gmail.com?Subject=Hello!'},
        // {text:'imartic.github.io', icon:'language', link:'https://imartic.github.io'},
        {text:'+628 1234 000 995', icon:'phone'},
        {text:'adibrusydif', icon:'fa fa-instagram', fa:'instagram',link:'https://www.instagram.com/adibrusydif/'},
        {text:'LinkedIn profile', icon:'fa fa-linkedin', fa:'linkedin', link:'https://www.linkedin.com/in/adib-rusydi-fikri-90595712b/'},
        {text:'GitHub profile', icon:'fa fa-github', fa:'github', link:'https://github.com/adibrusydif'}
      ],
      links:[
        {path:'/about', text:'About me', icon:'person'},
        {path:'/portfolio', text:'Portfolio', icon:'work'},
        {path:'/contact', text:'Contact me', icon:'mail'}
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.profile-card{margin-top:67px;background-color:#146 !important;color:white;text-align:center;}

.profile-card img{margin-top:-67px;width:135px;height:135px;border-radius:50%;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.18), 0 2px 10px 0 rgba(0, 0, 0, 0.14);}

.profile-header{padding:35px 35px 19px 35px;}

.info-heading{font-size:37px;font-weight:500;color:#fff;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.29)}
.info-subheading{font-weight:400;font-size:16px;color:#d2d2d2;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.29);margin-top:-10px}
.info-old{font-weight:400;font-size:14px;color:#d2d2d2;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.29);margin-top:5px}

.infos{padding:20px 0 50px 0}
.profile-list{list-style-type: none;padding:0}
.profile-list li{padding-bottom:8px}
.profile-list .title{color:#fff;display:inline-flex;vertical-align:middle;padding-bottom:4px}
.profile-list .title i{font-size:23px;padding-right:5px}
.profile-list .title .fa{padding-left:2px;}
.profile-list .text{font-size:16px;font-weight:400;line-height:20px;color:#fff;}
i{font-size:23px;padding-right:5px}
.fa{padding-left:3px;}

.profile-menu{border-top:1px solid rgba(150,175,185,.4)}

.router-link-active > button i{
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
  color:#146;
  -webkit-transition: all 0.2s linear;
  -moz-transition: all 0.2s linear;
  -ms-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
</style>
