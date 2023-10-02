import Header from './header';
export default function LayoutApp(props:any){
  return <>
    <Header/>
    <div id='app-root'>
      {props.children}
    </div>
  </>
}