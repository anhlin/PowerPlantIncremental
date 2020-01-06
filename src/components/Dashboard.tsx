import React, { useState } from 'react'
import AtomsColumn from './AtomsColumn'
import SmashColumn from './SmashColumn'
import SellColumn from './SellColumn'
import { Row, Col } from 'react-bootstrap'

export const Dashboard: React.FC = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Row>
                <Col sm={4}>
                    <AtomsColumn />
                </Col>
                <Col sm={4}>
                    <SmashColumn />
                </Col>
                <Col sm={4}>
                    <SellColumn />
                </Col>
            </Row>
        </div>
    )
}
