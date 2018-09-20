'use strict';
const Controller = require('egg').Controller;

class RegexpController extends Controller {
  async long() {
    const { ctx } = this;
    let str = '<br/>                                             ' +
      '           早餐后自由活动，于指定时间集合自行办理退房手续。';
    str += '<br/>                                      <br/>' +
      '                                        <br/>           ' +
      '                         <br/>';
    str += '                                    <br/>' +
      '                                                        ' +
      '                                                        ' +
      '        <br/>';
    str += '                                                <br/>                                                                                                                <br/>';
    str += '                                                     ' +
      '                                                        ' +
      '       根据船班时间，自行前往暹粒机场，返回中国。<br/>';
    str += '如需送机服务，需增加280/每单。<br/>';
    const r = str.replace(/(^(\s*?<br[\s\/]*?>\*?)+|(\s*?<br[\s\/]*?>\s*?)+?$)/igm, '');
    ctx.body = r;
  }
}

module.exports = RegexpController;