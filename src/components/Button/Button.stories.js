import React from 'react';
import Button from './Button'

export default {
    title: "Form/Button",
    component: Button
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

Primary.storyName = "Primary Button";
