export default function Person({ className, body ='' }) {
  if (!body) {
    return <></>
  }
  const innerStuff = body.split('\n').map(p => p ? (<p>{p}</p>) : null)
  return <div className={`person ${className}`}>{innerStuff}</div>
}
