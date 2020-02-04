class wcUpgrader {
    upgradeOnDefined(elemDef, target){
        customElements.whenDefined(elemDef)
        .then( () => {
            let oldElements = document.querySelectorAll(target);
            for(let i = 0; i < oldElements.length; i++){
                this._appendToDOM(elemDef, oldElements[i])
            }
        });
    }
    
    _appendToDOM(elemDef, targetElement){
        // Works but elements are added to the DOM multiple times if nested
        // within other elements that get upgraded - constructors are ran each time
            // let newElem = document.createElement(elemDef);
            // newElem.innerHTML = targetElem.innerHTML;
            // targetElem.parentNode.replaceChild(newElem, targetElem);

        let newElement = document.createElement(elemDef);
        const parentNode = targetElement.parentNode;

        for(let i=0; i < parentNode.childNodes.length; i++){
            if(targetElement.isSameNode(parentNode.childNodes[i])){
                parentNode.insertBefore(newElement, parentNode.childNodes[i]);
                while(targetElement.firstChild){
                    newElement.appendChild(targetElement.firstChild);
                }
                targetElement.parentNode.removeChild(targetElement);
                break;
            }
        }
    }
}

export default wcUpgrader;