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
             tabindex="1" >
        </div>
      </div>
      <div class="emoji">
        <ul>
          <li title="呵呵" data-input="@(呵呵)" @click="emoji()"><img class="biaoqing newpaopao" title="呵呵"
                                                 src="@/assets/emoji/呵呵.png"></li>
          <li title="哈哈" data-input="@(哈哈)"><img class="biaoqing newpaopao" title="哈哈"
                                                 src="@/assets/emoji/哈哈.png"></li>
          <li title="吐舌" data-input="@(吐舌)"><img class="biaoqing newpaopao" title="吐舌"
                                                 src="@/assets/emoji/吐舌.png"></li>
          <li title="太开心" data-input="@(太开心)"><img ref="newpaopao" class="biaoqing newpaopao" title="太开心"
                                                   src="@/assets/emoji/太开心.png"></li>
          <li title="笑眼" data-input="@(笑眼)"><img class="biaoqing newpaopao" title="笑眼"
                                                 src="@/assets/emoji/笑眼.png"></li>
          <li title="花心" data-input="@(花心)"><img class="biaoqing newpaopao" title="花心"
                                                 src="@/assets/emoji/花心.png"></li>
          <li title="小乖" data-input="@(小乖)"><img class="biaoqing newpaopao" title="小乖"
                                                 src="@/assets/emoji/小乖.png"></li>
          <li title="乖" data-input="@(乖)"><img class="biaoqing newpaopao" title="乖"
                                               src="@/assets/emoji/乖.png"></li>
          <li title="捂嘴笑" data-input="@(捂嘴笑)"><img class="biaoqing newpaopao" title="捂嘴笑"
                                                   src="@/assets/emoji/捂嘴笑.png"></li>
          <li title="滑稽" data-input="@(滑稽)"><img class="biaoqing newpaopao" title="滑稽"
                                                 src="@/assets/emoji/滑稽.png"></li>
          <li title="你懂的" data-input="@(你懂的)"><img class="biaoqing newpaopao" title="你懂的"
                                                   src="@/assets/emoji/你懂的.png"></li>
          <li title="不高兴" data-input="@(不高兴)"><img class="biaoqing newpaopao" title="不高兴"
                                                   src="@/assets/emoji/不高兴.png"></li>
          <li title="怒" data-input="@(怒)"><img class="biaoqing newpaopao" title="怒"
                                               src="@/assets/emoji/怒.png"></li>
          <li title="汗" data-input="@(汗)"><img class="biaoqing newpaopao" title="汗"
                                               src="@/assets/emoji/汗.png"></li>
          <li title="黑线" data-input="@(黑线)"><img class="biaoqing newpaopao" title="黑线"
                                                 src="@/assets/emoji/黑线.png"></li>
          <li title="泪" data-input="@(泪)"><img class="biaoqing newpaopao" title="泪"
                                               src="@/assets/emoji/泪.png"></li>
          <li title="真棒" data-input="@(真棒)"><img class="biaoqing newpaopao" title="真棒"
                                                 src="@/assets/emoji/真棒.png"></li>
          <li title="喷" data-input="@(喷)"><img class="biaoqing newpaopao" title="喷"
                                               src="@/assets/emoji/喷.png"></li>
          <li title="惊哭" data-input="@(惊哭)"><img class="biaoqing newpaopao" title="惊哭"
                                                 src="@/assets/emoji/惊哭.png"></li>
          <li title="阴险" data-input="@(阴险)"><img class="biaoqing newpaopao" title="阴险"
                                                 src="@/assets/emoji/阴险.png"></li>
          <li title="鄙视" data-input="@(鄙视)"><img class="biaoqing newpaopao" title="鄙视"
                                                 src="@/assets/emoji/鄙视.png"></li>
          <li title="酷" data-input="@(酷)"><img class="biaoqing newpaopao" title="酷"
                                               src="@/assets/emoji/酷.png"></li>
          <li title="啊" data-input="@(啊)"><img class="biaoqing newpaopao" title="啊"
                                               src="@/assets/emoji/啊.png"></li>
          <li title="狂汗" data-input="@(狂汗)"><img class="biaoqing newpaopao" title="狂汗"
                                                 src="@/assets/emoji/狂汗.png"></li>
          <li title="what" data-input="@(what)"><img class="biaoqing newpaopao" title="what"
                                                     src="@/assets/emoji/what.png"></li>
          <li title="疑问" data-input="@(疑问)"><img class="biaoqing newpaopao" title="疑问"
                                                 src="@/assets/emoji/疑问.png"></li>
          <li title="酸爽" data-input="@(酸爽)"><img class="biaoqing newpaopao" title="酸爽"
                                                 src="@/assets/emoji/酸爽.png"></li>
          <li title="呀咩爹" data-input="@(呀咩爹)"><img class="biaoqing newpaopao" title="呀咩爹"
                                                   src="@/assets/emoji/呀咩爹.png"></li>
          <li title="委屈" data-input="@(委屈)"><img class="biaoqing newpaopao" title="委屈"
                                                 src="@/assets/emoji/委屈.png"></li>
          <li title="惊讶" data-input="@(惊讶)"><img class="biaoqing newpaopao" title="惊讶"
                                                 src="@/assets/emoji/惊讶.png"></li>
          <li title="睡觉" data-input="@(睡觉)"><img class="biaoqing newpaopao" title="睡觉"
                                                 src="@/assets/emoji/睡觉.png"></li>
          <li title="笑尿" data-input="@(笑尿)"><img class="biaoqing newpaopao" title="笑尿"
                                                 src="@/assets/emoji/笑尿.png"></li>
          <li title="挖鼻" data-input="@(挖鼻)"><img class="biaoqing newpaopao" title="挖鼻"
                                                 src="@/assets/emoji/挖鼻.png"></li>
          <li title="吐" data-input="@(吐)"><img class="biaoqing newpaopao" title="吐"
                                               src="@/assets/emoji/吐.png"></li>
          <li title="犀利" data-input="@(犀利)"><img class="biaoqing newpaopao" title="犀利"
                                                 src="@/assets/emoji/犀利.png"></li>
          <li title="小红脸" data-input="@(小红脸)"><img class="biaoqing newpaopao" title="小红脸"
                                                   src="@/assets/emoji/小红脸.png"></li>
          <li title="懒得理" data-input="@(懒得理)"><img class="biaoqing newpaopao" title="懒得理"
                                                   src="@/assets/emoji/懒得理.png"></li>
          <li title="勉强" data-input="@(勉强)"><img class="biaoqing newpaopao" title="勉强"
                                                 src="@/assets/emoji/勉强.png"></li>
          <li title="玫瑰" data-input="@(玫瑰)"><img class="biaoqing newpaopao" title="玫瑰"
                                                 src="@/assets/emoji/玫瑰.png"></li>
          <li title="茶杯" data-input="@(茶杯)"><img class="biaoqing newpaopao" title="茶杯"
                                                 src="@/assets/emoji/茶杯.png"></li>
          <li title="大拇指" data-input="@(大拇指)"><img class="biaoqing newpaopao" title="大拇指"
                                                   src="@/assets/emoji/大拇指.png"></li>
          <li title="胜利" data-input="@(胜利)"><img class="biaoqing newpaopao" title="胜利"
                                                 src="@/assets/emoji/胜利.png"></li>
          <li title="haha" data-input="@(haha)"><img class="biaoqing newpaopao" title="haha"
                                                     src="@/assets/emoji/haha.png"></li>
        </ul>
      </div>
      <div class="bottom">
        <div class="tip"><img class="biaoqing newpaopao" title="呵呵"
                              src="@/assets/emoji/Retro Mario World Icon.jpg">support markdown (*￣▽￣*)ブ
          <span style="color: rgb(255,0,0)">{{this.tip.nickName}}{{this.tip.email}}</span>
        </div>
        <div class="op"><button @click="submit">{{this.$store.state.component.submitDesc}}</button></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import {addTalk} from "../../api";
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
      emoji(url) {
        this.content += this.$refs.textarea.textContent + '<img style="width: 22px;height: 22px" src="data:image/png;base64,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"/>'
        this.$refs.textarea.textContent = '';
      },
      submit(){
        this.loading=true;
        //再次验证
        const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        //所有input格式都正确
        if (this.nickName.length >0 && reg.test(this.email) && this.content.length >0) {
          //获取参数
          const params = {
            'nickName': this.nickName,
            'email': this.email,
            'website': this.website,
            'content': this.content
          };
          //id为可变字段，可能为rid、cid、ownerId
          if (typeof this.$store.state.component.id != 'undifined' ) {
            params.id =  this.$store.state.component.id;
          }
          //后台提交
          this.$store.dispatch(this.$store.state.component.action, {
            'params': qs.stringify(params), 'callback': (result) => {
              this.loading=false;
              //留言添加成功
              if (result.code === 0) {
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
