<template>
    <v-card>
        <v-card-title>
            {{title}}
            <v-spacer></v-spacer>
            <v-btn icon flat v-tooltip:left="{ html: sectionTooltip }" @click.native="section = !section">
                <v-icon>{{sectionIcon}}</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-text id="section-text-edu">
            <ul class="about-list">
                <li class="about-list-item" v-for="(item, index) in education">
                    <v-row>
                        <!--<div class="edu-logo">
                            <img :src="item.logo" height="70" width="70">
                        </div>-->
                        <div class="about-header">
                            <div class="about-pos">{{item.degree}}</div>
                            <div class="about-title">{{item.title}}</div>
                            <div class="about-time">{{item.time}}</div>
                        </div>
                    </v-row>

                    <div class="about-text" v-html="item.text"></div>
                    <v-divider v-if="index !== (education.length-1)"></v-divider>
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
  name: 'education',
  data () {
    return {
      title: 'Education',
      section: true,
      sectionIcon: 'expand_less',
      sectionTooltip: 'Hide section',
      education:[
        {
            title:'SMA 1 Kudus - Kudus Regency',
            logo:'',
            degree:'Senior High School , Science',
            time:'July 2011 - May 2014',
            text:
                'Just Orginary Senior High School ,' +
                'Im An Active Student with a lot of activity organization school' +
                '<br/>Senior High School website: <a href="https://www.sma1kudus.sch,id">https://www.sma1kudus.sch.id</a>'
        },
        {
            title:'Binus University - Jakarta City',
            logo:'',
            degree:'Computer Science',
            time:'August 2014 - August 2018',
            text:'Exchange semester at TH Wildau.<br/>' +
                'Software project (JavaFX) and German language.' +
                '<br/>University website: <a href="http://www.binus.ac.id">http://www.binus.ac.id</a>'
        }
      ]
    }
  },
  methods: {

  },
  watch: {
    section: function() {
        if(!this.section){
            document.getElementById('section-text-edu').style.display = "none";
            this.sectionIcon = 'expand_more';
            this.sectionTooltip = 'Show section';
        }
        else{
            document.getElementById('section-text-edu').style.display = "block";
            this.sectionIcon = 'expand_less';
            this.sectionTooltip = 'Hide section';
        }
    }
  }
}
</script>

<style scoped>

</style>
