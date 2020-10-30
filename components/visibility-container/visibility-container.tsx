import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

interface SpringProps extends Object {
    opacity?: number,
    transform?: string

}

interface VisibilityContainerProps {
    children?: any,
    from: SpringProps,
    to: SpringProps
}

export const VisibilityContainer = ({ children, from, to }: VisibilityContainerProps) => {
    const [isVisible, setVisibility] = useState(false);
    const hookProps = isVisible ? to : from
    const props = useSpring(hookProps);

    const onChange = (visibility: boolean) => {
        if(!isVisible && visibility)
            setVisibility(visibility);
    };

    return (
        <VisibilitySensor onChange={onChange}>
            <animated.div style={props}>{children}</animated.div>
        </VisibilitySensor>
    );
};
