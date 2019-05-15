<template>
  <div>
    <div class="window">
      <div class="header">
        <div class="buttons">
          <button class="close">
          </button>
          <button class="minimize">
          </button>
          <button class="maximize">
          </button>
        </div>
        <span class="title">{{title}}</span>
      </div>
      <div class="terminal-windown" tabindex="-1" ref="terminalWindow" id="terminalWindow" @click="handleFocus">
        <p>Welcome to {{title}}.</p>
        <p>
          <span class="prompt"></span><span class="cmd">cd {{title}}</span>
        </p>

        <p v-for="(item, index) in messageList" :key="index">
          <span>{{item.time}}</span>
          <span v-if="item.label" :class="item.type">{{item.label}}</span>
          <span class="cmd" v-if="!item.message.list">{{item.message}}</span>
          <span class="cmd" v-else>
              <span>{{item.message.text}}</span>
              <ul>
                <li v-for="(li,index) in item.message.list" :key="index">
                  <span v-if="li.label" :class="li.type">{{li.label}}:</span>
                  <pre>{{li.message}}</pre>
                </li>
              </ul>
            </span>
        </p>

        <p v-if="actionResult"><span class="cmd">{{actionResult}}</span></p>

        <p class="terminal-last-line" ref="terminalLastLine">
          <span class="prompt" v-if="lastLineContent==='&nbsp'">\{{title}}&nbsp</span>
          <span>{{inputCommand}}</span>
          <span :class="lastLineClass" v-html="lastLineContent"></span>
          <input
            v-model="inputCommand"
            :disabled="lastLineContent!=='&nbsp'"
            autofocus="true"
            type="text"
            @keyup="handleCommand($event)"
            ref="inputBox"
            class="input-box">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import commandList from "../../common/plugins/commandList";
  import taskList from "../../common/plugins/taskList";

  export default {
    name: 'Console',
    data() {
      return {
        title: 'vTerminal',
        messageList: [],
        actionResult: '',
        lastLineContent: '...',
        inputCommand: '',
        supportingCommandList: '',
        historyIndex: 0,
        commandHistory: []
      };
    },
    props: {
      defaultTask: {
        required: false,
        default: 'defaultTask'
      }
    },
    computed: {
      lastLineClass() {
        if (this.lastLineContent === '&nbsp') {
          return 'cursor'
        } else if (this.lastLineContent === '...') {
          return 'loading'
        }
      }
    },
    created() {
      this.supportingCommandList = Object.keys(commandList).concat(Object.keys(taskList))
      this.handleRun(this.defaultTask).then(() => {
        this.pushToList({ level: 'System', message: 'Type "help" to get a supporting command list.' });
        this.handleFocus()
      })
    },
    methods: {
      handleFocus() {
        this.$refs.inputBox.focus();
      },
      handleCommand(e) {
        if (e.keyCode !== 13) {
          this.handlekeyEvent(e);
          return
        }
        this.commandHistory.push(this.inputCommand);
        this.historyIndex = this.commandHistory.length;
        this.pushToList({ message: `$ \\${this.title} ${this.inputCommand} ` });
        if (!this.inputCommand) return;
        const commandArr = this.inputCommand.split(' ');
        if (commandArr[0] === 'help') {
          this.printHelp(commandArr[1])
        } else if (commandList[this.inputCommand]) {
          commandList[this.inputCommand].messages.map(item => this.pushToList(item))
        } else if (taskList[this.inputCommand.split(' ')[0]]) {
          this.handleRun(this.inputCommand.split(' ')[0], this.inputCommand)
        } else {
          this.pushToList({ level: 'System', message: 'Unknown Command.'});
          this.pushToList({ level: 'System', message: 'type "help" to get a supporting command list.' })
        }
        this.inputCommand = '';
        this.autoScroll()
      },
      handlekeyEvent(e) {
        switch (e.keyCode) {
          //向上
          case 38:
            this.historyIndex = this.historyIndex === 0 ? 0 : this.historyIndex - 1;
            this.inputCommand = this.commandHistory[this.historyIndex];
            break;
            //向下
          case 40:
            this.historyIndex = this.historyIndex === this.commandHistory.length ? this.commandHistory.length : this.historyIndex + 1
            this.inputCommand = this.commandHistory[this.historyIndex];
            break;
          default:
            break;
        }
      },
      handleRun(taskName, input) {
        this.lastLineContent = '...';
        return taskList[taskName][taskName](this.pushToList, input).then(done => {
          this.pushToList(done);
          this.lastLineContent = '&nbsp'
        }).catch(error => {
          this.pushToList(error || { type: 'error', label: 'Error', message: 'Something went wrong!' });
          this.lastLineContent = '&nbsp'
        })
      },
      pushToList(message) {
        this.messageList.push(message);
        this.autoScroll()
      },
      printHelp(input) {
        if (!input) {
          this.pushToList({ message: 'Here is a list of supporting command.' });
          this.supportingCommandList.map(command => {
            if (commandList[command]) {
              this.pushToList({ type: 'success', label: command, message: '---> ' + commandList[command].description })
            } else {
              this.pushToList({ type: 'success', label: command, message: '---> ' + taskList[command].description })
            }
            return undefined
          });
          this.pushToList({ message: 'Enter help <command> to get help for a particular command.' })
        } else {
          const command = commandList[input] || taskList[input]
          this.pushToList({ message: command.description })
        }
        this.autoScroll()
      },
      time() {
        return new Date().toLocaleTimeString().split('').splice(2).join('')
      },
      autoScroll() {
        this.$nextTick(() => {
          this.$refs.terminalWindow.scrollTop = this.$refs.terminalLastLine.offsetTop;
        })
      }
    }
  };
</script>

<style scoped lang="stylus">
  p {
    overflow-wrap: break-word;
    word-break: break-all;
    font-size: 13px;
    margin 10px
    .cmd {
      line-height: 24px;
    }

    .info {
      padding: 2px 3px;
      background: #2980b9;
    }

    .warning {
      padding: 2px 3px;
      background: #f39c12;
    }

    .success {
      padding: 2px 3px;
      background: #27ae60;
    }

    .error {
      padding: 2px 3px;
      background: #c0392b;
    }

    .system {
      padding: 2px 3px;
      background: #bdc3c7;
    }
  }
  .window
    margin-top 7px
    width 704px
    .header
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

    .terminal-windown
      outline none;
      background-color black
      opacity 0.7
      height 360px
      color white
      font-family Monaco,Menlo,Consolas,monospace;
      font-weight 400
      font-size 13px
      resize none
      border-bottom-left-radius 5px
      border-bottom-right-radius 5px
      overflow-y auto
      .terminal-last-line
        word-spacing 0
        letter-spacing 0
        .input-box
          position: relative;
          background: rgb(3, 9, 36);
          border: none;
          width: 1px;
          opacity: 0;
          cursor: default;
          input:focus
            outline: none;
            border: none;
      .cmd
        line-height 24px
      .prompt
        color #00ff00
        &:before
          content "$"
          margin-right 5px
  .close,
  .minimize,
  .maximize
    padding 0
    margin 0
    margin-right 4px
    width 12px
    height 12px
    background-color gainsboro
    border 1px solid rgba(0, 0, 0, 0.2)
    border-radius 6px
    color rgba(0, 0, 0, 0.5)
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

  .cursor {
    margin: 0;
    background-color: white;
    animation: blink 1s step-end infinite;
    -webkit-animation: blink 1s step-end infinite;
    margin-left: -5px;
  }
  @keyframes blink {
    50% {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink {
    50% {
      visibility: hidden;
    }
  }

  .loading {
    display: inline-block;
    width: 0;
    overflow: hidden;
    animation: load 1.2s step-end infinite;
    -webkit-animation: load 1.2s step-end infinite;
  }
  @keyframes load {
    0% {
        width: 0px;
    }
    20% {
        width: 5px;
    }
    40% {
        width: 10px;
    }
    60% {
        width: 15px;
    }
    80% {
        width: 20px;
    }
  }
  @-webkit-keyframes load {
    0% {
      width: 0px;
    }
    20% {
      width: 5px;
    }
    40% {
      width: 10px;
    }
    60% {
      width: 15px;
    }
    80% {
      width: 20px;
    }
  }

  pre {
    font-family: Monaco, Menlo, Consolas, monospace;
    white-space: pre-wrap;
  }
</style>
