require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';


// var imageDatas = require('../data/imageDatas.json');
var data = [
  {
    'fileName':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.'
  },
  {
    'fileName':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName':'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer. '
  },
  {
    'fileName': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  },
  {
    'fileName': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021167869,535320838&fm=27&gp=0.jpg.jpg',
    'title': 'Heaven of time',
    'desc': 'Here he comes Here comes Speed Racer.  '
  }
]
class ImgFigureComponent extends React.Component {
  render(){
    return (
      <figure className='img-figure'>
        <img src={this.props.data.fileName} alt={this.props.data.title}/>
        <figcaption>
          <h2 className='img-title'>{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
}
class AppComponent extends React.Component {
  Constant(){
    return {
      centerPos:{
        left:0,
        right:0
      },
      hPosRange:{//水平方向的取值范围
        leftSecX:[0,0],
        rightSecX: [0,0],
        y:[0,0]
      },
      vPosRange:{//垂直方向的取值范围
        x:[0,0],
        topY:[0,0]
      }
    }
  }
  //组件加载以后
// 组件加载以后， 为每张图片计算其位置的范围
componentDidMount() {
  // console.log('componentDidMount');
  // 首先拿到舞台的大小
  var stageDOM = ReactDOM.findDOMNode(this.refs.stage);
  var stageW = stageDOM.scrollWidth;
  var stageH = stageDOM.scrollHeight;
  var halfStageW = Math.ceil(stageW / 2);
  var halfStageH = Math.ceil(stageH / 2);
  // 拿到一个imageFigure的大小
  var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imageFigure0);
  // console.log(imgFigureDOM,'------');

  var imgW = imgFigureDOM.scrollWidth,
    imgH = imgFigureDOM.scrollHeight,
    halfImgW = Math.ceil(imgW / 2),
    halfImgH = Math.ceil(imgH / 2);

  //重新赋值Constant
  // 计算中心图片的位置点
  this.Constant.centerPos = {
    left: halfStageW - halfImgW,
    top: halfStageH - halfImgH
  };
  // 计算左侧，右侧区域图片排布位置的取值范围
  this.Constant.hPosRange.leftSecX[0] = -halfImgW;
  this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
  this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
  this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;
  this.Constant.hPosRange.y[0] = -halfImgH;
  this.Constant.hPosRange.y[1] = stageH - halfImgH;

  //重新排列--居中的index传进去
  this.rearrange(0);
}

  render() {


    var controllerUnits = [],
      imgFigures = [];
      data.forEach(function (value,index) {
        imgFigures.push( < ImgFigureComponent data = {
              value
            }
            ref = {
              'imageFigure' + index
            }
            />)

      });
    return (
      <section className = 'stage' ref='stage'>
        <section className = 'img-sec'>
        {
          imgFigures
        }

        </section>
        <nav className='controller-nav'>
        {
          controllerUnits

        }
        </nav>

      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
