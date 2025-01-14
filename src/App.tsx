
import './Form.css';

const App = () => {

  let form = document.getElementById('form')
  let textarea = document.getElementById('textarea') as HTMLFormElement;
  let button = document.getElementById('button');
  let loadingMessage = document.getElementById('loading');
  let errorMessage = document.getElementById('error') as HTMLFormElement;
  let successMessage = document.getElementById('success');
  // form.onsubmit = handleFormSubmit;
  // textarea.oninput = handleTextareaChange;

  async function handleFormSubmit(e: any) {
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loadingMessage);
    hide(errorMessage);
    try {
      await submitForm(textarea.value);
      show(successMessage);
      hide(form);
    } catch (err: any) {
      show(errorMessage);
      errorMessage.textContent = err.message;
    } finally {
      hide(loadingMessage);
      enable(textarea);
      enable(button);
    }
  }

  function handleTextareaChange() {
    if (textarea.value.length === 0) {
      disable(button);
    } else {
      enable(button);
    }
  }

  function hide(el: any) {
    el.style.display = 'none';
  }

  function show(el: any) {
    el.style.display = '';
  }

  function enable(el: any) {
    el.disabled = false;
  }

  function disable(el: any) {
    el.disabled = true;
  }

  function submitForm(answer: string) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (answer.toLowerCase() === 'istanbul') {
          resolve();
        } else {
          reject(new Error('Good guess but a wrong answer. Try again!'))
        }
      }, 1500);
    });
  }



  return (
    <>
      <form id="form"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <h2>City quiz</h2>
        <p>
          What city is located on two continets?
        </p>
        <textarea id="textarea"
          onInput={handleTextareaChange}
        ></textarea>
        <br />
        <button id="button" disabled>Submit</button>
        <p id="loading" style={{ display: 'none' }}>Loading...</p>
        <p id="error" style={{ display: 'none', color: 'red' }} ></p>
      </form>
      <h1 id="success" style={{ display: 'none' }}>That's right</h1>
    </>
  );
}

export default App;
