import VueRouter from "vue-router"
import news from '../components/footer/news.vue'
import hot from '../components/footer/hot.vue'
import com from '../components/footer/comment.vue'
import mine from '../components/footer/mine.vue'
import headline from '../components/news/headline.vue'
import finance from '../components/news/finance.vue'
import enterta from '../components/news/enterta.vue'
import fasion from '../components/news/fasion.vue'
import health from '../components/news/health.vue'
import sport from '../components/news/sport.vue'
import search from '../components/news/search.vue'
import quit from '../components/quit/quit.vue'
import login from '../components/quit/login.vue'
import register from '../components/quit/register.vue'

export default new VueRouter({
	routes:[
		{
			path:'/news',
			component:news,
			children:[
				{
					path:'/headline',
					component:headline
				},
				{
					path:'/finance',
					component:finance
				},
				{
					path:'/enterta',
					component:enterta
				},
				{
					path:'/fasion',
					component:fasion
				},
				{
					path:'/health',
					component:health
				},
				{
					path:'/sport',
					component:sport
				}
			]
		},
		{
			path:'/hot',
			component:hot
		},
		{
			path:'/comment',
			component:com
		},
		{
			path:'/mine',
			component:mine
		},
		{
			path:'*',
			redirect:'/headline'
		},
		{
			path:"/search",
			component:search
		},
		{
			path:'/quit',
			component:quit
		},
		{
			path:'/login',
			component:login
		},
		{
			path:'/register',
			component:register
		}
		
	]
})
