<!--<template>-->
  <!--<div class="center">个人中心</div>-->
  <!--<div class="top"></div>-->
  <!--&lt;!&ndash;<div class="home-container container" v-loading="isLoading">&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="header">&ndash;&gt;-->
      <!--&lt;!&ndash;<h1>文章</h1>&ndash;&gt;-->
      <!--&lt;!&ndash;<el-button&ndash;&gt;-->
        <!--&lt;!&ndash;type="primary"&ndash;&gt;-->
        <!--&lt;!&ndash;size="medium"&ndash;&gt;-->
        <!--&lt;!&ndash;@click="linkTo"&ndash;&gt;-->
      <!--&lt;!&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;创建文章&ndash;&gt;-->
        <!--&lt;!&ndash;<i class="el-icon-circle-plus-outline"></i>&ndash;&gt;-->
      <!--&lt;!&ndash;</el-button>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div v-if="article_list.length === 0" class="">&ndash;&gt;-->
      <!--&lt;!&ndash;数据为空！！！&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<ul v-else>&ndash;&gt;-->
      <!--&lt;!&ndash;<li v-for="(item, index) in article_list" :key="index">&ndash;&gt;-->
        <!--&lt;!&ndash;<router-link :to="{ name: 'article', params: { id: item.id } }" class="title">&ndash;&gt;-->
          <!--&lt;!&ndash;{{item.title}}&ndash;&gt;-->
        <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="desc">{{item.description}}</div>&ndash;&gt;-->
      <!--&lt;!&ndash;</li>&ndash;&gt;-->
    <!--&lt;!&ndash;</ul>&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;<h1>{{ $store.state.count }}</h1>&ndash;&gt;-->
    <!--&lt;!&ndash;<el-button @click="onChange">+</el-button>&ndash;&gt;&ndash;&gt;-->
  <!--&lt;!&ndash;</div>&ndash;&gt;-->
<!--</template>-->

<!--<script>-->
<!--import http from 'axios'-->
<!--import {mapState, mapGetters, mapActions} from 'vuex'-->

<!--export default {-->
  <!--name: 'home',-->
  <!--data() {-->
    <!--return {-->
      <!--isLoading: false-->
    <!--}-->
  <!--},-->
  <!--computed: {-->
    <!--...mapState(['article_list']),-->
    <!--// ...mapGetters(),-->
  <!--},-->
  <!--async created() {-->
    <!--try {-->
      <!--this.isLoading = true-->
      <!--this.getArticles({-->
        <!--_limit: 2-->
      <!--})-->
      <!--/*const res = await http.get('http://localhost:3000/articles')-->
      <!--this.$store.commit('SET_ARTICLE_LIST', res.data)*/-->
      <!--// console.log(this.$store.state)-->
    <!--} catch (e) {-->
      <!--this.$notify.error({-->
        <!--title: '错误',-->
        <!--message: '网络错误！！！'-->
      <!--});-->
    <!--} finally {-->
      <!--this.isLoading = false-->
    <!--}-->
    <!--/*http.get('http://localhost:3000/articles').then(res => {-->
      <!--this.articles = res.data-->
    <!--})*/-->
  <!--},-->
  <!--methods: {-->
    <!--...mapActions(['getArticles']),-->
    <!--onChange() {-->
      <!--this.$store.commit('increment')-->
    <!--},-->
    <!--linkTo() {-->
      <!--this.$router.push({-->
        <!--name: 'article-create'-->
      <!--})-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--&lt;!&ndash; scoped：作用域 &ndash;&gt;-->
<!--<style lang="scss" scoped>-->
  <!--.center{-->
    <!--font-size: 1.2rem;-->
    <!--text-align: center;-->
  <!--}-->
<!--.top{-->
  <!--wid-->
<!--}-->


<!--/*.home-container {*/-->
  <!--/*.header {*/-->
    <!--/*height: 100px;*/-->
    <!--/*display: flex;*/-->
    <!--/*align-items: center;*/-->
    <!--/*justify-content: space-between;*/-->
    <!--/*padding: 0 20px;*/-->
  <!--/*}*/-->

  <!--/*li {*/-->
    <!--/*height: 100px;*/-->
    <!--/*list-style: none;*/-->

    <!--/*.title {*/-->
      <!--/*font-size: 30px;*/-->
      <!--/*font-weight: bold;*/-->
      <!--/*line-height: 50px;*/-->
      <!--/*text-decoration: none;*/-->
      <!--/*color: #333;*/-->

      <!--/*&:hover {*/-->
        <!--/*color: aqua;*/-->
        <!--/*text-decoration: underline;*/-->
      <!--/*}*/-->
    <!--/*}*/-->

    <!--/*.desc {*/-->
      <!--/*font-size: 16px;*/-->
      <!--/*line-height: 25px;*/-->
    <!--/*}*/-->
  <!--/*}*/-->
<!--/*}*/-->
<!--</style>-->

