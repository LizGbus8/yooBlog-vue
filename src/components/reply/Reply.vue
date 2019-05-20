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
      <div class="reply">
      <div class="info">
        <input placeholder="昵称" v-model="nickName" @blur="validate('nickName')"></input>
        <input placeholder="邮箱" v-model="email" @blur="validate('email')"></input>
        <input placeholder="网站" v-model="website" @blur="validate('website')"></input>
      </div>
      <div class="content">
        <div class="textarea-box"
             ref="textarea"
             v-html="this.content"
             contenteditable :placeholder="this.$store.state.component.placeholder"
             tabindex="1">
        </div>
      </div>
      <div class="emoji">
        <ul>
          <li title="呵呵" @click="emoji('呵呵')"><img class="biaoqing newpaopao" title="呵呵"
                                                 src="/static/emoji/呵呵.png"></li>
          <li title="哈哈" @click="emoji('哈哈')"><img class="biaoqing newpaopao" title="哈哈"
                                                 src="/static/emoji/哈哈.png"></li>
          <li title="吐舌" @click="emoji('吐舌')"><img class="biaoqing newpaopao" title="吐舌"
                                                 src="/static/emoji/吐舌.png"></li>
          <li title="太开心" @click="emoji('太开心')"><img ref="newpaopao" class="biaoqing newpaopao" title="太开心"
                                                   src="/static/emoji/太开心.png"></li>
          <li title="笑眼" @click="emoji('笑眼')"><img class="biaoqing newpaopao" title="笑眼"
                                                 src="/static/emoji/笑眼.png"></li>
          <li title="花心" @click="emoji('花心')"><img class="biaoqing newpaopao" title="花心"
                                                 src="/static/emoji/花心.png"></li>
          <li title="小乖" @click="emoji('小乖')"><img class="biaoqing newpaopao" title="小乖"
                                                 src="/static/emoji/小乖.png"></li>
          <li title="乖" @click="emoji('乖')"><img class="biaoqing newpaopao" title="乖"
                                               src="/static/emoji/乖.png"></li>
          <li title="捂嘴笑" @click="emoji('捂嘴笑')"><img class="biaoqing newpaopao" title="捂嘴笑"
                                                   src="/static/emoji/捂嘴笑.png"></li>
          <li title="滑稽" @click="emoji('滑稽')"><img class="biaoqing newpaopao" title="滑稽"
                                                 src="/static/emoji/滑稽.png"></li>
          <li title="你懂的" @click="emoji('你懂的')"><img class="biaoqing newpaopao" title="你懂的"
                                                   src="/static/emoji/你懂的.png"></li>
          <li title="不高兴" @click="emoji('不高兴')"><img class="biaoqing newpaopao" title="不高兴"
                                                   src="/static/emoji/不高兴.png"></li>
          <li title="怒" @click="emoji('怒')"><img class="biaoqing newpaopao" title="怒"
                                               src="/static/emoji/怒.png"></li>
          <li title="汗" @click="emoji('汗')"><img class="biaoqing newpaopao" title="汗"
                                               src="/static/emoji/汗.png"></li>
          <li title="黑线" @click="emoji('黑线')"><img class="biaoqing newpaopao" title="黑线"
                                                 src="/static/emoji/黑线.png"></li>
          <li title="泪" @click="emoji('泪')"><img class="biaoqing newpaopao" title="泪"
                                               src="/static/emoji/泪.png"></li>
          <li title="真棒" @click="emoji('真棒')"><img class="biaoqing newpaopao" title="真棒"
                                                 src="/static/emoji/真棒.png"></li>
          <li title="喷" @click="emoji('喷')"><img class="biaoqing newpaopao" title="喷"
                                               src="/static/emoji/喷.png"></li>
          <li title="惊哭" @click="emoji('惊哭')"><img class="biaoqing newpaopao" title="惊哭"
                                                 src="/static/emoji/惊哭.png"></li>
          <li title="阴险" @click="emoji('阴险')"><img class="biaoqing newpaopao" title="阴险"
                                                 src="/static/emoji/阴险.png"></li>
          <li title="鄙视" @click="emoji('鄙视')"><img class="biaoqing newpaopao" title="鄙视"
                                                 src="/static/emoji/鄙视.png"></li>
          <li title="酷" @click="emoji('酷')"><img class="biaoqing newpaopao" title="酷"
                                               src="/static/emoji/酷.png"></li>
          <li title="啊" @click="emoji('啊')"><img class="biaoqing newpaopao" title="啊"
                                               src="/static/emoji/啊.png"></li>
          <li title="狂汗" @click="emoji('狂汗')"><img class="biaoqing newpaopao" title="狂汗"
                                                 src="/static/emoji/狂汗.png"></li>
          <li title="what" @click="emoji('what')"><img class="biaoqing newpaopao" title="what"
                                                     src="/static/emoji/what.png"></li>
          <li title="疑问" @click="emoji('疑问')"><img class="biaoqing newpaopao" title="疑问"
                                                 src="/static/emoji/疑问.png"></li>
          <li title="酸爽" @click="emoji('酸爽')"><img class="biaoqing newpaopao" title="酸爽"
                                                 src="/static/emoji/酸爽.png"></li>
          <li title="呀咩爹" @click="emoji('呀咩爹')"><img class="biaoqing newpaopao" title="呀咩爹"
                                                   src="/static/emoji/呀咩爹.png"></li>
          <li title="委屈" @click="emoji('委屈')"><img class="biaoqing newpaopao" title="委屈"
                                                 src="/static/emoji/委屈.png"></li>
          <li title="惊讶" @click="emoji('惊讶')"><img class="biaoqing newpaopao" title="惊讶"
                                                 src="/static/emoji/惊讶.png"></li>
          <li title="睡觉" @click="emoji('睡觉')"><img class="biaoqing newpaopao" title="睡觉"
                                                 src="/static/emoji/睡觉.png"></li>
          <li title="笑尿" @click="emoji('笑尿')"><img class="biaoqing newpaopao" title="笑尿"
                                                 src="/static/emoji/笑尿.png"></li>
          <li title="挖鼻" @click="emoji('挖鼻')"><img class="biaoqing newpaopao" title="挖鼻"
                                                 src="/static/emoji/挖鼻.png"></li>
          <li title="吐" @click="emoji('吐')"><img class="biaoqing newpaopao" title="吐"
                                               src="/static/emoji/吐.png"></li>
          <li title="犀利" @click="emoji('犀利')"><img class="biaoqing newpaopao" title="犀利"
                                                 src="/static/emoji/犀利.png"></li>
          <li title="小红脸" @click="emoji('小红脸')"><img class="biaoqing newpaopao" title="小红脸"
                                                   src="/static/emoji/小红脸.png"></li>
          <li title="懒得理" @click="emoji('懒得理')"><img class="biaoqing newpaopao" title="懒得理"
                                                   src="/static/emoji/懒得理.png"></li>
          <li title="勉强" @click="emoji('勉强')"><img class="biaoqing newpaopao" title="勉强"
                                                 src="/static/emoji/勉强.png"></li>
          <li title="玫瑰" @click="emoji('玫瑰')"><img class="biaoqing newpaopao" title="玫瑰"
                                                 src="/static/emoji/玫瑰.png"></li>
          <li title="茶杯" @click="emoji('茶杯')"><img class="biaoqing newpaopao" title="茶杯"
                                                 src="/static/emoji/茶杯.png"></li>
          <li title="大拇指" @click="emoji('大拇指')"><img class="biaoqing newpaopao" title="大拇指"
                                                   src="/static/emoji/大拇指.png"></li>
          <li title="胜利" @click="emoji('胜利')"><img class="biaoqing newpaopao" title="胜利"
                                                 src="/static/emoji/胜利.png"></li>
          <li title="haha" @click="emoji('haha')"><img class="biaoqing newpaopao" title="haha"
                                                     src="/static/emoji/haha.png"></li>
        </ul>
      </div>
      <div class="bottom">
        <div class="tip"><img class="biaoqing newpaopao" title="呵呵"
                              src="/static/emoji/Retro Mario World Icon.jpg">support markdown (*￣▽￣*)ブ
          <span style="color: rgb(255,0,0)">{{this.tip.nickName}}{{this.tip.email}}</span>
        </div>
        <div class="op"><button @click="submit">{{this.$store.state.component.submitDesc}}</button></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import qs from "qs";

  export default {
    name: "Reply",
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
      },
      validate(val) {
        //昵称长度需要大于0
        if (val === 'nickName') {
          const tip = '昵称一定要填哦~';
          if (this.nickName.length <= 0) {
            // this.tip += this.tip.indexOf(tip) == -1 ? tip : '';//tip中有相同提示就不用拼接这个提示啦了
            this.tip.nickName = tip;
          } else {
            this.tip.nickName=''
          }
        //邮箱格式要正确
        } else if (val === 'email') {
          const tip = '邮箱格式还不对哦~';
          //邮箱正则表达式
          const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
          //正则验证不通过，格式不对
          if (!reg.test(this.email)) {
            this.tip.email = tip;
          }else {
            this.tip.email = '';
          }
        }
      },
      emoji(picName) {
        let url = "/static/emoji/" + picName + ".png";
        this.content = this.$refs.textarea.innerHTML.toString() + '<img style="width: 22px;height: 22px" src='+url+'/>';
      },
      submit(){
        //再次验证
        const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        //所有input格式都正确
        if (this.nickName.length >0 && reg.test(this.email) && this.content.length >0) {
          this.loading=true;

          //获取参数
          const params = {
            nickName: this.nickName,
            email: this.email,
            website: this.website,
            content: this.content
          };
          //id为可变字段，可能为rid、cid、ownerId
          if (typeof this.$store.state.component.id != undefined ) {
            params.id = this.$store.state.component.id;
          }
          //后台提交
          this.$store.dispatch(this.$store.state.component.action, {
            params: qs.stringify(params), callback: (result) => {
              this.loading=false;
              //留言添加成功
              if (result.code === 0) {
                //更新store数据,只有回复需要这个逻辑，评论和留言不需要
                if (this.$store.state.component.updateAction != undefined) {
                  this.$store.state.component.updateAction(result);
                }

                //隐藏回复组件
                this.$store.dispatch("setComponent", {});
                //提示
                this.$message({
                  type:'success',
                  center:true,
                  message: '提交成功！\\(^ 0^)/'
                });
              //留言添加失败
              }else {
                this.loading=false;
                this.$message({
                  type:'error',
                  center:true,
                  message: '提交失败了！(⊙０⊙)'
                });
              }
            }
          });

        }else {
          let tip = this.tip;
          this.tip = {'nickName':"提示还有问题哦"}
          setTimeout(()=>{
            this.tip = tip;
          },2000)
        }
      }
    },
    watch:{

    }

  }
</script>

<style scoped lang="stylus">
  .box
    .buttons
      position fixed
      margin 0 8px
      top 43.5%
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
      border 1px solid rgb(240, 240, 240)
      padding 10px
      background-color white
      margin-bottom 10px
      position: fixed;
      border-radius 5px
      z-index: 9999;
      overflow: hidden;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      left: 28%;
      top: 46%;
      transition: all 0.5s ease 0s;
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
            &::-webkit-scrollbar
              width 5px;     /*高宽分别对应横竖滚动条的尺寸*/
              height 1px;
            &::-webkit-scrollbar-thumb /*滚动条里面小方块*/
              border-radius 10px;
              -webkit-box-shadow inset 0 0 5px rgba(0,0,0,0.2);
              background #686767
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
