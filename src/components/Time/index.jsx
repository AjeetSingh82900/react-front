export default function Time(){
  let time = new Date();
  return <div>
    <p>current Time is :{ time.toLocaleTimeString()}</p>
  </div>
 
}