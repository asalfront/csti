// @ts-check
import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"
const ENDPOINT_PATH = "https://fepruebatecnicaculqi-backend-production.up.railway.app"
export const useUserStore = defineStore("custom", {
    state: () => ({
        user: null,
        isLogged: false,
        isLoadingList: true,
        employers: null,
        isLoginFailed: false,
        isLoadingForm: false,
        currentPage: 1,
        currentLimit: 10,
        token: null
    }),
    getters: {
        getUsers:(state)=>state.user,
        getIsLogged:(state)=>state.isLogged,
        getIsLoadingList:(state)=> state.isLoadingList,
        getIsLoginFailed:(state)=>state.isLoginFailed,
        getIsLoadingForm:(state)=>state.isLoadingForm,
        getEmployers: (state)=> state.employers,
        getCurrentPage: (state)=> state.currentPage,
        getCurrentLimit:(state)=>state.currentLimit,
        getToken:(state)=>state.token
    },
    actions: {
        async fetchUsers(email:string, password: string) {
            try {
                this.isLoadingForm = true
                const json = JSON.stringify({ 'correo': email, 'password': password });
                const data = await axios.post(`${ENDPOINT_PATH}/auth/login`, json, {
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                        'Cache-Control' : 'no-cache',
                        'Accept' : '*/*'
                    }
                }).then((response)=> {
                    this.user = response.data
                    this.isLogged = true
                })

            }
            catch (error) {
                this.isLoginFailed = true
                this.isLoadingForm = false
                console.log(error)
            }
        },
        async fetchEmployers(token: string, limit: number = 10, page: number = 1) {
            this.isLoadingList = true
            try {
                const data = await axios.get(`${ENDPOINT_PATH}/empleados?limit=${limit}&page=${page}`,{
                    headers: {
                        'Authorization': `token ${token}`
                    }
                }).then((response)=>{
                    this.employers = response.data
                });

            }
            catch (error) {
                console.log(error)
            }
        },
        userLogout(){
            this.isLogged = false
            this.isLoginFailed = false
            this.isLoadingForm = false
        },
        userLogIn(){
            this.isLogged= true
        },
        setIsLoadingOff(){
            this.isLoadingList = false
        },
        setCurrentLimit(limit: number){
            this.currentLimit = limit
        },
        setCurrentPage(page: number){
            this.currentPage = page
        }
    },
})


