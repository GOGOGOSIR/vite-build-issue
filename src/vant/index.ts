import { App } from 'vue'
import {
  ConfigProvider,
  Button,
  Empty,
  NavBar,
  Loading,
  Form,
  Field,
  Uploader,
  CellGroup,
  Popup,
  Picker,
  Checkbox,
  CheckboxGroup,
  Tab,
  Tabs,
  Dialog,
  List,
  PullRefresh,
  Search,
  Overlay,
} from 'vant'

export default {
  install: (app: App): void => {
    app
      .use(ConfigProvider)
      .use(Button)
      .use(Empty)
      .use(NavBar)
      .use(Loading)
      .use(Form)
      .use(Field)
      .use(Uploader)
      .use(CellGroup)
      .use(Popup)
      .use(Picker)
      .use(Checkbox)
      .use(CheckboxGroup)
      .use(Tab)
      .use(Tabs)
      .use(Dialog)
      .use(Search)
      .use(List)
      .use(PullRefresh)
      .use(Overlay)
  },
}
