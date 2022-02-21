import React from 'react'
import { Large } from './Button.stories'
import { Red } from './Input.stories'

export default {
    title: "form/subscription"
}

export const subscriptionForm = () => (<>
    <Red />
    <Large label="submit" />
</>)