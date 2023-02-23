import './globals.css'
import { Poppins } from '@next/font/google';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import SessionProvider from '@/providers/SessionProvider';
import Login from '@/components/Login';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '700', '900']
});


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  console.log(session)
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${poppins.variable} font-poppins bg-black`}>
        <SessionProvider session={session}>
          {!session ?
            <Login />
            :
            children
          }
        </SessionProvider>
      </body>
    </html>
  )
}
