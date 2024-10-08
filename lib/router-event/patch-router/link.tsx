import NextLink from 'next/link';
import { forwardRef } from 'react';

import { onStart } from '../events';
import { shouldTriggerStartEvent } from './should-trigger-start-event';

export const Link = forwardRef<HTMLAnchorElement, React.ComponentProps<'a'>>((
    { href, onClick, ...rest },
    ref,
) => {
    const useLink = href && href.startsWith('/');
    if (!useLink) return <a href={href} onClick={onClick} {...rest}> </a>;

    return (
        <NextLink
            href={href}
            onClick={(event) => {
                if (shouldTriggerStartEvent(href, event)) onStart();
                if (onClick) onClick(event);
            }}
            {...rest}
            ref={ref}
        />
    );
});

Link.displayName = 'Link';
