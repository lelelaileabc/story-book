require("../../styles/main.css");

import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { action: 'onClick' },
        primary: { control: 'boolean' },
        size: {
            control: { type: 'select' },
            options: ['Extra Small', 'small', 'medium', 'large'],
        },
    },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
    primary: true,
    label: '按钮',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: '按钮',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: '按钮',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: '按钮',
};