import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex items-center justify-center flex-col h-svh'>
      <h2>Not Found</h2>
      <p
        style={{
          marginBottom: '2.5rem',
        }}
      >
        Could not find requested resource
      </p>
      <Link href="/" className='btn'>Return Home</Link>
    </div>
  )
}