<template>
  <div class="record">
    <article>
      <h3>2013</h3>
      <section>
        <span class="point-time point-yellow"></span>
        <time datetime="2013-03">
          <span>March</span>
          <span>2013</span>
        </time>
        <aside>
          <p class="things">The 未来，科学家们发现太阳急速衰老膨胀，短时间内包括地球在内的整个太阳系都将被太阳所吞没。为了自救，人类提出一个名为“流浪地球”的大胆计划，即倾全球之力在地球表面建造上万座发动机和转向发动机，推动地球离开太阳系，用2500年的时间奔往另外一个栖息之地。中国航天员刘培强（吴京 饰）在儿子刘启四岁那年前往国际空间站，和国际同侪肩负起领航者的重任。转眼刘启（屈楚萧 饰）长大，他带着妹妹FAW</p>
          <p class="brief"><span class="text-yellow">Award</span> (Miami. FL)</p>
        </aside>
      </section>
      <section>
        <span class="point-time point-red"></span>
        <time datetime="2013-03">
          <span>March</span>
          <span>2013</span>
        </time>
        <aside>
          <p class="things">You reached 500 followers on Twitter</p>
          <p class="brief"><span class="text-red">Social Appearance</span></p>
        </aside>
      </section>
    </article>
    <article>
      <h3>2012</h3>
      <section>
        <span class="point-time point-green"></span>
        <time datetime="2013-03">
          <span>December</span>
          <span>2012</span>
        </time>
        <aside>
          <p class="things">Visitor at Maketing Live 2012</p>
          <p class="brief"><span class="text-green">Conference</span></p>
        </aside>
      </section>
      <section>
        <span class="point-time point-green"></span>
        <time datetime="2012-11">
          <span>November</span>
          <span>2012</span>
        </time>
        <aside>
          <p class="things">Visitor at Daily web 2012</p>
          <p class="brief"><span class="text-green">Conference</span></p>
        </aside>
      </section>
      <section>
        <span class="point-time point-red"></span>
        <time datetime="2012-09">
          <span>September</span>
          <span>2012</span>
        </time>
        <aside>
          <p class="things">You reached 500 followers on Dribbble</p>
          <p class="brief"><span class="text-red">Social Appearance</span></p>
        </aside>
      </section>
      <section>
        <span class="point-time point-blue"></span>
        <time datetime="2012-08">
          <span>August</span>
          <span>2012</span>
        </time>
        <aside>
          <p class="things">New job position as Senior Designer at Fantasy Interactive</p>
          <p class="brief"><span class="text-blue">Working Experience</span></p>
        </aside>
      </section>
      <section>
        <span class="point-time point-red"></span>
        <time datetime="2012-03">
          <span>March</span>
          <span>2012</span>
        </time>
        <aside>
          <p class="things">Speaker at ASMO conference</p>
          <p class="brief"><span class="text-red">Conference</span></p>
        </aside>
      </section>
      <section>
        <span class="point-time point-blue"></span>
        <time datetime="2012-02">
          <span>February</span>
          <span>2012</span>
        </time>
        <aside>
          <p class="things">You added new skills to job position Junior Designer at Fantasy Interactive</p>
          <p class="brief"><span class="text-blue">Working Experience</span></p>
        </aside>
      </section>
    </article>
  </div>
</template>

<script>
  export default {
      name: "Record"
  }
</script>

<style scoped lang="stylus">
  * {
    margin: 0;
    padding: 0;
  }

  article,section,time,aside{display:block;}

  .point-time {
    content: "";
    position: absolute;
    width: 13px;
    height: 13px;
    top: 17px;
    left: 20%;
    background: #1c87bf;
    margin-left: -4px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px #fff;
  }

  .text-red {
    color: #f6393f;
  }

  .text-blue {
    color: #1c87bf;
  }

  .text-green {
    color: #95c91e;
  }

  .text-yellow {
    color: #ffb902;
  }

  .text-purple {
    color: #d32d93;
  }

  .point-red {
    background-color: #f6393f;
  }

  .point-blue {
    background-color: #1c87bf;
  }

  .point-green {
    background-color: #95c91e;
  }

  .point-yellow {
    background-color: #ffb902;
  }

  .point-purple {
    background-color: #d32d93;
  }

  .record {
    width: 970px;
    margin: 30px auto;
    color: #9f9f9f;
    background: #fff;
    font-size: 1.16em;
    font-family: 'Lato', Calibri, Arial, sans-serif;
  }
  .record article {
    position: relative;
  }
  .record article > h3 {
    width: 15%;
    height: 20px;
    line-height: 20px;
    text-align: right;
    font-size: 1.4em;
    color: #1d1d1d;
    padding: 10px 0 20px;
  }
  .record article section {
    padding: 0 0 17px;
    position: relative;
  }
  .record article section:before {
    content: "";
    width: 5px;
    top: 17px;
    bottom: -17px;
    left: 20%;
    background: #e6e6e6;
    position: absolute;
  }
  .record article section:last-child:before {
    display: none;
  }
  .record article section time {
    width: 15%;
    display: block;
    position: absolute;
  }
  .record article section time > span {
    display: block;
    text-align: right;
  }
  .record article section aside {
    color: #3a3a38;
    margin-left: 25%;
    padding-bottom: 15px;
  }
  .record article section .brief {
    color: #9f9f9f;
  }

</style>
