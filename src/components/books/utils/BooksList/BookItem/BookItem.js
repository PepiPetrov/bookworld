import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom"
import { getAvatar, getImageUrl } from '../../../../../services/image-service'
import styles from './BookItem.module.css'

export default function BookItem({ book }) {
    const [url, setUrl] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [avatarUrl, setAvatarUrl] = useState('')

    useEffect(() => {
        if (isLoading) {
            getImageUrl(book._id).then(x => {
                setUrl(x)
            })
            getAvatar(book.creator).then(x => {
                setAvatarUrl(x)
            })
        }

        return () => {
            setIsLoading(false)
        }
    }, [isLoading, book._id, book.creator])


    if (book.description.length > 255) {
        book.description = book.description.slice(0, 256)
        book.description += '...'
    }
    return <Card className={styles['card']}>
        <Image src={avatarUrl} alt="No avatar" className="avatar" style={{ marginLeft: "40%", marginTop: "5%" }} />
        <Card.Body>
            <Card.Img src={url} style={{ width: '29%' }} alt="No image" />
            <Card.Title style={{ marginTop: "1%" }}>{book.title}</Card.Title>
            <Card.Text style={{ wordBreak: 'break-all' }}>
                {book.description}
            </Card.Text>
            <Card.Link as={Link} to={`/details/${book._id}`} style={{ color: 'grey', textDecoration: 'none' }}>See more</Card.Link>
        </Card.Body>
    </Card>
}