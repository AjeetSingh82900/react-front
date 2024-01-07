export default function Date1(){
  let time = new Date();
  return <div>
    <p>current Date is :{ time.toLocaleDateString()}</p>
  </div>
}