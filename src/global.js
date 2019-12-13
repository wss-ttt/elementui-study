import {test} from '@/utils/index'
let startTime = new Date()
test()
/* module.exports = {
    name: '乔峰',
    say() {
        console.log('好好学习')
    },
    startTime
} */

let name = '乔峰'
function say(){
    console.log('好好学习')
}
export default {
    name,
    say,
    startTime
}