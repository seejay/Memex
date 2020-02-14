import React from 'react'
import styled from 'styled-components'

const StyledModalBox = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    overflow-y: hidden;
`
const HeaderText = styled.h2`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    margin: 0px 0 30px;
    text-align: center;

    /* Website - Text Colour */
    color: #3a2f45;
`
const Header = styled.div`
    color: #3a2f45;
    font-weight: 600;
    flex: 1;
`
const StyledLine = styled.div`
    border: 0.5px solid #e0e0e0;
`
const Actions = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`
const Body = styled.div`
    display: flex;
    align-content: center;
    padding: 40px 50px;
    margin: 0 40px;
    flex: 5;
`
export const ModalBox = ({
    header,
    actions,
    children,
}: {
    header: any
    actions: any
    children: any
}) => (
    <StyledModalBox>
        <Header>
            <HeaderText>{header}</HeaderText>
            <StyledLine />
        </Header>
        <Body>{children}</Body>
        <Actions>{actions}</Actions>
    </StyledModalBox>
)

export const ModalColLeft = styled.div`
    width: 60%;
    padding-right: 50px;
`
export const ModalColRight = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
        width: 100%;
    }
`

export const ModalColRightBig = styled(ModalColRight)`
    & img {
        width: 90%;
        margin-right: -130px;
        margin-top: -10px;
        margin-bottom: -60px;
    }
`
