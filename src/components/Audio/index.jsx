export default function Audio(){
  let audio='https://gaana.com/playlist/aparvakarangutkar-zabyh-audio';
  return <div>
    <h1>Audio</h1>
    <audio src={audio} controls></audio>
   
  </div>
}