import Link from 'next/link'
import React from 'react'

function register() {
  return (
    <div className='bg-white'>
      <div className='flex flex-col items-center justify-center h-screen p-6'>
        <div className='w-10/12 mx-auto md:w-96'>
          <h1 className='mb-2 text-lg font-medium'>회원가입</h1>
          <form>
            <button className='w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border-gray-400 rounded'>회원가입</button>
          </form>
          <small>
            이미 가입하셨나요?
            <Link href="/login">
              <span className='ml-1 text-blue-500 uppercase'> 로그인 </span>
            </Link>
          </small>
        </div>
      </div>
    </div>
  )
}

// 테스트

export default register
