<template>
    <div>
        <v-card id="about-section">
            <v-card-title>
                {{title}}
                <v-spacer></v-spacer>
                <v-btn icon flat v-tooltip:left="{ html: sectionTooltip }" @click.native="section = !section">
                    <v-icon>{{sectionIcon}}</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text id="section-text">
                <span class="about">{{about}}</span>
                <div v-html="getInTouch"></div>
                <div class="tech-section">
                    <div>Some technologies I use:</div>
                    <div v-for="tech in techIUse" class="tech-item">{{tech}}</div>
                </div>
                <div class="lang-section">
                    <div>Languages I speak:</div>
                    <div v-for="lang in langsISpeak" class="tech-item">{{lang}}</div>
                </div>
            </v-card-text>
        </v-card>

        <Experience></Experience>
        <Education></Education>
    </div>
</template>

<script>
import Experience from '@/components/Experience'
import Education from '@/components/Education'

export default {
  name: 'about',
  data () {
    return {
      title: 'About me',
      section: true,
      sectionIcon: 'expand_less',
      sectionTooltip: 'Hide section',
      about: 'I\'m a Web Developer and fresh graduate' +
             'of Information Technlogy with passion for coding and build some app. I have over 1 year ' +
             'professional experience as a Web Developer developing mainly for Front End Some Web Product, ' +
             'but have also worked on several web-based projects. Lately I\'m focusing on ' +
             'Front-end web development and learning about the latest frameworks like Vue ' +
             'I live in a little boarding house at Kemanggisan, Jakarta barat. But I come From Little City with amazing People named Kudus'+
            'When I\'m not coding, I try to do some game (especially ' +
             'Dota 2 and CSGO).',
      getInTouch: `If you want to get in touch with me, feel free to
             <a href="mailto:adibrusydif@gmail.com?Subject=Hello!">send me a mail</a>.`,
      techIUse: ['C','MS SQL Server','HTML','CSS','JavaScript','Vue.js','bootstrap','PHP'],
      langsISpeak: ['English','Javanese','Indonesia']
    }
  },
  methods: {

  },
  watch: {
    section: function() {
        if(!this.section){
            document.getElementById('section-text').style.display = "none";
            this.sectionIcon = 'expand_more';
            this.sectionTooltip = 'Show section';
        }
        else{
            document.getElementById('section-text').style.display = "block";
            this.sectionIcon = 'expand_less';
            this.sectionTooltip = 'Hide section';
        }
    }
  },
  components:{
    Experience, Education
  }
}
</script>

<style>
    .about-list{list-style-type:none;padding:0;margin-top:7px}
    .about-logo{padding:4px 10px 0 7px}
    .about-header{margin-bottom:15px;padding-left:7px}
    .divider{margin-top:28px;margin-bottom:28px}
    .about-pos{font-size:20px;font-weight:400}
    .about-title{font-size:15px;font-weight:500;color:#333;margin-right:10px}
    .about-time{padding-top:2px;font-weight:400;color:#333}
    .about{font-size:16px; margin-bottom: 10px; padding:15px}

    #about-section .tech-section{margin-top:25px;}
    #about-section .lang-section{margin-top:13px;}
    #about-section .tech-item{
        border:1px solid #9ac;
        border-radius:2px;
        color:#646769;
        font-size:13px;
        padding:0 3px 0 3px;
        margin:3px 4px 0 0;
        display: inline-block;
    }
</style>
