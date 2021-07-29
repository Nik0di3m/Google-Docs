import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { getSession, session, useSession } from "next-auth/client"
import { useRouter } from "next/router";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import TextEditor from "../../components/editor/TextEditor";
import Login from "../../components/login/Login";
import { db } from "../../firebase";

const Doc = () => {

    const router = useRouter();
    const { id } = router.query;
    const [session] = useSession();
    const [snapshot, loadingSnapshot] = useDocumentOnce(db.collection('userDocs').doc(session.user.email).collection('docs').doc(id))
    if (!session) return <Login />



    if (!loadingSnapshot && !snapshot?.data()?.fileName) {
        router.replace("/")
    }
    return (
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() => router.back()} className="cursor-pointer">
                    <Icon name="description" size="5xl" color="blue" />
                </span>
                <div className="flex-grow px-2">
                    <h2>{snapshot?.data()?.fileName}</h2>
                    <div className="flex items-center text-sm space-x-1 ml-1 h-8 text-gray-600">
                        <p className="cursor-pointer hover:bg-gray-100 p-2 duration-100 ease-in-out rounded-lg">File</p>
                        <p className="cursor-pointer hover:bg-gray-100 p-2 duration-100 ease-in-out rounded-lg">Edit</p>
                        <p className="cursor-pointer hover:bg-gray-100 p-2 duration-100 ease-in-out rounded-lg">View</p>
                        <p className="cursor-pointer hover:bg-gray-100 p-2 duration-100 ease-in-out rounded-lg">Insert</p>
                        <p className="cursor-pointer hover:bg-gray-100 p-2 duration-100 ease-in-out rounded-lg">Format</p>
                        <p className="cursor-pointer hover:bg-gray-100 p-2 duration-100 ease-in-out rounded-lg">Tools</p>
                    </div>
                </div>
                <div className="hidden md:flex lg:flex">
                    <Button
                        color="lightBlue"
                        buttonType="filles"
                        size="regular"
                        className="hidden md:flex lg:flex h-10"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple='light'
                    >
                        <Icon name="people" size="md" /> Share
                    </Button>
                    <img
                        className="cursor-pointer rounded-full h-10 w-10 ml-2"
                        src={session?.user?.image} alt="User Image" />
                </div>

            </header>
            <TextEditor />
        </div>
    )
}

export default Doc


export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    return {
        props: {
            session
        }
    }
}