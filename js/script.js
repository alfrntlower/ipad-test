const prices = {
    'centrist': {
        constuctoransw1: 'конструктор1 ',
        centristansw1: 'центрист1 ',
        reflectoransw1: 'рефлектор1 ',

        constuctoransw2: 'конструктор2 ',
        centristansw2: 'центрист2 ',
        reflectoransw2: 'рефлектор2 ',
        
        constuctoransw3: 'конструктор3 ',
        centristansw3: 'центрист3 ',
        reflectoransw3: 'рефлектор3 ',
    },

    /** 
    'reflector': {
        constuctoransw1: 'конструктор',
        centristansw1: 'центрист',
        reflectoransw1: 'рефлектор',
    },
    'constructor': {
        constuctoransw1: 'конструктор',
        centristansw1: 'центрист',
        reflectoransw1: 'рефлектор',
    },
    */
    /**
    'centrist': {
        constuctoransw2: 'конструктор',
        centristansw2: 'центрист',
        reflectoransw2: 'рефлектор',       
    },
    'reflector': {
        constuctoransw2: 'конструктор',
        centristansw2: 'центрист',
        reflectoransw2: 'рефлектор',
    },
    'constructor': {
        constuctoransw2: 'конструктор',
        centristansw2: 'центрист',
        reflectoransw2: 'рефлектор',
    },
    */
    

};

function getFormValues() {
    const mindTypeElement = document.querySelector('#mind-type');
    
    const constuctoransw1Element = document.querySelector('#constructor-answ1');
    const reflectoransw1Element = document.querySelector('#reflector-answ1');
    const centristansw1Element = document.querySelector('#centrist-answ1');

    const constuctoransw2Element = document.querySelector('#constructor-answ2');
    const reflectoransw2Element = document.querySelector('#reflector-answ2');
    const centristansw2Element = document.querySelector('#centrist-answ2');
    
    const constuctoransw3Element = document.querySelector('#constructor-answ3');
    const reflectoransw3Element = document.querySelector('#reflector-answ3');
    const centristansw3Element = document.querySelector('#centrist-answ3');
    

    return {
        mindType: mindTypeElement.value,
        constuctoransw1: constuctoransw1Element.checked,
        reflectoransw1: reflectoransw1Element.checked,
        centristansw1: centristansw1Element.checked,

        constuctoransw2: constuctoransw2Element.checked,
        reflectoransw2: reflectoransw2Element.checked,
        centristansw2: centristansw2Element.checked,
        
        constuctoransw3: constuctoransw3Element.checked,
        reflectoransw3: reflectoransw3Element.checked,
        centristansw3: centristansw3Element.checked,
    
    }
    
}

function calculateWork() {
    const values = getFormValues();
    let totalMind = '';

    const mindTypes = prices[values.mindType]

    if (values.constuctoransw1) {
        totalMind = totalMind+mindTypes.constuctoransw1;
    }
    if (values.reflectoransw1) {
        totalMind = totalMind+mindTypes.reflectoransw1;
    }
    if (values.centristansw1) {
        totalMind = totalMind+mindTypes.centristansw1;
    }

    
    if (values.constuctoransw2) {
        totalMind = totalMind+mindTypes.constuctoransw2;
    }
    if (values.reflectoransw2) {
        totalMind = totalMind+mindTypes.reflectoransw2;
    }
    if (values.centristansw2) {
        totalMind = totalMind+mindTypes.centristansw2;

    }

    if (values.constuctoransw3) {
        totalMind = totalMind+mindTypes.constuctoransw3;
    }
    if (values.reflectoransw3) {
        totalMind = totalMind+mindTypes.reflectoransw3;
    }
    if (values.centristansw3) {
        totalMind = totalMind+mindTypes.centristansw3;
    }
    
    
    
   
    const totalMindElement = document.querySelector('#total-mind');
    totalMindElement.textContent = totalMind;

    console.log(totalMind)
}

getFormValues();

const formElement = document.querySelector('#questions-form');
formElement.addEventListener('change', calculateWork);