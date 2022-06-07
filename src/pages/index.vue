<!-- <template>
  <div>
    <page-title label="HOME" />
    <section class="-item section">
      <div class="section__head">
        <h2 class="section__title">
          About
        </h2>
      </div>
      <div class="section__main">
        <p class="section__description">
          説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。
        </p>
        <div class="section__link">
          <nuxt-link to="/about" class="-link">
            会社情報へ
          </nuxt-link>
        </div>
      </div>
    </section>


    <section class="-item section">
      <div class="section__head">
        <h2 class="section__title">
          News
        </h2>
      </div>
      <div class="section__main">
        <div class="section__newsList">
          <div
            v-for="(post, index) in posts"
            :key="`post-${index}`"
            class="section__newsList__item card"
          >
            <nuxt-link :to="`/news/posts/${post.id}`" class="card__link">
              <p class="card__date">
                {{ post.date | dateFilter }}
              </p>
              <p class="card__title">
                {{ post.title.rendered }}
              </p>
            </nuxt-link>
          </div>
        </div>
        <div class="section__link">
          <nuxt-link to="/news" class="-link">
            お知らせ一覧へ
          </nuxt-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  // データをWPから取得し、ページコンポーネントへ直接セットする
  async asyncData (context) {
    // WP REST APIのベースURL
    const baseUrl = context.$config.wpBaseUrl
    // お知らせの記事を3件取得するとためのエンドポイントを作成
    const newsUrl = baseUrl + 'posts?_embed&per_page=3&categories=2'
    // 記事取得
    const posts = await context.$axios.$get(newsUrl)

    return {
      posts
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  &__head {
    display: flex;
    column-gap: 16px;
    align-items: center;
  }
  &__title {
    font-size: 3.2rem;
    font-weight: bold;
  }
  &__link {
    margin-top: 32px;
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
  }
  &__main {
    margin-top: 16px;
  }
  &__description {
  }
}
.-item {
  & + & {
    margin-top: 64px;
  }
}
.-link {
  display: inline-block;
  padding: 8px 16px;
  border: 2px solid $colorCorporateMain;
  background-color: $colorWhite;
  color: $colorCorporateMain;
  transition: background-color 0.3s, color 0.5s;
  &:hover {
    background-color: $colorCorporateMain;
    color: $colorWhite;
  }
}

</style> -->


<template>
  <div class="">
    <h1>Hello Nuxtres!</h1>
    <p>
      this page is renderred on th <strong>{{ rendering }}</strong>
    </p>
    <p v-if="rendering === 'server'">
      first load or hard refresh is done on server side
    </p>
    <p v-if="rendering === 'client'">
      navigation is done on client side.
    </p>
    <ul>
      <li>refresh the page for server side renderign</li>
      <li>click the links to see cliet side rendering</li>
    </ul>
    <nuxt-link to="/about">about</nuxt-link>
  </div>
</template>
<script>
export default {
  asyncData() {
    return {
      rendering: process.server ? 'server' : 'client'
    }
  }
}
</script>