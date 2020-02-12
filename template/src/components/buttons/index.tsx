import React from 'react'
import { Button } from 'antd'
import styles from './Button.module.css';

interface Props {}

export function TestComponent(props: Props) {
    const {} = props

    return (
        <>
            <Button type='primary'>Test 1</Button>
            <Button type='primary' className={styles.success}>Test 2</Button>
            <Button type='primary' className={styles.error}>Test 3</Button>
        </>
    )
}
