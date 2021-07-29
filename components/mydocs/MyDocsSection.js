import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'
import Image from 'next/image'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'
import { useSession } from 'next-auth/client'
import { db } from '../../firebase'
import { useEffect, useState } from 'react'
import DocumentRow from '../newdocs/DocumentRow'


const MyDocsSection = () => {
    const [session] = useSession()

    const [snapshot] = useCollectionOnce(db.collection('userDocs').doc(session?.user.email).collection('docs'))


    return (
        <section>
            <div className="max-w-3xl mx-auto py-8 px-10 md:px-0 text-sm">
                <div className="flex items-center justify-between pb-5 text-gray-700 text-base">
                    <h2 className="font-medium flex-grow">
                        My Documents
                    </h2>
                    <p className="mr-12">
                        Date Created
                    </p>
                    <Icon name='folder' size='3xl' color='gray' />
                </div>
                {snapshot?.docs.map((item) => (
                    <DocumentRow
                        id={item.id}
                        key={item.id}
                        fileName={item.data().fileName}
                        date={item.data().timestamp}
                    />
                ))}
            </div>

        </section>
    )
}

export default MyDocsSection


