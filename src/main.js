import {reverse} from 'lodash';
import './style/reset.css';

const reverseArray = (inputArray) => {
    console.log(reverse(inputArray));
}

reverseArray([1, 2, 3, 4, 5]);