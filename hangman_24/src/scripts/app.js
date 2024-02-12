const questions = [
  {
    question: 'What is the liquid used for drawing or writing?',
    answer: 'paint',
  },
  {
    question:
      'What is the name of the object used for writing that contains a rod?',
    answer: 'pen',
  },
  {
    question:
      'What does "insert a hook" mean when used to highlight important information?',
    answer: 'underline',
  },
  {
    question: 'What is the name of the item used to sharpen pencils?',
    answer: 'sharpener',
  },
  {
    question:
      'What is a piece of paper with a written message that is transmitted?',
    answer: 'letter',
  },
  {
    question:
      'What is the name of the tiny object commonly used to hold sheets of paper?',
    answer: 'paperclip',
  },
  {
    question:
      'What does the combination of letters on a key mean to create a space between words?',
    answer: 'space',
  },
  {
    question:
      'What is the name of a drawing instrument consisting of a wooden body and a graphite rod?',
    answer: 'pencil',
  },
  {
    question:
      'What is the name of the wooden or plastic tool used to remove old writing from paper?',
    answer: 'eraser',
  },
  {
    question:
      'What is the name of a large piece of paper usually used for drawing or writing large texts?',
    answer: 'arcana',
  },
  {
    question: 'What is a set of paints often used to create artwork?',
    answer: 'palette',
  },
  {
    question:
      'What is the name of the clear adhesive tape used to glue paper together?',
    answer: 'scotch',
  },
];
class Keyboard {
  constructor() {
    this.body = document.querySelector('body');
    this.incorrect = 6;
    this.selectedQuestionsInd = [];
    this.selectedAlphabets = {
      all: [],
      incorrect: [],
    };
    this.answerArray = [];
    this.answer = '';
    this.incorrectCount = 0;
    this.result = {
      win: 0,
      loss: 0,
    };
    this.finish = false;
  }

  drowHangman() {
    const hangmanblock = document.createElement('div');
    const human = document.createElement('div');
    const innerBlock = document.createElement('div');

    hangmanblock.classList.add('hangman-block');
    human.classList.add('human-block');
    innerBlock.classList.add('human-inner-block');

    const gallowsImg = document.createElement('img');
    gallowsImg.classList.add('hangman-gallows');
    gallowsImg.alt = 'gallows image';
    gallowsImg.src = './images/gallows.png';

    const headImg = document.createElement('img');
    headImg.classList.add('hangman-head', 'hidden');
    headImg.alt = 'head part';
    headImg.src = './images/head.png';
    headImg.dataset.man = '1';

    const rectangleImg = document.createElement('img');
    rectangleImg.classList.add('hangman-rectangle', 'hidden');
    rectangleImg.alt = 'rectangle part';
    rectangleImg.src = './images/rectangle.png';
    rectangleImg.dataset.man = '2';

    const handLeftImg = document.createElement('img');
    handLeftImg.classList.add('hangman-hand-left', 'hidden');
    handLeftImg.alt = 'hand left part';
    handLeftImg.src = './images/hand-one.png';
    handLeftImg.dataset.man = '3';

    const handRightImg = document.createElement('img');
    handRightImg.classList.add('hangman-hand-right', 'hidden');
    handRightImg.alt = 'hand right part';
    handRightImg.src = './images/hand-two.png';
    handRightImg.dataset.man = '4';

    const legLeftImg = document.createElement('img');
    legLeftImg.classList.add('hangman-leg-left', 'hidden');
    legLeftImg.alt = 'leg left part';
    legLeftImg.src = './images/leg-one.png';
    legLeftImg.dataset.man = '5';

    const legRightImg = document.createElement('img');
    legRightImg.classList.add('hangman-leg-right', 'hidden');
    legRightImg.alt = 'leg right part';
    legRightImg.src = './images/leg-two.png';
    legRightImg.dataset.man = '6';

    innerBlock.append(headImg);
    innerBlock.append(rectangleImg);
    innerBlock.append(handLeftImg);
    innerBlock.append(handRightImg);
    innerBlock.append(legLeftImg);
    innerBlock.append(legRightImg);
    human.append(innerBlock);
    hangmanblock.append(gallowsImg);
    hangmanblock.append(human);

    return hangmanblock;
  }

  drowQuestions() {
    const ind = this.getRandomNumber();
    this.selectedQuestionsInd.push(ind);
    const { question, answer } = questions[ind];
    this.answer = answer.toUpperCase();
    this.answerArray = answer.split('').map((letter) => letter.toUpperCase());

    console.log('answer:__', answer);
    console.log('question:__', question);

    const containerQuestion = document.createElement('section');
    containerQuestion.classList.add('question-container');

    const answerBlock = document.createElement('div');
    answerBlock.classList.add('answer');

    this.answerArray.forEach((el) => {
      const itemLetter = document.createElement('span');
      itemLetter.classList.add('underline');
      itemLetter.dataset.letter = el;

      answerBlock.append(itemLetter);
    });

    const questionBlock = document.createElement('h3');

    questionBlock.textContent = `Hint: ${question}`;

    const incorrectBlock = document.createElement('div');
    const incorrectText = document.createElement('h3');
    const incorrectCount = document.createElement('span');
    const incorrectAllLive = document.createElement('span');

    incorrectText.textContent = 'Incorrect guesses: ';
    incorrectBlock.classList.add('incorrect');
    incorrectCount.id = 'count';

    incorrectCount.textContent = '0';
    incorrectAllLive.textContent = '6';

    incorrectBlock.append(incorrectText);
    incorrectBlock.append(incorrectCount);
    incorrectBlock.append(incorrectAllLive);

    containerQuestion.append(answerBlock);
    containerQuestion.append(questionBlock);
    containerQuestion.append(incorrectBlock);

    return containerQuestion;
  }

  creatKeyboard() {
    const alphabet = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    const containerKeyboard = document.createElement('div');
    containerKeyboard.classList.add('keyboard-container');

    alphabet.forEach((el) => {
      const keyboardItem = document.createElement('span');
      // add class,  id 26
      keyboardItem.classList.add('keyboard-item');
      keyboardItem.id = el;

      keyboardItem.textContent = el;

      containerKeyboard.append(keyboardItem);
    });

    containerKeyboard.addEventListener('click', (e) => {
      this.eventKeyboard(e.target);
    });

    return containerKeyboard;
  }

  eventKeyboardReal() {
    document.addEventListener('keydown', (event) => {
      const keyPressed = event.key;
      if (/^[a-zA-Z]$/.test(keyPressed)) {
        this.eventKeyboard(keyPressed.toUpperCase());
      }
    });
  }

  eventKeyboard(eventKey) {
    let eventElement = eventKey;
    let eventLetter;

    if (!eventElement.id) {
      eventElement = document.querySelector(`#${eventKey}`);
      eventLetter = eventKey;
    } else {
      eventLetter = eventKey.id;
    }

    if (
      this.selectedAlphabets.all.includes(eventLetter) ||
      this.incorrectCount === this.incorrect ||
      this.finish
    ) {
      return;
    }

    this.selectedAlphabets.all.push(eventLetter);
    eventElement.classList.add('disabled');

    const countElement = document.querySelector('#count');
    const atributs = document.querySelectorAll(
      `[data-letter="${eventLetter}"]`
    );

    if (!atributs.length) {
      if (eventLetter) this.selectedAlphabets.incorrect.push(eventLetter);
      this.incorrectCount = this.selectedAlphabets.incorrect.length;
      countElement.textContent = this.incorrectCount;

      const bodyParts = document.querySelector(
        `[data-man="${this.incorrectCount}"]`
      );

      bodyParts.classList.remove('hidden');

      if (this.incorrectCount === this.incorrect) {
        this.result.loss += 1;
        this.modal(false);
      }
    }

    if (atributs.length) {
      atributs.forEach((el) => {
        el.textContent = eventLetter;
        el.classList.remove('underline');
      });

      const allLetterElements = document.querySelectorAll('[data-letter]');
      this.finish = true;
      allLetterElements.forEach((el) => {
        if (!el.textContent) this.finish = false;
      });

      if (this.finish) {
        this.result.win += 1;
        this.modal(true);
      }
    }
  }

  getRandomNumber() {
    if (this.selectedQuestionsInd.length === questions.length) {
      this.selectedQuestionsInd = [];
    }
    const questionsLength = questions.length;
    const ind = Math.floor(Math.random() * questionsLength);
    return this.selectedQuestionsInd.includes(ind)
      ? this.getRandomNumber()
      : ind;
  }

  modal(win) {
    this.body.style.overflow = 'hidden';
    const modalContainer = document.createElement('section');
    modalContainer.classList.add('modal-container');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalItem = document.createElement('div');
    modalItem.classList.add('modal-item');

    const message = document.createElement('h2');
    message.classList.add('modal-message');

    const answer = document.createElement('p');
    answer.textContent = this.answer;

    if (!win) {
      message.textContent =
        'Unfortunately, your attempts have ended. You lose(';
      message.classList.add('lose-message');
    } else {
      message.textContent = 'Congratulations, you WON!!! Hurray!!!';
      message.classList.add('won-message');
    }

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('btn-container');

    const buttonEnd = document.createElement('button');
    buttonEnd.classList.add('game-end');
    buttonEnd.textContent = 'Finish the game';

    const buttonStart = document.createElement('button');
    buttonStart.classList.add('game-start');
    buttonStart.textContent = 'Play again';

    buttonsContainer.append(buttonEnd);
    buttonsContainer.append(buttonStart);
    modalItem.append(message);
    modalItem.append(answer);
    modalItem.append(buttonsContainer);
    modal.append(modalItem);
    modalContainer.append(modal);

    this.body.append(modalContainer);

    buttonStart.addEventListener('click', () => {
      this.gather();
      modalContainer.remove();
      this.body.style.overflow = 'auto';
    });

    buttonEnd.addEventListener('click', () => {
      document.querySelector('.modal-item').remove();
      const modalItem = document.createElement('div');
      modalItem.classList.add('modal-item');
      const winText = document.createElement('p');
      winText.textContent = `Win: ${this.result.win}`;
      const lossText = document.createElement('p');
      lossText.textContent = `loss: ${this.result.loss}`;

      modalItem.append(winText);
      modalItem.append(lossText);
      modal.append(modalItem);

      modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
          this.result = {
            win: 0,
            loss: 0,
          };
          this.selectedQuestionsInd = [];
          this.gather();
          modalContainer.remove();
          this.body.style.overflow = 'auto';
        }
      });
    });
  }

  gather() {
    if (document.querySelector('.container')) {
      document.querySelector('.container').remove();
    }

    this.selectedAlphabets = {
      all: [],
      incorrect: [],
    };
    this.answerArray = [];
    this.answer = '';
    this.incorrectCount = 0;
    this.finish = false;

    const container = document.createElement('section');
    const leftBlock = document.createElement('div');
    const rightBlock = document.createElement('div');

    container.classList.add('container');
    leftBlock.classList.add('img-block');
    rightBlock.classList.add('text-block');

    leftBlock.append(this.drowHangman());
    rightBlock.append(this.drowQuestions());
    rightBlock.append(this.creatKeyboard());
    container.append(leftBlock);
    container.append(rightBlock);

    this.body.append(container);

    this.eventKeyboardReal();
  }
}

const virtualKeyboard = new Keyboard();
virtualKeyboard.gather();