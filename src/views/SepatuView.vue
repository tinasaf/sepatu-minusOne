<template>
<div class="w-full py-2 bg-primary text-center text-black text-xs bg-yellow-400 lowercase">dapatkan diskon 50% sekarang</div>
<nav class="flex flex-wrap items-center justify-between px-2 py-3 sticky top-0 z-40 bg-white">
    <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
        <a class="flex items-center text-base font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-yellow-400" href="#pablo">
            <img src="../assets/logo2.png" alt="Logo" class="w-10 mr-2 text-5xl">MINUSONE </a>
          <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
          <span class="block relative w-6 h-px rounded-sm bg-white"></span>
          <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        </button>
      </div>
      <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item" v-for="(item, index) in navItems" :key="index">
            <a class="cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-yellow-400 hover:opacity-75" :href="item.href">
              {{ item.name }}
            </a>
          </li>
        </ul>
        <!--icon botsrap-->
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item -mx-1">
                <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-yellow-400 hover:opacity-75" href="#pablo">
                  <i class="bi bi-search-heart-fill text-2xl"></i>
                </a>
            </li>
            <li class="nav-item -mx-1">
                <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-yellow-400 hover:opacity-75" href="#pablo">
                  <i class="bi bi-bag-plus-fill text-2xl"></i>
                </a>
            </li> 
        </ul>
      </div>
    </div>
</nav>

<!-- background -->
<section id="section-1" class="relative">
    <img src="../assets/background-main.jpg" alt="" class="w-full lg:h-auto h-[265px] object-fill">
    <div class="absolute z-10 w-full top-1/4 lg:px-20 px-4">
        <div class="capitalize text-white text-xl lg:text-4xl tracking-wide leading-snug text-left hover:opacity-70 mt-18">
            <span class="font-bold">Gaya Asli Buatan</span> 
            <br>
            <span class="font-bold">Negeri Sendiri</span> 
            <br>
            <a href="#beli" class="bg-transparent hover:bg-yellow-400 text-yellow-300 font-bold hover:text-white py-2 px-4 border border-yellow-400 hover:border-transparent rounded-full text-xs lg:text-sm mt-4 inline-block">
                Beli Sekarang
            </a>
        </div>
    </div>
</section>

<!-- keuntungan -->
<section class="py-8 lg:py-16 px-4 lg:px-20 bg-white">
  <h2 class="text-2xl lg:text-2xl font-semibold text-center mb-10 text-yellow-400">Keuntungan yang Kami Berikan</h2>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    
  <div class="w-full text-dark flex justify-center items-center space-x-9" v-for="(keuntung, untung) in keuntungan" :key="untung">
      <div class="w-72 h-32 bg-yellow-50 text-black flex flex-col justify-center items-center rounded-lg px-12 py-4">
        <i :class="['bi', keuntung.icon, 'text-4xl']"></i>
            <div :class="[keuntung.textClass, 'mt-2']">{{ keuntung.text }}</div>
      </div>
    </div>
  </div>
</section>


<!-- kategori -->
<section class="py-16 lg:px-20 px-4 flex flex-col gap-10">
    <div class="w-full text-start text-xl text-dark">Kategori</div>
    <div class="w-[362px] md:w-full overflow-x-auto">
      <div class="flex w-full">
        <div 
          v-for="(category, index) in categories" :key="index" :class="[category.bgColor, 'w-full p-8 cursor-pointer hover:opacity-50 lg:h-36 flex justify-center items-center']">
          {{ category.name }}
        </div>
      </div>
    </div>
</section>


<!-- hi -->
<section class="mx-24 my-20">
    <div class="text-2xl mb-10">High Series</div>
    <div class="grid grid-rows-1 grid-flow-col gap-4 justify-between pb-11">
      <div v-for="(high, hig) in highs" :key="hig">
        <img :src="high.image" :alt="high.alt" class="w-52 h-52">
        <div class="bg-yellow-100 p-4">
          <div class="mb-1">{{ high.title }}</div>
          <div class="flex items-center mb-1 space-x-1">
            <i class="bi bi-star-fill text-yellow-400" v-for="star in 5" :key="star"></i>
          </div>
          <div class="flex items-center justify-between">
            {{ high.price }}
            <div class="bg-yellow-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-50">
              <i class="bi bi-bag-plus-fill text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center hover:opacity-50">
      <a href="#">Lihat Semuanya</a>
    </div>
</section>


<!-- slip -->
<section class="mx-24 my-20">
        <div class="text-2xl mb-10">Slip On Series</div>
        <div class="grid grid-rows-1 grid-flow-col gap-4 justify-between pb-11">
            <div v-for="(slipon, slip) in slipons" :key="slip">
                <img :src="slipon.image" :alt="slipon.alt"  class="w-52 h-52">
                <div class="bg-yellow-100 p-4">
                    <div class="mb-1">{{ slipon.title }}</div>
                    <div class="flex items-center mb-1 space-x-1">
                        <i class="bi bi-star-fill text-yellow-400"  v-for="star in 5" :key="star"></i>
                    </div>
                    <div class="flex items-center justify-between">
                      {{ slipon.price }}
                        <div class="bg-yellow-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-50">
                            <i class="bi bi-bag-plus-fill text-white"></i>
                        </div>
                    </div>
                </div>
            </div>  
          </div>
        <div class="text-center hover:opacity-50">
            <a href="#">Lihat Semuanya</a>
        </div>
</section>

<!-- zeus -->
<section class="mx-24 my-20">
        <div class="text-2xl mb-10">Zeus Series</div>
        <div class="grid grid-rows-1 grid-flow-col gap-4 justify-between pb-11">
            <div v-for="(zes, zeu) in zeus" :key="zeu" >
                <img :src="zes.image" :alt="zes.alt" class="w-52 h-52">
                <div class="bg-yellow-100 p-4">
                    <div class="mb-1">
                      {{ zes.title }}
                    </div>
                    <div class="flex items-center mb-1 space-x-1">
                        <i class="bi bi-star-fill text-yellow-400" v-for="star in 5" :key="star"></i>
                    </div>
                    <div class="flex items-center justify-between">
                      {{ zes.price }}
                        <div class="bg-yellow-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-50">
                            <i class="bi bi-bag-plus-fill text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        <div class="text-center hover:opacity-50">
            <a href="#">Lihat Semuanya</a>
        </div>
</section>

<!-- ares -->
<section class="mx-24 my-20">
        <div class="text-2xl mb-10">Ares Series</div>
        <div class="grid grid-rows-1 grid-flow-col gap-4 justify-between pb-11">
            <div v-for="(are, res) in ares" :key="res">
                <img :src="are.image" :alt="are.alt" class="w-52 h-52">
                <div class="bg-yellow-100 p-4">
                    <div class="mb-1">
                        {{ are.title }}
                    </div>
                    <div class="flex items-center mb-1 space-x-1">
                        <i class="bi bi-star-fill text-yellow-400" v-for="star in 5" :key="star"></i>
                    </div>
                    <div class="flex items-center justify-between">
                        {{ are.price }}
                        <div class="bg-yellow-300 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:opacity-50">
                            <i class="bi bi-bag-plus-fill text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        <div class="text-center hover:opacity-50">
            <a href="#">Lihat Semuanya</a>
        </div>
</section>


<!-- testi cus -->
<section class="py-16 lg:px-18 px-4 flex flex-col gap-6 bg-yellow-100">
  <div class="w-full text-center text-xl text-dark mb-9">Testimoni Pelanggan</div>

  <div class="w-full text-dark flex flex-wrap justify-center gap-6">
    <div v-for="(testi, custo) in testimonis" :key="custo" class="w-full sm:w-72 h-auto bg-yellow-50 text-black flex flex-col justify-center items-center rounded-lg px-8 py-4">
      <i :class="['bi', testi.icon, 'text-4xl']"></i>
      <div class="text-lg font-semibold mt-4">{{ testi.nama }}</div>
      <div class="text-sm mt-2 text-center">{{ testi.deksripsi }}</div>
    </div>
  </div>
</section>

<!-- payment -->
<section class="py-8 lg:py-12 px-4 lg:px-20 flex flex-col gap-10 bg-gray-50">
  <div class="w-full text-start text-xl text-dark"> Metode Pembayaran </div>
  <div class="flex flex-wrap justify-center gap-8">
    <div v-for="(method, pay) in paymentMethods" :key="pay" class="bg-white rounded px-8 py-8 cursor-pointer hover:opacity-50">
        <div><img :src="method.src" :alt="method.alt" class="w-24 h-10"></div>
    </div>
  </div>
</section>


<!-- pertayaan umum -->
<section class="py-8 lg:py-16 px-4 lg:px-20 flex flex-col gap-4 bg-zinc-50">
    <h2 class="text-2xl font-semibold mb-6">Pertanyaan Umum (FAQ)</h2>
    <div v-for="(faq, faqu) in faqs" :key="faqu" class="bg-white border border-gray-300 rounded-lg mb-2">
      <button class="w-full flex justify-between items-center p-4 focus:outline-none">
        <span class="text-lg">{{ faq.pertanyaan }}</span>
        <i class="bi bi-chevron-down"></i>
      </button>
      <div class="faq-content hidden p-4 text-gray-600">
        {{ faq.jawaban }}
      </div>
    </div>
</section>

<!-- Footer -->
<footer class="text-surface/75 bg-yellow-400 dark:text-white/75 lg:text-left">
  <div class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
    <div class="me-12 hidden lg:block">
      <!-- Bungkus gambar dan teks dalam elemen flex -->
      <span class="flex items-center">
        <img src="../assets/logo2.png" alt="Logo" class="w-10 mr-2">
        <span class="text-2xl font-bold">MINUSONE</span>
      </span>
    </div>
  </div>

  <div class="mx-auto py-10 max-w-7xl">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="text-left px-4">
        <h6 class="mb-4 font-semibold uppercase">Alamat</h6>
        <p>
          Jl.Kh.Abdul Fatah Hasan
          Warjok
          <br>
          Serang Banten 42117
        </p>
      </div>

      <div class="text-left px-4">
        <h6 class="mb-4 font-semibold uppercase">Produk</h6>
        <p class="mb-4">
          <a href="#!">High Series</a>
        </p>
        <p class="mb-4">
          <a href="#!">Slip On Series</a>
        </p>
        <p class="mb-4">
          <a href="#!">Stroom Series</a>
        </p>
        <p>
          <a href="#!">Clasic Series</a>
        </p>
      </div>

      <div class="text-left px-4">
        <h6 class="mb-4 font-semibold uppercase">Kontak Kami</h6>
        <p class="mb-4">Serang, Banten, Indonesia</p>
        <p class="mb-4">info@example.com</p>
        <p class="mb-4">+62 234 567 88</p>
      </div>
    </div>
  </div>

  <div class="bg-black/5 p-6 text-center">
    <span class="font-semibold">© 2024 Copyright : </span>
    <a class="font-semibold">MINUSONE</a>
  </div>
</footer>

</template>


<script>

import { reactive } from 'vue';
import high1 from '../assets/series/high-1.png';
import high2 from '../assets/series/high-2.jpg';
import high3 from '../assets/series/high-3.jpg';
import high4 from '../assets/series/high-4.jpg';
import high5 from '../assets/series/high-5.jpg';

import on1 from '../assets/slip/on-1.jpg';
import on2 from '../assets/slip/on-2.jpg';
import on3 from '../assets/slip/on-3.jpg';
import on4 from '../assets/slip/on-4.jpg';
import on5 from '../assets/slip/on-5.jpg';

import z1 from '../assets/zeus/z-1.jpg';
import z2 from '../assets/zeus/z-2.jpg';
import z3 from '../assets/zeus/z-3.jpg';
import z4 from '../assets/zeus/z-4.jpg';
import z5 from '../assets/zeus/z-5.jpg';

import res1 from '../assets/ares/res-1.jpg';
import res2 from '../assets/ares/res-2.jpg';
import res3 from '../assets/ares/res-3.jpg';
import res4 from '../assets/ares/res-4.jpg';
import res5 from '../assets/ares/res-5.jpg';


import dana from '../assets/dana.png';
import gopay from '../assets/gopay2.png';
import bni from '../assets/bni.png';
import bri from '../assets/bri.png';
import bca from '../assets/bca.png';
import ocbc from '../assets/ocbc.png';


export default {
 
  data() {
    return {

      navItems: [
        { name: 'High Series', href: '#pablo' },
        { name: 'Slip On Series', href: '#pablo' },
        { name: 'Zeus Series', href: '#pablo' },
        { name: 'Ares Series', href: '#pablo' }
      ],

      keuntungan: [
        { icon: 'bi-emoji-wink-fill', text: 'Kenyamanan Maksimal', textClass: 'text-sm' },
        { icon: 'bi-box-seam-fill', text: 'Desain Stylish', textClass: 'text-sm' },
        { icon: 'bi-graph-up-arrow', text: 'Durabilitas Tinggi', textClass: 'text-sm' },
        { icon: 'bi-tags', text: 'Harga Terjangkau', textClass: 'text-sm' }
      ],

      categories: [
        { name: 'High Series', bgColor: 'bg-yellow-300' },
        { name: 'Slip On Series', bgColor: 'bg-amber-200' },
        { name: 'Zeus Series', bgColor: 'bg-yellow-300' },
        { name: 'Ares Series', bgColor: 'bg-amber-200' }
      ],

      highs: [
        { image: high1, alt: 'High 1', title: 'List Hitam', price: 'Rp 259.000' },
        { image: high2, alt: 'High 2', title: 'Hitam - Putih', price: 'Rp 259.000' },
        { image: high3, alt: 'High 3', title: 'Full White', price: 'Rp 259.000' },
        { image: high4, alt: 'High 4', title: 'Full Black', price: 'Rp 259.000' },
        { image: high5, alt: 'High 5', title: 'List Hitam - Putih Mono', price: 'Rp 259.000' }
      ],

      slipons: [
        { image: on1, alt: 'On 1', title: 'Wave Japan', price: 'Rp 159.000' },
        { image: on2, alt: 'On 2', title: 'Checkerboard classic', price: 'Rp 159.000' },
        { image: on3, alt: 'On 3', title: 'Stripe Black', price: 'Rp 159.000' },
        { image: on4, alt: 'On 4', title: 'Stripe Plain black white', price: 'Rp 159.000' },
        { image: on5, alt: 'On 5', title: 'Larva Golden', price: 'Rp 159.000' },
      ],

      zeus: [
        { image: z1, alt: 'Zes 1', title: 'High Full White', price: 'Rp 184.000' },
        { image: z2, alt: 'Zes 2', title: 'High Hitam - Putih', price: 'Rp 184.000' },
        { image: z3, alt: 'Zes 3', title: 'High Hitam Gem', price: 'Rp 184.000' },
        { image: z4, alt: 'Zes 4', title: 'High Full Black', price: 'Rp 184.000' },
        { image: z5, alt: 'Zes 5', title: 'Low Full White', price: 'Rp 184.000' },
      ],

      ares: [
        { image: res1, alt: 'Res 1', title: 'Army White', price: 'Rp 236.000' },
        { image: res2, alt: 'Res 2', title: 'Caramel White', price: 'Rp 236.000' },
        { image: res3, alt: 'Res 3', title: 'Off White Stripe', price: 'Rp 236.000' },
        { image: res4, alt: 'Res 4', title: 'Off White Black', price: 'Rp 236.000' },
        { image: res5, alt: 'Res 5', title: 'Double Black', price: 'Rp 236.000' },
      ],

      paymentMethods: [
      { src: dana, alt: 'metode dana' },
        { src: gopay, alt: 'metode gopay' },
        { src: bni, alt: 'metode bni' },
        { src: bri, alt: 'metode bri' },
        { src: bca, alt: 'metode bca' },
        { src: ocbc, alt: 'metode ocbc' }
      ],

      testimonis: [
        { icon: 'bi-person-circle', nama: 'tisaf', deksripsi: 'Lorem Ipsum Dolor Sit Amet' },
        { icon: 'bi-person-circle', nama: 'kangalu', deksripsi: 'Lorem Ipsum Dolor Sit Amet' },
        { icon: 'bi-person-circle', nama: 'ehyipa', deksripsi: 'Lorem Ipsum Dolor Sit Amet' },
        { icon: 'bi-person-circle', nama: 'yierli', deksripsi: 'Lorem Ipsum Dolor Sit Amet' }
      ],

      faqs: [
        { pertanyaan: 'lorem ipsum dolor sit amet?', jawaban: 'lorem lorem' },
        { pertanyaan: 'lorem ipsum dolor sit amet?', jawaban: 'lorem lorem' },
        { pertanyaan: 'lorem ipsum dolor sit amet?', jawaban: 'lorem lorem' },
        { pertanyaan: 'lorem ipsum dolor sit amet?', jawaban: 'lorem lorem' }
      ],

    };
  },
};
</script>