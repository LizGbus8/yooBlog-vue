<template>
  <div>
    <div class="window">
      <div class="handle">
        <div class="buttons">
          <button class="close" :style="{'visibility': close}"
            @mouseup="hidden('close')"
            @mouseout="visible('close')">
          </button>
          <button class="minimize" :style="{'visibility': minimize}"
            @mouseover="hidden('minimize')"
            @mouseleave="visible('minimize')">
          </button>
          <button class="maximize" :style="{'visibility': maximize}"
            @mouseover="hidden('maximize')"
            @mouseleave="visible('maximize')">
          </button>
        </div>
        <span class="title">{{console}}</span>
      </div>
      <div class="console" v-html="console" @keydown.stop="input($event)" tabindex="-1"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Console",
    data() {
      return {
        close: 'visible',
        minimize: 'visible',
        maximize: 'visible',
        title: 'mac@mbp~(lizg)',
        console: '',
        path: '$',
        command: '',
        commands: [{
          "name": "clear",
          "function": "clearConsole"
        }, {
          "name": "help",
          "function": "help"
        }]
      }
    },
    mounted() {
      this.displayPrompt();
    },
    methods: {
      displayPrompt() {
        this.console += "➜ "
      },
      input(p) {
        console.log(p);
        this.console += "➜ "
      },
      hidden(color) {
        if (color == 'close'){
          this.close = 'hidden'
        } else if (color == 'minimize') {
          this.minimize = 'hidden'
        }else if (color == 'maximize') {
          this.maximize = 'hidden'
        }

      },
      visible(color) {
        if (color === 'close'){
          this.close = 'visible'
        } else if (color === 'minimize') {
          this.minimize = 'visible'
        }else if (color === 'maximize') {
          this.maximize = 'visible'
        }

      }
    }
  }
</script>

<style scoped lang="stylus">
  *
    box-sizing border-box

  textarea,
  input,
  button
    outline none
  .window-button,
  .window .buttons .close,
  .window .buttons .minimize,
  .window .buttons .maximize
    padding 0
    margin 0
    margin-right 4px
    width 12px
    height 12px
    background-color gainsboro
    border 1px solid rgba(0, 0, 0, 0.2)
    border-radius 6px
    color rgba(0, 0, 0, 0.5)
  .window
    margin-top 7px
    animation bounceIn 1s ease-in-out
    width 100%
    .handle
      height 22px
      background linear-gradient(0deg, #d8d8d8, #ececec)
      border-top 1px solid white
      border-bottom 1px solid #b3b3b3
      border-top-left-radius 5px
      border-top-right-radius 5px
      color rgba(0, 0, 0, 0.7)
      font-family Helvetica, sans-serif
      font-size 13px
      line-height 22px
      text-align center
    .buttons
      position absolute
      float left
      margin 0 8px
      .close
        background-color #ff6159
      .minimize
        background-color #ffbf2f
      .maximize
        background-color #25cc3e

    .console
      width 100%
      outline none;
      background-color black
      opacity 0.7
      height 230px
      color white
      font-family 'Source Code Pro', monospace
      font-weight 200
      font-size 14px
      white-space pre
      resize none
      border-bottom-left-radius 5px
      border-bottom-right-radius 5px
      overflow-y auto
      &::after
        content "|"
        animation blink 2s steps(1) infinite
  .prompt
    color #bde371

  .path
    color #5ed7ff

  @keyframes blink {
    50% {
      color: transparent;
    }
  }

  @keyframes bounceIn {
    0% {
      transform: translateY(-1000px);
    }
    60% {
      transform: translateY(200px);
    }
    100% {
      transform: translateY(0px);
    }
  }

</style>
