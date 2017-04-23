import bmpLib from './libs/bmp_lib'
import $ from "jquery";

let gcd = (a, b) => {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};


let getBase64Image = (width, height) => {
    let _gcd = gcd(width, height);
    width /= _gcd;
    height /= _gcd;
    return bmpLib.imageSource(width, height);
};


let _create = (element_id, aspectWidth, aspectHeight,
               primaryAttribute = "width", primaryAttributeValue = "100%") => {
    let cssKeepList = ['padding', 'fontSize', 'height'];

    let element = document.getElementById(element_id);
    let image = document.createElement("img");

    if (primaryAttribute === 'height')
        image.style.width = 'auto';
    else if (primaryAttribute === 'width')
        image.style.height = 'auto';
    else
        throw "Invalid primaryAttribute, can only be 'width' or 'height'";

    image.src = getBase64Image(aspectWidth, aspectHeight);
    image.style[primaryAttribute] = '100%';
    image.style.margin = image.style.padding = "0";
    image.style.border = "none";
    image.style.opacity = 0;

    let newDiv = document.createElement("div");

    newDiv.style.fontSize = "0";
    newDiv.style.padding = "0";
    newDiv.style.display = "inline-block";
    newDiv.style.position = "relative";
    newDiv.style.overflow = "auto";
    newDiv.style.overflowX = "hidden";
    newDiv.style.overflowY = "hidden";
    newDiv.style[primaryAttribute] = primaryAttributeValue;
    newDiv.appendChild(image);
    let computedStyle = getComputedStyle(element);
    let styles = {};
    cssKeepList.forEach((key) => {
        styles[key] = computedStyle[key];
    });
    newDiv.id = element.id;
    element.id = "_" + element.id;
    $(element).replaceWith(newDiv);
    newDiv.appendChild(element);

    for (let key in styles) {
        if (cssKeepList.indexOf(key) >= 0) {
            try {
                element.style[key] = styles[key];
            } catch (ex) {

            }
        }
    }
    element.style.position = "absolute";
    element.style.top = "0";
    element.style.left = "0";
    // element.style.fontSize = fontSize;
    // element.style.padding = 'inherit';
    element.style.boxSizing = 'border-box';
    // newDiv.classList = element.classList;

    return image;
};

export const create = _create;
