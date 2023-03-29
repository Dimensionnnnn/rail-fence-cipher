import { decodeRailFenceCipher, encodeRailFenceCipher } from './lib/Rail Fence Cipher.js';

const operations = {
    encode: encodeRailFenceCipher,
    decode: decodeRailFenceCipher,
}

document.querySelectorAll('.btn')
    .forEach((btn) => {
        btn.addEventListener('click', () => {
            const result = operations[btn.id](document.getElementById('t__inp')?.value, 3);
            document.querySelector('.result').textContent = result;
            console.log(result); 
        });
    });