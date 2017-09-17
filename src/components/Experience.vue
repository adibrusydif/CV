<template>
    <v-card>
        <v-card-title>
            {{title}}
            <v-spacer></v-spacer>
            <v-btn icon flat v-tooltip:left="{ html: sectionTooltip }" @click.native="section = !section">
                <v-icon>{{sectionIcon}}</v-icon>
            </v-btn>
        </v-card-title>

        <v-card-text id="section-text-exp">
            <ul class="about-list">
                <li class="about-list-item" v-for="(item, index) in work">
                    <v-row>
                        <div class="about-logo">
                            <img :src="item.logo" height="70" width="70">
                        </div>
                        <div class="about-header">
                            <div class="about-pos">{{item.pos}}</div>
                            <div class="about-title">{{item.title}}</div>
                            <div class="about-time">{{item.time}}</div>
                        </div>
                    </v-row>

                    <div class="about-text" v-html="item.text"></div>
                    <v-divider v-if="index !== (work.length-1)"></v-divider>
                </li>
            </ul>
        </v-card-text>
    </v-card>
</template>

<script>
const tcid_logo = require('@/assets/tcid.png');
const impuls_logo = require('@/assets/himti.png');

export default {
  name: 'experience',
  data () {
    return {
      title: 'Experience',
      section: true,
      sectionIcon: 'expand_less',
      sectionTooltip: 'Hide section',
      work:[
        {
            title:'Transcosmos Indonesia',
            logo:tcid_logo,
            pos:'Front End Developer',
            time:'Feb 2017 - Sep 2017',
            text:'Working as Software Developer in Research & Development department at Alarm automatika d.o.o. ' +
                'Worked on several different projects and the ones I worked most on are a self-ticketing cashier for parking lots and a web application ' +
                'for event management (ticketing system) and supervision. For development I mainly used C#, JavaScript/jQuery, ' +
                'HTML, CSS and Microsoft SQL Server.' +
                '<br/>Company website: <a href="https://www.trans-cosmos.co.id">https://www.trans-cosmos.co.id</a>'
        },
        {
            title:'HIMTI Binus University',
            logo:impuls_logo,
            pos:'Relation Expansion - Public Relation',
            time:'Nov 2014 - Feb 2017',
            text:'Worked at HIMTI (Himpunan Mahasiswa Teknik Informatika ) as Public Relation ' +
                'Responsible for the Public Relation and doing some public speaking for promotion some event ' +
                'and Organize some event at HIMTI ' +
                '<br/>Product website: <a href="http://www.himti.org">http://www.himti.org</a>'
        }
      ]
    }
  },
  methods: {

  },
  watch: {
    section: function() {
        if(!this.section){
            document.getElementById('section-text-exp').style.display = "none";
            this.sectionIcon = 'expand_more';
            this.sectionTooltip = 'Show section';
        }
        else{
            document.getElementById('section-text-exp').style.display = "block";
            this.sectionIcon = 'expand_less';
            this.sectionTooltip = 'Hide section';
        }
    }
  }
}
</script>

<style scoped>

</style>
