export default function Year(){
  let date = new Date();

  return (
    <div className="year">
      <h1>Year is:{date.getFullYear()}</h1>
    </div>
  );
}