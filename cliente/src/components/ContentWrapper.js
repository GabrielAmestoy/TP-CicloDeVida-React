import React from 'react'
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'
import Table from './Table'

const ContentWrapper = () => {
    return (
        <div>
            <TopBar />
            <ContentRowTop />
            <Table />
            <Footer />
        </div>
    );
}

export default ContentWrapper;