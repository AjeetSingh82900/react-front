export default function DateTime1(){
  let time = new Date();
  return <div>
    <p>Current  Time is :{time.toLocaleTimeString()}  and Date is :{time.toLocaleDateString()}</p>
  </div>
}