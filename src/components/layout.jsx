import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styles from './layout.module.scss'

function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Header></Header>
            <div className={styles.content}>
              {children}
            </div>
            <Footer>
                My New Gtsby blog
            </Footer>
        </div>
    )
}

export default Layout
