import { createRef, useState } from 'react'
import { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { confirm } from 'react-bootstrap-confirmation'
import { getCommentsByBook, createComment, editComment, removeComment } from '../../../services/comments-service'

function Comments({ bookId }) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const contentRef = createRef()

    useEffect(() => {
        if (isLoading) {
            getCommentsByBook(bookId).then(x => {
                setComments(x)
            })
        }

        return () => {
            setIsLoading(false)
        }
    }, [isLoading, bookId])

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = findFormErrors()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        contentRef.current.value = ""
        createComment(form, bookId).then(x => {
            setComments(x)
        })
    }

    const findFormErrors = () => {
        const newErrors = {}
        const { content } = form
        if (content === undefined && content.length === 0) {
            newErrors.content = 'Content is required!'
        }
        return newErrors
    }

    return <div className="align-items-center" style={{ marginTop: "1%" }}>
        {comments.length > 0
            ? comments.map(x => <CommentItem comment={x} setComments={setComments} bookId={bookId} key={x._id}></CommentItem>)
            : <p>No comments</p>}
        {localStorage.getItem('token')
            ? <Form onSubmit={handleSubmit} style={{ marginTop: "0.5%", width: "50%", marginLeft: "26%" }}>
                <Form.Group>
                    <Form.Control ref={contentRef} as="textarea" onChange={e => setField('content', e.target.value)} placeholder="Comment" isInvalid={!!errors.content}></Form.Control>
                    <Form.Control.Feedback type="invalid">{errors.content}</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="success" style={{ marginTop: "3%", marginBottom: "2%" }}>Write comment</Button>
            </Form>
            : null}
    </div>
}

function CommentItem({ comment, setComments, bookId }) {
    const [showEdit, setShowEdit] = useState(false)
    const remove = () => {
        confirm('Arey you sure you want to remove the comment?').then(x => {
            if (x) {
                removeComment(comment._id).then(x => {
                    getCommentsByBook(bookId).then(x => {
                        setComments(x)
                    })
                })
            }
        })
    }
    return <div>
        <div style={{ width: "90%", marginLeft: "6%", marginTop: "2%" }}><p style={{ color: "#198754", marginBottom: "0" }}>{comment.creator} says:</p> {comment.content}</div>
        {comment.creator === localStorage.getItem('username')
            ? <div style={{ marginBottom: "2%" }}>
                {!showEdit
                    ? <Button variant="warning" onClick={e => setShowEdit(true)} style={{ marginTop: "2%" }}>Show edit</Button>
                    : <Button variant="warning" onClick={e => setShowEdit(false)}  style={{ marginTop: "2%" }}>Hide edit</Button>
                }
                {'  '}
                <Button variant="danger" onClick={remove} style={{ marginTop: "2%" }}>Remove comment</Button>
                {showEdit
                    ? <EditForm comment={comment} setComments={setComments} bookId={bookId} setShowEdit={setShowEdit}></EditForm>
                    : null}
            </div>
            : null}
    </div>
}

function EditForm({ setComments, bookId, comment, setShowEdit }) {
    const [form, setForm] = useState({ content: comment.content })
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = findFormErrors()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        editComment(form, comment._id).then(x => {
            getCommentsByBook(bookId).then(x => {
                setComments(x)
                setShowEdit(false)
            })
        })
    }

    const findFormErrors = () => {
        const newErrors = {}
        const { content } = form
        if (content === undefined || content.length === 0) {
            newErrors.content = 'Content is required!'
        }
        return newErrors
    }

    return <Form style={{ marginTop: "2%" }} onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Comment content</Form.Label>
            <Form.Control style={{ width: "80%", marginLeft: "10%" }} placeholder="Content" defaultValue={comment.content}
                onChange={e => setField('content', e.target.value)}
                isInvalid={!!errors.content}></Form.Control>
        </Form.Group>
        <Button type="submit" style={{ marginTop: "2%", marginBottom: "2%" }}>Edit comment</Button>
    </Form>
}

export default Comments