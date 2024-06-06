'use strict';

class Modal {
    constructor() {
        this.parent = document.querySelector('.modal-parent');
        this.X = document.querySelector('.X');
        this.section = document.querySelector('main'); // Updated selector to match the main container

        this.X.addEventListener('click', this.disappearX.bind(this));
        this.parent.addEventListener('click', this.disappearParent.bind(this));
    }

    appear() {
        this.parent.style.display = 'block';
        this.section.style.filter = 'blur(10px)';
    }

    disappearX() {
        this.parent.style.display = 'none';
        this.section.style.filter = 'blur(0px)';
    }

    disappearParent(e) {
        if (e.target.className === 'modal-parent') {
            this.parent.style.display = 'none';
            this.section.style.filter = 'blur(0px)';
        }
    }
}

let id = 1; 

document.addEventListener('DOMContentLoaded', function() {
    const modal = new Modal();
    
    if (id === 1) {
        modal.appear();
    }

    document.querySelector('.bx-menu').addEventListener('click', () => {
        openDialog();
    });
});

function openDialog() {
    id = 1; // Set id to 1 when opening the dialog
    document.querySelector('.modal-parent').style.display = 'block';
    document.querySelector('main').style.filter = 'blur(10px)';
}

function closeDialog() {
    id = 0; // Set id to 0 when closing the dialog
    document.querySelector('.modal-parent').style.display = 'none';
    document.querySelector('main').style.filter = 'blur(0px)';
}
