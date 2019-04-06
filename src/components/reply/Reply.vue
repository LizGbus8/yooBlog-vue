<template>
  <div class="box">
    <div class="reply-box">
    <div class="reply">
      <div class="info">
        <input placeholder="昵称"></input>
        <input placeholder="邮箱"></input>
        <input placeholder="网站"></input>
      </div>
      <div class="content">
        <div class="textarea-box" cursor-style="|"></div>
      </div>
      <div class="emoji">
        <ul>
          <li title="呵呵" data-input="@(呵呵)"><img class="biaoqing newpaopao" title="呵呵"
                                                 src="@/assets/emoji/呵呵.png"></li>
          <li title="哈哈" data-input="@(哈哈)"><img class="biaoqing newpaopao" title="哈哈"
                                                 src="@/assets/emoji/哈哈.png"></li>
          <li title="吐舌" data-input="@(吐舌)"><img class="biaoqing newpaopao" title="吐舌"
                                                 src="@/assets/emoji/吐舌.png"></li>
          <li title="太开心" data-input="@(太开心)"><img class="biaoqing newpaopao" title="太开心"
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
                              src="@/assets/emoji/Retro Mario World Icon.jpg">support markdown (*￣▽￣*)ブ</div>
        <div class="op"><button>提交</button></div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "Reply"
    }
</script>

<style scoped lang="stylus">
  .box
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
      right: 28%;
      top: 46%;
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
          height 85px
          .textarea-box
            width 596px;
            height 85px
            outline: none;
            border-style: none none dashed;
            border-bottom 1.2px dashed rgb(222, 222, 222)
            text-align left
            &::after
              content attr(cursor-style)
              animation blink 1.2s steps(1) infinite
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
