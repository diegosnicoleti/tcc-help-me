import Header from './header';
export default function LayoutApp(props:any){
  return (
    <div className='top-0'>
      <Header/>
      <div id='app-root'>
        {props.children}
      </div>
    </div>
  );
}