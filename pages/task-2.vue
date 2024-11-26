<script setup lang="ts">
import { ref } from 'vue'
import SubscriptionImage1 from '~/assets/images/Subscription/Image1.jpg'
import SubscriptionImage2 from '~/assets/images/Subscription/Image2.jpg'
import SubscriptionImage3 from '~/assets/images/Subscription/Image3.jpg'
import SubscriptionImage4 from '~/assets/images/Subscription/Image4.jpg'

const breadcrumbs = [
  { text: 'Главная', link: '#' },
  { text: 'Рассылки', link: '#' },
  { text: 'Хлебные крошки' },
]

const activeLink = ref<number>(0)

const linksArray = [
  'Рассылки',
  'Соцсети',
  'Мессенджеры',
]

const SubscriptionArray = [
  {
    introduction: 'Перед рассветом',
    title: 'Утренний бухгалтер',
    description: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
    checkList: [
      'Новости для бухгалтеров, ИП и директора',
      'Подборка статей за день',
    ],
    toggleText: 'Уже получает 59 342 человек',
    img: SubscriptionImage1,
  },
  {
    introduction: 'После заката',
    title: 'Ночной бухгалтер',
    description: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
    checkList: [
      'Анализ, оценка и только самое главное',
      'Лучшие комменты юзеров в обзоре',
    ],
    toggleText: 'Уже получает 37 480 человек ',
    img: SubscriptionImage2,
  },
  {
    introduction: 'Раз в две недели',
    title: 'Ножницы скидок',
    description: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
    checkList: [
      'Акции и скидки от лидеров рынка',
      'Те, кто подписался – экономят много денег ',
    ],
    toggleText: 'Уже получает 92 118 человек ',
    img: SubscriptionImage3,
  },
  {
    introduction: 'По мере появления анонсов',
    title: 'Чемодан вебинаров',
    description: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
    checkList: [
      'Никогда не пришлем платные вебинары',
      'Подборка топовых тем для вебинаров',
    ],
    toggleText: 'Уже получает 59 342 человек',
    img: SubscriptionImage4,
  },
]
</script>

<template>
  <div class="w-full py-12">
    <div class="flex select-none justify-center">
      <img src="~/assets/icons/klerk.png" alt="Клерк логотип">
    </div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <h1 class="mt-6 text-center text-[32px] font-medium leading-[42px] sm:text-title-h1">
      Подписки «Клерка»
    </h1>
    <!-- Нам меню -->
    <div class="container mx-auto mt-6">
      <nav>
        <ul class="flex justify-center gap-6">
          <li v-for="(link, index) in linksArray" :key="index">
            <p
              class="cursor-pointer pb-[16px] text-base"
              :class="index === activeLink ? 'text-blue-light border-b-blue-light border-b-2' : 'text-grey'"
              @click="activeLink = index"
            >
              {{ link }}
            </p>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Секция с подписками -->
    <section class="container mx-auto bg-[#F5F5F8] px-4 py-6 md:px-5 md:py-9 lg:rounded-[16px] lg:px-6 lg:py-12">
      <h3 class="mx-auto max-w-min text-title-h3 font-medium sm:mx-0 sm:max-w-full sm:text-center">
        Выберите&nbsp;рассылки,&nbsp;которые подходят&nbsp;именно&nbsp;вам
      </h3>
      <div class="mt-6 md:px-3 lg:px-6">
        <ImputSearch />
        <Toggle class="mt-4" text="Подписаться на все рассылки" />
      </div>
      <subscription :subscriptions="SubscriptionArray" class="mt-8" />
    </section>
    <div class="mt-12 flex select-none justify-center">
      <img src="~/assets/icons/smile.png" alt="">
    </div>
  </div>
</template>

<style scoped>

</style>
