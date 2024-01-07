export default function Month(){
  let date = new Date();

  return (
    <div className="month">
      <h1>month is:{date.getMonth() + 1}</h1>
    </div>
  );
}