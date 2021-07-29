import { signIn, getSession, providers } from 'next-auth/client'
import Button from "@material-tailwind/react/Button"
import { LoginIcon } from '@heroicons/react/solid'
const SignIn = ({ providers }) => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                    <Button
                        color="blue"
                        buttonType='filed'
                        ripple="light"
                        onClick={() => signIn(provider.id)}
                        className="w-auto"
                    ><LoginIcon className="h-6 w-6" />Sign in with {provider.name}</Button>

                </div>
            ))}
        </div>
    )
}

export default SignIn

SignIn.getInitialProps = async (context) => {
    const { req, res } = context
    const session = await getSession({ req })

    if (session && res) {
        res.writeHead(302, {
            Location: '/',
        });
        res.end()
        return
    }
    return {
        session: undefined,
        providers: await providers(context)
    }
}

