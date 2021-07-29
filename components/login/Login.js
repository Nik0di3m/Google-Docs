import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { signIn } from "next-auth/client"
import Image from 'next/image'


const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-2">
            <Image
                src="/images/loginImage.png"
                height={550}
                width={350}
                objectFit="contain"
            />
            <Button
                color="blue"
                buttonType='filed'
                ripple="light"
                onClick={signIn}
                className="w-44"
            >Sign In</Button>
        </div>
    )
}

export default Login
