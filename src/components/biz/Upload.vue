<template>
  <el-input v-model="cityCode" placeholder="请输入城市代码"/>
  <el-button @click="getWeather">点击查询天气</el-button>
  <el-button @click="getWeatherPromise">点击查询天气(promise)</el-button>
  <el-button @click="getWeatherFetch">点击查询天气(fetch)</el-button>
  <el-button @click="getWeatherAxios">点击查询天气(axios)</el-button>
</template>

<script>
import { ref } from 'vue'
import { requestQuery, requestQueryPromise } from '@/http/xhr.js'
import { gaodeHttp } from '@/http/axios.js'
export default {
  name: 'UploadComp',
  setup() {
    const cityCode = ref('321100')
    function getWeather() {
      requestQuery('GET', {
        key: 'bb3993e9a284103bfac4003279ed4914',
        city: cityCode.value,
        extensions: 'base',
      }, console.log)
    }
    async function getWeatherPromise() {
      const result = await requestQueryPromise('GET', {
        key: 'bb3993e9a284103bfac4003279ed4914',
        city: cityCode.value,
        extensions: 'base'
      })
      console.log(result)
    }

    async function getWeatherFetch() {
      const result = await fetch(`https://restapi.amap.com/v3/weather/weatherInfo?city=${cityCode.value}&key=bb3993e9a284103bfac4003279ed4914&extensions=base`)
      // data也是异步的
      const data =await result.json()
      console.log(result)
      console.log(data)
    }

    async function getWeatherAxios() {
      const {data: res} = await gaodeHttp.get('/weather/weatherInfo', {
        params: {
          city: cityCode.value,
          key: 'bb3993e9a284103bfac4003279ed4914',
          extensions: 'base'
        }
      })

      console.log(res)
      
    }

    return {
      cityCode,
      getWeather,
      getWeatherPromise,
      getWeatherFetch,
      getWeatherAxios
    }
  }
}
</script>