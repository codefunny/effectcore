import debounce from './debounce.ts';
import isObject from '../utils/isObject.ts';

function throttle(func, wait, options) {
    let leading = true;
    let trailing = true;

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    if (isObject(options)) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        leading,
        trailing,
        maxWait: wait,
    });
}

export default throttle;
