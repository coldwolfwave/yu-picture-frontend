import { HomeOutlined , GithubOutlined} from '@ant-design/icons-vue'
import { h } from 'vue'
import accessEnum from '@/access/accessEnum.ts'

export const routes = [
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
    meta: {
      access: accessEnum.NOT_LOGIN,
    },
  },
  {
    key: '/admin/userManage',
    label: '用户管理',
    title: '用户管理',
    meta: {
      access: accessEnum.ADMIN,
    },
  },
  {
    key: '/add_picture',
    label: '创建图片',
    title: '创建图片',
    meta: {
      access: accessEnum.USER,
    },
  },
  {
    key: '/admin/pictureManage',
    label: '图片管理',
    title: '图片管理',
    meta: {
      access: accessEnum.ADMIN,
    },
  },
  {
    key: '/admin/spaceManage',
    label: '空间管理',
    title: '空间管理',
    meta: {
      access: accessEnum.ADMIN,
    },
  },
  {
    key: 'Github',
    icon: () => h(GithubOutlined),
    label: h('a', { href: 'https://github.com/coldwolfwave', target: '_blank' }, '王禹的GitHub'),
    title: '王禹的GitHub',
    meta: {
      access: accessEnum.NOT_LOGIN,
    },
  },
]
