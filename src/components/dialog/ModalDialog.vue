<template>
  <div class="box" v-loading="false">
    <div class="buttons" ref="btns">
      <button title="关闭" class="close" @click.stop="close">
      </button>
      <button title="隐藏" class="minimize" @click="down">
      </button>
      <button title="显示" class="maximize" @click="up">
      </button>
    </div>
    <div class="reply-box" ref="replybox" v-loading="this.loading">
      <div class="modal__content">
        <h1>Big Modal</h1>
        <h3>This modal is pretty tall.</h3>
        <p>Selfies normcore four dollar toast four loko listicle artisan. Hoodie Marfa authentic, wayfarers church-key tofu Banksy pop-up Kickstarter Brooklyn heirloom swag synth. Echo Park cray synth mixtape. Tofu gastropub squid readymade, trust fund Wes Anderson DIY PBR 8-bit try-hard +1 Shoreditch lo-fi tote bag.</p>
        <p><img src="http://unsplash.it/600/300" alt="" /></p>
        <p>Mumblecore cred selfies fingerstache. Tousled skateboard plaid lo-fi shabby chic salvia, swag Odd Future Etsy art party Austin cronut. Crucifix whatever Pinterest food truck, pickled viral cray 90's DIY chambray keffiyeh biodiesel Vice blog. Cred meh yr tofu.</p>
        <p>Mumblecore cred selfies fingerstache. Tousled skateboard plaid lo-fi shabby chic salvia, swag Odd Future Etsy art party Austin cronut. Crucifix whatever Pinterest food truck, pickled viral cray 90's DIY chambray keffiyeh biodiesel Vice blog. Cred meh yr tofu.</p>
        <!-- modal close button -->
        <a href="" class="modal__close demo-close">
          <svg class="" viewBox="0 0 24 24">
            <path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/>
            <path d="M0 0h24v24h-24z" fill="none"/>
          </svg>
        </a> </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ModalDialog",
    data(){
      return {
        content:'',
        placeholder:'',
        tip:{'nickName':'','email':''},
        nickName:'',
        email:'',
        website:'',
        pass:false,
        loading:false
      }
    },
    computed:{

    },
    methods:{
      close(){
        this.$store.dispatch("setComponent", {})
      },
      down(){
        this.$refs.replybox.style.top = '95%';
        this.$refs.btns.style.top = '92.5%';
      },
      up(){
        this.$refs.replybox.style.top = '46%';
        this.$refs.btns.style.top = '43.5%';
      }
    },

  }
</script>

<style scoped lang="stylus">
  .box
    background-color #f5f2f0
    height 1000px
    .buttons
      position fixed
      margin 0 8px
      top 17.5%
      left 28%
      outline none
      transition: all 0.5s ease 0s;
      button
        outline none
        padding: 0;
        margin: 0;
        margin-right: 4px;
        width: 13px;
        height: 13px;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 50%;
        color: rgba(0,0,0,0.5);
      .close
        background-color #ff6159
      .minimize
        background-color #ffbf2f
      .maximize
        background-color #25cc3e
    .reply-box
      text-align:center;
      margin auto
      width 600px
      height 500px
      overflow:auto;
      border 1px solid rgb(240, 240, 240)
      padding 10px
      background-color white
      margin-bottom 10px
      position: fixed;
      border-radius 5px
      z-index: 9999;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      left: 28%;
      top: 20%;
      transition: all 0.5s ease 0s;
      &::-webkit-scrollbar
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
      &::-webkit-scrollbar-thumb /*滚动条里面小方块*/
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #535353;
      .reply
        .info
          font-size 14px
          height 36px
          input
            width 197px;
            height 27px;
            border 0px
            outline: none;
            border-bottom 1.2px dashed rgb(222, 222, 222)
            transition: all 0.5s ease 0s;
            &:hover
              border-bottom 1.2px dashed #df5000
        .content
          .textarea-box
            width 596px;
            height 85px
            overflow:auto;
            overflow-x:hidden;
            outline: none;
            border-style: none none dashed;
            border-bottom 1.2px dashed rgb(222, 222, 222)
            text-align left
            font-size 16px
            img
              width 25px
            &:empty::before
              content: attr(placeholder);
        .emoji
          height 180px
          border-bottom 1.2px dashed rgb(222, 222, 222)
          ul
            display flex;
            flex-wrap wrap
            list-style-type: disc;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            padding 0px
            li
              text-align: -webkit-match-parent;
              list-style none
              padding 5px 8px
              img
                width 30px
        .bottom
          height 46px
          display flex
          justify-content space-between
          align-items center
          .tip
            text-align center
            color rgb(153, 153, 153);
            font-size: 12px;
            img
              width 20px
          .op
            vertical-align middle
            button
              width 100px;
              height 35px;
              background-color rgb(25, 190, 107);
              padding 0px
              border 1px solid #6bc30d
              color white
              border-radius 5px
              font-size 16px
              transition: all .36s ease-in-out;
              cursor pointer
              outline none
              &:hover
                width 104px
              &:selection
                width 160px
                background-color #62b309
    @keyframes blink
      50%
        color: transparent;

</style>
