import { FETCH_PRODUCTS } from './types';

export const fetchProducts = () => dispath => {
    fetch('https://gist.githubusercontent.com/manish-ai/d0421d4c94d32e0e9dc1f416154b2450/raw/bde9207e2770308d52af61c1f853f379ed758b8e/products.json')
        .then(res => res.json())
        .then(data =>
            dispath({
                type: FETCH_PRODUCTS,
                payload: data
            }))

}