import Taro, { Component } from '@tarojs/taro'
import { View, Image, Navigator } from '@tarojs/components'
import './index.scss'
import logo from '../../asset/component/logo.png'
import '../../asset/component/view.png'
import '../../asset/component/content.png'
import '../../asset/component/form.png'
import '../../asset/component/nav.png'
import '../../asset/component/media.png'
import '../../asset/component/map.png'
import '../../asset/component/canvas.png'
export default class Index extends Component {
  config = {
    navigationBarTitleText: '小程序官方组件-Taro版展示'
  }

  constructor() {
    super(...arguments)
    this.state = {
      list: [
        {
          id: 'view',
          name: '视图容器',
          open: false,
          pages: ['view', 'scroll-view', 'swiper']
        },
        {
          id: 'content',
          name: '基础内容',
          open: false,
          pages: ['text', 'icon', 'progress']
        },
        {
          id: 'form',
          name: '表单组件',
          open: false,
          pages: [
            'button',
            'checkbox',
            'form',
            'input',
            'label',
            'picker',
            'radio',
            'slider',
            'switch',
            'textarea'
          ]
        },
        {
          id: 'nav',
          name: '导航',
          open: false,
          pages: ['navigator']
        },
        {
          id: 'media',
          name: '媒体组件',
          open: false,
          pages: ['image', 'audio', 'video']
        },
        {
          id: 'map',
          name: '地图',
          pages: ['map']
        },
        {
          id: 'canvas',
          name: '画布',
          pages: ['canvas']
        }
      ]
    }
    // this.state.list.forEach(item => {
    //   item.icon = require(`../../asset/component/${item.id}.png`)
    // })
  }
  kindToggle = e => {
    var id = e.currentTarget.id,
      list = this.state.list
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <View className="index">
        <View className="index-hd">
          <Image className="index-logo" src={logo} />
          <View className="index-desc">
            以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见小程序开发文档。
          </View>
        </View>
        <View className="index-bd">
          <View className="kind-list">
            {this.state.list
              .map((item, index) => {
                item.hdClass =
                  'kind-list-item-hd ' +
                  (item.open ? 'kind-list-item-hd-show' : '')
                item.bdClass =
                  'kind-list-item-bd ' +
                  (item.open ? 'kind-list-item-bd-show' : '')
                item.boxClass =
                  'navigator-box ' + (item.open ? 'navigator-box-show' : '')
                item.imgSrc = `../../asset/component/${item.id}.png`
                item._pages = item.pages.map(page => {
                  return {
                    page: page,
                    url: `/pages/component/pages/${page}/${page}`
                  }
                })
                return item
              })
              .map((item, index) => {
                return (
                  <View className="kind-list-item">
                    <View
                      id={item.id}
                      className={item.hdClass}
                      onClick={this.kindToggle}
                    >
                      <View className="kind-list-text">{item.name}</View>
                      <Image className="kind-list-img" src={item.imgSrc} />
                    </View>
                    <View className={item.bdClass}>
                      <View className={item.boxClass}>
                        {item._pages.map(page => {
                          return (
                            <navigator url={page.url} className="navigator">
                              <View className="navigator-text">
                                {page.page}
                              </View>
                              <View className="navigator-arrow" />
                            </navigator>
                          )
                        })}
                      </View>
                    </View>
                  </View>
                )
              })}
          </View>
        </View>
      </View>
    )
  }
}
