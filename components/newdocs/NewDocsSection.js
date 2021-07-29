import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'
import Image from 'next/image'
import Modal from '@material-tailwind/react/Modal'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import { useState } from 'react'
import { db } from '../../firebase'
import firebase from 'firebase'
import { useSession } from 'next-auth/client'





const NewDocsSection = () => {
    const [showModal, setShowModal] = useState(false)
    const [input, setInput] = useState()

    const [session] = useSession();


    const createDocument = () => {
        if (!input) return

        db.collection('userDocs')
            .doc(session.user.email)
            .collection('docs')
            .add({
                fileName: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
        setInput('')
        setShowModal(false)
    }

    const modal = (
        <Modal size='sm' active={showModal} toggler={() => setShowModal(false)}>
            <ModalBody>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Enter name of document..."
                    className='outline-none w-full'
                    onKeyDown={(e) => e.key === "Enter" && createDocument()}
                />
            </ModalBody>
            <ModalFooter>
                <Button
                    color="red"
                    buttonType='link'
                    onClick={(e) => setShowModal(!showModal)
                    }
                    ripple='dark'
                >
                    Close
                </Button>
                <Button
                    color="blue"
                    buttonType='linl'
                    onClick={createDocument}
                    ripple='dark'
                >
                    Create
                </Button>
            </ModalFooter>


        </Modal>
    )





    return (
        <section className="bg-[#F8F9FA] pb-10 px-10">
            {modal}
            <div className="max-w-3xl mx-auto">
                <div className="py-6 flex justify-between items-center">
                    <h2 className="text-gray-700 text-lg">Create new document</h2>
                    <Button
                        color="gray"
                        buttonType="outline"
                        iconOnly={true}
                        ripple="dark"
                        className="border-0"
                    >
                        <Icon name="more_vert" size="3xl" />
                    </Button>
                </div>
                <div>
                    <div className="relative h-52 w-40 border-2 hover:border-blue-400 duration-75 cursor-pointer"
                        onClick={() => setShowModal(true)}
                    >
                        <Image src="/images/docs-blank.png" layout="fill" ale="New black documents" />
                    </div>
                    <p className="ml-2 mt-2 font-medium text-sm text-gray-700">Blank</p>
                </div>
            </div>
        </section>
    )
}

export default NewDocsSection
