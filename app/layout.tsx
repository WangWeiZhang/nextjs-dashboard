/*
 * @Copyright (c): Knowdee All rights reserved.
 * @Description: Type your file description
 * @Author: Type your email address
 * @LastEditors: wangwz@knowdee.com
 * @Date: 2024-02-23 22:22:25
 * @LastEditTime: 2024-04-22 15:56:48
 * @FilePath: /nextjs-dashboard/app/layout.tsx
 */
import './ui/global.css'
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
