<template>
  <div>
    <page-title label="NEWS" />
    <news-list :list="posts" />
  </div>
</template>

<script>
export default {
  name: 'NewsIndexPage',
  // データをWPから取得し、ページコンポーネントへ直接セットする
  async asyncData (context) {
    // WP REST APIのベースURL
    const baseUrl = context.$config.wpBaseUrl
    // お知らせの記事を3件取得するとためのエンドポイントを作成
    const newsUrl = baseUrl + 'posts?_embed&per_page=10&categories=2'
    // 記事取得
    const posts = await context.$axios.$get(newsUrl)

    return {
      posts
    }
  }
}
</script>
