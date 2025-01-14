import StoryBookForm from './StoryBookForm'

let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error'
];

export default function StoryBook() {
  return (
    <>
      {statuses.map(status => (
        <section key={status}
        >
          <h4>Form ({status}):</h4>
          <StoryBookForm status={status} />
        </section>
      ))}
    </>
  )
}