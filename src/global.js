// 全局配置文件 -> 存储全局业务数据
export default {
  warnValue: 0.1776, // 告警的阈值-比差
  abnormalValue: 0.32, // 异常的阈值-比差
  monitiorType: ['正常', '注意', '异常'],
  warnErrorValue: 7, // 告警的阈值-角差
  abnormalErrorValue: 18, // 异常的阈值-角差
  monitorColor: ['#03C1FF', '#00FF00', '#FFA500'] // 对应关系: 正常 注意 异常
  // 之前的颜色: "#04C1FC", "#FFD738", "#FF2419"
}
