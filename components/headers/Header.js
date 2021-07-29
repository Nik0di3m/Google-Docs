import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'
import { SearchIcon } from '@heroicons/react/solid'
import { getSession, signOut, useSession } from 'next-auth/client'


const Header = () => {
    const [session] = useSession();
    return (
        <header className="py-2 md:py-0 lg:px-2 flex sticky top-0 items-center shadow-sm border-2">
            <Button
                color="gray"
                buttonType="outline"
                size="regular"
                rounded={true}
                block={false}
                iconOnly={false}
                ripple="dark"
                className="hidden md:flex lg:flex h-20 w-20 border-0"
            >
                <Icon name="menu" size="3xl" />
            </Button>
            <Icon name='description' size="5xl" color="blue" />
            <h1 className="hidden md:flex lg:flex ml-2 text-gray-700 text-xl">
                Docs
            </h1>
            <div className='mx-5 flex max-w-[55%] lg:mx-20 md:w-full md:max-w-full lg:max-w-full lg:flex lg:flex-grow items-center px-5 py-2 
            bg-gray-100 text-gray-700 rounded-lg focus-within:text-gray-900 focus-within:shadow-md'>
                <SearchIcon className="h-7" />
                <input type="text" placeholder="Search" className="md:flex-gorw md:w-auto lg:flex-grow px-5 py-2 text-base bg-transparent outline-none" />
            </div>
            <Button
                color='gray'
                buttonType='outline'
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className="hidden md:flex lg:flex ml-5 md:ml-20 h-20 w-20 border-0"
            >
                <Icon name='apps' size="3xl" color="gray" />
            </Button>
            <div className="">
                <img
                    loading="lazy"
                    onClick={signOut}
                    className="cursor-pointer h-12 w-12 rounded-full ml-2"
                    src={session?.user?.image}
                    alt="User image"
                />
            </div>
        </header>
    )
}

export default Header
