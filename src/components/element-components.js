import Vue from 'vue'

import {
  Loading,
  MessageBox,
  Notification,
  Message,
  Button,
  Input,
} from 'element-ui';

Vue.use(Button)
Vue.use(Input)
Vue.use(Loading)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;


