<template>
  <div class="wrap">
    <div class="wrap-box" v-loading="this.loading">
      <div class="album-item" v-for="(item) in this.albums">
        <div class="top">
          <div class="date-time">
            <p><span>{{item.createdTime | formatDate}}</span><span> {{item.title}}</span></p>
          </div>
        </div>
        <div class="content">
          <p>{{item.content}}</p>
          <div class="pic">
            <ul>
              <li @click="showPic(pic.pid)" v-for="(pic) in item.pictures">
                <a href="javascript:;"><img :src="pic.pictureUrl" alt=""></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="more" @click="more" v-show="this.showMore">加载更多...</div>
    <div class="picture" v-show="picturnShow">
      <div class="picture-box">
        <a href="javascript:;" class="op"><img @click="pre()" src="@/assets/up_ico.png" alt=""></a>
        <a href="javascript:;" class="op"><img @click="next()" src="@/assets/next_ico.png" alt=""></a>

        <div class="theme">
          <img :src="currentPicUrl" alt="">
        </div>
        <a href="javascript:;" class="close" @click="close()">×</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {getAlbums} from "../../api";

  export default {
    name: "Album",
    data() {
      return {
        currentPage: 1, //当前页
        loading: true,
        size: 10,    //每页的数据
        picturnShow: false,//图片大图是否展示
        currentPicIndex: 0,//当前的大图index
        currentPicUrl: '',//当前的大图路径
        albums: [],//相册
        pictures: [],
        showMore: true//防重复点击
      }
    },
    mounted() {
      this.initData();
    },
    methods: {
      initData() {
        getAlbums({currentPage: this.currentPage}).then(res => {
          if (res.code === 0) {
            this.loading = false;
            this.albums = res.data;
            this.albums.forEach(album => {
              this.pictures = this.pictures.concat(album.pictures);
            })
          }
        })
      },
      showPic(pid) {
        let path;
        //找到pid的图片
        this.albums.forEach(album => {
          album.pictures.forEach(picture => {
            if (picture.pid === pid) {
              path = picture.pictureUrl;
            }
          })
        });
        //设置当前显示的图片路径
        this.currentPicUrl = path;
        //查找当前图片的位置
        this.currentPicIndex = this.search(pid);
        this.picturnShow = true;
      },
      //查找图片位置
      search(pid) {
        for (let i = 0; i < this.pictures.length; i++) {
          if (this.pictures[i].pid === pid) {
            return i;
          }
        }
      },
      close() {
        this.picturnShow = false;
      },
      pre() {
        let index = (this.currentPicIndex + this.pictures.length - 1) % this.pictures.length;
        this.currentPicIndex = index;
        this.currentPicUrl = this.pictures[index].pictureUrl;
      },
      next() {
        let index = (this.currentPicIndex + this.pictures.length + 1) % this.pictures.length;
        this.currentPicIndex = index;
        this.currentPicUrl = this.pictures[index].pictureUrl;
      },
      more(){
        this.showMore = false;
        this.currentPage ++;
        //请求数据
        getAlbums({currentPage:this.currentPage}).then((res)=> {
          this.showMore = true;//防重复点击
          if (res.data.length < 2) {
            this.showMore = false;
          }
          if (res.code === 0) {
            this.albums = this.albums.concat(res.data);
            this.albums.forEach(album => {
              this.pictures = this.pictures.concat(album.pictures);
            })
          }

        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .wrap
    width 720px
    margin auto

  .wrap-box
    min-height 300px

  .date-time
    overflow: hidden;
    margin: 0 auto;
    font-size: 12px;
    color: #cccccc;

  .content
    p
      overflow: hidden;
      margin: 0 auto;
      font-size: 16px;
      color: #333333;

  .pic
    list-style none
    overflow: hidden;

    ul
      overflow hidden
      padding 0

    li
      overflow: hidden;
      margin: 0 auto 5px;
      float: left;
      margin-right: 5px;
      width: 139px;
      height: 139px;

      img
        margin: 0 auto;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;

  .picture
    overflow: hidden;
    margin: 0 auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 889;

  .picture-box
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    display flex
    justify-content space-between

    .op
      z-index: 999;
      display flex
      align-items center
      cursor pointer

      img
        transition: all .5s ease;
        width 43px

        &:hover
          width 60px;

    .theme
      display flex
      flex-direction column
      justify-content center
      overflow: hidden;
      width: auto;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;

      img
        overflow: hidden;
        width: 500px;
        margin: 20px auto;
        display: block;
        object-fit: cover;

    .close
      overflow: hidden;
      text-decoration none
      width: 30px;
      height: 30px;
      line-height: 30px;
      display: block;
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 32px;
      color: #fff;
      text-align: center;
      z-index 1000

  .more
    display flex
    justify-content center
    cursor pointer
    transition all .2s linear;
    height 50px

    &:hover
      color $theme
</style>
