<template>
  <div class="article-create-container container">
    <h1>创建文章</h1>
    <div class="form">
      <div class="item">
        <el-input
          type="text"
          placeholder="请输入标题"
          v-model="article.title"
          maxlength="10"
          show-word-limit
        />
      </div>
      <div class="item">
        <el-input
          type="text"
          placeholder="请输入描述"
          v-model="article.description"
          maxlength="20"
          show-word-limit
        />
      </div>
      <div class="item">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="article.detail">
        </el-input>
      </div>
      <div class="item">
        <el-button type="primary" @click="submitArticle">创建</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import http from 'axios'

export default {
  data() {
    return {
      isLoading: false,
      article: {
        title: '',
        description: '',
        detail: ''
      }
    }
  },
  methods: {
    async submitArticle() {
      if (this.article.title) {
        try {
          this.isLoading = true
          await http.post('http://localhost:3000/articles', {
            ...this.article
          })
          this.$router.go(-1)
        } catch (e) {
          this.$notify.error({
            title: '错误',
            message: '网络错误！！！'
          });
        } finally {
          this.isLoading = false
        }
      } else {
        this.$message.error('标题不能为空');
      }
    }
  }
}
</script>

<style lang="scss">
.article-create-container {

  .form {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 50px;

    .item {
      margin: 10px 0;

      > button {
        width: 100%;
      }
    }
  }
}
</style>
