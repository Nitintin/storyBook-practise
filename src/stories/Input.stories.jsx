import React from 'react';
import Input from './Input';

export default {
    title: "Example/Input",
    component: Input
}

export const Large = () => <Input size="large" placeholder="large placeholder" />
export const Small = () => <Input size="small" placeholder="small placeholder" />
export const Red = () => <Input size="red" placeholder="red border" />

const Template = args => <Input {...args} /> //creating a template to be used by all stories

export const LargeA = Template.bind({})
LargeA.args = {
    size: "large",
    placeholder: "this is a very large placeholder to be tested"
}

export const SmallA = Template.bind({})
SmallA.args = {
    size: "small",
    placeholder: "very small"
}

Red.storyName = 'red border';