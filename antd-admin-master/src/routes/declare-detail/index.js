import './index.less'
import React, { Component } from 'react'
import PrintTemplate from 'react-print'
import { hashHistory } from 'react-router'
import Button from 'antd/lib/button'
import message from 'antd/lib/message'
import Card from 'antd/lib/card'
import { confirm } from 'antd/lib/modal'
import _ from 'lodash'
import moment from 'moment'
message.config({
  duration: 3,
});
// const CAR_TYPE = {
//   '1': '大型货车(重车) (xe hàng lớn (xe hạng nặng))',
//   // '2': '中型货车(重车) (xe hàng vừa (xe hạng nặng))',
//   // '3': '小型货车(重车) (xe hàng nhỏ(xe hạng nặng))',
//   '4': '大型货车(空车) (xe hàng lớn (xe rỗng))',
//   // '5': '中型货车(空车) (xe hàng vừa (xe rỗng))',
//   // '6': '小型货车(空车) (xe hàng nhỏ(xe rỗng))',
// }
const CAR_TYPE = {
  '1': '大型货车(重车)',
  // '2': '中型货车(重车)',
  // '3': '小型货车(重车)',
  '4': '大型货车(空车)',
  // '5': '中型货车(空车)',
  // '6': '小型货车(空车)',
}

// const DIRECTION = {
//   '1': '中至越 (Trung sang Việt)',
//   '2': '越至中 (Việt sang Trung)',
// }
const DIRECTION = {
  '1': '中至越',
  '2': '越至中',
}

const STATUS = {
  '1': '草稿',
  '2': '提交',
  '3': '口岸审核通过',
  '4': '财务审核通过',
  '5': '预分配车位',
  '6': '查验通过',
  '7': '已入园区',
  '8': '已入库',
  '9': '审核拒绝',
  '10': '已过期',
  '11': '海关放行',
  '12': '待出发',
}

const goodsInfos = {
  title: '商品信息（thông tin sản phẩm）',
  items: [{
    key: 'commodityType',
    label: '商品种类：',
    yLabel: 'loại sản phẩm',
    value: '',
    placeholder: '',
  }, {
    key: 'productName',
    label: '产品名称：',
    yLabel: 'tên sản phẩm',
    value: '',
    placeholder: '',
  }, {
    key: 'goodsName',
    label: '商品名称：',
    yLabel: 'tên hàng',
    value: '',
    placeholder: '',
  }, {
    key: 'goodsWeight',
    label: '商品重量：',
    yLabel: 'trọng lượng hàng',
    value: '',
    render: (item) => {
      return item.value + ' kg'
    },
    placeholder: '',
  },]
}

export default class DeclareQRCodePage extends Component {
  constructor() {
    super()
    this.state = {
      balance: '',//当前账户可用余额
      isShow: 0, //申报单状态
      declarationStatus: 0,
      declarationDate: '',
      declarationNo: '',
      carInfo: '',
      barcode: '',//条码
      qrcode: '',//二维码
      beginDate: '',//二维码下方开始时间
      infoes: [{
        title: '企业信息（thông tin doanh nghiệp）',
        items: [{
          key: 'companyName',
          label: '企业名称：',
          yLabel: 'tên doanh nghiệp',
          value: '',
          placeholder: '',
        }, {
          key: 'companyCode',
          label: '企业税号：',
          yLabel: 'mã số doanh nghiệp',
          value: '',
          placeholder: '',
        },]
      }, {
        title: '车辆信息（thông tin ptvt）',
        items: [{
          key: 'companyName',
          label: '企业名称：',
          yLabel: 'tên doanh nghiệp',
          value: '',
          placeholder: '',
        }, {
          key: 'companyCode',
          label: '企业税号：',
          yLabel: 'mã số thuế doanh nghiệp',
          value: '',
          placeholder: '',
        }, {
          key: 'carerName',
          label: '驾驶员姓名：',
          yLabel: 'họ tên tài xế',
          value: '',
          placeholder: '',
        }, {
          key: 'carerSex',
          label: '性别：',
          yLabel: 'giới tính',
          value: '',
          placeholder: '',
        }, {
          key: 'carerBirthday',
          label: '出生年月：',
          yLabel: 'ngày tháng năm sinh',
          value: '',
          render(record) {
            return record.value === 'null' ? '':moment(record.value).format('YYYY-MM')
          },
          placeholder: '',
        }, {
          key: 'carerNo',
          label: '行驶证号：',
          yLabel: 'số giấy phép lái xe',
          value: '',
          placeholder: '',
        }, {
          key: 'carNum',
          label: '车牌号：',
          yLabel: 'biển số xe',
          value: '',
          placeholder: '',
        }, {
          key: 'carType',
          label: '车辆类型：',
          yLabel: 'loại xe',
          value: '',
          render: (item) => {
            return CAR_TYPE[item.value]
          },
          placeholder: '',
        }, {
          key: 'carWeight',
          label: '车辆重量：',
          yLabel: 'trọng tải xe',
          value: '',
          placeholder: '',
          render: (item) => {
            return item.value + ' kg'
          },
        }, {
          key: 'passportNo',
          label: '通行证号：',
          yLabel: 'số giấy thông hành',
          value: '',
          placeholder: '',
        }, {
          key: 'directon',
          label: '出入境方向：',
          yLabel: 'hướng xuất nhập cảnh',
          value: '',
          render: (item) => {
            return DIRECTION[item.value]
          },
          placeholder: '',
        }]
      }]
    }
  }
  render() {
    return (
      <div className="declare-detail-page">
        <div className="content">
          <div className="print-page">
            <PrintTemplate>
              <div className="btns-wrap">
                <Button className="no-print" onClick={() => { history.back() }}>
                  返回 (quay lại)
                </Button>
                {
                  this.state.isShow === 4 || this.state.isShow === 5 || this.state.isShow === 6 || this.state.isShow === 7 || this.state.isShow === 8 || this.state.isShow === 11 ?
                    <Button className="no-print" type="primary" onClick={() => { window.print() }}>打印 (in)</Button> : ''
                }
                {
                  (this.state.isShow === 2
                    || this.state.isShow === 3)
                  && <Button type="primary" onClick={this.handleAuditClick.bind(this, true)}>{`${this.state.isShow === 2 ? '口岸审核' : '财务审核'}通过`}</Button>
                }
                {
                  (this.state.isShow === 2
                    || this.state.isShow === 3)
                  && <Button type="primary" onClick={this.handleAuditClick.bind(this, false)}>{`${this.state.isShow === 2 ? '口岸审核' : '财务审核'}拒绝`}</Button>
                }
                {
                  this.state.isShow === 3 && <span className='balance'>当前账户可用余额： <span>{this.state.balance}</span> 元</span>
                }
              </div>
              <h1> 复核单</h1>
              <div className="head">
                <div className="main">
                  <div className="column">
                    <div className="info">
                      <p className="key">
                        <span>状态：</span><br />
                        <span className='yStyle'>trạng thái</span><br />
                      </p>
                      <p className="value">{this.state.declarationStatus}</p>
                    </div>
                    <div className="info">
                      <p className="key">
                        <span>复核单号：</span><br />
                        <span className='yStyle'>mã số đơn xác nhận</span><br />
                      </p>
                      <p className="value">{this.state.declarationNo}</p>
                    </div>
                  </div>
                  <div className="column">
                    <div className="info">
                      <p className="key">
                        <span>复核时间：</span><br />
                        <span className='yStyle'>thời gian xác nhận</span><br />
                      </p>
                      <p className="value" style={{ width: 135 }}>{this.state.declarationDate}</p>
                    </div>
                    <div className="info">
                      <p className="key">
                        <span>车位信息：</span><br />
                        <span className='yStyle'>thông tin vị trí đỗ xe</span><br />
                      </p>
                      <p className="value">{this.state.carInfo}</p>
                    </div>
                  </div>
                </div>
                <img src={this.state.barcode} />
              </div>
              <div className='noStyle'>{this.state.declarationNo}</div>
              {
                this.state.infoes.map((sort, index) => {
                  return (
                    <Card key={`sort${index}`} className="company-info" title={sort.title} bordered={false}>
                      <div className="right">
                        {
                          sort.items.filter((item, index) => {
                            return index % 2 === 0
                          }).map((item, i) => {
                            return (
                              <div key={`right${i}`} className="info">
                                <p className="key">
                                  <span>{item.label}</span><br />
                                  <span className='yStyle'>{item.yLabel}</span>
                                </p>
                                <p className="value">{item.render ? item.render(item) : item.value}</p>
                              </div>
                            )
                          })
                        }
                      </div>
                      <div className="left">
                        {
                          sort.items.filter((item, index) => {
                            return index % 2 === 1
                          }).map((item, i) => {
                            return (
                              <div key={`left${i}`} className="info">
                                <p className="key">
                                  <span>{item.label}</span><br />
                                  <span className='yStyle'>{item.yLabel}</span>
                                </p>
                                <p className="value">{item.render ? item.render(item) : item.value}</p>
                              </div>
                            )
                          })
                        }
                      </div>
                    </Card>
                  )
                })
              }
              {/*复核单二维码*/}
              <div>
                <div className='ant-card-head'>
                  <h3 className='ant-card-head-title'>复核单二维码（mã code đơn xác nhận）</h3>
                </div>

                <div className="qrcode-info">
                  <p className='company-name'>
                    <img src={this.state.qrcode}/>
                  </p>
                  <p className='company-name'>{this.state.beginDate}</p>
                  <p className='company-name'>二维码有效期为一天，过期请找运营人员补打</p>
                  <p className='company-name'>mã code có hiệu lực một ngày, quá hạn sử dụng xin vui lòng gặp nhân viên vận hành để in lại</p>
                </div>
              </div>
            </PrintTemplate>
          </div>
        </div>
      </div>
      
    )
  }
  componentDidMount() {
    this.fetchDetail().then((data) => {
      this.state.infoes.forEach((sort) => {
        // console.log(sort)
        sort.items.forEach((item) => {
          item.value = data[item.key]
        })
      })
      if (data && data.products) {
        data.products.forEach((product) => {
          const tmp = _.cloneDeep(goodsInfos)
          tmp.items.forEach((item) => {
            item.value = product[item.key]
          })
          this.state.infoes.push(tmp)
        })
      }
      this.setState({
        isShow: data.declarationStatus,
        declarationStatus: STATUS[data.declarationStatus],
        declarationDate: moment(data.declarationDate).format('YYYY-MM-DD HH:mm:ss'),
        declarationNo: data.declarationNo,
        carInfo: data.carInfo,
        barcode: data.qrcode,
        infoes: this.state.infoes,
      }, () => {
        // console.log(this.state)
        data.declarationStatus === 3 ? this.fetchBalance(data.supplierId).then((data) => {
          this.setState({
            balance: data
          })
        }) : ''
      })
    })
    // 二维码显示
    this.fetchQrcode().then((data) => {
      // console.log(data, 'data=====')
      this.setState({
        // companyName: data.companyName,
        beginDate: data.date,
        qrcode: data.url,
      })
    })
  }
  //当前账户可用余额
  fetchBalance(supplierId) {
    return fetch('/platform-oss/api/oss/pretreatment/account?shopId=' + supplierId).then((data) => {
      if (data.errorCode === 0) {
        return data.result
      } else {
        message.error('获取当前账户可用余额失败！')
      }
    })
  }
  fetchDetail() {
    return fetch('/platform-oss/api/oss/pretreatment/getInfo?declarationId=' + this.props.params.id).then((data) => {
      return data.result
    })
  }
  //复核单二维码
  fetchQrcode() {
    return fetch('/platform-oss/api/oss/pretreatment/getqrcode?declarationId=' + this.props.params.id).then((data) => {
      if (data.errorCode === 0) {
        return data.result
      } else {
        message.error(data.errorMsg)
      }
    }).catch(() => {
      message.error('获取二维码信息失败！')
    })
  }
  //审核
  handleAuditClick(isPass) {
    confirm({
      title: `审核${isPass ? '通过' : '拒绝'}`,
      content: `确认进行审核${isPass ? '通过' : '拒绝'}操作吗？`,
      onOk: () => {
        fetch(`/platform-oss/api/oss/pretreatment/${isPass ? 'audit' : 'unAudit'}?declarationId=${this.props.params.id}`).then((res) => {
          if (res && res.errorCode === 0) {
            message.success(`审核${isPass ? '通过' : '拒绝'}操作成功`)
            // hashHistory.push(  `main/declare/detail`)
            //审核通过之后刷新页面
            this.fetchDetail().then((data) => {
              this.state.infoes.forEach((sort) => {
                sort.items.forEach((item) => {
                  item.value = data[item.key]
                })
              })
              if (data && data.products) {
                data.products.forEach((product) => {
                  const tmp = _.cloneDeep(goodsInfos)
                  tmp.items.forEach((item) => {
                    item.value = product[item.key]
                  })
                  this.state.infoes.push(tmp)
                })
              }
              this.setState({
                isShow: data.declarationStatus,
                declarationStatus: STATUS[data.declarationStatus],
                declarationDate: moment(data.declarationDate).format('YYYY-MM-DD HH:mm:ss'),
                declarationNo: data.declarationNo,
                carInfo: data.carInfo,
                barcode: data.qrcode,
                infoes: this.state.infoes,
              }, () => {
                // console.log(this.state)
                data.declarationStatus === 3 ? this.fetchBalance(data.supplierId).then((data) => {
                  this.setState({
                    balance: data
                  })
                }) : ''
              })
            })
          } else {
            message.errorCode(`审核${isPass ? '通过' : '拒绝'}操作失败，${res.errorMsg}`)
          }
        }).catch(() => {
          message.error('后端服务异常！')
        })
      },
      onCancel() { },
    })
  }
}