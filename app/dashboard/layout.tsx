/*
 * @Copyright (c): Knowdee All rights reserved.
 * @Description: Type your file description
 * @Author: Type your email address
 * @LastEditors: wangwz@knowdee.com
 * @Date: 2024-04-22 16:52:01
 * @LastEditTime: 2024-04-22 16:57:47
 * @FilePath: /nextjs-dashboard/app/dashboard/layout.tsx
 */
import SideNav from '@/app/ui/dashboard/sidenav';

/**
 * 布局组件
 *
 * @param children 子元素
 * @returns 返回包含子元素的 JSX 元素
 */
export default function Layout ({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}