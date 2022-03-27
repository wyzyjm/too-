// import store from 'store'
const USER_KEY = "user_key"
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    // 保存user
    savaUser(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user))
    },
    // 读取user
    getUser(user) {
        return JSON.parse(localStorage.getItem(USER_KEY, JSON.stringify(user)) || "{}")
    },
    // 删除user
    deleteUser(user) {
        localStorage.setItem(USER_KEY)
    }
}
