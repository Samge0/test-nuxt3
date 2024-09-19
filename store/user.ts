import {acceptHMRUpdate, defineStore} from "pinia";
 
export const useStore =  defineStore("user", {
    state: () => {
        return {
            token: localStorage.getItem('token') || "",
            name: localStorage.getItem('name') || '罗峰'
        };
    },
    actions: {
        // 用户登录
        login(data: any) {
            this.setToken(data);
        },
        // 写入名字
        setName(data: any) {
            this.name = data;
            localStorage.setItem('name', data);
        },
        // 单独更新或写入token
        setToken(data: any) {
            this.token = data;
            localStorage.setItem('token', data);
        },
        // 用户登出
        logout() {
            this.name = '未登录'
            this.token = '';
            localStorage.removeItem('token');
            localStorage.removeItem('name');
        }
    },
});
 
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}
 