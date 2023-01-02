import { FormEvent, ReactNode } from 'react'

interface FormProps {
    // eslint-disable-next-line no-unused-vars
    onSubmit: (values: object) => void
    children: ReactNode
}

interface FormValues {
    name: string
    value: any
}

const Form = (props: FormProps) => {
    const { onSubmit, children } = props

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const inputElements = e.currentTarget.elements
        const valuesArray: Array<FormValues> = Array.from(
            Array(inputElements.length).keys()
        )
            .map((index) => {
                const elem = inputElements[index]
                const newelem = elem as HTMLInputElement
                return { name: newelem.name, value: newelem.value }
            })
            .filter((data) => data.name !== '')
        const values: object = valuesArray.reduce(
            (obj, data) => ({ ...obj, [data.name]: data.value }),
            {}
        )

        return onSubmit(values)
    }

    return <form onSubmit={handleSubmit}>{children}</form>
}

export default Form
