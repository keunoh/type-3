
import { useState } from 'react';
import './Form.css';
import { resolve } from 'path';

export default function App() {

  const [answer, setAnswer] = useState<string>('');
  const [error, setError] = useState<any | null>(null);
  const [status, setStatus] = useState<string>('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err: any) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log("handleTextareaChange");
    console.log(e);
    setAnswer(e.target.value);
  }

  function submitForm(answer: string) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima'
        if (shouldError) {
          reject(new Error('Good guess buy a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={
            status === 'submitting'
          }
        />
        <br />
        <button disabled={
          answer.length === 0 || status === 'submitting'
        }>
          Submit
        </button>
        {error !== null &&
          <p className='Error'>
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

