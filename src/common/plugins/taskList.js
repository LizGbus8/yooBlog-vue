//terminal配置
import {addTalk} from "../../api";
import qs from "qs";
// const USER_ID = parseInt(Math.random() * 1000)
function generateTime() {
  const timeNow = new Date();
  const hours = timeNow.getHours();
  const minutes = timeNow.getMinutes();
  const seconds = timeNow.getSeconds();
  let timeString = '' + hours;
  timeString += (minutes < 10 ? ':0' : ':') + minutes;
  timeString += (seconds < 10 ? ':0' : ':') + seconds;
  return timeString
}

const mockData = [
  { time: generateTime(),
    type: 'system',
    label: 'System',
    message: 'Welcome to vTerminal, this is an example to show you what this project can do.' },
    { time: generateTime(), type: 'info', label: 'Info', message: 'Terminal Initializing ............' },
    { time: generateTime(), type: 'warning', label: 'warning', message: 'This is a Waning Message!' },
    { time: generateTime(), type: 'error', label: 'Error', message: 'Oops, Something Went Wrong!' },
    { time: generateTime(), type: 'success', label: 'Success', message: 'Take it easy! Everything OK!' }
]

export default {
  echo: {
    description: 'Echoes input',
    echo(pushToList, input) {
      input = input.split(' ')
      input.splice(0, 1)
      const p = new Promise(resolve => {
        pushToList({ time: generateTime(), label: 'Echo', type: 'success', message: input.join(' ') });
        resolve({ type: 'success', label: '', message: '' })
      })
      return p
    }
  },
  defaultTask: {
    description: 'this is default task.',
    defaultTask(pushToList) {
      let i = 0;
      const p = new Promise(resolve => {
        const interval = setInterval(() => {
          mockData[i].time = generateTime()
          pushToList(mockData[i]);
          i++
          if (!mockData[i]) {
            clearInterval(interval)
            resolve({ type: 'success', label: 'Success', message: 'Example Over!' })
          }
        }, 1000);
      })
      return p
    }
  },
  open: {
    description: 'Open a specified url in a new tab.',
    open(pushToList, input) {
      const p = new Promise((resolve, reject) => {
        let url = input.split(' ')[1];
        if (!url) {
          reject({ type: 'error', label: 'Error', message: 'a url is required!' })
          return
        }
        pushToList({ type: 'success', label: 'Success', message: 'Opening' })

        if (input.split(' ')[1].indexOf('http') === -1) {
          url = 'http://' + input.split(' ')[1]
        }
        window.open(url, '_blank')
        resolve({ type: 'success', label: 'Done', message: 'Page Opened!' })
      })
      return p;
    }
  },
  //留言
  leave: {
    description: 'Leave a message for me..',
    leave(pushToList, input) {
      console.log(input);
      const p = new Promise((resolve, reject) => {
        let message = input.split(' ')[1];
        let nickName = input.split(' ')[2];
        let email = input.split(' ')[3];
        let website = input.split(' ')[4];
        if (!message) {
          reject({ type: 'error', label: 'Error', message: 'a message is required!' });
          return
        }
        if (!nickName) {
          reject({ type: 'error', label: 'Error', message: 'a nickname is required!' });
          return
        }
        const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        //所有input格式都正确
        if (!reg.test(email)) {
          reject({ type: 'error', label: 'Error', message: 'Mailbox format error!' });
        }
        //tip
        pushToList({ type: 'system', label: 'System', message: 'Leaving' });

        const params = {
          nickName: nickName,
          email: email,
          website: website ? website : '',
          content: message
        };
        //请求后台留言接口
        addTalk(qs.stringify(params)).then((result) => {
          //留言添加成功
          if (result.code === 0) {
            resolve({ type: 'success', label: 'Done', message: 'I have received the message!' })
          }else {
            reject({ type: 'error', label: 'Error', message: 'system error!' });
          }
        });
      })
      return p;
    }
  },
}
