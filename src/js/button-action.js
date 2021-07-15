const Movie = {   // Данные для Local Storage //
  WATCHED: 'watched',
  QUEUE: 'queue',
};

export default class ButtonAction{
    constructor({ textAdd, textRemove }) {
    this.textAdd=textAdd;
    this.textRemove = textRemove;
        
    }
    selectButtonText(data, article) {
        let buttonText = this.textAdd;
        if (localStorage.getItem(data)) {
            const  localStorageData = JSON.parse(localStorage.getItem(data));
            if (localStorageData.length !== 0) {

                localStorageData.map(elem => {
                    if (String(article.id)===elem) {
                        buttonText = this.textRemove;
                    };
                })
            };
        };
        return buttonText
    }

    addButtonText(elem) {
            let newDataObject = { ...elem };
            const addQueueBtnText = this.selectButtonText(Movie.QUEUE, elem);
            const addWatchedBtnText = this.selectButtonText(Movie.WATCHED, elem);
            newDataObject.queueBtnText = addQueueBtnText;
            newDataObject.watchedBtnText = addWatchedBtnText;
            
            return newDataObject
    }

    switchBtnText(button,e) {
    if (e.target.innerHTML === `add to ${button}`) {
           
            e.target.innerHTML = `remove from ${button}`;
        } else {
            e.target.innerHTML = `add to ${button}`
        }
    }

    clickButtonOverlay(queueList, watchedList, deleteList) {
        Array.from(queueList).map((elem) => {
            const buttonQueue = elem;
            const movieId = elem.dataset.value;
            const btn = document.querySelectorAll(`button[data-value="${movieId}"]`);
            buttonQueue.addEventListener('click', (e) => {
                const button = 'queue';
                this.switchBtnText(button, e);
                Array.from(btn)[1].innerHTML = 'add to watched';
                this.writeDataToStorage(movieId, Movie.QUEUE);
                this.writeDataToStorage(movieId, Movie.WATCHED, watchedList);
            });
        })
        Array.from(watchedList).map((elem) => {
            const buttonWatched = elem;
            const movieId = elem.dataset.value;
            const btn = document.querySelectorAll(`button[data-value="${movieId}"]`);
            buttonWatched.addEventListener('click', (e) => {
                const button = 'watched';
                this.switchBtnText(button, e);
                Array.from(btn)[0].innerHTML = 'add to queue';
                this.writeDataToStorage(movieId, Movie.WATCHED);
                this.writeDataToStorage(movieId, Movie.QUEUE, watchedList);
                
            });
        })
        Array.from(deleteList).map((elem) => {
            const buttonDelete = elem;
            const movieId = elem.dataset.value;
            const btn = document.querySelectorAll(`button[data-value="${movieId}"]`);
            buttonDelete.addEventListener('click', (e) => {
                Array.from(btn)[0].innerHTML = 'add to queue';
                Array.from(btn)[1].innerHTML = 'add to watched';

                this.writeDataToStorage(movieId, Movie.WATCHED,deleteList);
                this.writeDataToStorage(movieId, Movie.QUEUE,deleteList);  
             });
        })  

    }
    clickButtonMobile(buttonWatched, buttonQueue, movieId) {
        const queueBtnOverlay = document.querySelector(`.js-queue[data-value='${movieId}']`);
        const watchedBtnOverlay = document.querySelector(`.js-watched[data-value='${movieId}']`);
    buttonWatched.addEventListener('click', (e) => {
        const button = 'watched';
        this.switchBtnText(button, e);
        this.writeDataToStorage(movieId, Movie.WATCHED);
        this.writeDataToStorage(movieId, Movie.QUEUE, buttonWatched);
        buttonQueue.innerHTML = 'add to queue';
        watchedBtnOverlay.innerHTML = buttonWatched.innerHTML;
        queueBtnOverlay.innerHTML = buttonQueue.innerHTML;
    });
        
    buttonQueue.addEventListener('click', (e) => {
        const button = 'queue';
        this.switchBtnText(button, e);
        this.writeDataToStorage(movieId, Movie.QUEUE);
        this.writeDataToStorage(movieId, Movie.WATCHED, buttonWatched);
        buttonWatched.innerHTML = 'add to watched';
        queueBtnOverlay.innerHTML = buttonQueue.innerHTML;
        watchedBtnOverlay.innerHTML = buttonWatched.innerHTML;
    });
    }

    writeDataToStorage(movieId, storageData, deleteList) {
            let storageList = [];
            if (localStorage.getItem(storageData)) {
            storageList = JSON.parse(localStorage.getItem(storageData));
                if (!storageList.includes(movieId)) {
                    if (deleteList) {
                    return
                    }
                storageList.push(movieId);
                localStorage.setItem(storageData, JSON.stringify(storageList));

                } else {
                const index = storageList.indexOf(movieId);
                storageList.splice(index, 1);
                localStorage.setItem(storageData, JSON.stringify(storageList));
            
            }
            } else {
                if (deleteList) {
                    return
                }   
            storageList.push(movieId);
            localStorage.setItem(storageData, JSON.stringify(storageList))
        }
    };
};