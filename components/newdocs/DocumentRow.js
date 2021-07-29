import Button from "@material-tailwind/react/Button"
import Icon from "@material-tailwind/react/Icon"
import { useRouter } from "next/router"

const DocumentRow = ({ id, fileName, date }) => {

    const router = useRouter();


    return (
        <div
            id={id}
            onClick={() => router.push(`/doc/${id}`)}
            className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 text-sm cursor-pointer duration-75 ease-in-out"
        >
            <Icon name="article" size="3xl" color='blue' />
            <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
            <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>

            <Button
                color='grey'
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple='dark'
                className="border-0"
            >
                <Icon name="more_vert" size="3xl" />
            </Button>
        </div>
    )
}

export default DocumentRow
