import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' , link: '/search'},
  { src: '/assets/icons/black-heart.svg', alt: 'heart', link: '/favorites' },
  { src: '/assets/icons/user.svg', alt: 'user', link: '/profile'},
]

const Navbar = () => {
  
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          {/* <Image 
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          /> */}

          <p className="nav-logo">
            {/* <span className="block mx-4 text-center"> */}
  💸 <span className="bg-gradient-to-r from-indigo-800 via-purple-800 to-red-800 text-transparent bg-clip-text">PriceScraper</span> 💸
{/* </span> */}

          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image 
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar