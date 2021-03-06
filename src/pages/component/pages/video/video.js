import Taro, { Component } from '@tarojs/taro'
import { View, Text, Video } from '@tarojs/components'
import Head from '../../../../components/head/head'
import Foot from '../../../../components/foot/foot'
import './video.scss'

export default class PageView extends Component {
  config = {
    navigationBarTitleText: 'video'
  }

  constructor () {
    super(...arguments)
  }

  render () {
    return (
      <View className="container">
        <Head title="video"/>
        <View className="page-body">
          <View className="page-section">
            <View className="page-section-spacing">
              <Video
                src='http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
                controls={true}
                autoplay={false}
                poster='http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
                initialTime='0'
                id='video'
                loop={false}
                muted={false}
              />
            </View>
          </View>
        </View>
        <Foot/>
      </View>
    )
  }
}
