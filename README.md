# PleasureUI

## 按钮

### pl-button 

| 属性     | 类型    |          |
| -------- | ------- | -------- |
| type     | String  | 按钮类型 |
| plain    | Boolean | 朴素按钮 |
| round    | Boolean | 圆角按钮 |
| disabled | Boolean | 禁用状态 |

### pi-icon-button

| 属性        | 类型   |                  |
| ----------- | ------ | ---------------- |
| icon        | String | 初始 icon        |
| active-icon | String | 点击后 icon      |
| color       | String | 初始 icon 颜色   |
| active-icon | String | 点击后 icon 颜色 |
| throttle    | Number | 节流周期时间(ms) |

## 视频组件

### pl-video-player 

播放器组件

| 属性     | 类型    |                          |
| -------- | ------- | ------------------------ |
| src      | String  | 视频的 url               |
| controls | Boolean | 是否显示默认控件         |
| muted    | Boolean | 是否默认静音             |
| autoplay | Boolean | 是否在视频就绪后自动播放 |
| loop     | Boolean | 是否循环播放             |

### 视频标题

#### pl-video-title

### 视频控制器

#### pl-video-controls 视频控制器

用于包裹所有按钮组件

#### pl-video-progress 进度条

| 属性        | 类型   |                      |
| ----------- | ------ | -------------------- |
| currentTime | Number | 初始时视频播放的时间 |
| color       | String | 进度条颜色           |
| bufferColor | String | 缓冲条颜色           |

#### pl-video-wide-screen 网页全屏按钮

| 属性        | 类型   |                  |
| ----------- | ------ | ---------------- |
| icon        | String | 初始 icon        |
| activeIcon  | String | 点击后 icon      |
| color       | String | 初始 icon 颜色   |
| activeColor | String | 点击后 icon 颜色 |

#### pl-video-full-screen 全屏按钮

| 属性        | 类型   |                  |
| ----------- | ------ | ---------------- |
| icon        | String | 初始 icon        |
| activeIcon  | String | 点击后 icon      |
| color       | String | 初始 icon 颜色   |
| activeColor | String | 点击后 icon 颜色 |

#### pl-video-volume 音量按钮

| 属性     | 类型   |                   |
| -------- | ------ | ----------------- |
| volume   | Number | 初始时音量（0~1） |
| icon     | String | 初始 icon         |
| muteIcon | String | 点击后 icon       |
| color    | String | icon 颜色         |
| barColor | String | 音量条颜色        |

#### pl-video-time 时间进度

| 属性     | 类型    |                    |
| -------- | ------- | ------------------ |
| settable | Boolean | 是否可输入修改时间 |

pl-video-play 播放/暂停按钮

| 属性      | 类型   |             |
| --------- | ------ | ----------- |
| playIcon  | String | 播放中 icon |
| pasueIcon | String | 暂停 icon   |
| color     | String | icon 颜色   |
| throttle  | Number | 节流时间    |

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./pleasure-ui.css" />
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      #app {
        width: 1280px;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <div id="app">
      <pl-video-player :src="src" :currentTime.sync="currentTime">
        <pl-video-title slot="title">海贼王</pl-video-title>
        <pl-video-controls slot="controls" :large-size="false">
          <pl-video-progress></pl-video-progress>
          <template v-slot:left>
            <pl-video-play></pl-video-play>
            <pl-icon-button icon="pl-icon-play-next" color="#fff"></pl-icon-button>
            <pl-video-time settable></pl-video-time>
          </template>
          <template v-slot:right>
            <pl-video-volume :volume.sync="volume"></pl-video-volume>
            <pl-video-wide-screen></pl-video-wide-screen>
            <pl-video-full-screen></pl-video-full-screen>
          </template>
        </pl-video-controls>
      </pl-video-player>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="./pleasure-ui.umd.js"></script>
    <script>
      new Vue({
        el: '#app',
        data() {
          return {
            src:
              'http://1251316161.vod2.myqcloud.com/29fe1275vodbj1251316161/3566e8395285890810239599188/AXtLkahrWk4A.mp4',
            // src: 'https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/60_8a302ea923de10bac540c08ba361abb1.mp4',
            volume: 0.5,
            currentTime: 60
          }
        }
      })
    </script>
  </body>
</html>

```

