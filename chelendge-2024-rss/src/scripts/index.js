class Nonograms extends GetDataNonograms {
  constructor() {
    super();
    this.body = document.querySelector('body');
    this.gameStart = false;
    this.randomBtn = false;
    this.level = 1;
    this.theme = 'light';
    this.userResult = 0;
    this.countOne = 0;
    this.winResults = {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
    };
    this.nameText = localStorage.getItem('nameText')
      ? localStorage.getItem('nameText')
      : '----------';
    this.currentGameTitle = '';
    this.upHints = {
      0: [2, 3],
      1: [2, 3, 1],
      2: [2, 3, 1],
      3: [2, 3, 1],
      4: [2, 3, 1],
    };
    this.leftHints = {
      0: [2, 3],
      1: [2, 3, 1],
      2: [2, 3, 1],
      3: [2, 3, 1],
      4: [2, 3, 1],
    };
    this.curentNonogram = [];
    this.themeDarkIcon = `
        <svg id="dark" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path d="M12,22C6.5,22,2,17.5,2,12c0-4.7,3.4-8.9,8-9.8c0.4-0.1,0.9,0.1,1.1,0.5c0.2,0.4,0.1,0.9-0.2,1.2C9.7,5.1,9,6.8,9,8.5    c0,3.6,2.9,6.5,6.5,6.5c1.7,0,3.4-0.7,4.6-1.9c0.3-0.3,0.8-0.4,1.2-0.2c0.4,0.2,0.6,0.6,0.5,1.1C20.9,18.6,16.7,22,12,22z     M7.6,5.3C5.4,6.8,4,9.2,4,12c0,4.4,3.6,8,8,8c2.8,0,5.2-1.4,6.7-3.6c-1,0.4-2.1,0.6-3.2,0.6C10.8,17,7,13.2,7,8.5    C7,7.4,7.2,6.3,7.6,5.3z"/>
        </svg>
    `;
    this.themeLightIcon = `
    <svg id="light" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path d="M20,11h-2c0,0-0.1,0-0.1,0c-0.2-0.9-0.5-1.8-1-2.5c0,0,0.1,0,0.1-0.1l1.4-1.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-1.4,1.4   c0,0,0,0.1-0.1,0.1c-0.7-0.5-1.6-0.9-2.5-1c0,0,0-0.1,0-0.1V4c0-0.6-0.4-1-1-1s-1,0.4-1,1v2c0,0,0,0.1,0,0.1   c-0.9,0.2-1.8,0.5-2.5,1c0,0,0-0.1-0.1-0.1L7.1,5.6c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.4,1.4c0,0,0.1,0,0.1,0.1   c-0.5,0.7-0.9,1.6-1,2.5c0,0-0.1,0-0.1,0H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0,0,0.1,0,0.1,0c0.2,0.9,0.5,1.8,1,2.5c0,0-0.1,0-0.1,0.1   l-1.4,1.4c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0,0,0-0.1,0.1-0.1c0.7,0.5,1.6,0.9,2.5,1   c0,0,0,0.1,0,0.1v2c0,0.6,0.4,1,1,1s1-0.4,1-1v-2c0,0,0-0.1,0-0.1c0.9-0.2,1.8-0.5,2.5-1c0,0,0,0.1,0.1,0.1l1.4,1.4   c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-1.4-1.4c0,0-0.1,0-0.1-0.1c0.5-0.7,0.9-1.6,1-2.5c0,0,0.1,0,0.1,0   h2c0.6,0,1-0.4,1-1S20.6,11,20,11z M12,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S14.2,16,12,16z"/>
    </svg>
`;
  }

  drowHeader() {
    if (this.theme === 'light') {
      this.body.classList.add('light');
    } else {
      this.body.classList.add('dark');
    }

    const header = document.createElement('header');

    const container = document.createElement('div');
    container.classList.add('container');

    const innerHeader = document.createElement('div');
    innerHeader.classList.add('header');

    const gamburgerMenu = document.createElement('div');
    gamburgerMenu.classList.add('burger-menu', 'hidden');
    const gamburgerIcon = `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.94977 11.9498H39.9498" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.94977 23.9498H39.9498" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.94977 35.9498H39.9498" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;
    gamburgerMenu.innerHTML = gamburgerIcon;
    innerHeader.append(gamburgerMenu);

    const nav = document.createElement('nav');

    const levelBlock = document.createElement('div');
    levelBlock.classList.add('level_block');
    const levelTitle = document.createElement('p');
    levelTitle.textContent = 'level';
    const levelInnerBlock = document.createElement('div');
    levelInnerBlock.classList.add('level_inner-block');
    const levelSpan = document.createElement('span');
    levelSpan.textContent = this.level;
    const levelList = document.createElement('ul');
    levelList.classList.add('level-list', 'hidden');

    const svgIconLevel = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 284.929 284.929">
            <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
        </svg>
    `;

    for (let i = 1; i <= 3; i += 1) {
      const levelListItem = document.createElement('li');
      levelListItem.textContent = `${i}`;
      levelList.append(levelListItem);
    }

    levelBlock.append(levelTitle);
    levelInnerBlock.append(levelSpan);
    levelInnerBlock.innerHTML += svgIconLevel;
    levelInnerBlock.append(levelList);
    levelBlock.append(levelInnerBlock);
    nav.append(levelBlock);

    const nameBlock = document.createElement('div');
    nameBlock.classList.add('name-block');
    const nameTitle = document.createElement('p');
    nameTitle.textContent = this.nameText;
    const nameList = document.createElement('ul');
    nameList.classList.add('hidden');
    const svgIconName = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 284.929 284.929">
            <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
        </svg>
    `;

    for (let i = 0; i < this.namesArray.length; i += 1) {
      const arrname = this.namesArray[i].split('__');
      const levelListItem = document.createElement('li');
      levelListItem.textContent = `${arrname[0]} ${arrname[1]}`;
      levelListItem.dataset.name = `${this.namesArray[i]}`;
      nameList.append(levelListItem);
    }

    nameBlock.append(nameTitle);
    nameBlock.innerHTML += svgIconName;
    nameBlock.append(nameList);
    nav.append(nameBlock);

    const winningsButton = document.createElement('button');
    winningsButton.classList.add('winnings');
    winningsButton.textContent = 'выигрыши';
    nav.append(winningsButton);

    innerHeader.append(nav);

    const buttonTheme = document.createElement('button');
    buttonTheme.classList.add('theme');

    buttonTheme.innerHTML =
      this.theme === 'light' ? this.themeDarkIcon : this.themeLightIcon;

    innerHeader.append(buttonTheme);
    container.append(innerHeader);
    header.append(container);
    this.body.append(header);

    this.elEvent();
  }

  drowFooter() {
    const element = [
      {
        text: 'Github',
        link: 'https://github.com/alimbaeva',
      },
      {
        text: 'CV',
        link: 'https://github.com/alimbaeva/rsschool-cv/blob/gh-pages/cv.md',
      },
      {
        text: 'rs-school',
        link: 'https://rss.app/',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 242 90"><path d="M137.197 3.257c-6.927 1.609-10.367 5.259-10.401 11.036-0.039 6.727 3.729 9.816 15.812 12.966 5.873 1.53 7.869 4.182 5.091 6.758-3.153 2.922-9.323 1.027-10.1-3.105-0.385-2.062-0.366-2.056-6.837-1.696l-5.735 0.318 0.276 1.806c0.425 2.784 2.722 7.082 4.68 8.758 5.802 4.964 21.78 4.455 27.25-0.872l1.6-1.558 0.307 1.811c1.125 6.663 7.892 12.923 15.677 14.504l2.5 0.509-1.477 1.935c-4.874 6.384-5.012 19.44-0.276 26.221 7.248 10.375 27.644 10.074 34.355-0.506l1.249-1.969v9.391h31.61v-10.097h-18.878v-29.416h-12.732l-0.025 4.5c-0.022 3.676-0.121 4.343-0.548 3.642-2.419-3.968-7.13-7.265-11.748-8.218l-2.489-0.515 2.526-1.898c7.858-5.906 12.752-16.681 11.495-25.307-3.305-22.669-35.958-23.020-48.395-0.523-0.802 1.448-1.485 2.68-1.519 2.737s-1.153-0.956-2.489-2.247c-2.77-2.683-4.995-3.665-12.558-5.538-7.037-1.744-8.477-2.967-6.112-5.192 2.25-2.115 7.149-0.745 8.252 2.309 0.647 1.789 0.529 1.772 8.010 1.277l4.326-0.287-0.276-1.724c-1.277-7.987-11.329-12.386-22.424-9.807zM2.635 23.268v19.755h12.732v-15.806h1.294c2.042 0 3.277 1.502 7.214 8.781l3.682 6.803 7.079 0.121c3.893 0.067 7.076 0.003 7.076-0.141 0-2.225-7.934-15.064-10.136-16.402l-1.207-0.734 2.436-1.274c9.031-4.728 7.321-18.273-2.576-20.396-1.249-0.267-7.574-0.467-14.884-0.467h-12.71v19.755zM195.401 6.952c19.87 5.186 18.051 33.064-2.824 43.242-21.268 10.37-40.222-6.654-30.113-27.045 5.898-11.897 20.984-19.316 32.934-16.194zM24.14 12.417c4.472 2.261 1.505 6.435-4.829 6.795l-3.943 0.225v-7.585l3.842 0.006c2.199 0.003 4.306 0.242 4.93 0.557zM188.373 15.91c-3.496 0.928-7.051 4.461-7.054 7.009-0.006 4.163 3.322 5.664 8.558 3.862 3.203-1.102 4.019-1.102 4.612 0.003 1.004 1.879-2.287 3.794-4.207 2.447-0.965-0.675-4.523 1.454-4.559 2.728-0.056 1.918 4.798 2.644 7.771 1.162 9.442-4.705 6.761-14.805-3.032-11.427-3.915 1.35-4.756 1.409-4.756 0.323 0-1.704 2.663-2.936 3.825-1.775 0.475 0.475 4.075-1.912 4.075-2.703 0-1.181-3.189-2.177-5.237-1.631zM174.201 25.383c-2.095 1.516-2.194 1.122 1.648 6.576 2.365 3.355 3.274 5.012 3.184 5.797-0.157 1.342-1.662 1.699-2.72 0.644-0.672-0.672-0.847-0.619-2.438 0.745-4.019 3.443 2.090 6.398 6.629 3.209 4.987-3.504 4.995-5.678 0.037-12.918-3.845-5.617-4.022-5.729-6.342-4.050zM13.044 49.621c-7.183 1.133-11.388 5.333-11.444 11.43-0.056 6.221 3.977 9.765 13.967 12.265 6.123 1.533 8.139 2.703 8.139 4.719 0 5.678-10.164 5.11-11.239-0.627-0.377-2.002-0.329-1.991-6.812-1.64l-5.749 0.312 0.287 1.8c1.311 8.252 6.109 11.686 16.799 12.021 8.477 0.264 11.391-0.557 15.092-4.258l2.534-2.534 0.931 1.257c5.386 7.284 23.58 7.774 29.554 0.793 1.747-2.039 3.707-5.881 3.907-7.65 0.141-1.246 0.101-1.268-5.223-2.883l-5.363-1.628-0.72 2.166c-2.453 7.383-11.714 7.467-13.748 0.127-0.692-2.495-0.608-8.454 0.157-11.022 1.845-6.207 9.638-7.481 12.8-2.090 1.319 2.25 0.965 2.208 6.95 0.855 5.698-1.288 5.453-1.060 4.154-3.859-5.153-11.087-22.475-13.688-31.66-4.759l-2.562 2.492-1.063-1.814c-2.649-4.523-11.005-6.846-19.682-5.473zM134.342 49.632c-4.863 0.844-9.667 3.904-12.381 7.883-0.726 1.066-0.745 0.979-0.768-3.187l-0.023-4.281h-12.732v13.61h-12.732v-13.61h-12.732v39.513h12.732v-15.806h12.732v15.806h12.732v-8.933l1.375 2.073c5.721 8.634 23.414 10.15 31.466 2.694 9.318-8.626 7.49-28.249-3.136-33.671-4.101-2.093-11.298-3.004-16.535-2.095zM20.183 57.727c0.734 0.38 1.595 1.409 2.062 2.467l0.802 1.817 8.578-0.413-0.281 2.239c-0.371 2.962-0.537 3.074-2.998 1.986-1.159-0.512-4.402-1.505-7.211-2.211-6.646-1.665-7.473-2.022-7.813-3.375-0.63-2.503 3.766-4.112 6.865-2.509zM141.871 59.279c6.502 1.806 7.819 16.729 1.789 20.278-4.503 2.649-10.201 0.394-11.537-4.57-2.655-9.863 2.264-17.786 9.748-15.708zM194.951 59.268c7.554 2.098 7.4 19.074-0.191 21.119-6.103 1.642-10.164-2.599-10.133-10.581 0.034-8.294 3.963-12.305 10.325-10.536z"></path></svg>',
      },
    ];
    const footer = document.createElement('footer');
    const container = document.createElement('div');
    const date = document.createElement('p');
    container.classList.add('container', 'footer');
    date.textContent = '24.01.2024';
    container.append(date);

    element.forEach((el) => {
      const footerItem = document.createElement('div');
      footerItem.classList.add('footer-item');
      const footerItemLinc = document.createElement('a');
      footerItemLinc.href = el.link;
      footerItemLinc.target = '_blank';
      footerItemLinc.rel = el.text;

      if (!el.svg) {
        const footerItemText = document.createElement('p');
        footerItemText.textContent = el.text;
        footerItem.append(footerItemText);
      } else {
        footerItem.innerHTML = el.svg;
      }
      footerItem.append(footerItemLinc);
      container.append(footerItem);
    });

    footer.append(container);
    this.body.append(footer);
  }

  drowButtons() {
    const parentBlock = document.createElement('div');
    const randomBtn = document.createElement('button');
    const decisionBtn = document.createElement('button');
    const saveBtn = document.createElement('button');

    parentBlock.classList.add('batton-block');
    saveBtn.id = 'save-game';
    decisionBtn.id = 'decision-game';
    randomBtn.id = 'random-game';

    saveBtn.textContent = 'save game';
    decisionBtn.textContent = 'decision game';
    randomBtn.textContent = 'random game';

    parentBlock.append(randomBtn);
    parentBlock.append(decisionBtn);
    parentBlock.append(saveBtn);

    return parentBlock;
  }

  game() {
    this.gameStart = false;

    const mainBlock = document.createElement('main');
    const parentBlock = document.createElement('div');
    const parentInnerBlock = document.createElement('div');
    const upBlock = document.createElement('div');
    const downBlock = document.createElement('div');
    const upHints = document.createElement('ul');
    const leftHints = document.createElement('ul');
    const nonogramBlock = document.createElement('div');
    const nonogramInnerUl = document.createElement('ul');

    nonogramBlock.id = 'nonogram';
    parentBlock.classList.add('parent-block', 'container');
    upBlock.classList.add('up-block');
    downBlock.classList.add('down-block');
    upHints.classList.add('up-hints');
    leftHints.classList.add('left-hints');

    upBlock.append(
      this.tableCreateHint(
        this.curentNonogram.length,
        upHints,
        this.upHints,
        'up',
        'up-hints_rows'
      )
    );

    downBlock.append(
      this.tableCreateHint(
        this.curentNonogram.length,
        leftHints,
        this.leftHints,
        'left',
        'left-hints_rows'
      )
    );

    this.curentNonogram.forEach((arr, ind) => {
      const rowLi = document.createElement('li');
      const rowInnerUl = document.createElement('ul');

      rowLi.classList.add('nonogram-row');

      arr.forEach((item, ind2) => {
        const itemLi = document.createElement('li');
        itemLi.id = `${ind}-${ind2}`;
        itemLi.dataset.fill = item;
        if (item) this.countOne += 1;
        rowInnerUl.append(itemLi);
      });
      rowLi.append(rowInnerUl);
      nonogramInnerUl.append(rowLi);
    });

    const buttonsBlock = this.drowButtons();

    nonogramBlock.append(nonogramInnerUl);
    downBlock.append(nonogramBlock);
    parentInnerBlock.append(upBlock);
    parentInnerBlock.append(downBlock);
    parentBlock.append(parentInnerBlock);
    mainBlock.append(parentBlock);
    mainBlock.append(buttonsBlock);

    this.body.append(mainBlock);

    this.handlenonogramCeil();
    this.handleButtonsInGame();
  }

  tableCreateHint(size, block, hints, idName, className) {
    for (let i = 0; i < size; i += 1) {
      const HintsRows = document.createElement('li');
      const HintsRowsUl = document.createElement('ul');

      HintsRows.id = `${idName}-${i}`;
      HintsRows.classList.add(className);

      hints[i].forEach((el) => {
        const itemLi = document.createElement('li');
        itemLi.textContent = `${el}`;
        HintsRowsUl.prepend(itemLi);
      });

      HintsRows.append(HintsRowsUl);
      block.append(HintsRows);
    }
    return block;
  }

  getRandom() {
    // если this.nameText пуст то выбираем по рандомна опираясь на level
    if (!localStorage.getItem('nameText')) {
      const gameArr = this.data[`level-${this.level}`];
      const arrLevelname = Object.keys(gameArr);
      const index = Math.floor(Math.random() * arrLevelname.length);
      this.currentGameTitle = arrLevelname[index];

      this.upHints =
        this.data[`level-${this.level}`][arrLevelname[index]].upHints;
      this.leftHints =
        this.data[`level-${this.level}`][arrLevelname[index]].leftHints;
      this.curentNonogram =
        this.data[`level-${this.level}`][arrLevelname[index]].result;
    } else {
      // this.nameText true то выбираем по выбору юзера
      const curentData = this.nameText.split(' ');
      this.upHints = this.data[curentData[1]][curentData[0]].upHints;
      this.leftHints = this.data[curentData[1]][curentData[0]].leftHints;
      this.curentNonogram = this.data[curentData[1]][curentData[0]].result;
    }
  }

  elEvent() {
    const levelInnerBlock = document.querySelector('.level_inner-block');
    const levelSpan = document.querySelector('.level_inner-block span');
    const levelList = document.querySelector('.level-list');
    const nameBlock = document.querySelector('.name-block');
    const nameBlockText = document.querySelector('.name-block p');
    const nameList = document.querySelector('.name-block ul');
    const theme = document.querySelector('.theme');

    nameBlock.addEventListener('click', () => {
      nameBlock.classList.toggle('active');
      nameList.classList.toggle('hidden');
    });

    nameList.addEventListener('click', (e) => {
      this.nameText = e.target.textContent;
      localStorage.setItem('nameText', this.nameText);

      // Обновляем уровень (level)
      const levelArr = this.nameText.split(' ')[1].split('-');
      this.level = `${levelArr[1]}`;

      // Обновляем body
      this.body.innerHTML = '';
      this.getData();

      // Обновляем текст в nameBlockText
      nameBlockText.textContent = this.nameText;
    });

    levelInnerBlock.addEventListener('click', () => {
      levelInnerBlock.classList.toggle('active');
      levelList.classList.toggle('hidden');
    });

    levelList.addEventListener('click', (e) => {
      this.level = e.target.textContent;

      // Обновляем текст в level(уровень)
      levelSpan.textContent = this.level;

      // Очищаем nameText
      localStorage.removeItem('nameText');
      this.nameText = '----------';
      this.body.innerHTML = '';
      this.getData();
    });

    // смена цвета экрана
    theme.addEventListener('click', () => {
      const buttonTheme = document.querySelector('.theme');
      if (this.body.classList.contains('dark')) {
        this.body.classList.add('light');
        this.body.classList.remove('dark');
        this.theme = 'light';
        buttonTheme.innerHTML = this.themeDarkIcon;
      } else {
        this.body.classList.remove('light');
        this.body.classList.add('dark');
        this.theme = 'dark';
        buttonTheme.innerHTML = this.themeLightIcon;
      }
    });
  }

  handlenonogramCeil() {
    const nonogram = document.querySelector('#nonogram');

    // Получаем элемент, при клике на левую кнопку мыши
    nonogram.addEventListener('click', (event) => {
      if (!this.gameStart) {
        this.launch();
        this.gameStart = true;
      }
      const ceil = event.target;
      if (ceil.dataset.fill === '1' && !ceil.classList.contains('ceil')) {
        this.userResult += 1;
      }
      ceil.classList.add('ceil');
      ceil.textContent = '';
      if (this.userResult === this.countOne) {
        this.stopTimer();
        this.gameStart = false;
        alert('WIN');
      }
    });

    // Получаем элемент, и вводим Х при клике на правую кнопку мыши
    nonogram.addEventListener('contextmenu', (event) => {
      if (!this.gameStart) {
        this.launch();
        this.gameStart = true;
      }
      event.preventDefault();
      if (event.button === 2) {
        const ceilX = event.target;
        if (ceilX.dataset.fill === '1' && ceilX.classList.contains('ceil')) {
          this.userResult -= 1;
          ceilX.classList.remove('ceil');
        }
        ceilX.textContent = 'X';
        if (this.userResult === this.countOne) {
          this.stopTimer();
          this.gameStart = false;
          alert('WIN');
        }
      }
    });
  }

  handleButtonsInGame() {
    const saveBtn = document.querySelector('#save-game');
    const decisionBtn = document.querySelector('#decision-game');
    const randomBtn = document.querySelector('#random-game');

    randomBtn.addEventListener('click', () => {
      this.randomBtn = true;
      setTimeout(() => {
        this.randomBtn = false;
      }, 2000);
      const index = Math.floor(Math.random() * this.namesArray.length);
      const chooseGame = this.namesArray[index].split('__');

      this.level = `${chooseGame[1].split('-')[1]}`;
      this.upHints = this.data[chooseGame[1]][chooseGame[0]].upHints;
      this.leftHints = this.data[chooseGame[1]][chooseGame[0]].leftHints;
      this.curentNonogram = this.data[chooseGame[1]][chooseGame[0]].result;

      this.body.innerHTML = '';
      this.getData();
    });
  }

  async getData() {
    try {
      await this.fetchData('/src/data/data.json').then(() => {});

      this.drowHeader();
      if (!this.randomBtn) this.getRandom();
      this.game();
      this.drowFooter();
    } catch (err) {
      console.error(err);
    }
  }
}

const nonograms = new Nonograms();

nonograms.getData();
